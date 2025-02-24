'use client';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        padding: '40px 0',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <img src="/logo.png" alt="Nezyr Logo" width="120" height="auto" />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '75%',
          marginTop: '20px',
          gap: { xs: '15px', md: '0px' },
        }}
      >
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="body1" fontWeight="bold" color="black">
            {t('contact')}
          </Typography>
          <Typography color="black" variant="body2">
            0212 345 56 67
          </Typography>
          <Typography color="black" variant="body2">
            info@nezyr.com
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram.png"
              alt="Instagram"
              width="24"
              height="24"
              style={{ cursor: 'pointer' }}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              width="24"
              height="24"
              style={{ cursor: 'pointer' }}
            />
          </a>
          <a href="#">
            <img
              src="/twitter.png"
              alt="Twitter"
              width="24"
              height="24"
              style={{ cursor: 'pointer' }}
            />
          </a>
        </Box>
      </Box>

      <Typography variant="body2" sx={{ color: '#777', marginTop: '20px' }}>
        {t('copyright')}
      </Typography>
    </Box>
  );
}
