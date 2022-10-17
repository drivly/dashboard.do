import { Breadcrumb } from '@react-admin/ra-enterprise'
import React from 'react'

const MyBreadcrumb = (props) => {
  return (
    <Breadcrumb
      {...props}
      sx={{
        ml: 0.5,
        mb: -8,
        pt: 4.5,
        '& span': { fontSize: '14px', fontWeight: 600 },
      }}
    ></Breadcrumb>
  )
}

export default MyBreadcrumb
