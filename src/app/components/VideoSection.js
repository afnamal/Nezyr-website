'use client';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function VideoSection() {
  const { t } = useTranslation('common');

  return (
    <Container sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="body2" sx={{ color: 'gray', mb: 1 }}>
        {t('video_date')}
      </Typography>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 6, color: 'black' }}>
        {t('firat_neziroglu_tilia')}
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
          overflow: 'hidden',
          mb:8
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
      <Box sx={{ mt: 7 , ml:16, mr:16,}}>
        <Typography
          variant="body1"
          sx={{
            mt:4,
            textAlign: 'justify',
            margin: '0 auto',
            color: '#333',
            lineHeight: 1.6,
          }}
        >
          {t('video_description_1')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            mb: 4,
            textAlign: 'justify',
            margin: '0 auto',
            color: '#333',
            lineHeight: 1.6,
          }}
        >
          {t('video_description_2')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            textAlign: 'justify',
            margin: '0 auto',
            color: '#373634',
          }}
        >
          {t('video_description_3')}
        </Typography>
      </Box>
    </Container>
  );
}
