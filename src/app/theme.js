import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica',
  },
  fontWeight: 300,

  body1: {
    color: 'rgba(23, 22, 20, 0.8)',
  },
  body2: {
    fontWeight: 300,
  },
});

export default theme;
