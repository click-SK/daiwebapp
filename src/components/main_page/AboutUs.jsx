import React from 'react';
import '../../style/aboutUs.scss'
import PopUp from './PopUp';



const AboutUs = () => {
    return (
        <div className='about_us'>
            <div className="about_wrap">
                <div className="about_info">
                    <div className="about_info_text">
                        <button className="btn_slider">Про нас</button>
                        <div className="about_info_title">Знайомтесь, це <span>D.A.I.Wo</span> – ваш персональниий цифровий працівник зі <span>штучним інтелектом.</span> </div>
                        <div className="about_info_subtitle">Він працює 24/7/365, ніколи не втомлюється і допомагає заробляти гроші на інвестуванні. <p className='adaptive_text'>Платформа для токенізації бізнесів, бізнес-процесів, будь-яких фінансових послуг, активів і пасивів.</p></div>
                    </div>
                    <div className="about_info_pictures">
                        <img className='img_about' src='/img/aboutus_image.png' alt="image" />
                        <img className='logo' src='/img/logo_main.svg' alt="logo" />

                    </div>
                </div>
            </div>
            <PopUp/>
            <div className="know_more">
                <button className='btn_know_more'>Дізнатись більше</button>
                <img src='/icons/icon_arrow-forward.svg'alt="" />
            </div>
            
        </div>
        
    );
};

export default AboutUs;