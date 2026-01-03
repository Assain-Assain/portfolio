import React from 'react'
import './homecontact.css'
import { useI18n } from '../i18n/i18n'

const HomeContactus = () => {
    const {t} =useI18n();
  return (
     <section id="contact" className="contact-small">
      <h2>{t("homecontact.con_me")}</h2>
      <p>{t("homecontact.con_me_dis")}</p>

      <div className="contact-links">
        <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hassainhassain780@gmail.com" 
  target="_blank" 
  rel="noreferrer" 
  className="btn primary"
>
  {t("homecontact.email")}
</a>
        <a href="https://github.com/Assain-Assain" target="_blank" rel="noreferrer" className="btn secondary">{t("homecontact.github")}</a>
        <a href="https://linkedin.com/in/assain" target="_blank" rel="noreferrer" className="btn secondary">{t("homecontact.linkdin")}</a>
      </div>
    </section>

  )
}

export default HomeContactus