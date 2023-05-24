import React from 'react';
import '../../style/header.scss'
import { Link } from 'react-router-dom';
import Logo from './Logo';
import WalletAndLang from './WalletAndLang';
import Burger from './Burger';


const Header = () => {
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
                    <Burger/>
                </div>
            </div>
        </header>
    );
};

export default Header; 