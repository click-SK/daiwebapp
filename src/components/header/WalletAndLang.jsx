import React, { useState } from 'react';
import '../../style/wallet&lang.scss'
import { useNavigate } from 'react-router-dom';


const WalletAndLang = () => {
    const [lang, setLang] = useState("УКР")
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();

    const hendlerChangeLang = (value) => {
        setLang(value);
    };

    return (
        <div className="wallet_lang">
            <button className='secondary' onClick={() => navigate("/wallet")}>Підключити гаманець</button>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="glob_lang">
                <img src='/icons/icons_language.svg' alt="glob" />
                <p className='lang_select'>{lang} <img className="" src="/icons/icon_arrow-purple.svg" alt="icon"></img></p>
                {isOpen &&
                    <div className='lang_option'>
                        <p onClick={(e) => hendlerChangeLang('ENG')}>ENG</p>
                        <p onClick={(e) => hendlerChangeLang('УКР')}>УКР</p>
                        <p onClick={(e) => hendlerChangeLang('РУС')}>РУС</p>
                    </div>
                }
            </div>

        </div>
    );
}

export default WalletAndLang;