import {useState, useEffect, useReducer} from 'react'
import axios from 'axios'

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'USERS_FETCH_INIT':
      return {...state, isLoading: true, isError: false}

    case 'USERS_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        list: action.payload.data,
        pagination: action.payload.meta.pagination,
      }

    case 'USERS_SINGLE_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload.data,
      }

    case 'USERS_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}

const useUsersApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl)

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    list: initialData,
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'USERS_FETCH_INIT'})
      try {
        const {data: res} = await axios(url)
        dispatch({
          type: 'USERS_FETCH_SUCCESS',
          payload: res,
        })
      } catch (error) {
        dispatch({type: 'USERS_FETCH_FAILURE'})
      }
    }
    fetchData()
  }, [url])

  return [state, setUrl]
}

const useUserApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl)

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    user: initialData,
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'USERS_FETCH_INIT'})
      try {
        const {data: res} = await axios(url)
        dispatch({
          type: 'USERS_SINGLE_FETCH_SUCCESS',
          payload: res,
        })
      } catch (error) {
        dispatch({type: 'USERS_FETCH_FAILURE'})
      }
    }
    fetchData()
  }, [url])

  return [state, setUrl]
}

export {useUsersApi, useUserApi}
