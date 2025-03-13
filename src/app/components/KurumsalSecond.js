'use client';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function KurumsalSecond() {
  const { t } = useTranslation('common');
  const [key] = useState(0);

  return (
    <Box
      key={key}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 12,
      }}
    >
      <Grid container sx={{ maxWidth: '1500px' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              ml: { xs: 1, sm: 4, md: 6, lg: 8, xl: 10 },
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontSize: { xs: '20px', md: '22px' }, color: '#373634' }}
            >
              {t('art_and_culture')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(23, 22, 20, 0.8)',
                fontSize: { xs: '18px', md: '22px', fontWeight: 200 },
              }}
            >
              {t('corporate_projects')}
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            p: 2,
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', sm: '90%', md: '85%', lg: '75%', xl: '65%' },
              maxWidth: '430px',
              aspectRatio: '3/4',
              ml: { xs: 0, md: 2, lg: 4, xl: 6 },
            }}
          >
            <Image
              src="/second-right.jpg"
              alt="Kurumsal Sandalye"
              layout="fill"
              objectFit="cover"
              quality={90}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
