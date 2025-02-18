'use client';
import { Box, Container, Typography } from '@mui/material';

export default function SanatEtkinlikleri() {
  return (
    <Container sx={{ py: 8, textAlign: 'center', maxWidth: '900px' }}>
      {/* Başlık */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#000' }}>
        NEZYR SANAT ETKİNLİKLERİ
      </Typography>

      {/* Açıklama Metni */}
      <Typography
        variant="body1"
        sx={{ mb: 4, color: 'gray', lineHeight: 1.6 }}
      >
        Kültür-Sanat ve Atölye, sergi etkinlikleriyle zengin geçmişimizi
        yaşatarak geleneksel sanatları ve evrensel değerleri günümüzle
        buluşturur, kültürel mirasımıza olan bağlılığı güçlendirir, yerel
        sanatçıları, kadın girişimcileri, üreticileri destekler ve topluluklara
        köklerine dair derin bir aidiyet duygusu kazandırır.
      </Typography>

      {/* Etkinlik Listesi */}
      <Box
        sx={{ textAlign: 'left', mx: 'auto', maxWidth: '700px', color: '#000' }}
      >
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - Canlı Dokuma Gösterileriyle Moda Defilesi -{' '}
          <strong>Dokuma ve Moda Tasarım Atölyeleri</strong>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - İş Birlikçi Pop-Up Mağaza Kurulumları -{' '}
          <strong>Tekstil Sanat Sergisi</strong>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - Dokuma ve Moda Tasarım Kampı -{' '}
          <strong>Dokuma Kostümleri Film Gösterimi</strong>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - Sürdürülebilir Moda Farkındalık Etkinliği -{' '}
          <strong>Çevre Dostu Moda Atölyesi</strong>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - Tekstil Geri Dönüşüm Kampanyası -{' '}
          <strong>Etik Moda Panel Tartışması</strong>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - Geri Dönüşümle Moda Yarışması -{' '}
          <strong>Sıfır Atık Moda Tasarım Atölyesi</strong>
        </Typography>
      </Box>
    </Container>
  );
}
