import React from 'react'
import useGetStats from '../../hooks/useGetStats'
import StatusBar from './StatusBar'

const ResourceStats = () => {
  const { data, totalRecords } = useGetStats()

  return (
    <div className="">
      {data?.map((resource) => {
        let mapped = Object.entries(resource)
        return (
          <React.Fragment key={mapped[0][1]}>
          <StatusBar
            total={totalRecords}
            resource={mapped[0][1]}
            label={mapped[0][0]}
            bgColor="#00AB55"
          />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default ResourceStats
