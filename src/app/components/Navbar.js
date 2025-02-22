'use client';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation('common');
  const [language, setLanguage] = useState(i18n.language || 'tr');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

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

        <Box sx={{ display: 'flex', gap: 4 }}>
          <Button
            component={Link}
            href="/kurumsal"
            sx={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}
          >
            {t('corporate')}
          </Button>
          <Button
            component={Link}
            href="/sanat"
            sx={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}
          >
            {t('art')}
          </Button>
          <Button
            component={Link}
            href="/moda"
            sx={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}
          >
            {t('fashion')}
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography
            onClick={() => changeLanguage('tr')}
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
              color: language === 'tr' ? 'black' : 'gray',
              position: 'relative',
              '&::after':
                language === 'tr'
                  ? {
                      content: '"•"',
                      position: 'absolute',
                      bottom: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }
                  : {},
            }}
          >
            TR
          </Typography>
          <Typography
            onClick={() => changeLanguage('en')}
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
              color: language === 'en' ? 'black' : 'gray',
              position: 'relative',
              '&::after':
                language === 'en'
                  ? {
                      content: '"•"',
                      position: 'absolute',
                      bottom: '-10px',
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
