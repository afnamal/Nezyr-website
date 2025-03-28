'use client';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function SanatSection() {
  const { t } = useTranslation('common');

  return (
    <Box sx={{ backgroundColor: '#FCFCFC' }}>
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          height: { xs: '200px', md: '300px' },
          minHeight: '200px',
        }}
      >
        <Image
          src="/sanat-image.png"
          alt="Nezyr Sanat"
          width={1920}
          height={800}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Container sx={{ py: { xs: 4, md: 6 }, textAlign: 'center' }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 5, color: 'black', fontSize: { xs: '20px', md: '24px' } }}
        >
          {t('nezyr_art')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            margin: '0 auto',
            mx: { xs: 2, sm: 3, md: 4 },
            textAlign: 'justify',
            lineHeight: 1.8,
            wordSpacing: 3.5,
            color: 'rgba(23, 22, 20, 0.7)',
          }}
        >
          {t('nezyr_art_description')}
        </Typography>
      </Container>
    </Box>
  );
}
