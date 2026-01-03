import React from 'react'
import { useI18n } from '../i18n/i18n'

const About = () => {
  const {t} =useI18n();
  return (
    <section>
        <div>
            <h2>{t("about.aboutme")}</h2>
            <p className='lead'>{t("about.aboutme_dis")}
</p>
        </div>
    </section>
  )
}

export default About