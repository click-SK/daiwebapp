import React from 'react';
import './../style/aboutUs.scss'
import logo from './../img/logo_main.svg'
import imageAbout from './../img/image_about.svg'
import arrowForward from './../img/icons/icon_arrow-forward.svg'




const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className="about_wrap">
                <div className="about_info">
                    <div className="about_info_text">
                        <button className="btn_slider">Про нас</button>
                        <div className="about_info_title">Знайомтесь, це <span>D.A.I.Wo</span> – ваш <br /> персональниий цифровий <br /> працівник зі <span>штучним інтелектом.</span> </div>
                        <div className="about_info_subtitle">Він працює 24/7/365, ніколи не втомлюється і <br /> допомагає заробляти гроші на інвестуванні. <br /> Платформа для токенізації бізнесів, бізнес-процесів, <br /> будь-яких фінансових послуг, активів і пасивів.</div>
                    </div>
                    <div className="about_info_pictures">
                        <img className='logo' src={logo} alt="logo" />
                        <img className='img_about' src={imageAbout} alt="image" />
                    </div>
                </div>
            </div>
            <div className="about_popup_wrapper">
                <div className="popup_cards">
                    <div className="popup_cards_one"></div>
                    <div className="popup_cards_dublicate">
                        <div className="popup_cards_dublicate_sub">
                        За<span> ефективністю </span> D.A.I.Wo нічим <br /> не поступається банкам, біржам <br />та інвестиційним фондам.
                        </div>
                    </div>
                </div>
                <div className="popup_cards">
                    <div className="popup_cards_one"></div>
                    <div className="popup_cards_dublicate">
                        <div className="popup_cards_dublicate_sub">
                        D.A.I.Wo створений для того, щоб<br /> <span>вирішити</span> фінансову проблему<br /> кожного жителя планети
                        </div>
                    </div>
                </div>
                <div className="popup_cards">
                    <div className="popup_cards_one"></div>
                    <div className="popup_cards_dublicate">
                        <div className="popup_cards_dublicate_sub">
                        D.A.I.Wo – це платформа, де<br /> <span>штучний інтелект</span> самостійно<br /> інвестує та розподіляє кошти.
                        </div>
                    </div>
                </div>
            </div>
            <div className="know_more">
                <a className='btn_know_more' href="#">Дізнатись більше</a>
                <img src={arrowForward} alt="" />
            </div>
            
        </div>
        
    );
};

export default AboutUs;