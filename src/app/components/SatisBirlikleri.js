'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const logoGroups = [
  { src: '/satisBirlikleri.png', alt: 'Logolar Grubu 1' },
  { src: '/satisBirlikleri2.png', alt: 'Logolar Grubu 2' },
];

export default function SatisIsBirlikleri() {
  return (
    <Container sx={{ textAlign: 'center', py: 6 }}>
      {/* Başlık */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, color: 'black' }}>
        SATIŞ İŞ BİRLİKLERİ
      </Typography>

      {/* 2 Büyük Resmi Yanyana Göster (Boşluksuz) */}
      <Grid container justifyContent="center" sx={{ gap: 0 }}>
        {logoGroups.map((logo, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: index == 0 ? 'end' : 'start',
              padding: 2, // Boşluğu kaldır
            }}
          >
            <Box sx={{ position: 'relative', width: '300px', height: '100px' }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
