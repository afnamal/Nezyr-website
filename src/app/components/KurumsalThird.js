'use client';
import { Box, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function KurumsalThird() {
  const { t, i18n } = useTranslation('common');
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleLanguageChange = () => setKey((prevKey) => prevKey + 1);
    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <Box
      key={key}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 6,
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: '1200px' }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#000' }}>
            {t('inspired_by_art')}
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#000' }}>
            {t('corporate_collaborations')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="body1"
            sx={{ color: '#333', fontSize: '18px', mb: 2 }}
          >
            {t('corporate_products_desc')}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#333', fontSize: '18px', mb: 2 }}
          >
            {t('firat_neziroglu_desc')}
          </Typography>
          <Typography variant="body1" sx={{ color: '#333', fontSize: '18px' }}>
            {t('halkbank_project_desc')}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
