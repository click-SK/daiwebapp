import logo from './../img/logo_main.svg'
import './../style/logo.scss'

const Logo = () => {
    return ( <div className="main_logo">
        <img src={logo} alt="Logo" />
    </div> );
}
 
export default Logo;