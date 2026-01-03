import { NavLink } from 'react-router-dom';
import { useI18n } from '../i18n/i18n';
import { useTheme } from '../theme/useTheme';

export default function Header() {
  const { t, lang, setLang, languages } = useI18n();
  const { toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="brand">
        <NavLink to="/" className="logo">{t('siteName')}</NavLink>
        {/* <span className="tagline">{t('tagline')}</span> */}
      </div>
      
      <nav aria-label={t('primaryNav')}>
        <ul className="nav">
          <li><NavLink to="/" end>{t('nav.home')}</NavLink></li>
          <li><NavLink to="/projects">{t('nav.projects')}</NavLink></li>
          <li><NavLink to="/resume">{t('nav.resume')}</NavLink></li>
          <li><NavLink to="/contact">{t('nav.contact')}</NavLink></li>
        </ul>
        
      </nav>
      <div className="controls">
        <select value={lang} onChange={e => setLang(e.target.value)}>
          {languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
        </select>
        <button className="btn" onClick={toggleTheme}>{t('toggleTheme')}</button>
      </div>
    </header>
  );
}