import { alpha } from '@mui/material'
import { defaultTheme } from 'react-admin'
import COMMON_COLORS, { GREY } from './colors'
import typography from './typography'

export const darkTheme = {
  ...defaultTheme,
  typography,
  palette: {
    ...COMMON_COLORS,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: '#161C24',
      default: GREY[900],
      neutral: alpha('#212B36', 0.16),
    },
    action: {
      ...COMMON_COLORS.action,
      active: GREY[500],
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderLeft: '3px solid #000',
          '&.RaMenuItemLink-active': {
            borderLeft: '3px solid #90caf9',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: '#ffffff',
          backgroundColor: '#161C24',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          '&:last-child': {
            display: 'flex',
          },
        },
      },
    },
  },
}

export const lightTheme = {
  ...defaultTheme,
  typography,
  palette: {
    ...COMMON_COLORS,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: {
      ...COMMON_COLORS.action,
      active: GREY[600],
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderLeft: '3px solid #fff',
          '&.RaMenuItemLink-active': {
            borderLeft: '3px solid #4f3cc9',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: 'none',
        },
        root: {
          border: '1px solid #e0e0e3',
          backgroundClip: 'padding-box',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: '#808080',
          backgroundColor: '#fff',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#f5f5f5',
        },
        barColorPrimary: {
          backgroundColor: '#d7d7d7',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          '&:last-child': {
            display: 'flex',
          },
        },
      },
    },
  },
}
