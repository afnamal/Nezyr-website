'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function AyricalikliSatis() {
  const { t } = useTranslation('common');

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 8, color: 'black' }}
      >
        {t('exclusive_sales_partnerships')}
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
                <Image
                  src="/satis1.png"
                  alt="Satış Görsel 1"
                  layout="responsive"
                  width={400}
                  height={500}
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <Box sx={{ width: '100%', height: '100%' }}>
                <Image
                  src="/satis3.png"
                  alt="Satış Görsel 2"
                  layout="responsive"
                  width={200}
                  height={250}
                  objectFit="cover"
                />
              </Box>
              <Box sx={{ width: '100%', height: '100%', mt: 0 }}>
                <Image
                  src="/satis2.png"
                  alt="Satış Görsel 3"
                  layout="responsive"
                  width={200}
                  height={250}
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              color: '#171614',
              fontSize: '16px',
              mb: 4,
              lineHeight: 1.6,
              wordSpacing: 3,
              textAlign: 'justify',
            }}
          >
            {t('exclusive_sales_description_1')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#171614',
              fontSize: '16px',
              mt: 2,
              lineHeight: 1.6,
              wordSpacing: 1,
              textAlign: 'justify',
            }}
          >
            {t('exclusive_sales_description_2')}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Image
              src="/logos.png"
              alt="İş Birliği Logoları"
              layout="intrinsic"
              width={500}
              height={200}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
