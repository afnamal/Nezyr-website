'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function AyricalikliSatis() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4, color: 'black' }}
      >
        AYRICALIKLI SATIŞ İŞ BİRLİKLERİ
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
                <Image
                  src="/satis1.png"
                  alt="Satış Görsel 1"
                  layout="responsive"
                  width={400}
                  height={500}
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <Box sx={{ width: '100%', height: '100%' }}>
                <Image
                  src="/satis2.png"
                  alt="Satış Görsel 2"
                  layout="responsive"
                  width={200}
                  height={250}
                  objectFit="cover"
                />
              </Box>
              <Box sx={{ width: '100%', height: '100%' }}>
                <Image
                  src="/satis3.png"
                  alt="Satış Görsel 3"
                  layout="responsive"
                  width={200}
                  height={250}
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{ color: '#333', fontSize: '16px', lineHeight: 1.6 }}
          >
            Sanatçımızın eserleri Sotheby’s, Christie’s ve New York’taki C24
            Gallery gibi saygın uluslararası galerilerde düzenli olarak
            sergilenmekte ve müzayedelere çıkmaktadır. Türkiye’de ise
            Contemporary Istanbul, Anna Laudel ve Akbank Sanat gibi galerilerde
            sanatseverlerle buluşmaktadır.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#333', fontSize: '16px', mt: 2, lineHeight: 1.6 }}
          >
            Galleries Lafayette, Brandroom, Harvey Nichols, Salut gibi
            mağazalarda Neziroğlu tasarımlarının satış işbirlikleri sürmekte
            olup, Nezyr’in yaratacağı geniş satış ağı ile yurt içi ve yurtdışı
            işbirliği çalışmaları devam etmektedir.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Image
              src="/logos.png"
              alt="İş Birliği Logoları"
              layout="intrinsic"
              width={400}
              height={100}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
