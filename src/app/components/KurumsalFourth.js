'use client';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

const projects = [
  {
    image: '/adidas.png',
    title: 'Adidas atık ürünlerinden ileri dönüşüm projeleri',
    link: '/cooperation',
  },
  {
    image: '/nike.png',
    title: 'Nike atık ürünlerinden ileri dönüşüm projeleri',
    link: '/cooperation',
  },
  {
    image: '/levis.png',
    title:
      "Levi's atık ürünlerinden Fırat Neziroğlu kişisel tekniği ile dokunan sanat eseri",
    link: '/cooperation',
  },
  {
    image: '/algida.png',
    title: 'Algida çubuklarından ileri dönüşüm Dokuma Tezgahı',
    link: '/cooperation',
  },
  {
    image: '/60yil.png',
    title: '60. yıl Özel Tasarımı',
    link: '/tilia',
  },
  {
    image: '/miss.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '/cooperation',
  },
];

export default function KurumsalFourth() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <Box
      sx={{
        mt: { xs: -10, sm: -12, md: -14, lg: -16 },
        backgroundColor: '#F9FAFB',
        width: '100%',
        py: { xs: 16, sm: 18, md: 20, lg: 22 },
        pb: { xs: 4, sm: 6, md: 8, lg: 10 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: { xs: 2, sm: 4, md: 8, lg: 10, xl: 12 },
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: '1150px' }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 2,
                display: 'flex',
                borderRadius: '0px',
                border: '1px solid #E4E4E4',
                flexDirection: 'column',
                height: { xs: '100%', sm: '230px', md: '250px', lg: '257px' },
                backgroundColor: 'transparent',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '120px',
                  position: 'relative',
                  border: '1px solid #E4E4E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={
                    index === 5
                      ? 140
                      : index === 2
                      ? 120
                      : index == 4
                      ? 60
                      : index == 3
                      ? 90
                      : index == 1
                      ? 90
                      : 80
                  }
                  height={
                    index === 5 ? 70 : index == 3 ? 55 : index == 4 ? 57 : 50
                  }
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(23, 22, 20, 0.8)',
                    fontSize: '16px',
                    mb: 2,
                  }}
                >
                  {t(project.title)}
                </Typography>
                <Link
                  href={project.link}
                  sx={{
                    color: '#373634',
                    textDecoration: 'underline',
                    fontSize: '14px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  Detayları Gör
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        onClick={() => router.push('/cooperation')}
        sx={{
          mt: { xs: 5, sm: 7, md: 9, lg: 9 },
          px: 4,
          py: 1,
          width: { xs: '100%', md: '27%' },
          border: '1px solid black',
          borderRadius: '0px',
          color: '#000',
          fontSize: '16px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#000',
            color: '#fff',
          },
        }}
      >
        Tüm İş Birliklerini Gör
      </Button>
    </Box>
  );
}
