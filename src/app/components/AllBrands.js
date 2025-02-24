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
  {
    image: '/beymen.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '/cooperation',
  },
  {
    image: '/roketsan.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '/cooperation',
  },
  {
    image: '/halkbank.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '/cooperation',
  },
  {
    image: '/akbank.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '/cooperation',
  },
];

export default function AllBrands() {
  const { t } = useTranslation('common');

  return (
    <Box
      sx={{
        width: '100%',
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: '1200px' }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '150px',
                  position: 'relative',
                  border: '1px solid #f2f2f2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={
                    index == 5
                      ? 240
                      : index == 6 || index == 7 || index == 8
                      ? 120
                      : 80
                  }
                  height={index != 5 ? 50 : 40}
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
                  sx={{ color: '#000', fontSize: '16px', mb: 2 }}
                >
                  {t(project.title)}
                </Typography>
                <Link
                  href={project.link}
                  sx={{
                    color: '#000',
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
        sx={{
          mt: 4,
          px: 4,
          py: 1,
          border: '1px solid black',
          color: '#000',
          fontWeight: 'bold',
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
