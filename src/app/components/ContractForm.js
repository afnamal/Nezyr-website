'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  Select,
  TextField,
  Typography,
  MenuItem,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

export default function ContactForm() {
  const { t } = useTranslation('common');
  const [selectedCode, setSelectedCode] = useState('+90');
  const countryCodes = ['+90', '+1', '+44', '+49', '+33']; // Seçilebilir alan kodları
  const handlePhoneChange = (e) => {
    setFormData((prev) => ({ ...prev, phone: e.target.value }));
  };

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@nezyr.com?subject=İletişim Formu Mesajı&body=
      Ad: ${formData.name}%0A
      Soyad: ${formData.surname}%0A
      E-Posta: ${formData.email}%0A
      Telefon: ${formData.phone}%0A
      Mesaj: ${formData.message}`;

    window.location.href = mailtoLink;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '110vh', md: '110vh' },
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '20px', md: '40px' },
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        maxWidth="md"
        sx={{
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: { xs: '20px', md: '40px' },
          borderRadius: '0px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          width: { xs: '95%', sm: '90%', md: '85%' },
          maxWidth: '1100px',
          minHeight: { xs: '450px', sm: '500px', md: '600px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '75%' }, textAlign: 'center' }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{
              mb: { xs: 1, md: 10 },
              color: '#000',
              fontSize: { xs: '20px', md: '24px' },
            }}
          >
            {t('contact_us')}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Adınız"
                variant="filled"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'white',
                  mt: 1.5,
                  fontSize: '12px',
                  border: '1px solid #ccc',
                  '& .MuiInputBase-root': {
                    borderRadius: '0px',
                    backgroundColor: 'white !important',
                  },
                  '& .MuiFilledInput-root:after': {
                    borderBottom: 'none !important',
                    boxShadow: 'none !important',
                  },
                  '&:hover, & .MuiInputBase-root:hover': {
                    backgroundColor: 'white !important',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Soyadınız"
                variant="filled"
                fullWidth
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'white',
                  mt: 1.5,
                  fontSize: '12px',
                  border: '1px solid #ccc',
                  '& .MuiInputBase-root': {
                    borderRadius: '0px',
                    backgroundColor: 'white !important',
                  },
                  '& .MuiFilledInput-root:after': {
                    borderBottom: 'none !important',
                    boxShadow: 'none !important',
                  },
                  '&:hover, & .MuiInputBase-root:hover': {
                    backgroundColor: 'white !important',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="E-posta"
                variant="filled"
                fullWidth
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'white',
                  fontSize: '12px',
                  border: '1px solid #ccc',
                  '& .MuiInputBase-root': {
                    borderRadius: '0px',
                    backgroundColor: 'white !important',
                  },
                  '& .MuiFilledInput-root:after': {
                    borderBottom: 'none !important',
                    boxShadow: 'none !important',
                  },
                  '&:hover, & .MuiInputBase-root:hover': {
                    backgroundColor: 'white !important',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #ccc',
                  borderRadius: '0px',
                  backgroundColor: 'white',
                  '&:hover': { backgroundColor: 'white' },
                }}
              >
                <Select
                  value={selectedCode}
                  onChange={(e) => setSelectedCode(e.target.value)}
                  displayEmpty
                  disableUnderline
                  variant="standard"
                  sx={{
                    backgroundColor: 'white',
                    borderRight: '1px solid #ccc',
                    width: '80px',
                    textAlign: 'center',
                    fontSize: '14px',
                    height: '50px',
                    boxShadow: 'none',
                    border: 'none',
                    paddingLeft: '10px',
                    '& .MuiSelect-select': {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0px',
                    },
                    '&:focus': {
                      backgroundColor: 'white',
                      border: 'none',
                      outline: 'none',
                    },
                    '& .MuiFilledInput-root:after': {
                      borderBottom: 'none !important',
                      boxShadow: 'none !important',
                    },
                  }}
                >
                  {countryCodes.map((code) => (
                    <MenuItem key={code} value={code}>
                      {code}
                    </MenuItem>
                  ))}
                </Select>

                <TextField
                  variant="filled"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Cep Telefonunuz"
                  sx={{
                    fontSize: '12px',
                    backgroundColor: 'white',
                    '& .MuiInputBase-root': {
                      borderRadius: '0px',
                      backgroundColor: 'white',
                      boxShadow: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                    },
                    '&:hover, & .MuiInputBase-root:hover': {
                      backgroundColor: 'white',
                    },
                    '& .MuiFilledInput-root': {
                      borderRadius: '0px',
                      boxShadow: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                    },
                    '& .MuiInputBase-input': {
                      padding: '14px 10px',
                    },
                    '&:focus': {
                      backgroundColor: 'white',
                      border: 'none',
                      outline: 'none',
                    },

                    '& .MuiFilledInput-root:after': {
                      borderBottom: 'none !important',
                      boxShadow: 'none !important',
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mesajınız"
                variant="filled"
                fullWidth
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'white',
                  fontSize: '14px',
                  border: '1px solid #ccc',
                  '& .MuiInputBase-root': {
                    borderRadius: '0px',
                    backgroundColor: 'white !important',
                  },
                  '& .MuiFilledInput-root:after': {
                    borderBottom: 'none !important',
                    boxShadow: 'none !important',
                  },
                  '&:hover, & .MuiInputBase-root:hover': {
                    backgroundColor: 'white !important',
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
            >
              <Button
                type="submit"
                fullWidth
                size="medium"
                variant="contained"
                sx={{
                  backgroundColor: '#000',
                  borderRadius: '0px',
                  color: '#fff',
                  padding: { xs: '8px', md: '10px' },
                  maxWidth: '350px',
                  width: { xs: '80%', sm: '60%', md: '50%' },
                  fontSize: { xs: '12px', md: '14px' },
                  '&:hover': { backgroundColor: '#444' },
                  mt: { xs: 2, md: 3 },
                }}
              >
                {t('send')}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
