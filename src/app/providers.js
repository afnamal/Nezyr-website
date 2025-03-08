'use client';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import i18n from './i18n';
import theme from './theme'; // MUI teması
import { createContext, useState, useContext } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
const LoadingContext = createContext();
export function Providers({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {loading && <LoadingSpinner />}
          {children}
        </LoadingContext.Provider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
export const useLoading = () => useContext(LoadingContext);
