import { Resource, ListGuesser } from 'react-admin'
import { Admin } from '@react-admin/ra-enterprise'
import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
)

export default App
