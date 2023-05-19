import React from 'react';
import './../style/mainPage.scss'
import icoEmail from './../img/icons/icon_email.svg'
import rateItem from './../img/rate_item.svg'
import airItem from './../img/air_item.svg'
import AboutUs from './AboutUs';
import Service from './Service';


const MainPage = () => {
    return (
        <div className='MainPage'>
            <div className="container">
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
                        <img src={icoEmail} alt="email" />
                        <p>info@daiwo.ai</p>  
                        </div>
                    </div>
                    <div className="main_card">
                        <div className="card_one">
                        <div className="card_duplicat">
                            <div className="card_title">Rate:</div>
                            <div className="card_item_one">
                                <img src={rateItem} alt="Item" />
                            </div>
                        </div>
                        </div>
                        <div className="card_one">
                        <div className="card_duplicat">
                            <div className="card_title">Air:</div>
                            <div className="card_item_two">
                                <img src={airItem} alt="Item" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <AboutUs/>
                <Service/>
            </div>
        </div>
    );
};

export default MainPage;