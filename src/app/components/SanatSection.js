'use client';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function SanatSection() {
  const { t } = useTranslation('common');

  return (
    <Box>
      <Box sx={{ width: '100%', position: 'relative', height: '400px' }}>
        <Image
          src="/sanat-image.png"
          alt="Nezyr Sanat"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Container
        sx={{
          py: 6,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2, color: 'black' }}
        >
          {t('nezyr_art')}
        </Typography>
        <Typography variant="body1" sx={{ color: '#444', margin: '0 auto' }}>
          {t('nezyr_art_description')}
        </Typography>
      </Container>
    </Box>
  );
}
