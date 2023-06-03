import React, { useState, useEffect } from "react";
import "../../style/popUp.scss";
import Slide from "../slide/Slide.js";

const PopUp = () => {



  return (
    <div>
      <div className="slide_amalog">
        <div className="about_popup_wrapper">
          <div className={`popup_cards`}>
            <div className="popup_cards_one"></div>
            <div className="popup_cards_dublicate">
              <div className="popup_cards_dublicate_sub">
                За<span> ефективністю </span> D.A.I.Wo нічим не поступається
                банкам, біржам та інвестиційним фондам.
              </div>
            </div>
          </div>
          <div className={`popup_cards `}>
            <div className="popup_cards_one"></div>
            <div className="popup_cards_dublicate">
              <div className="popup_cards_dublicate_sub">
                D.A.I.Wo створений для того, щоб <span>вирішити</span> фінансову
                проблему кожного жителя планети
              </div>
            </div>
          </div>
          <div className={`popup_cards`}>
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
      <div className='slider_wraper_aboutus'>
          <Slide/>
      </div>
    </div>
  );
};

export default PopUp;
