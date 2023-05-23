import React from 'react';
import '../../style/mainPage.scss'
import AboutUs from '../main_page/AboutUs';
import Service from '../main_page/Service';
import AnimWave from '../wave/AnimWave';
import FAQ from '../main_page/FAQ';
import Contacts from '../main_page/Contacts';


const MainPage = () => {
    return (
        <div className='MainPage'>
            <div className="container">
                <div className='background'>
                    <AnimWave/>
                </div>
                <div className="main_wrap">
                    <div className="main_text">
                        <div className="main_title">

                        <span>Почни створювати</span>свою<br/>фінансову незалежність <br/> 
                        <span>вже сьогодні</span>
                        </div>
                        <div className="main_subtitle">
                        Так-так, не зі 100$, 10$ чи 1$ – а з 1 центу! <br />
                        Це найдешевший вхід в інвестиції в світі.
                        </div>
                        <div className="main_btn">
                            <button className='main_btn_one'>Почати</button>
                            <button className='main_btn_two'>Дізнатись більше</button>
                        </div>
                        <div className="email">
                        <img src='/icons/icon_email.svg' alt="email" />
                        <p>info@daiwo.ai</p>  
                        </div>
                    </div>
                    <div className="main_card">
                        <div className="card_rate">
                        <div className="duplicat_rate">
                            <div className="card_title">Rate:</div>
                            <div className="card_item_one">
                                <img src='/img/rate_item.svg' alt="Item" />
                            </div>
                        </div>
                        </div>
                        
                        <div className="card_air">
                        <div className="air_duplicat">
                            <div className="card_title">Air:</div>
                            <div className="card_item_two">
                                <img src='/img/air_item.svg' alt="Item" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <AboutUs/>
                <Service/>
                <FAQ/>
                <Contacts/>
            </div>
        </div>
    );
};

export default MainPage;