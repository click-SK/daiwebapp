import React, { useState, useEffect } from 'react';
import '../../style/popUp.scss';

const PopUp = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Зміна слайду кожні 3 секунди
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
    }, 3000);

    return () => {
      // Очищення інтервалу при розмонтовці компонента
      clearInterval(interval);
    };
  }, []);


  return (
    <div>
      <div className="about_popup_wrapper">
        <div className={`popup_cards ${currentSlide === 1 ? "active" : ""}`}>
          <div className="popup_cards_one"></div>
          <div className="popup_cards_dublicate">
            <div className="popup_cards_dublicate_sub">
              За<span> ефективністю </span> D.A.I.Wo нічим не поступається
              банкам, біржам та інвестиційним фондам.
            </div>
          </div>
        </div>
        <div className={`popup_cards ${currentSlide === 2 ? "active" : ""}`}>
          <div className="popup_cards_one"></div>
          <div className="popup_cards_dublicate">
            <div className="popup_cards_dublicate_sub">
              D.A.I.Wo створений для того, щоб <span>вирішити</span> фінансову
              проблему кожного жителя планети
            </div>
          </div>
        </div>
        <div className={`popup_cards ${currentSlide === 3 ? "active" : ""}`}>
          <div className="popup_cards_one"></div>
          <div className="popup_cards_dublicate">
            <div className="popup_cards_dublicate_sub">
              D.A.I.Wo – це платформа, де <span>штучний інтелект</span>{" "}
              самостійно інвестує та розподіляє кошти.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
