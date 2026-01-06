import { useI18n } from '../i18n/i18n';
import HomeContactus from './HomeContactus';

export default function Resume() {
  const { t } = useI18n();

  return (
    <>
    <section className="resume">
   <div className='name'>   <h1>{t('resume.title')}</h1>
      <h2>{t('resume.intro')}</h2></div>

      <div className="resume-grid">
        {/* Left column */}
        <div className="resume-left">
          <h3>{t('resume.summary')}</h3>
          <p>{t('resume.summary_dis')}</p>
 <h3>{t('resume.certification')}</h3>
          <strong>{t('resume.frontend_dev')}</strong>
          <p>
            {t("resume.frontend_dev_dis")}
          </p>
<div>
        <h3>{t("resume.projects")}</h3>
        <strong>{t("resume.e_commerce")}</strong>
        <ul>
          <li>{t("resume.e_commerce_dis1")}</li>
          <li>{t("resume.e_commerce_dis2")}</li>
        </ul>
        <strong>{t("resume.link")}</strong><br/>
        <a href='https://shopperstyles.netlify.app/'>https://shopperstyles.netlify.app/</a>
        <br/><br/>
        <strong>{t("resume.netflix")}</strong>
        <ul>
          <li>{t("resume.netflix_dis1")}</li>
          <li>{t("resume.netflix_dis2")}</li>
          <li>{t("resume.netflix_dis3")}</li>
        </ul>
        <strong>{t("resume.link")}</strong><br/>
        <a href='https://rococo-sopapillas-8937da.netlify.app/'>https://rococo-sopapillas-8937da.netlify.app/</a>
        </div>
<div><br/>
  <h3>{t("resume.tools")}</h3>
  <ul>
    <li>{t("resume.vs_code")}</li>
    <li>{t("resume.git")}</li>
  </ul>

</div>

        
        </div>
 
        {/* Right column */}
        <div className="resume-right">
          <div>
            <h3>{t("resume.strengths")}</h3>
            <ul>
              <li><strong>{t("resume.ft_strengths")}</strong></li>
              <p>{t("resume.component_arc")} </p>
              <li><strong>{t("resume.rp_design")}</strong></li>
              <p>{t("resume.mobile_first")} </p>
              <li><strong>{t("resume.debug_opt")}</strong></li>
              <p>{t("resume.console_track")}</p>
            </ul>
          </div>
          <h3>{t('resume.education')}</h3>
          <ul>
            <li>
              <strong>{t("resume.college")}</strong>
              <p>{t('resume.eduDetail')}</p>
              <p>{t('resume.eduDetail_date')}</p>
            </li>
            <li>
              <strong>{t("resume.school")}</strong>
              <p>{t('resume.schoolDetail')}</p>
              <p>{t('resume.school_date')}</p>
            </li>
          </ul>
        <div className='skills'>  <h3>{t("resume.skills")}</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVA SCRIPT</li>
        </ul>
         <div className='skills'><ul> <li>BOOTSTRSAP</li>
          <li>REACT JS</li></ul></div>
         <div className='skills'><ul> <li>Responsive design</li>
          <li>State Management</li></ul>
          </div>

        </div>
         
           <div className='skills'>  <h3>{t("resume.lang")}</h3>
        <ul>
          <li>{t("resume.ta")}</li>
          <li>{t("resume.eng")}</li>
          <li>{t("resume.hind")}</li>
          <li>{t("resume.urdu")}</li>
        </ul>
        </div>
         <div className='skills'>  <h3>{t("resume.k_skills")}</h3>
        <ul>
          <li>{t("resume.c_code")}</li>
          <li>{t("resume.Collaboration")}</li>
          <li>{t("resume.Adaptability")} </li>
        </ul>
         <div className='skills'><ul> <li>{t("resume.p_solve")}</li>
          <li>{t("resume.c_skills")}</li></ul>
          </div>
         <div className='skills'><ul> <li>{t("resume.error")}</li>
          </ul>
          </div>

        </div>
        
        </div>
        
      </div>
      <div className='download-block'>
          <h3>{t('resume.download')}</h3>
<br />
<a
  className="btn primary"
  href={process.env.PUBLIC_URL + "/Assain-resume.pdf"}
  download="Assain-Resume.pdf"
>
  {t('resume.downloadCta')}
</a></div>
    </section>
    <HomeContactus/>
    </>
  );
}