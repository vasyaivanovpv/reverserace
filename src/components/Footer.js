import React from 'react';
import { Link } from 'react-router-dom';

import ExternalLink from './ExternalLink';

const Footer = () => (
  <div className="App-footer">
    <footer className="Footer-root Footer-expanded">
      <div className="Footer-container">
        <div className="Footer-section">
          <div className="Footer-nav">
            <div className="Footer-group">
              <h3 className="Footer-groupTitle">Журнал</h3>
              <ul className="Footer-groupList">
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/interview">Интервью</Link>
                </li>
                <li>
                  <Link to="/history">История</Link>
                </li>
                <li>
                  <Link to="/contact">Контакты</Link>
                </li>
              </ul>
            </div>
            <div className="Footer-group">
              <h3 className="Footer-groupTitle">Социальные сети</h3>
              <ul className="Footer-groupList">
                <li>
                  <ExternalLink href="https://www.facebook.com/reverserace/">
                    Facebook
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://vk.com/reverse_race/">
                    Вконтакте
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://www.instagram.com/reverse_race/">
                    Instagram
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://t.me/gravel_king">
                    Telegram
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer-contact">
            <p>
              Ищите всю актуальную информацию на наших страницах в социальных
              сетях.
            </p>
            <p>
              А если у вас остались вопроссы, то вот наш email:
              <a href="mailto:INFO@REVERSIDE.RU"> INFO@REVERSIDE.RU</a>
            </p>
          </div>
        </div>
        <div className="Footer-copyright">
          <div className="Footer-copyrightGroup">
            <div className="Footer-copyrightItem">
              <div className="Footer-sponsors">
                <span>Спонсоры и поддержка:</span>
                <a
                  href="https://citycycle.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Sponsors-item Sponsors-citycycle"
                >
                  citycycle
                </a>
              </div>
            </div>
          </div>
          <div className="Footer-copyrightGroup">
            <div className="Footer-copyrightItem">© 2020 Reverse</div>
            <div className="Footer-about">
              <a
                className="Link-root"
                href="http://instagram.com/vasyaivanovpv"
                tabIndex="0"
                target="_blank"
                rel="noopener noreferrer"
              >
                by vasyaivanovpv
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
