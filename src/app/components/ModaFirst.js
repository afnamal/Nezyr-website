'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function ModaFirst() {
  return (
    <Container sx={{ textAlign: 'center', py: 6 }}>
      {/* Başlık */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, color: 'black' }}>
        NEZYR KURUMSAL MODA
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Metin Alanı */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              fontSize: '16px',
              textAlign: 'left',
              lineHeight: 1.6,
            }}
          >
            Nezyr Kurumsal altında hayat bulan ürünler, Fırat Neziroğlu’nun
            sanatıyla harmanlanmış giysi, aksesuar, mobilya, ev, tekstil
            ürünleri ve sanatçımızın imzasını taşıyan tasarımlardır. Kültür ve
            sanat etkinlikleri ise zengin geçmişimizi yaşatarak, geleneksel
            sanatları ve evrensel değerleri günümüzle buluşturur.
          </Typography>
        </Grid>

        {/* Sağ Taraftaki Görsel */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/kurumsal-moda.png"
              alt="Kurumsal Moda Görseli"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
