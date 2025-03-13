'use client';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function SanatEtkinlikleri() {
  const { t } = useTranslation('common');

  return (
    <Container sx={{ py: 8, textAlign: 'center', maxWidth: '900px' }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 6, color: '#000' }}>
        {t('nezyr_art_events')}
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, color: '#171614', lineHeight: 1.6, textAlign: 'justify' }}
      >
        {t('art_events_description')}
      </Typography>
      <Box
        sx={{
          mx: 'auto',
          maxWidth: '650px',
          color: '#000',
          textAlign: 'justify',
          lineHeight: '5',
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 400 }}>
          - {t('art_event_1')} <strong>{t('art_event_1_detail')}</strong>,
          {t('art_event_2')} <strong>{t('art_event_2_detail')}</strong>,
          {t('art_event_3')} <strong>{t('art_event_3_detail')}</strong>,
          {t('art_event_4')} <strong>{t('art_event_4_detail')}</strong>,
          {t('art_event_5')} <strong>{t('art_event_5_detail')}</strong>,
          {t('art_event_6')} <strong>{t('art_event_6_detail')}</strong>.
        </Typography>
      </Box>
    </Container>
  );
}
