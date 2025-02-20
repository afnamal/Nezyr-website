'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function ModaFirst() {
  const { t } = useTranslation('common');

  return (
    <Container sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, color: 'black' }}>
        {t('nezyr_corporate_fashion')}
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              fontSize: '16px',
              textAlign: 'left',
              lineHeight: 1.6,
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
