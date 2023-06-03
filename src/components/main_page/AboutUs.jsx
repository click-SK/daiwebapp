import React from 'react';
import '../../style/aboutUs.scss'
import PopUp from './PopUp';
import Slide from '../slide/Slide.js'
import { Link, useNavigate } from 'react-router-dom';



const AboutUs = () => {
    const navigate = useNavigate();

    const handleKnowMoreClick = () => {
      navigate('/about-us');
      window.scrollTo(0, 0); // Прокрутка сторінки вгору
    };
    return (
        <div className='about_us'>
            <div className="about_wrap">
                <div className="about_info">
                        <button className="btn_slider">Про нас</button>
                        <div className="about_info_title">Знайомтесь, це <span>D.A.I.Wo</span> – ваш персональниий цифровий працівник зі <span>штучним інтелектом.</span> </div>
                    <div className="about_info_text">
                        <div className="about_info_subtitle">Він працює 24/7/365, ніколи не втомлюється і допомагає заробляти гроші на інвестуванні. <p className='adaptive_text'>Платформа для токенізації бізнесів, бізнес-процесів, будь-яких фінансових послуг, активів і пасивів.</p></div>
                    <div className="about_info_pictures">
                        <img className='img_about' src='/img/aboutus_image.png' alt="image" />
                        <div className='logo'>
                            <img className='logo_img' src='/img/logo_vertical.svg' alt="logo" />
                            <img className='logo_img2' src='/img/background_animation2.svg' alt="logo" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <PopUp/>
            <div className="know_more">
            <button className="btn_know_more" onClick={handleKnowMoreClick}>
      <p>Дізнатись більше</p>
    </button>
                <img src='/icons/icon_arrow-forward.svg'alt="" />
            </div>
            
        </div>
        
    );
};

export default AboutUs;