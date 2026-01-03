import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contactus.css";
import HomeContactus from "./HomeContactus";
import { useI18n } from "../i18n/i18n";

export default function ContactUs() {
  const {t} =useI18n();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sxbbsth",     // Step 2: Service ID
      "template_uk3v8ix",  // Step 3: Template ID
      form.current,
      "Cb1p_hK7CStebSlpP"   // Step 4: Public Key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message: " + error.text);
      }
    );
  };

  return (
    <>
    <section id="contact" className="contact">
      <h2>{t("homecontact.con_me")}</h2>
      <p>{t("homecontact.dis")}</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label>{t("homecontact.name")}</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>{t("homecontact.email")}</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>{t("homecontact.messege")}</label>
          <textarea name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="btn primary">{t("homecontact.s_messege")}</button>
      </form>
    </section>
    <HomeContactus/>
    </>
  );
}