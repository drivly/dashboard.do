// @mui
import { styled, alpha } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { CustomAvatar } from '../custom-avatar'

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius),
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}))

// ----------------------------------------------------------------------

export default function NavAccount() {
  // const { user } = useAuthContext();
  const [pick, setPick] = useState()
  const users = ['Backend', 'Frontend', 'UI-Guy', 'Wrangler']
  const randomUser = () => {
    let index = Math.floor(Math.random() * users.length)
    setPick(users[index])
  }
  console.log(pick)

  useEffect(() => {
    let mounted = true
    if (mounted) {
      randomUser()
    }
    return () => {
      mounted = false
    }
  }, [])

  return (
    <StyledRoot>
      {pick && (
        <CustomAvatar
          src={`https://avatars.dicebear.com/api/adventurer-neutral/${pick}.svg`}
          alt={pick}
          name={pick}
        />
      )}

      <Box sx={{ ml: 2, minWidth: 0 }}>
        <Typography variant="subtitle2" noWrap>
          {pick}
        </Typography>

        <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
          {pick && 'admin'}
        </Typography>
      </Box>
    </StyledRoot>
  )
}
