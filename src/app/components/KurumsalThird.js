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
        backgroundColor: '#F9FAFB',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 12,
        px: 2,
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
          <Typography
            variant="h5"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: { xs: '20px', md: '24px' },
              ml: { xs: 2, sm: 3, md: 4, lg: 5 },
            }}
          >
            {t('inspired_by_art')}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: { xs: '20px', md: '24px' },
              ml: { xs: 2, sm: 3, md: 4, lg: 5 },
            }}
          >
            {t('corporate_collaborations')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(23, 22, 20, 0.8)',
              fontSize: '18px',
              mb: 4,
              mr: { xs: 0, sm: 3 },
              textAlign: 'justify',
            }}
          >
            {t('corporate_products_desc')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(23, 22, 20, 0.8)',
              fontSize: '18px',
              mb: 4,
              mr: { xs: 0, sm: 3 },
              textAlign: 'justify',
            }}
          >
            {t('firat_neziroglu_desc')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(23, 22, 20, 0.8)',
              fontSize: '18px',
              mr: { xs: 0, sm: 3 },
              mb: -10,
              textAlign: 'justify',
            }}
          >
            {t('halkbank_project_desc')}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
