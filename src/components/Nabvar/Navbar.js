import './Navbar.css';
import { Link } from "react-router-dom";
import logoImage from '../../assets/logo.svg';
import { IntlProvider, FormattedDate } from 'react-intl';
import teatrify from '../../assets/teatrify.png';
import logito from '../../assets/logoNaranja.png';

export const Navbar = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();
  const locale = 'en'; // Configura el idioma a inglés

 
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

          <div className='header_container2'>
            <IntlProvider locale={locale}>
            <div className="navbar">
              <p>
              <img src={logito} alt="Logo" style={{marginTop:'-5px'}} className="header_logo" /><FormattedDate value={today} {...options} />
              </p>
            </div>
            </IntlProvider>
            <img
                src={teatrify}
                alt="teatrify"
                className='teatrify'
              />
              
            <div className="header_buttons">
              <div  className="header_search">
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </div>
              <Link to={"/signin"} className="header_signIn">Sign In</Link>
              <Link to={"/subscribe"} className="header_subscribe">Subscribe</Link>
            </div>
          </div>
            <div className='subcategorias'>
              <a href='#'>Lorem Ipsum </a>
              <a href='#'>Lorem Ipsum</a>
              <a href='#'>Lorem Ipsum</a>
              <a href='#'>Lorem Ipsum</a>
              <a href='#'>Lorem Ipsum</a>
            </div>
            <div class="linea"></div>
        </header>
    )
}

export default Navbar;
