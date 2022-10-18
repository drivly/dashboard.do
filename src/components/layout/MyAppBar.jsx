import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'
import {
  HideOnScroll,
  LoadingIndicator,
  ToggleThemeButton,
  useSidebarState,
  useTheme,
} from 'react-admin'
import CustomMenuIcon from '../CustomMenuIcon'
import Logo from '../Logo'
import { darkTheme, lightTheme } from '../theme/theme'

const MyAppBar = (props) => {
  const [open, setOpen] = useSidebarState()
  const theme = useTheme()
  return (
    <HideOnScroll>
      <AppBar
        {...props}
        sx={{
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mt: '-0.5px',
          pt: '0.5px',
          px: 2.5,
          backgroundColor:
            theme[0].components.MuiAppBar.styleOverrides.colorSecondary,
        }}
      >
        <CustomMenuIcon setOpen={setOpen} theme={theme[0].palette} />
        <Box flex="1" paddingLeft={1.5}>
          <Typography alignItems="center" marginTop={1.55} variant="h6">
            <Logo />
          </Typography>
        </Box>
        <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
        <LoadingIndicator />
      </AppBar>
    </HideOnScroll>
  )
}

export default MyAppBar
