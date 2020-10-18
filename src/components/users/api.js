import {useState, useEffect, useReducer} from 'react'
import axios from 'axios'

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {...state, isLoading: true, isError: false}
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        ...action.payload,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl)

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_INIT'})
      try {
        const {data: res} = await axios(url)
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: {
            data: res.data,
            pagination: res.meta.pagination,
          },
        })
      } catch (error) {
        dispatch({type: 'FETCH_FAILURE'})
      }
    }
    fetchData()
  }, [url])

  return [state, setUrl]
}

export {useDataApi}
