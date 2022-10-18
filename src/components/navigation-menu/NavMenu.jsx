import { List, Stack } from '@mui/material'
import PropTypes from 'prop-types'
import { useResourceDefinitions } from 'react-admin'
import NavItem from './NavItem'
import { StyledSubheader } from './styles'

NavMenu.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.array,
}

export default function NavMenu({ sx, ...other }) {
  const menuItems = useResourceDefinitions()
  const resources = Object.keys(menuItems)

  return (
    <Stack sx={sx} {...other}>
      {resources && (
        <List disablePadding sx={{ px: 2 }}>
          <StyledSubheader disableSticky>KVDB.do V1.0.0</StyledSubheader>
          {resources?.map((item, i) => (
            <NavItem key={`${item}-${i}`} item={item} href={item} depth={0} />
          ))}
        </List>
      )}
    </Stack>
  )
}
