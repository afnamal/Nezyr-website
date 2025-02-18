'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function OzelProjeler() {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 6, textAlign: 'center', color: 'black' }}
        >
          ÖZEL PROJELER
        </Typography>

        <Grid container spacing={4} alignItems="flex-start">
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
                src="/ozel-projeler-left.png"
                alt="Özel Proje 1"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Typography
              variant="body1"
              sx={{ mt: 2, textAlign: 'left', color: 'gray', maxWidth: '100%' }}
            >
              Neziroğlu’nun uluslararası projeleri arasında Tayland kraliçesi
              için dokuma kumaş tasarımları ve Londra’da Christie’s gibi
              prestijli müzayede evlerinde eser satışları yer almakta. Yine yurt
              dışında Katar ve Norveç Kraliyet Aileleri için özel eserler
              tasarlayarak Anadolu'nun zengin dokuma mirasını farklı kültürlere
              taşımanın gururunu yaşamaktadır.
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
            <Box sx={{ position: 'relative', width: '100%', height: '400px' }}>
              <Image
                src="/ozel-projeler-right.png"
                alt="Özel Proje 2"
                layout="fill"
              />
            </Box>
            <Typography
              variant="body1"
              sx={{ mt: 2, textAlign: 'left', color: 'gray', maxWidth: '100%' }}
            >
              Octopus platformuyla yapılan iş birliği, Neziroğlu’nun NFT
              eserlerini fiziksel dünyaya taşıyarak Contemporary İstanbul'da
              büyük ilgi görmüştür. Neziroğlu’nun eserleri yalnızca Türkiye'de
              değil, New York'taki C24 Gallery gibi uluslararası galerilerde de
              sergilenmektedir. Sanatçı aynı zamanda Türkiye’nin Kuzey Kutbu'na
              yönelik tasarlayacağı kıyafetlerde kumaş tasarım danışmanlığı da
              yapmaktadır.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
