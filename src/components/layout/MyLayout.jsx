import { styled } from '@mui/material'
import { AppLocationContext } from '@react-admin/ra-navigation'
import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import MyAppBar from './MyAppBar'
import MyBreadcrumb from './MyBreadcrumb'
import SidebarNav from './SidebarNav'

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1,
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
}))

const AppFrame = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'auto',
}))

const ContentWithSidebar = styled('main')(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
}))

const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  flexGrow: 2,
  paddingInline: theme.spacing(2.5),
  paddingBlock: theme.spacing(1),
  marginTop: '3.5em',
}))

const MyLayout = ({ children }, props) => {
  return (
    <AppLocationContext hasDashboard={!props.dashboard}>
      <Root>
        <AppFrame>
          <MyAppBar {...props} />
          <ContentWithSidebar>
            <SidebarNav {...props} />
            <Content>
              <MyBreadcrumb />
              {children}
            </Content>
          </ContentWithSidebar>
        </AppFrame>
        <ReactQueryDevtools initialIsOpen={false} />
      </Root>
    </AppLocationContext>
  )
}

export default MyLayout
