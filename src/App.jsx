import { lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Eager-load homepage for fastest FCP
import HomePage from './pages/HomePage';

// Lazy-load all other pages for code splitting
const AgentsPage = lazy(() => import('./pages/AgentsPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const PlatformPage = lazy(() => import('./pages/PlatformPage'));
const UseCasesPage = lazy(() => import('./pages/UseCasesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const DemoPage = lazy(() => import('./pages/DemoPage'));
const CompanyPage = lazy(() => import('./pages/CompanyPage'));
const SpecialtyPage = lazy(() => import('./pages/SpecialtyPage'));
const OutcomePage = lazy(() => import('./pages/OutcomePage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const WhatWeCanDoPage = lazy(() => import('./pages/WhatWeCanDoPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const LogoPreview = lazy(() => import('./pages/LogoPreview'));

const Loading = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <CircularProgress sx={{ color: '#097C87' }} />
  </Box>
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Box sx={{ minHeight: '100vh', background: '#FFFFFF' }}>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/agents" element={<AgentsPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/platform" element={<PlatformPage />} />
              <Route path="/use-cases" element={<UseCasesPage />} />
              <Route path="/use-cases/:slug" element={<SpecialtyPage />} />
              <Route path="/outcomes/:slug" element={<OutcomePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/what-we-can-do" element={<WhatWeCanDoPage />} />
              <Route path="/logo-preview" element={<LogoPreview />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
