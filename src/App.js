import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { useI18n } from './i18n/i18n';
import { useTheme } from './theme/useTheme';

export default function App() {
  const { lang } = useI18n();
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = theme;
  }, [lang, theme]);

  return (
    <>
      <Header />
      <main id="main" role="main" className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}