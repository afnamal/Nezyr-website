'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
const logoGroups = [
  { src: '/satisBirlikleri.png', alt: 'Logolar Grubu 1' },
  { src: '/satisBirlikleri2.png', alt: 'Logolar Grubu 2' },
];

export default function SatisIsBirlikleri() {
  const { t } = useTranslation('common');
  return (
    <Container sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, color: 'black' }}>
        {t('SATIŞ İŞ BİRLİKLERİ')}
      </Typography>

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
              padding: 2,
            }}
          >
            <Box sx={{ position: 'relative', width: '500px', height: '100px' }}>
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
