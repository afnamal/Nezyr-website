'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ModaProjeleri() {
  const { t } = useTranslation('common');

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: '400px' }}>
            <Image
              src="/moda-sol.png"
              alt="Kraliçe Elizabeth Portresi"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Typography
            variant="body1"
            sx={{ mt: 5, textAlign: 'left', color: '#171614', maxWidth: '100%',
              textAlign: 'justify',
              wordSpacing:4,
              lineHeight: 1.8,
             }}
          >
            {t('queen_elizabeth_portrait')}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: '700px' }}>
            <Image
              src="/moda-sag.png"
              alt="New York Moda Haftası"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Typography
            variant="body1"
            sx={{ mt: 5, textAlign: 'left', color: '#171614', maxWidth: '100%',
              textAlign: 'justify',
              lineHeight: 1.8,
              wordSpacing:4,
             }}
          >
            {t('new_york_fashion_week')}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
