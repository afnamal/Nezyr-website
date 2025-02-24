'use client';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function SanatSection() {
  const { t } = useTranslation('common');

  return (
    <Box>
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
          sx={{ mb: 5, color: 'black' }}
        >
          {t('nezyr_art')}
        </Typography>
        <Typography variant="body1" sx={{color: '#444', margin: '0 auto', ml:6, mr:6, textAlign:'justify',
          wordSpacing:3.5 }}>
          {t('nezyr_art_description')}
        </Typography>
      </Container>
    </Box>
  );
}
