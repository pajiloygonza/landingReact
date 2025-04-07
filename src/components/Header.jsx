import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления меню

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключение состояния
  };

  return (
    <header className="header slide-in-top">
      <div className="header__fit">
        <div className="header__fit__logo">
          <Link to="/">{t("header.logo")}</Link>
        </div>
        <div className="buttons__lang">
          <button
            className="btn-lang"
            onClick={() => i18n.changeLanguage("pl")}
          >
            PL
          </button>
          <button
            className="btn-lang"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
          <button
            className="btn-lang"
            onClick={() => i18n.changeLanguage("ru")}
          >
            RU
          </button>
        </div>
        <nav className="header__fit__nav">
          <a href="#mail">{t("header.functions")}</a>
          <a href="#reviews">{t("header.benefits")}</a>
          <a href="#feature">{t("header.pricing")}</a>
          <a href="#footer">{t("header.contacts")}</a>
          <Link to="/faq">{t("header.faq")}</Link>
        </nav>
        <div className="burger__menu" onClick={toggleMenu}>
          <div className="burger__menu__line"></div>
          <div className="burger__menu__line"></div>
          <div className="burger__menu__line"></div>
        </div>
      </div>
      {/* Блок меню, который выезжает с левой стороны */}
      <div className={`burger-menu-block ${isMenuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={toggleMenu}>
          <div className="close-menu__line"></div>
          <div className="close-menu__line"></div>
        </button>
        <nav className="burger-menu__nav1">
          <a href="#mail" onClick={toggleMenu}>
            {t("header.functions")}
          </a>
          <a href="#reviews" onClick={toggleMenu}>
            {t("header.benefits")}
          </a>
          <a href="#feature" onClick={toggleMenu}>
            {t("header.pricing")}
          </a>
          <a href="#footer" onClick={toggleMenu}>
            {t("header.contacts")}
          </a>
          <Link to="/faq" onClick={toggleMenu}>
            {t("header.faq")}
          </Link>
        </nav>
        <nav className="burger-menu__nav2">
          <button
            className="btn-lang"
            onClick={() => i18n.changeLanguage("pl")}
          >
            PL
          </button>
          <button
            className="btn-lang"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
          <button
            className="btn-lang"
            onClick={() => i18n.changeLanguage("ru")}
          >
            RU
          </button>
        </nav>
      </div>
    </header>
  );
}
