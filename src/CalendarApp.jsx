import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack';
import React from 'react'
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter'
import { store } from './store';
import { darkTheme } from './theme.config';

export const CalendarApp = () => {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={darkTheme}>
        <SnackbarProvider maxSnack={3}>
          <AppRouter />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  )
}
