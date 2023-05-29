import React from 'react';
import '../../style/mainPage.scss'
import AboutUs from '../main_page/AboutUs';
import Service from '../main_page/Service';
import AnimWave from '../wave/AnimWave';
import FAQ from '../main_page/FAQ';
import Contacts from '../main_page/Contacts';
import Slide from '../slideMainPage1/Slide';



const MainPage = () => {

    const arrNumb = new Array(27).fill(1);

    return (
        <div className='main_page'>
            <div className="container">
                {/* <div className='background'>
                    <AnimWave/>
                </div> */}
                <div className="main_page_background">
                    <div className="main_spotlight_one"></div>
                    <div className="main_spotlight_two"></div>
                    <div className="main_spotlight_three"></div>
                    {/* <div className="main_big_animation">
                        <img src="./img/main_big_bg-anim.svg" alt="animation" />
                    </div> */}
                    <div className="main_small_animation">
                        <img src="./img/main_small_bg-anim.svg" alt="animation" />
                    </div>
                </div>
                <div className="main_wrap">
                    <div className="main_text">
                        <div className="main_title">
                        <span>Почни створювати</span> свою фінансову незалежність <span>вже сьогодні</span>
                        </div>
                        <div className="main_subtitle">
                        Так-так, не зі 100$, 10$ чи 1$ – а з 1 центу! 
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
                        <div className="cart_item card_rate">
                        <div className="duplicat_rate">
                            <div className="card_title">Rate:</div>
                            <div className="card_item_one">
                            <ul className='rate_list'>
                                {arrNumb.map((item, idx) => (
                                    <li className='rate_list_item' key={idx}>
                                    {item}
                                    {idx === 14 && <span>,</span>}
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        </div>
                        
                        <div className="cart_item card_air">
                        <div className="air_duplicat">
                            <div className="card_title">Air:</div>
                            <div className="card_item_two">
                                <img src='/img/air_item.svg' alt="Item" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='first_slide'>
                        <Slide/>
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