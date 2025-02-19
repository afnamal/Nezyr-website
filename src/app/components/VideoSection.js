'use client';
import { Box, Container, Typography } from '@mui/material';

export default function VideoSection() {
  return (
    <Container sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="body2" sx={{ color: 'gray', mb: 1 }}>
        12.12.2021
      </Typography>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, color: 'black' }}>
        FIRAT NEZİROĞLU & TILIA İŞ BİRLİĞİ
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          aspectRatio: '16/9',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/xAoBon8NlkQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>

      <Typography
        variant="body1"
        sx={{
          mt: 4,
          textAlign: 'justify',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#333',
          lineHeight: 1.6,
        }}
      >
        Demokratik tasarım ilkesi ile ulaşılabilir tasarımlarını, doğaya, insana
        ve her alanda iyi olmaya verdiği önemle birleştiren Tilia, 60. yılını
        aynı değerlerde buluştuğu sanatçı Fırat Neziroğlu iş birliği ile
        kutluyor.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          textAlign: 'justify',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#333',
          lineHeight: 1.6,
        }}
      >
        Altmış yıl önce, iyi tasarlanmış, benzersiz, ihtiyaçları doğru anlayan,
        kaliteli ve erişilebilir ürünler üretme vizyonuyla yola çıkan Tilia,
        hayatın akışı içinde gerçek ihtiyaçlara cevap verebilme yeteneğini,
        Uluslararası Dokuma Sanatçısı Fırat Neziroğlu’nun yeteneği ile
        birleştirdi.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          textAlign: 'justify',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#333',
          fontWeight: 'bold',
        }}
      >
        Sanatçı Fırat Neziroğlu’nun Tilia’nın 60. yılına özel gerçekleştirdiği
        tasarım sandalye <strong>“Balance – Denge”</strong> tasarım severlerin
        beğenisine sunuldu.
      </Typography>
    </Container>
  );
}
