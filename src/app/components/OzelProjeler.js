'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function OzelProjeler() {
  const { t } = useTranslation('common');

  return (
    <Box
      sx={{
        py: 14,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 6, ml:10, textAlign: 'center', color: 'black' }}
        >
          {t('special_projects')}
        </Typography>

        <Grid container spacing={4} alignItems="center">
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
              sx={{ mt: 5, textAlign: 'left', color: 'gray', maxWidth: '100%',
                textAlign: 'justify',
                lineHeight: 1.8,
                wordSpacing:4,
              }}
            >
              {t('special_projects_description_1')}
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
              sx={{ mt: 5, textAlign: 'left', color: 'gray', maxWidth: '100%',
                lineHeight: 1.8,
                textAlign: 'justify',
                wordSpacing:4,
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
