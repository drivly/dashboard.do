import { Admin } from '@react-admin/ra-enterprise'
import { Resource } from 'react-admin'
import { QueryClient } from 'react-query'
import { BrowserRouter, Route } from 'react-router-dom'
import MyLayout from '../components/layout/MyLayout'
import ResourceData from '../components/ResourceData'
import { darkTheme, lightTheme } from '../components/theme/theme'
import useResources from '../hooks/useResources'
import Dashboard from '../pages/Dashboard'
import dataProvider from '../utils/dataProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const MyAdmin = () => {
  const resources = useResources()
  console.log('resources', resources)
  return (
    <BrowserRouter>
      <Admin
        queryClient={queryClient}
        dashboard={Dashboard}
        layout={MyLayout}
        dataProvider={dataProvider}
        theme={lightTheme}
        darkTheme={darkTheme}
        lightTheme={lightTheme}
        title="Drivly Admin"
      >
        {resources?.map((resource) => (
          <Resource key={resource} name={resource} {...ResourceData} />
        ))}
        <Route path="/Dashboard" element={Dashboard} />
      </Admin>
    </BrowserRouter>
  )
}

export default MyAdmin
