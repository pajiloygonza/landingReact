import React from "react";
import "../index.css";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const Mail = () => {
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2170jfj", 
        "template_dgiozlh", 
        e.target,
        "331-LAj0HseSGiu4l" 
      )
      .then(() => {
        alert(t("success"));
      })
      .catch(() => {
        alert(t("error"));
      });

    e.target.reset();
  };

  return (
    <div className="mail">
      <div className="mail__container">
        <form className="feedback__form" onSubmit={handleSubmit}>
          <h2>{t("mail.title")}</h2>
          <input
            type="text"
            placeholder={t("mail.name")}
            name="name"
            required
          />
          <input
            type="email"
            placeholder={t("mail.email")}
            name="email"
            required
          />
          <input
            type="number"
            placeholder={t("mail.age")}
            name="age"
            min="10"
            max="100"
          />
          <div className="mail__selects__container">
            <select className="mail__select" name="gender">
              <option value="">{t("mail.gender.select")}</option>
              <option value="male">{t("mail.gender.male")}</option>
              <option value="female">{t("mail.gender.female")}</option>
              <option value="other">{t("mail.gender.other")}</option>
            </select>
            <select className="mail__select" name="goal">
              <option value="">{t("mail.goal.select")}</option>
              <option value="lose">{t("mail.goal.lose")}</option>
              <option value="gain">{t("mail.goal.gain")}</option>
              <option value="maintain">{t("mail.goal.maintain")}</option>
            </select>
          </div>
          <input
            type="text"
            name="contact_time"
            placeholder={t("mail.contactTime")}
          />
          <textarea
            className="mail__textarea"
            name="message"
            placeholder={t("mail.message")}
            required
          />
          <button className="feedback__form__btn" type="submit">
            {t("mail.send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
