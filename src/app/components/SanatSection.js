'use client';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

export default function SanatSection() {
  return (
    <Box>
      <Box sx={{ width: '100%', position: 'relative', height: '400px' }}>
        <Image
          src="/sanat-image.png"
          alt="Nezyr Sanat"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Container
        sx={{
          py: 6,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2, color: 'black' }}
        >
          NEZYR SANAT
        </Typography>
        <Typography variant="body1" sx={{ color: '#444', margin: '0 auto' }}>
          Nezyr Kurumsal altında hayat bulan ürünler, Fırat Neziroğlu’nun
          sanatıyla harmanlanmış giysi, aksesuar, mobilya, ev, tekstil ürünleri
          ve sanatçımızın imzasını taşıyan tasarımlardır. Kültür ve sanat
          etkinlikleri ise zengin geçmişimizi yaşatarak, geleneksel sanatları ve
          evrensel değerleri günümüzle buluşturur.
        </Typography>
      </Container>
    </Box>
  );
}
