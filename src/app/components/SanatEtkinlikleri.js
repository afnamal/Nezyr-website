'use client';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function SanatEtkinlikleri() {
  const { t } = useTranslation('common');

  return (
    <Container sx={{ py: 8, textAlign: 'center', maxWidth: '900px' }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#000' }}>
        {t('nezyr_art_events')}
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, color: 'gray', lineHeight: 1.6 }}
      >
        {t('art_events_description')}
      </Typography>

      <Box
        sx={{ textAlign: 'left', mx: 'auto', maxWidth: '700px', color: '#000' }}
      >
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - {t('art_event_1')} <strong>{t('art_event_1_detail')}</strong>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - {t('art_event_2')} <strong>{t('art_event_2_detail')}</strong>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - {t('art_event_3')} <strong>{t('art_event_3_detail')}</strong>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - {t('art_event_4')} <strong>{t('art_event_4_detail')}</strong>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - {t('art_event_5')} <strong>{t('art_event_5_detail')}</strong>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          - {t('art_event_6')} <strong>{t('art_event_6_detail')}</strong>
        </Typography>
      </Box>
    </Container>
  );
}
