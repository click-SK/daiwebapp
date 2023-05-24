import React from 'react';
import '../../style/aboutUs.scss'



const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className="about_wrap">
                <div className="about_info">
                    <div className="about_info_text">
                        <button className="btn_slider">Про нас</button>
                        <div className="about_info_title">Знайомтесь, це <span>D.A.I.Wo</span> – ваш персональниий цифровий працівник зі <span>штучним інтелектом.</span> </div>
                        <div className="about_info_subtitle">Він працює 24/7/365, ніколи не втомлюється і допомагає заробляти гроші на інвестуванні. Платформа для токенізації бізнесів, бізнес-процесів, будь-яких фінансових послуг, активів і пасивів.</div>
                    </div>
                    <div className="about_info_pictures">
                        <img className='logo' src='/img/logo_main.svg' alt="logo" />
                        <img className='img_about' src='/img/aboutus_image.png' alt="image" />
                    </div>
                </div>
            </div>
            <div className="about_popup_wrapper">
                <div className="popup_cards">
                    <div className="popup_cards_one"></div>
                    <div className="popup_cards_dublicate">
                        <div className="popup_cards_dublicate_sub">
                        За<span> ефективністю </span> D.A.I.Wo нічим не поступається банкам, біржам
                        та інвестиційним фондам.
                        </div>
                    </div>
                </div>
                <div className="popup_cards">
                    <div className="popup_cards_one"></div>
                    <div className="popup_cards_dublicate">
                        <div className="popup_cards_dublicate_sub">
                        D.A.I.Wo створений для того, щоб <span>вирішити</span> фінансову проблему кожного жителя планети
                        </div>
                    </div>
                </div>
                <div className="popup_cards">
                    <div className="popup_cards_one"></div>
                    <div className="popup_cards_dublicate">
                        <div className="popup_cards_dublicate_sub">
                        D.A.I.Wo – це платформа, де <span>штучний інтелект</span> самостійно інвестує та розподіляє кошти.
                        </div>
                    </div>
                </div>
            </div>
            <div className="know_more">
                <button className='btn_know_more'>Дізнатись більше</button>
                <img src='/icons/icon_arrow-forward.svg'alt="" />
            </div>
            
        </div>
        
    );
};

export default AboutUs;