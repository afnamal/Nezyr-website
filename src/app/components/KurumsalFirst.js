'use client';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';

export default function KurumsalFirst() {
  const { t } = useTranslation('common'); // ✅ Çeviri dosyasını yükle

  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
          }}
        >
          <Image
            src="/first-left.png"
            alt="Kurumsal Sol Görsel"
            layout="responsive"
            width={400}
            height={500}
            objectFit="cover"
          />
        </Box>
      </Grid>

      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2, color: 'black' }}
        >
          {t('corporate_partnerships')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'gray', fontSize: '16px', lineHeight: 1.6 }}
        >
          {t('corporate_desc_1')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'gray', fontSize: '16px', mt: 2, lineHeight: 1.6 }}
        >
          {t('corporate_desc_2')}
        </Typography>
      </Grid>

      <Grid item xs={12} md={3}>
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/first-right.png"
            alt="Kurumsal Sağ Görsel"
            layout="responsive"
            width={400}
            height={500}
            objectFit="cover"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
