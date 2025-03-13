'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Balance() {
  const { t } = useTranslation('common');

  return (
    <Box sx={{ py: 6, textAlign: 'center', backgroundColor: '#FCFCFD' }}>
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          maxWidth: '1000px',
        }}
      >
        <Grid container spacing={0} justifyContent="flex-start">
          {/* İlk iki resim yan yana olacak */}
          <Grid
            item
            xs={6}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center', p: 1 }}
          >
            <Box
              sx={{
                width: '100%',
                position: 'relative',
                aspectRatio: { xs: '4/5', md: 'unset' },
                minHeight: { xs: '210px', md: '440px' },
              }}
            >
              <Image
                src="/1.png"
                alt="Balance Denge Sandalye 1"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center', p: 1 }}
          >
            <Box
              sx={{
                width: '100%',
                position: 'relative',
                aspectRatio: { xs: '4/5', md: 'unset' },
                minHeight: { xs: '210px', md: '440px' },
              }}
            >
              <Image
                src="/22.png"
                alt="Balance Denge Sandalye 2"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            sx={{ display: 'flex', justifyContent: 'flex-start', px: 1 }}
          >
            <Box
              sx={{
                width: '100%',
                position: 'relative',
                aspectRatio: { xs: '4/5', md: 'unset' },
                minHeight: { xs: '210px', md: '440px' },
              }}
            >
              <Image
                src="/3.png"
                alt="Balance Denge Sandalye 3"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 6, sm: 8, md: 10, lg: 12 },
            maxWidth: '1000px',
            mx: 'auto',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: 'left',
              color: 'rgba(23, 22, 20, 0.8)',
              lineHeight: 1.8,
            }}
          >
            {t('balance_description_1')}
            <br />
            {t('balance_description_2')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
