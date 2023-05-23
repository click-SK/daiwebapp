import '../../style/wallet&lang.scss'



const WalletAndLang = () => {
    return ( 
        <div className="wallet_lang">
            <button className='secondary'><a href="#">Підключити гаманець</a></button>
                <div className="glob_lang">
                    <img src='/icons/icons_language.svg' alt="glob" />
                    <p>УКР</p>
                </div>
        
        </div>
     );
}
 
export default WalletAndLang;