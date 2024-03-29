import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme(
  { 
    palette:
    {
      primary: 
        { 
          main: '#555',
        },
      secondary:
        { 
          main: '#19857b', 
        },
      pastrami:
        {
          main: '#fff'
        },
      error:
        { 
          main: red.A400, 
        },
    },
    typography: {
      fontFamily: 'Teko',
      fontWeightLight: 300,
      fontWeightBold: 700,
      fontSize: '2rem'
    }
  }
);

export default theme;