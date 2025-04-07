import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  return (
    <div className="features">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="features__container">
          <section className="features__section">
            <h1>🥗</h1>
            <h3>{t("features.title1")}</h3>
            <p>{t("features.text1")}</p>
          </section>
          <section className="features__section">
            <h1>💪</h1>
            <h3>{t("features.title2")}</h3>
            <p>{t("features.text2")}</p>
          </section>
          <section className="features__section">
            <h1>📈</h1>
            <h3>{t("features.title3")}</h3>
            <p>{t("features.text3")}</p>
          </section>
          <section className="features__section">
            <h1>⏰</h1>
            <h3>{t("features.title4")}</h3>
            <p>{t("features.text4")}</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
