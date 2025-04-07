import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="hero__container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="hero__container__top">
            <div className="hero__container__left">
              <h2>{t("hero.title1")}</h2>
              <p>{t("hero.text1")}</p>
              <button className="hero__button">{t("hero.button")}</button>
            </div>
            <div className="hero__container__right">
              <img src="/images/hero1.webp" alt="hero" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="hero__container__bottom">
            <div className="hero__container__bottom__left">
              <img src="/images/hero2.webp" alt="hero" />
            </div>
            <div className="hero__container__bottom__right">
              <h2>{t("hero.title2")}</h2>
              <p>{t("hero.text2")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
