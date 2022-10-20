import {
  Box,
  CardHeader,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import React from 'react'
import DashboardIcon from './DashboardIcon'

const Welcome = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))
  return (
    <Card
      sx={{
        mt: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'center',
        padding: 2,
        flexDirection: isMobile && 'column',
      }}
    >
      <Box marginBottom={isMobile && 2}>
        <CardHeader title="Welcome to KVDB.DO @Driv.ly" />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 300 }}>
            KVDB.DO CRUD, Create | Read | Update | Delete
          </Typography>
        </CardContent>
      </Box>

      <CardMedia
        sx={{ display: 'flex', alignItems: 'center', px: 2 }}
        children={<DashboardIcon className="h-40 w-40" />}
      />
    </Card>
  )
}

export default Welcome
