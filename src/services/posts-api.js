import {useState, useEffect, useReducer} from 'react'
import axios from 'axios'

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'POSTS_FETCH_INIT':
      return {...state, isLoading: true, isError: false}
    case 'POSTS_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        list: action.payload.data,
      }
    case 'POSTS_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}

const usePostsApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl)

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    list: initialData,
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'POSTS_FETCH_INIT'})
      try {
        const {data: res} = await axios(url)
        dispatch({
          type: 'POSTS_FETCH_SUCCESS',
          payload: res,
        })
      } catch (error) {
        dispatch({type: 'POSTS_FETCH_FAILURE'})
      }
    }
    fetchData()
  }, [url])

  return [state, setUrl]
}

export {usePostsApi}
