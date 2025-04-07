import React, { useState } from "react";
import "../index.css";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Массив с ключами (а не с прямыми текстами)
  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9"];

  return (
    <div className="faq">
      <div className="faq__container">
        <h1 className="faq__title">{t("faq.title")}</h1>

        {faqKeys.map((key, index) => (
          <div
            key={index}
            className={`faq__item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq__question"
              onClick={() => toggleAccordion(index)}
            >
              {t(`faq.items.${key}.question`)}
              <span className="faq__icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq__answer">{t(`faq.items.${key}.answer`)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
