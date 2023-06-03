import React,{useState} from 'react';
import '../../style/header.scss'
import '../../style/burger.scss';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import WalletAndLang from './WalletAndLang';
import Burger from './Burger';
import { useEffect } from 'react';


const Header = () => {

    const [menyBlock, setMenuBlock] = useState('')


    return (
        <header className='header'>
            <div className="container">
                <div className="header_row">
                    <Logo/>
                    <div className='links'>
                        <Link to='/'>Головна</Link>
                        <Link to='/about-us'>Про нас</Link>
                        <Link to='/service'>Послуга</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/contacts'>Контакти</Link>
                        <Link to='/profile'>Профіль</Link>
                    </div>
                    <WalletAndLang/>
                    <nav className='burger' >
                        <img className='burger_menu_btn' src="/icons/burger_icon.svg" alt="burger" onClick={()=>setMenuBlock('add_display')} />
                    </nav>
                </div>
                <div className={`burger_menu  ${menyBlock}`}>
                    {/* <div className="burger_menu_wrapper"> */}
                        <div className="burger_menu_header">
                            <img className='burger_logo' src="/img/logo_burger.svg" alt="logo" />
                            <img className='burger_close' src="/icons/close_icon.svg" alt="close" onClick={()=>setMenuBlock(' ')} />
                        </div>
                        <div className="burger_menu_link">
                                <Link 
                                onClick={()=>setMenuBlock(' ')}
                                 to='/'
                                 >Головна</Link>
                                <Link
                                onClick={()=>setMenuBlock(' ')}
                                 to='/about-us'
                                 >Про нас</Link>
                                <Link onClick={()=>setMenuBlock(' ')}
                                 to='/service'>Послуга</Link>
                                <Link onClick={()=>setMenuBlock(' ')} 
                                to='/faq'>FAQ</Link>
                                <Link onClick={()=>setMenuBlock(' ')}
                                 to='/contacts'>Контакти</Link>
                                <Link onClick={()=>setMenuBlock(' ')}
                                 to='/profile'>Профіль</Link>
                        </div>
                        <div className="burger_menu_lang">
                            <div className="glob_lang">
                                <img src='/icons/icons_language.svg' alt="glob" />
                                <p>УКР</p>
                            </div>
                        </div>
                        <div className="burger_menu_mail">
                            <div className="footer_email">
                                <img src='./icons/icon_email-footer.svg' alt="email" />
                                <p>info@daiwo.ai</p>  
                            </div>
                        </div>
                        <div className="burger_menu_wallet">
                        <button className='secondary'>Підключити гаманець</button>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </header>
    );
};

export default Header; 