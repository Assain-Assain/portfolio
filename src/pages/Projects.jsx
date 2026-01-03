import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useI18n } from '../i18n/i18n';
import HomeContactus from './HomeContactus';

export default function Projects() {
  const { t } = useI18n();

  return (
    <>
    <section aria-labelledby="projects-title">
      <h2 id="projects-title">{t('projects.title')}</h2>
      <ul className="cards">
        {projects.map(p => (
          <li key={p.slug} className="card"  style={{
              backgroundImage: `url(${p.img})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
            <div className="card-body">
              <h3>{t(p.name)}</h3>
              <p>{t(p.summary)}</p>
              <div className="actions">
                <Link className="btn" to={`/projects/${p.slug}`}>{t('projects.viewDetails')}</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
    <HomeContactus/>
    </>
  );
}