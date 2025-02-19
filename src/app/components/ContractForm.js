'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

export default function ContactForm() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(5px)',
        }}
      ></Box>

      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 2, color: '#000' }}
        >
          BİZE ULAŞIN
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 4, color: '#444' }}
        >
          Commodo litora libero elit, id in hendrerit erat tempus. Finibus cras
          faucibus massa mauris duis; class ad hac praesent.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Adınız" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Soyadınız" variant="outlined" />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="E-posta"
              type="email"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Cep Telefonu"
              type="tel"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mesajınız"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                fontWeight: 'bold',
                padding: '12px',
                alignContent: 'center',
                '&:hover': {
                  backgroundColor: '#444',
                },
              }}
            >
              Gönder
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
