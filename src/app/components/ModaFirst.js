'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function ModaFirst() {
  const { t } = useTranslation('common');

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 11,
        backgroundColor: '#F9FAFB',
        width: '100',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 10 },
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 4, color: 'black' }}
        >
          {t('nezyr_corporate_fashion')}
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              pl: { xs: 3, sm: 6, md: 15, lg: 20 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                px: { xs: 0, sm: 1, md: 2, lg: 4 },
                ml: { xs: 1, sm: 2, md: 4, lg: 6 },
                textAlign: 'justify',
                width: '95%',
                lineHeight: 1.8,
                wordSpacing: 1.8,
                color: 'rgba(23, 22, 20, 0.8)',
              }}
            >
              {t('corporate_fashion_description')}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              pr: { xs: 0, sm: 4, md: 5, lg: 3 },
              ml: { xs: 0, md: -2 },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: { xs: '100%', sm: '100%', md: '90%' },
                height: 'auto',
                mx: 'auto',
              }}
            >
              <Image
                src="/kurumsal-moda.png"
                alt={t('nezyr_corporate_fashion')}
                layout="responsive"
                width={600}
                height={400}
                objectFit="contain"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
