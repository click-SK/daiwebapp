import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Link to='/'>Головна</Link>
            <Link to='/about-us'>Про нас</Link>
            <Link to='/service'>Послуга</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/contacts'>Контакти</Link>
        </div>
    );
};

export default Header;