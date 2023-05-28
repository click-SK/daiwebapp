import './../style/footer.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './header/Logo';


const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className="footer_container">
                <div className="footer_nav">
                    <Logo/>
                    <div className='links footer_nav_display'>
                        <Link to='/'>Головна</Link>
                        <Link to='/about-us'>Про нас</Link>
                        <Link to='/service'>Послуга</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/contacts'>Контакти</Link>
                    </div>
                    <div className="footer_email">
                        <img src='./icons/icon_email-footer.svg' alt="email" />
                        <p>info@daiwo.ai</p>  
                    </div>
                    <div className="glob_lang">
                    <img src='./icons/icons_language.svg' alt="glob" />
                    <p>УКР</p>
                    </div>
                </div>
            </div>
            <div className="footer_border"></div>
        </footer>
     );
}
 
export default Footer;