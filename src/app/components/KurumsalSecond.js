'use client';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';

export default function KurumsalSecond() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Grid container sx={{ maxWidth: '1200px' }}>
        {/* Sol Taraf - Metin */}
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
          <Box sx={{ maxWidth: '400px' }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: '#000', mb: 1 }}
            >
              Hem sanatı hem de kültürel zenginliğimizi
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'gray', fontSize: '18px' }}
            >
              kurumsal projelere entegre ediyoruz.
            </Typography>
          </Box>
        </Grid>

        {/* Sağ Taraf - Resim */}
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
              src="/second-right.jpg" // Eğer farklı isimdeyse değiştir
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
