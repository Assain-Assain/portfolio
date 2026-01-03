import { projects } from '../data/projects';
import { useI18n } from '../i18n/i18n';

export default function FeaturedProjects() {
  const { t } = useI18n();
  const featured = projects.filter(p => p.featured);

  return (
    <section aria-labelledby="featured-title">
      <h2 id="featured-title">{t('projects.featured')}</h2>
      <div className="cards">
        {featured.map(p => (
          <article key={p.slug} className="card"  style={{
              backgroundImage: `url(${p.img})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
            
           <h3>{t(p.name)}</h3>
            <p>{t(p.summary)}</p>
            <a className="btn" href={`/projects/${p.slug}`}>{t('projects.viewDetails')}</a> 
            
          </article>
        ))}
      </div>
    </section>
  );
}