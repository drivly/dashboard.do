import { Admin } from '@react-admin/ra-enterprise'
import { ListGuesser, Resource, useStore } from 'react-admin'
import MyLayout from '../components/layout/MyLayout'
import { darkTheme, lightTheme } from '../components/theme/theme'
import useResources from '../hooks/useResources'
import dataProvider from '../utils/dataProvider'

// console.log(dataProvider)
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const MyAdmin = () => {
  const resources = useResources()
  const [selected, setSelected] = useStore('resource', 'Category')
  console.log('resources', resources)

  return (
    <Admin
      layout={MyLayout}
      dataProvider={dataProvider}
      theme={lightTheme}
      darkTheme={darkTheme}
      lightTheme={lightTheme}
      title="Drivly"
    >
      {resources?.map((resource) => (
        <Resource key={resource} name={resource} list={ListGuesser} />
      ))}
      {/* <Resource name="Posts" list={ListGuesser} />
    <Resource name="Comments" list={ListGuesser} />
    <Resource name="Users" list={ListGuesser} /> */}
    </Admin>
  )
}

export default MyAdmin
