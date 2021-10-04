import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Root from './Root';

// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
    secondary: {
        main: '#ff66c4'
      }
  }
});
    