import React, { useEffect, useState } from "react";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

// Импорт всех языковых файлов
import reviewsRU from "../data/data-ru.json";
import reviewsEN from "../data/data-en.json";
import reviewsPL from "../data/data-pl.json";

const Reviews = () => {
  const { i18n, t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1090); // Проверка ширины экрана

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1090); // Обновление состояния при изменении ширины экрана
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Выбор данных по языку
  const getLocalizedReviews = () => {
    switch (i18n.language) {
      case "en":
        return reviewsEN;
      case "pl":
        return reviewsPL;
      case "ru":
      default:
        return reviewsRU;
    }
  };

  const reviews = getLocalizedReviews();

  return (
    <div className="reviews">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="reviews__container">
          <Swiper
            autoHeight={true}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1} // По умолчанию 1 слайд
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="swiper__container">
                  <div className="swiper__photo-and-name">
                    <img className="swiper-img" src={review.img} alt="image" />
                    <div className="block-name">
                      <h3 className="text-lg font-semibold">{review.name}</h3>
                    </div>
                    <p className="swiper__city">
                      {review.city || t("reviews.no_city")}
                    </p>
                  </div>
                  <p className="swiper__text">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default Reviews;
