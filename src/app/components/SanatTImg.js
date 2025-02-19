'use client';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

export default function SanatTImg() {
  return (
    <Box sx={{ width: '100%', textAlign: 'center', py: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: 'black' }}>
        SANATTAN İLHAMLA <br /> KURUMSAL İŞBİRLİKLERİ
      </Typography>

      <Box sx={{ width: '100%', position: 'relative' }}>
        <Image
          src="/sanatt.png"
          alt="Sanattan İlhamla Kurumsal İşbirlikleri"
          width={1440}
          height={403}
          layout="responsive"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}
