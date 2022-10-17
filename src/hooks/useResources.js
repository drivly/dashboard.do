import { useEffect, useState } from 'react'
import { fetchDataSource } from '../utils/fetchDataSource'

const useResources = () => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    const fetchResources = async () => {
      const request = await fetchDataSource()
      setResources(request)
    }
    fetchResources()
  }, [])

  return resources
}

export default useResources
