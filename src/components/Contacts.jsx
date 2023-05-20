import React from 'react';
import './../style/contacts.scss'
import icoEmail from './../img/icons/icon_email.svg'

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="contacts_wrap">
                <div className="contacts_btn">Контакти</div>
                <div className="contacts_main_text">Залишайте слід у світі - зв'яжіться з нами!</div>
                <div className="contacts_main">
                    <div className="contacts_main_email">
                        <div className='purple'>Пошта:</div>
                        <div className="contacts_email">
                            <img src={icoEmail} alt="email" />
                            <p>info@daiwo.ai</p>  
                        </div>
                    </div>
                    <div className="contacts_main_subscribe">
                        <p><span>Почни створювати </span>свою фінансову  <br /> незалежність<span> вже сьогодні.</span></p>
                        <div className="input_subscribe">
                            <input className='input_email' type="text" placeholder='Введіть Email'/>
                            <button className='subsctibe_btn'>Підписатись</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;