'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ModaFirst() {
  const { t } = useTranslation('common');

  return (
    <Container spacing={0}
    sx={{ textAlign: 'center',
          py: 11,
          backgroundColor: '#F9FAFB',
          width: '150%',
          }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 8, color: 'black',fontSize: '28px' }}>
        {t('nezyr_corporate_fashion')}
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'justify',
              color: '#171614',
              fontSize: '16px',
              lineHeight: 1.8,
              wordSpacing: 4,
            }}
          >
            {t('corporate_fashion_description')}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/kurumsal-moda.png"
              alt={t('nezyr_corporate_fashion')}
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
