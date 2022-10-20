import ResourceStats from '../components/dashboard-widgets/ResourceStats'
import Welcome from '../components/dashboard-widgets/Welcome'

const Dashboard = () => {
  return (
    <div className='h-full overflow-auto space-y-8'>
      <Welcome />
      <ResourceStats />
    </div>
  )
}

export default Dashboard
