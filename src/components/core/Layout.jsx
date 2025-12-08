import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  return (
    <div className="app-root">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex="-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
