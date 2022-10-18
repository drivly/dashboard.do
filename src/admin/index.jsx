import { Admin } from '@react-admin/ra-enterprise'
import { ListGuesser, Resource } from 'react-admin'
import { BrowserRouter, Route } from 'react-router-dom'
import MyLayout from '../components/layout/MyLayout'
import { darkTheme, lightTheme } from '../components/theme/theme'
import useResources from '../hooks/useResources'
import Dashboard from '../pages/Dashboard'
import dataProvider from '../utils/dataProvider'
import { createMemoryHistory } from 'history';
import ResourceData from '../components/ResourceData'
import jsonServerProvider from "ra-data-json-server/dist"

// console.log(dataProvider)
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const MyAdmin = () => {
  const resources = useResources()

  return (
    <BrowserRouter>
      <Admin
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
        {/* <Resource name="Posts" {...ResourceData} />
    <Resource name="Comments" list={ListGuesser} />
    <Resource name="Users" list={ListGuesser} />*/}
    <Route path="/Dashboard" element={Dashboard} /> 
      </Admin>
    </BrowserRouter>
  )
}

export default MyAdmin
