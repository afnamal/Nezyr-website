'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function AyricalikliSatis() {
  const { t } = useTranslation('common');

  return (
    <Container
      sx={{
        py: 8,
        maxWidth: '100% !important',
        pl: { xs: 0, md: 0 },
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 8, color: 'black' }}
      >
        {t('exclusive_sales_partnerships')}
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pl: 0,
            ml: 0,
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: 'flex-start' }}>
            <Grid item xs={6}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '100%', md: '100%' },
                  height: '100%',
                  display: 'flex',
                }}
              >
                <Image
                  src="/satis1.png"
                  alt="Satış Görsel 1"
                  layout="responsive"
                  width={450}
                  height={550}
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                justifyContent: 'flex-start',
                ml: 0,
                pl: 0,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '100%', md: '100%' },
                  height: '100%',
                }}
              >
                <Image
                  src="/satis3.png"
                  alt="Satış Görsel 2"
                  layout="responsive"
                  width={250}
                  height={300}
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '100%', md: '100%' },
                  height: '100%',
                  mt: 0,
                }}
              >
                <Image
                  src="/satis2.png"
                  alt="Satış Görsel 3"
                  layout="responsive"
                  width={250}
                  height={300}
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
              mb: 4,
              lineHeight: 1.6,
              wordSpacing: 3,
              textAlign: 'justify',
              px: 2,

              color: 'rgba(23, 22, 20, 0.75)',
            }}
          >
            {t('exclusive_sales_description_1')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              lineHeight: 1.6,
              wordSpacing: 1,
              textAlign: 'justify',
              px: 2,
              color: 'rgba(23, 22, 20, 0.75)',
            }}
          >
            {t('exclusive_sales_description_2')}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              px: 4,
              gap: 2,
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Image
              src="/ayricalikFirst.png"
              alt="İş Birliği Logoları"
              layout="intrinsic"
              width={350}
              height={200}
            />
            <Image
              src="/ayricalikSecond.png"
              alt="İş Birliği Logoları"
              layout="intrinsic"
              width={350}
              height={200}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
