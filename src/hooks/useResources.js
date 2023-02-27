import { useEffect, useState } from 'react'
import { fetchDataSource } from '../utils/fetchDataSource'

const useResources = () => {
  const [resources, setResources] = useState([
    'Customer',
    'Employee',
    'EmployeeTerritory',
    'OrderDetail',
    'Product',
    'SalesOrder',
    'Shipper',
    'Supplier',
    'Region',
    'Territory',
  ])

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
