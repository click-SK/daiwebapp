import React from 'react';
import '../../style/aboutUsPage.scss'
import AnimWave from '../wave/AnimWave';


const AboutUsPage = () => {
    return ( 
        <div className='about_us_page'>
            <div className="container">
                 <div className='background'>
                    <AnimWave/>
                </div>
                <div className="about_background">
                    <div className="about_spotlight_one"></div>
                    <div className="about_spotlight_two"></div>
                    <div className="about_spotlight_three"></div>
                    <div className="about_small_animation">
                        <img src='/img/small_anim.svg' alt="anim" />
                    </div>
                    <div className="about_img_down">
                        <img src='/img/About_img.png' alt="img" />
                    </div>
                </div>
                <div className="main_info">
                    <div className="title">Хто сказав, що <span>інвестування</span>  це складно?</div>
                    <div className="description"><span>D.A.I.Wo </span> – це платформа, де користувачу не потрібні глибокі знання у фінансуванні, макроекономіці та інвестиціях. Ви купуєте токени, а штучний інтелект самостійно інвестує та розподіляє кошти.</div>
                    <button className="btn_start">Почати</button>
                </div>
                <div className="extra__info_container">
                    <div className="extra_info_text">
                        <div className="extra_info_text_ttitle">Для кого створений <span>D.A.I.Wo?</span></div>
                        <div className="extra_info_text_subtitle"><p>Саме для вас. Так, без перебільшення, платформа розроблялась для людей, які цікавляться інвестуванням.</p>
                        <p>Це можуть бути новачки та профі зі значними кейсами. <span>Інвестувати може кожен!</span></p> <p>На даному етапі йде пошук інвестицій для масштабування проекту та виведення його на глобальний рівень.</p>
                        <p>Тому, якщо ви чекали на знак для початку інвестування – ось він. Більше безпечного входу в інвестування ще не існувало.</p>
                        </div>
                    </div>
                    <div className="extra__info_picture">
                        <img src='/img/aboutus_image.png' alt="about us" />
                    </div>
                </div>
                <div className="about_section">
                    <div className="about_section_small">
                        <div className="first_section_small"><span>D.A.I.Wo</span> вирішує проблему бідності.
                        </div>
                        <div className="second_section_small">Прозорість забезпечена <span>
                        смарт-конктрактами</span>
                        </div>
                   </div>
                   <div className="about_section_big">
                        <div className="first_section_big"><span>Штучний інтелект</span> самостійно інвестує та розподіляє кошти.
                        </div>
                        <div className="second_section_big">Дає змогу учасникам ринку <span>легко заробляти гроші.</span>
                        </div>
                   </div>
                </div>
                <div className="why_daiwo">
                    <div className="why_daiwo_title">А чому саме <span>D.A.I.Wo,</span> а не банки чи інвестиційні фонди?</div>
                    <div className="why_daiwo_description">
                    <p>За ефективністю D.A.I.Wo нічим не поступається банкам, біржам та інвестиційним фондам. Проте суттєво відрізняється за рівнем комфорту.</p>
                    <p>D.A.I.Wo – це UBER сучасного світу фінансів. Так, ви можете дістатися пункту призначення міським транспортом, яким звикли користуватися всі. Проте, навіщо, коли це можна зробити швидше і комфортніше?</p> 
                    Так само і з інвестуванням – є два шляхи: складний та легкий. Який обрати – вирішувати вам
                    </div>
                </div>
                <div className="daiwo_card">
                    <div className="daiwo_card_one"></div>
                    <div className="daiwo_card_two">
                        <p className='card_text'>Нейромережа бере на себе важкий процес <span>yправління фінансами</span> та інвестиціями, відкриваючи всім людям планети вільниий доступ у світ інвестицій</p>
                        <button className="btn_start_card">Почати</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutUsPage;