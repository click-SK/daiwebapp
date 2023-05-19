import './../style/wallet&lang.scss'
import globIcon from './../img/icons/icons_language.svg'


const WalletAndLang = () => {
    return ( 
        <div className="wallet_lang">
            <button className='secondary'><a href="#">Підключити гаманець</a></button>
                <div className="glob_lang">
                    <img src={globIcon} alt="glob" />
                    <p>УКР</p>
                </div>
        
        </div>
     );
}
 
export default WalletAndLang;