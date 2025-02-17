'use client';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        padding: '40px 0',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <img src="/logo.png" alt="Nezyr Logo" width="120" height="auto" />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '75%',
          marginTop: '20px',
        }}
      >
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body1" fontWeight="bold" color="black">
            İletişim:
          </Typography>
          <Typography color="black" variant="body2">
            0212 345 56 67
          </Typography>
          <Typography color="black" variant="body2">
            info@nezyr.com
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '15px' }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram.png"
              alt="Instagram"
              width="24"
              height="24"
              style={{ cursor: 'pointer' }}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              width="24"
              height="24"
              style={{ cursor: 'pointer' }}
            />
          </a>
          <a href="#" onClick={() => console.log('Twitter butonu tıklandı')}>
            <img
              src="/twitter.png"
              alt="Twitter"
              width="24"
              height="24"
              style={{ cursor: 'pointer' }}
            />
          </a>
        </Box>
      </Box>

      {/* Telif Hakkı */}
      <Typography variant="body2" sx={{ color: '#777', marginTop: '20px' }}>
        © 2020 Nezyr, Inc. All rights reserved
      </Typography>
    </Box>
  );
}
