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
    link: '#',
  },
  {
    image: '/nike.png',
    title: 'Nike atık ürünlerinden ileri dönüşüm projeleri',
    link: '#',
  },
  {
    image: '/levis.png',
    title:
      "Levi's atık ürünlerinden Fırat Neziroğlu kişisel tekniği ile dokunan sanat eseri",
    link: '#',
  },
  {
    image: '/algida.png',
    title: 'Algida çubuklarından ileri dönüşüm Dokuma Tezgahı',
    link: '#',
  },
  {
    image: '/60yil.png',
    title: '60. yıl Özel Tasarımı ',
    link: '#',
  },
  {
    image: '/miss.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '#',
  },
  {
    image: '/beymen.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '#',
  },
  {
    image: '/roketsan.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '#',
  },
  {
    image: '/halkbank.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '#',
  },
  {
    image: '/akbank.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '#',
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
                  width={index == 5 ? 240 : 100}
                  height={index != 5 ? 50 : 40}
                />
              </Box>
              <CardContent>
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
                    fontWeight: 'bold',
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
    </Box>
  );
}
