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

const projects = [
  {
    image: '/adidas2.png',
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
  { image: '/60yil.png', title: '60. yıl Özel Tasarımı', link: '#' },
  {
    image: '/miss-universe.png',
    title: 'Kainat Güzellik Yarışması Türkiye Ulusal Kostümleri',
    link: '#',
  },
];

export default function KurumsalFourth() {
  return (
    <Box
      sx={{
        width: '100%',
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Hafif gri arka plan
      }}
    >
      {/* Proje Kartları */}
      <Grid container spacing={4} sx={{ maxWidth: '1200px' }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                boxShadow: 'none',
                border: '1px solid #ddd',
                p: 2,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '150px',
                  position: 'relative',
                  border: '1px solid black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={120}
                  height={80}
                  style={{ filter: 'invert(1)' }}
                />
              </Box>
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{ color: '#000', fontSize: '16px', mb: 2 }}
                >
                  {project.title}
                </Typography>
                <Link
                  href={project.link}
                  sx={{
                    color: '#000',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '14px',
                  }}
                >
                  Detayları Gör
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* "Tüm İş Birliklerini Gör" Butonu */}
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
