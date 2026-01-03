import { skills } from '../data/skills';
import { useI18n } from '../i18n/i18n';
// import './SkillsGrid.css'; // <-- uncomment this

export default function SkillsGrid() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="skills-title" className="skills-section">
      <h2 id="skills-title">{t('skills.title')}</h2>
      <ul className="grid">
        {skills.map(s => (
          <li
            key={s.name}
            className="tile"
            style={{
              backgroundImage: `url(${s.img})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <div className="overlay">
              <strong className="title">{s.name}</strong>
              <p className="detail">{s.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}