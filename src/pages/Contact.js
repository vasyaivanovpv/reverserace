import React from 'react';
import GridHeaderSection from '../components/GridHeaderSection';

import reverseOrg1 from '../assets/images/reverse_orgs_1.jpg';
import reverseOrg2 from '../assets/images/reverse_orgs_2.jpg';

const Contact = () => (
  <div className="Grid-root">
    <GridHeaderSection title="Контакты" page="Contact" />
    <section className="Grid-container">
      <header className="Grid-header">
        <h2>Организаторы</h2>
      </header>
      <div className="Section-root">
        <div className="Section-block Section-is1to2">
          <article className="OrgBlock-root">
            <div className="OrgBlock-image">
              <img
                src={reverseOrg1}
                alt="organizer"
                className="OrgBlock-picture"
              />
            </div>
            <div className="OrgBlock-contentWrap">
              <div className="OrgBlock-content">
                <div className="OrgBlock-name">
                  <div className="Name-root">АЛЕКСАНДР БОЧКОВ</div>
                </div>
                <div className="OrgBlock-description">
                  <div className="Description-root">Организация гонки</div>
                </div>
                <div className="OrgBlock-social">
                  <div className="Social-root">
                    <div className="Social-item">
                      <a href="emailto:bochbro@gmail.com">EMAIL</a>
                    </div>
                    <div className="Social-item">
                      <a href="https://www.instagram.com/narmalna/">
                        INSTAGRAM
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="Section-block Section-is1to2">
          <article className="OrgBlock-root">
            <div className="OrgBlock-image">
              <img
                src={reverseOrg2}
                alt="organizer"
                className="OrgBlock-picture"
              />
            </div>
            <div className="OrgBlock-contentWrap">
              <div className="OrgBlock-content">
                <div className="OrgBlock-name">
                  <div className="Name-root">ДМИТРИЙ ШЕВЧЕНКО</div>
                </div>
                <div className="OrgBlock-description">
                  <div className="Description-root">
                    Поиск трассы, помощь в организации
                  </div>
                </div>
                <div className="OrgBlock-social">
                  <div className="Social-root">
                    <div className="Social-item">
                      <a href="https://www.instagram.com/my_stalin/">
                        INSTAGRAM
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
