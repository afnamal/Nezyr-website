'use client';
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function KurumsalFirst() {
  const { t } = useTranslation('common');

  return (
    <Grid container spacing={0} alignItems="center">
      <Grid
        item
        xs={6}
        md={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          order: { xs: 1, md: 1 },
          padding: 0,
          margin: 0,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '50vw', md: '100%' },
            height: 'auto',
            display: 'flex',
          }}
        >
          <Image
            src="/first-left.png"
            alt="Kurumsal Sol Görsel"
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        md={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          order: { xs: 2, md: 3 },
          padding: 0,
          margin: 0,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '50vw', md: '100%' },
            height: 'auto',
            display: 'flex',
          }}
        >
          <Image
            src="/first-right.png"
            alt="Kurumsal Sağ Görsel"
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          px: 2,
          order: { xs: 3, md: 2 },
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 5, color: 'black', textAlign: 'center' }}
        >
          {t('corporate_partnerships')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'gray', fontSize: '16px', ml:2, mr:2, lineHeight: 1.8, wordSpacing: 5 ,textAlign: 'justify'}}
        >
          {t('corporate_desc_1')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'gray', fontSize: '16px', mt: 2, ml:2, mr:2, lineHeight: 1.8, textAlign: 'justify',wordSpacing: 5 }}
        >
          {t('corporate_desc_2')}
        </Typography>
      </Grid>
    </Grid>
  );
}
