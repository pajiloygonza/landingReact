import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className="cta">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="cta__container">
          <h1>{t("cta.title")}</h1>
          <p>{t("cta.text")}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
