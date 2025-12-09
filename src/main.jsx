import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import { HelmetProvider } from 'react-helmet-async';
import AppThemeProvider from './components/core/AppThemeProvider.jsx';
import Layout from './components/core/Layout.jsx';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import NotFound from './pages/NotFound.jsx';
import CaseStudyRoute from './components/case-study/CaseStudyRoute.jsx';
import ResumePage from './pages/ResumePage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<CaseStudyRoute />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
