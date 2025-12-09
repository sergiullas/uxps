import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { siteMeta } from '../../content/siteMeta.js';

export default function Layout({ children }) {
  return (
    <div className="app-root">
      <Helmet defaultTitle={siteMeta.title}>
        <meta name="description" content={siteMeta.description} />
        <meta name="author" content={siteMeta.author} />
        <link rel="canonical" href={siteMeta.url} />
        <meta property="og:title" content={siteMeta.title} />
        <meta property="og:description" content={siteMeta.description} />
        <meta property="og:url" content={siteMeta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteMeta.siteName} />
      </Helmet>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <Box
        component="main"
        id="main-content"
        tabIndex={-1}
        role="main"
        sx={{
          pt: { xs: '64px', sm: '72px' },
        }}
      >
        {children}
      </Box>
      <Footer />
    </div>
  );
}
