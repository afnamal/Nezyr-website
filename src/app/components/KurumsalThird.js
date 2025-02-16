'use client';
import { Box, Typography, Grid } from '@mui/material';

export default function KurumsalThird() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 6,
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: '1200px' }}>
        {/* Sol Taraf - Büyük Başlık */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#000' }}>
            SANATTAN İLHAMLA
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#000' }}>
            KURUMSAL İŞBİRLİKLERİ
          </Typography>
        </Grid>

        {/* Sağ Taraf - Açıklama Metni */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="body1"
            sx={{ color: '#333', fontSize: '18px', mb: 2 }}
          >
            Nezyr Kurumsal iş birliklerinde tasarlanan ürünler, günlük hayatta
            rahatça kullanılabilecek kıyafetlerden, sanatsal dokunuşlarla
            bezenmiş dekoratif parçalara kadar geniş bir yelpazeye yayılır.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#333', fontSize: '18px', mb: 2 }}
          >
            Fırat Neziroğlu, moda ve sanatı buluşturan geniş kapsamlı kurumsal
            işbirlikleri ile tanınmaktadır. Sanatçının prestijli markalarla
            ortak projeler geliştirmiş olması, Nezyr’in küresel marka işbirliği
            vizyonunu ortaya koyar.
          </Typography>
          <Typography variant="body1" sx={{ color: '#333', fontSize: '18px' }}>
            Neziroğlu’nun Halkbank ile yürüttüğü proje Anadolu’nun yerel
            dokumacılık mirasını desteklemek için kadın girişimciler ile
            işbirliği yaparak, kadınların sanatsal üretimlerini ve yerel zanaat
            becerilerini geliştirmeye yönelik eğitim ve destek programları
            içerir.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
