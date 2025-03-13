'use client';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function SanatTImg() {
  const { t } = useTranslation('common');

  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        py: { xs: 2, sm: 3, md: 5 },
        backgroundColor: '#F9FAFB',
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mt: { xs: 3, sm: 4, md: 5 },
          mb: { xs: 3, sm: 5, md: 6 },
          color: 'black',
        }}
      >
        {t('inspired_by_art')} <br /> {t('corporate_partnerships')}
      </Typography>

      <Box sx={{ width: '100%', position: 'relative' }}>
        <Image
          src="/sanatt.png"
          alt={t('inspired_by_art') + ' ' + t('corporate_partnerships')}
          width={1440}
          height={403}
          layout="responsive"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}
