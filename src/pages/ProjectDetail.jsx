import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useI18n } from '../i18n/i18n';
import HomeContactus from './HomeContactus';
import AnimatedSection from '../components/AnimatedSection'; // ✅ import wrapper

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const { t } = useI18n();

  if (!project) {
    return (
      <AnimatedSection>
        <section>
          <p>{t('projects.notFound')}</p>
          <Link className="btn" to="/projects">{t('projects.back')}</Link>
        </section>
      </AnimatedSection>
    );
  }

  return (
    <>
      <AnimatedSection>
        <article
          className="pr_detail"
          style={{
            backgroundImage: `url(${project.img})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <h2 id="proj-title">{t(project.name)}</h2>
          <p className="lead">{t(project.summary)}</p>

          <section>
            <section>
              <h3>{t('projects.repo')}</h3>
              <p>{t(project.solution)}</p>
            </section>

            <h3>{t('projects.live')}</h3>
            <a href="https://rococo-sopapillas-8937da.netlify.app/">
              <p>{t(project.problem)}</p>
            </a>
          </section>

          <section>
            <h3>{t('projects.highlights')}</h3>
            <ul>
              {(t(project.highlightsKey, { returnObjects: true }) || []).map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </section>

          <div className="actions">
            {project.demo && (
              <a className="btn primary" href={project.demo} target="_blank" rel="noreferrer">
                {t('projects.liveDemo')}
              </a>
            )}
            {project.repo && (
              <a className="btn secondary" href={project.repo} target="_blank" rel="noreferrer">
                {t("homecontact.github")}
              </a>
            )}
            <Link className="btn secondary" to="/projects">{t('projects.back')}</Link>
          </div>
        </article>
      </AnimatedSection>

      <AnimatedSection>
        <HomeContactus />
      </AnimatedSection>
    </>
  );
}