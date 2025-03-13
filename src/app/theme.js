import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica',
  },
  fontWeight: 300, // Light font ağırlığını belirtiyoruz

  body1: {
    color: 'rgba(23, 22, 20, 0.8)',
  },
  body2: {
    fontWeight: 300, // Daha küçük body yazıları da ince olsun
  },
});

export default theme;
