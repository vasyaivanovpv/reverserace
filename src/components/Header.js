import React from 'react';
import ReverseColorLogo from '../components/ReverseColorLogo';
import ReverseLogo from '../components/ReverseLogo';
// import { ReactComponent as ReverseLogo } from '../assets/images/reverse_logo.svg';
import { Link } from 'react-router-dom';

import MenuNavLink from './MenuNavLink';

const Header = () => (
  <div className="App-header">
    <header className="Header-root">
      <div className="Header-logo">
        <a href="/" className="Header-reverse">
          {/* <ReverseColorLogo className="SvgSymbol-root SvgSymbol-reverseLogo" /> */}
          <ReverseLogo className="SvgSymbol-root SvgSymbol-reverseLogo" />
        </a>
      </div>
      <div className="Header-nav">
        <nav className="Header-menu">
          <MenuNavLink to="/faq">FAQ</MenuNavLink>
          <MenuNavLink to="/interview">Интервью</MenuNavLink>
          <MenuNavLink to="/history">История</MenuNavLink>
          <MenuNavLink to="/contact">Контакты</MenuNavLink>
        </nav>
        <div className="Header-mobileNav">
          <nav className="Header-menuAdditional"></nav>
        </div>
      </div>
      <div className="Header-buttons">
        <Link to="/en" className="Header-item Header-itemLang">
          En
        </Link>
        <button className="Header-item Header-itemColorTheme">
          COLOR THEME
        </button>
      </div>
    </header>
    <div className="InfoPanel-root">
      <div className="InfoPanel-container">
        <div className="InfoPanel-nameRace">
          <div className="NameRace-root">
            <div className="NameRace-text">
              <Link to="/" className="NameRace-link">
                reverse side of the road
              </Link>
            </div>
          </div>
        </div>
        <div className="InfoPanel-group">
          <div className="InfoPanel-eventDate">
            <div className="EventDate-root">
              <div className="EventDate-item EventDate-place">
                САНКТ-ПЕТЕРБУРГ, 12-14 ИЮНЯ
              </div>
            </div>
          </div>
          <div className="InfoPanel-registration">
            <div className="Registration-root">
              <Link to="/reg" className="Registration-link">
                Регистрация
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
