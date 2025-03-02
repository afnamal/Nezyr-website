'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation('common');

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '5px', md: '10px' },
      }}
    >
      <Box
        maxWidth="md"
        sx={{
          position: 'relative',
          backgroundColor: 'rgba(255, 253, 253, 0.85)',
          padding: { xs: '20px', md: '40px' },
          borderRadius: '10px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          width: '95%',
          maxWidth: '1200px',
          minHeight: { xs: 'auto', md: '600px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '75%' },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{
              mb: { xs: 1, md: 2 },
              color: '#000',
              fontSize: { xs: '20px', md: '24px' },
            }}
          >
            {t('contact_us')}
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              mb: { xs: 2, md: 4 },
              color: '#444',
              fontSize: { xs: '12px', md: '14px' },
            }}
          >
            {t('contact_description')}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('name')}
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '3px',
                  fontSize: '14px',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('surname')}
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '3px',
                  fontSize: '14px',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t('email')}
                type="email"
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '3px',
                  fontSize: '14px',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t('phone')}
                type="tel"
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '3px',
                  fontSize: '14px',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('message')}
                variant="outlined"
                multiline
                rows={4}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  fontSize: '14px',
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                fullWidth
                size="medium"
                variant="contained"
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: { xs: '10px', md: '12px' },
                  maxWidth: '140px',
                  fontSize: { xs: '12px', md: '14px' },
                  '&:hover': { backgroundColor: '#444' },
                }}
              >
                {t('send')}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
