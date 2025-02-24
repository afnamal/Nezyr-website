'use client';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function KurumsalSecond() {
  const { t } = useTranslation('common');
  const [key] = useState(0);

  return (
    <Box
      key={key}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 10,
      }}
    >
      <Grid container sx={{ maxWidth: '1400px' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: '#000', mb: 1 }}
            >
              {t('art_and_culture')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'gray', fontSize: '18px' }}
            >
              {t('corporate_projects')}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '3/4',
            }}
          >
            <Image
              src="/second-right.jpg"
              alt="Kurumsal Sandalye"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
