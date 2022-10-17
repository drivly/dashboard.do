import PropTypes from 'prop-types'
// @mui
import { Box } from '@mui/material'
// hooks
import useResponsive from '../../hooks/useResponsive'
// config
import { HEADER, NAV } from '../../config'
// components
// import { useSettingsContext } from '../../components/settings';

// ----------------------------------------------------------------------

const SPACING = 8

Main.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
}

export default function Main({ children, sx, ...other }) {
  // const { themeLayout } = useSettingsContext();

  // const isNavHorizontal = themeLayout === 'horizontal';

  // const isNavMini = themeLayout === 'mini';

  const isDesktop = useResponsive('up', 'lg')

  return (
    <Box
      component="main"
      sx={{
        overflowScroll: "none",
        flexGrow: 0,
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(isDesktop && {
          px: 2,
          py: `${HEADER.H_DASHBOARD_DESKTOP + SPACING}px`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  )
}
