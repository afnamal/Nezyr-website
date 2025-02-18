'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function ModaProjeleri() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="flex-start">
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
            Fırat Neziroğlu’nun yurt dışında katıldığı en dikkat çekici
            projelerden biri, İngiltere Kraliçesi II. Elizabeth’in portresini
            yaratmasıdır. Bu projede sanatçı, dokuma sanatındaki yenilikçi
            tekniğini kullanarak Kraliçe’nin portresini dokuma sanatıyla
            betimlemiş ve eserini 2019'da Kraliçe için özel olarak
            tasarlamıştır.
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
            New York Moda Haftası’nda YEN koleksiyonu ile Anatolia temalı
            kıyafetlerini sergilemiş ve geleneksel el sanatlarını modern
            tasarımlarla harmanlamıştır.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
