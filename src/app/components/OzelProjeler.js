'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function OzelProjeler() {
  const { t } = useTranslation('common');

  return (
    <Box
      sx={{
        py: 6,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: 'black',
            fontSize: { xs: '20px', md: '24px' },
          }}
        >
          {t('special_projects')}
        </Typography>
        <Grid container spacing={6} alignItems="flex-start">
          <Grid
            item
            xs={12}
            md={5.5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box sx={{ position: 'relative', width: '100%', height: '630px' }}>
              <Image
                src="/ozel-projeler-left.png"
                alt="Özel Proje 1"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                mt: 5,
                textAlign: 'left',
                maxWidth: '100%',
                color: 'rgba(23, 22, 20, 0.75)',
                textAlign: 'justify',
                fontSize: '18',
                wordSpacing: 4,
                lineHeight: 1.8,
              }}
            >
              {t('special_projects_description_1')}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6.5}
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 10,
            }}
          >
            <Box sx={{ position: 'relative', width: '100%', height: '450px' }}>
              <Image
                src="/ozel-projeler-right.png"
                alt="Özel Proje 2"
                layout="fill"
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                mt: 5,
                textAlign: 'left',
                maxWidth: '100%',
                color: 'rgba(23, 22, 20, 0.75)',
                textAlign: 'justify',
                fontSize: '18',
                wordSpacing: 4,
                lineHeight: 1.8,
              }}
            >
              {t('special_projects_description_2')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
