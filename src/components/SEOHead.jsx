import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteMeta } from '../content/siteMeta.js';

export default function SEOHead({ title, description, ogImage, url }) {
  const pageTitle = title ? `${title}` : siteMeta.title;
  const pageDescription = description || siteMeta.description;
  const canonicalUrl = url || siteMeta.url;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={siteMeta.siteName} />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
    </Helmet>
  );
}
