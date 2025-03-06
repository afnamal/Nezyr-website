'use client';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { t, i18n } = useTranslation('common');
  const [language, setLanguage] = useState(i18n.language || 'tr');
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          height: '70px',
          px: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="NEZYR Logo"
              width={160}
              height={40}
              priority
            />
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          <Button
            component={Link}
            href="/kurumsal"
            sx={{
              color: 'black',
              fontWeight: pathname == '/kurumsal' ? 'bold' : 'normal',
              fontSize: '14px',
            }}
          >
            {t('corporate')}
          </Button>
          <Button
            component={Link}
            href="/sanat"
            sx={{
              color: 'black',
              fontFamily: 'Helvetica',
              fontWeight: pathname == '/sanat' ? 'bold' : 'normal',
              fontSize: '14px',
            }}
          >
            {t('art')}
          </Button>
          <Button
            component={Link}
            href="/moda"
            sx={{
              color: 'black',
              fontWeight: pathname == '/moda' ? 'bold' : 'normal',
              fontSize: '14px',
            }}
          >
            {t('fashion')}
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 2,
            width: 160,
            justifyContent: 'flex-end',
            pr: 2,
          }}
        >
          <Typography
            onClick={() => changeLanguage('tr')}
            sx={{
              cursor: 'pointer',
              fontSize: '14px',
              color: language === 'tr' ? 'black' : 'gray',
              position: 'relative',
              '&::after':
                language === 'tr'
                  ? {
                      content: '"•"',
                      position: 'absolute',
                      bottom: '-15px',
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
              fontSize: '14px',
              color: language === 'en' ? 'black' : 'gray',
              position: 'relative',
              '&::after':
                language === 'en'
                  ? {
                      content: '"•"',
                      position: 'absolute',
                      bottom: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }
                  : {},
            }}
          >
            EN
          </Typography>
        </Box>

        <IconButton
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={toggleMenu}
        >
          <MenuIcon sx={{ fontSize: 32, color: 'black' }} />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={toggleMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            backgroundColor: 'white',
            padding: 2,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="NEZYR Logo"
              width={100}
              height={50}
              priority
            />
          </Link>
          <IconButton onClick={toggleMenu}>
            <CloseIcon sx={{ fontSize: 32, color: 'black' }} />
          </IconButton>
        </Box>

        <List sx={{ pl: 2, mt: 3 }}>
          <ListItem component="a" href="/kurumsal">
            <ListItemText primary={t('corporate')} />
          </ListItem>
          <ListItem component="a" href="/sanat">
            <ListItemText primary={t('art')} />
          </ListItem>
          <ListItem component="a" href="/moda">
            <ListItemText primary={t('fashion')} />
          </ListItem>
        </List>

        <Box
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            textAlign: 'start',
            pb: 2,
          }}
        >
          <Box sx={{ width: '100%', borderBottom: '1px solid gray', mb: 2 }} />
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography
              onClick={() => changeLanguage('tr')}
              sx={{
                ml: 2,
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
                ml: 2,
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
        </Box>
      </Drawer>
    </AppBar>
  );
}
