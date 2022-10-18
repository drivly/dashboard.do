import { Breadcrumb } from '@react-admin/ra-enterprise'
import {
  BreadcrumbItem,
  ResourceBreadcrumbItems,
} from '@react-admin/ra-navigation'
import React from 'react'
import { useTheme } from 'react-admin'

const MyBreadcrumb = (props) => {
  const theme = useTheme()

  return (
    <Breadcrumb
      {...props}
      sx={{
        '& span': { fontSize: '13px', fontWeight: 600 },
        '& a': { fontSize: '13px', color: theme[0].palette.primary.main },
      }}
    >
      <BreadcrumbItem name="dashboard" label="My Home">
        <ResourceBreadcrumbItems />
      </BreadcrumbItem>
    </Breadcrumb>
    /* <Breadcrumb
      {...props}
      sx={{
        ml: 0.5,
        mb: -8,
        pt: 4.5,
        '& span': { fontSize: '14px', fontWeight: 600 },
      }}
    ></Breadcrumb> */
  )
}

export default MyBreadcrumb
