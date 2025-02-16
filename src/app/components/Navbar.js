'use client';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import KurumsalFirst from './KurumsalFirst';
import KurumsalSecond from './KurumsalSecond';

export default function Navbar() {
  const [language, setLanguage] = useState('TR');

  //s
  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: '#FCFCFC',
        boxShadow: '0px 4px 51px rgba(207, 207, 207, 0.17)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '100px',
          px: 4,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="NEZYR Logo"
              width={100}
              height={50}
              priority
            />
          </Link>
        </Box>

        {/* Menü Linkleri */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Button
            component={Link}
            href="/kurumsal"
            sx={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}
          >
            KURUMSAL
          </Button>
          <Button
            component={Link}
            href="/sanat"
            sx={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}
          >
            SANAT
          </Button>
          <Button
            component={Link}
            href="/moda"
            sx={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}
          >
            MODA
          </Button>
        </Box>

        {/* Dil Seçici */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography
            onClick={() => setLanguage('TR')}
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
              color: language === 'TR' ? 'black' : 'gray',
              position: 'relative',
              '&::after':
                language === 'TR'
                  ? {
                      content: '"•"',
                      position: 'absolute',
                      bottom: '-5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }
                  : {},
            }}
          >
            TR
          </Typography>
          <Typography
            onClick={() => setLanguage('EN')}
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
              color: language === 'EN' ? 'black' : 'gray',
              position: 'relative',
              '&::after':
                language === 'EN'
                  ? {
                      content: '"•"',
                      position: 'absolute',
                      bottom: '-5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }
                  : {},
            }}
          >
            EN
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
