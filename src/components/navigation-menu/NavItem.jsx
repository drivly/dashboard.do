import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
// @mui
import { Link, ListItemText, Tooltip } from '@mui/material'
//
import useActiveLink from '../../hooks/useActiveLink'
import { MappedIcons } from '../MappedIcons'
import { StyledDotIcon, StyledItem } from './styles'

// ----------------------------------------------------------------------

NavItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.string,
  depth: PropTypes.number,
  isExternalLink: PropTypes.bool,
}

export default function NavItem({
  item,
  depth,
  children,
  href,
  home,
  ...other
}) {
  const { active } = useActiveLink(`/${href}`)

  const renderContent = (
    <StyledItem {...other} active={active} depth={1}>
      {active || home ? (
        /* <StyledDotIcon active={active} className="ml-1.5 mr-6" /> */
        <MappedIcons name={item} size={18} className="mr-4" />
      ) : (
        <StyledDotIcon className="ml-1.5 mr-6" />
      )}
      <Tooltip title={item} placement="right">
        <ListItemText
          primary={item}
          primaryTypographyProps={{
            noWrap: true,
            component: 'span',
            variant: active ? 'subtitle2' : 'body2',
          }}
          secondaryTypographyProps={{
            noWrap: true,
            variant: 'caption',
          }}
        />
      </Tooltip>
    </StyledItem>
  )

  const renderItem = () => {
    // Default
    return (
      <Link component={RouterLink} to={href} underline="none">
        {renderContent}
      </Link>
    )
  }

  return <> {renderItem()} </>
}
