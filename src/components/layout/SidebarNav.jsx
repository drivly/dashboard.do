import { Box, Drawer, Stack } from '@mui/material'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSidebarState, useTheme } from 'react-admin'
import { useLocation } from 'react-router-dom'
import { NAV } from '../../config'
import useResponsive from '../../hooks/useResponsive'
import Logo from '../Logo'
import NavAccount from '../navigation-menu/NavAccount'
import NavMenu from '../navigation-menu/NavMenu'
import Scrollbar from '../scrollbar'

// ----------------------------------------------------------------------

SidebarNav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
}

export default function SidebarNav(props) {
  const { pathname } = useLocation()
  const theme = useTheme()
  const [open, setOpen] = useSidebarState()

  const isDesktop = useResponsive('up', 'lg')

  useEffect(() => {
    if (open) {
      setOpen(!open)
    }
  }, [pathname])

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 1,
          px: 2,
          flexShrink: 0,
        }}
      >
        <Logo />
        <NavAccount />
      </Stack>
      <NavMenu />
      <Box sx={{ flexGrow: 1, pb: 8 }} />
    </Scrollbar>
  )

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        bgcolor: 'transparent',
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          <div
            className={`${
              theme[0].palette.mode === 'dark' && 'bg-[#212B36]'
            } h-full`}
          >
            {renderContent}
          </div>
        </Drawer>
      )}
    </Box>
  )
}
