import React from 'react';
import './../style/aboutUsPage.scss'
import aboutUsimg from './../img/aboutus_image.png'
import smallAnim from './../img/small_anim.svg'
import bigAnim from './../img/Background_animation.svg'
import imgdown from './../img/About_img.png'
import Footer from './Footer';
import AnimWave from './wave/AnimWave';


const AboutUsPage = () => {
    return ( 
        <div className='about_us_page'>
            <div className="container">
                 <div className='background'>
                    <AnimWave/>
                </div>
                <div className="about_background">
                    <div className="about_small_animation">
                        <img src={smallAnim} alt="anim" />
                    </div>
                    {/* <div className="about_big_animation">
                        <img src={bigAnim} alt="anim" />
                    </div> */}
                    <div className="about_img_down">
                        <img src={imgdown} alt="img" />
                    </div>
                </div>
                <div className="main_info">
                    <div className="title">Хто сказав, що <br /> <span>інвестування</span>  це складно?</div>
                    <div className="description"><span>D.A.I.Wo </span> – це платформа, де користувачу не потрібні глибокі<br /> знання у фінансуванні, макроекономіці та інвестиціях. Ви<br /> купуєте токени, а штучний інтелект самостійно інвестує та<br /> розподіляє кошти.</div>
                    <button className="btn_start"><a href="#">Почати</a></button>
                </div>
                <div className="extra__info_container">
                    <div className="extra_info_text">
                        <div className="extra_info_text_ttitle">Для кого створений <span>D.A.I.Wo?</span></div>
                        <div className="extra_info_text_subtitle">Саме для вас. Так, без перебільшення, платформа розроблялась <br /> для людей, які цікавляться інвестуванням. <br />
                        Це можуть бути новачки та профі зі значними кейсами.<br />
                        <span>Інвестувати може кожен!</span> <br />
                       На даному етапі йде пошук інвестицій для масштабування <br /> проекту та виведення його на глобальний рівень.<br />
                        Тому, якщо ви чекали на знак для початку інвестування – ось він.<br /> Більше безпечного входу в інвестування ще не існувало.
                        </div>
                    </div>
                    <div className="extra__info_picture">
                        <img src={aboutUsimg} alt="about us" />
                    </div>
                </div>
                <div className="about_section">
                    <div className="about_section_small">
                        <div className="first_section_small"><span>D.A.I.Wo</span> вирішує <br /> проблему бідності.
                        </div>
                        <div className="second_section_small">Прозорість забезпечена <br /> <span>
                        смарт-конктрактами</span>
                        </div>
                   </div>
                   <div className="about_section_big">
                        <div className="first_section_big"><span>Штучний інтелект</span> самостійно <br/>  інвестує та розподіляє кошти.
                        </div>
                        <div className="second_section_big">Дає змогу учасникам ринку <br /> <span>легко заробляти гроші.</span>
                        </div>
                   </div>
                </div>
                <div className="why_daiwo">
                    <div className="why_daiwo_title">А чому саме <span>D.A.I.Wo,</span> а не банки <br />
                    чи інвестиційні фонди?
                    </div>
                    <div className="why_daiwo_description">
                    За ефективністю D.A.I.Wo нічим не поступається банкам, біржам та інвестиційним фондам. Проте суттєво <br /> відрізняється за рівнем комфорту.<br />
                    D.A.I.Wo – це UBER сучасного світу фінансів. Так, ви можете дістатися пункту призначення міським транспортом, <br /> яким звикли користуватися всі. Проте, навіщо, коли це можна зробити швидше і комфортніше? <br />
                    Так само і з інвестуванням – є два шляхи: складний та легкий. Який обрати – вирішувати вам
                    </div>
                </div>
                <div className="daiwo_card">
                    <div className="daiwo_card_one"></div>
                    <div className="daiwo_card_two">
                        <p className='card_text'>Нейромережа бере на себе важкий процес <br /> <span>yправління фінансами</span> та інвестиціями,<br /> відкриваючи всім людям планети вільниий<br /> доступ у світ інвестицій</p>
                        <button className="btn_start_card"><a href="#">Почати</a></button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default AboutUsPage;