import { Box, Typography } from '@mui/material'
import React from 'react'
import { AppBar, ToggleThemeButton } from 'react-admin'
import Logo from '../Logo'
import { darkTheme, lightTheme } from '../theme/theme'

const MyAppBar = (props) => {
  return (
    <AppBar {...props} sx={{ boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' }}>
      <Box flex="1" justifyItems="center">
        <Typography alignItems="center" marginTop={1.55} variant="h6">
          <Logo />
        </Typography>
      </Box>
      <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
    </AppBar>
  )
}

export default MyAppBar
