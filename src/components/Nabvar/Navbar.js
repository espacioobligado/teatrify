import './Navbar.css';
import { Link } from "react-router-dom";
import logoImage from '../../assets/logo.svg';

export const Navbar = () => {
    return (
        <header className="header">
          <div className='header_container'>
            <Link to={"/"} className="header_logo">
              <img src={logoImage} alt="Logo" className="header_logo" />
            </Link>
            <div className="header_buttons">
              <Link to={"/signin"} className="header_signIn">Sign In</Link>
              <Link to={"/subscribe"} className="header_subscribe">Subscribe</Link>
            </div>
          </div>
        </header>
    )
}

export default Navbar;
