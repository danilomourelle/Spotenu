import { useState, useEffect } from "react"
import axios from 'axios'

export const useRequest = (url, initialValue) => {
  const [data, setData] = useState(initialValue)

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    })
  }, [url])
  
  return data
}