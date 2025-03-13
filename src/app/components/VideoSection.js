'use client';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function VideoSection() {
  const { t } = useTranslation('common');

  return (
    <Container sx={{ textAlign: 'center', py: 5, backgroundColor: '#FCFCFC' }}>
      <Typography variant="body2" sx={{ color: '#333', mb: 1 }}>
        {t('video_date')}
      </Typography>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 4, color: 'black' }}>
        {t('firat_neziroglu_tilia')}
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '700px',
          margin: '0 auto',
          aspectRatio: '16/9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
      <Box
        sx={{
          mt: 7,
          maxWidth: '1000px',
          mx: 'auto',
          px: { xs: 0, sm: 5, md: 8 },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(23, 22, 20, 0.75)',
            mt: 10,
            textAlign: 'justify',
            color: '#333',
            lineHeight: 1.8,
          }}
        >
          {t('video_description_1')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(23, 22, 20, 0.75)',
            textAlign: 'justify',
            color: '#333',
            lineHeight: 1.8,
          }}
        >
          {t('video_description_2')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'rgba(23, 22, 20, 0.75)',
            mt: 4,
            textAlign: 'justify',
            color: '#333',
            lineHeight: '1.8',
          }}
        >
          {t('video_description_3').split('Balance – Denge')[0]}
          <strong>Balance – Denge</strong>
          {t('video_description_3').split('Balance – Denge')[1]}
        </Typography>
      </Box>
    </Container>
  );
}
