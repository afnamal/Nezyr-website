'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

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
            sx={{ mt: 2, textAlign: 'left', color: 'gray', maxWidth: '100%' }}
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
            sx={{ mt: 2, textAlign: 'left', color: 'gray', maxWidth: '100%' }}
          >
            {t('new_york_fashion_week')}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
