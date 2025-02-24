'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function Balance() {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ width: '100%', position: 'relative', height: '350px' }}>
              <Image
                src="/1.png"
                alt="Balance Denge Sandalye 1"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ width: '100%', position: 'relative', height: '350px' }}>
              <Image
                src="/22.png"
                alt="Balance Denge Sandalye 2"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ width: '100%', position: 'relative', height: '350px' }}>
              <Image
                src="/3.png"
                alt="Balance Denge Sandalye 3"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body1"
          sx={{
            mt: 4,
            textAlign: 'left',
            color: 'gray',
            mx: 'auto',
          }}
        >
          Sanatçının Tilia markasının 60. yılı için tasarladığı "BALANCE-DENGE"
          isimli özel tasarım sandalye; üzerinde barındırdığı motiflerle
          hayatın, evrenin ve geleceğin dengesini yansıtıyor.
          <br />
          <br />
          Sanatçının günün 3 hali olan; sabah, öğle ve akşamı temsil eden
          seçtiği özel kumaşlar ve motiflerle tasarlanan özel sandalye aynı
          zamanda deneyimlendiğinde vücuda masaj yapan ergonomik bir yapıya da
          sahip.
          <br />
          <br />
          Tasarımındaki şıklığın yanı sıra, fonksiyonelliğin ön planda olduğu
          sandalyenin bir diğer özelliği ise alt bölümünde günlük
          ihtiyaçlarınızı ve çalışma argümanlarınızı koyabileceğiniz "Kişisel
          Alan" ve özellikle çalışanların bilgisayar kullanımını özel üretim
          Mouse-bileklik yer alıyor.
          <br />
          <br />
          Geçmişi geleceğe bağlayan Balance-Denge; Da Vinci’nin dengesini,
          Matisse’in renklerini ve Dali’nin füturistik yaklaşımını Fırat
          Neziroğlu’nun tasarımında topluyor.
        </Typography>
      </Container>
    </Box>
  );
}
