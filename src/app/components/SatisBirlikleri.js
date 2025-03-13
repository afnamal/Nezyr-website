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
    <Container sx={{ textAlign: 'center', py: 30, mb: -20, mt: -15 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: 4,
          color: 'black',
          fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '30px' },
        }}
      >
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
              justifyContent: {
                xs: 'center',
                md: index === 0 ? 'end' : 'start',
              },
              px: { xs: 1, sm: 2, md: 4, lg: 5 },
              py: 1,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '80%',
                maxWidth: '400px',
                height: '80px',
              }}
            >
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
