'use client';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Container, Grid } from '@mui/material';
export default function KurumsalFirst() {
  const [language, setLanguage] = useState('TR');

  return (
    <Grid container spacing={4} alignItems="center">
      {/* Sol Fotoğraf */}
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
          }}
        >
          <Image
            src="/first-left.png" // Sol görsel
            alt="Kurumsal Sol Görsel"
            layout="responsive"
            width={400}
            height={500}
            objectFit="cover"
          />
        </Box>
      </Grid>

      {/* Metin Alanı */}
      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2, color: 'black' }}
        >
          KURUMSAL İŞ BİRLİKLERİ
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'gray', fontSize: '16px', lineHeight: 1.6 }}
        >
          Nezyr Kurumsal iş birlikleri çerçevesinde, Fırat Neziroğlu’nun
          sanatıyla harmanlanmış giysi, aksesuar, mobilya, ev ve tekstil
          ürünleri tasarlıyoruz.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'gray', fontSize: '16px', mt: 2, lineHeight: 1.6 }}
        >
          Markanızın özgün tasarımlarının tüm süreçlerini, tasarımdan üretime
          titizlikle hayata geçiriyoruz. Markalara özel moda koleksiyonları
          tasarlıyor ve belirli coğrafi bölgelerde dokuma tezgahı kurulumları
          gerçekleştiriyoruz. Zengin kültürel mirasımızı yansıtan etkinliklerle
          geleneksel sanatları ve evrensel değerleri günümüze taşıyoruz.
        </Typography>
      </Grid>

      {/* Sağ Fotoğraf */}
      <Grid item xs={12} md={3}>
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/first-right.png"
            alt="Kurumsal Sağ Görsel"
            layout="responsive"
            width={400}
            height={500}
            objectFit="cover"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
