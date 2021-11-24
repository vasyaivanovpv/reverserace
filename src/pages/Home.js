import React from 'react';

import ReverseColorLogo from '../components/ReverseColorLogo';
import ReverseLogo from '../components/ReverseLogo';
import imgNoRoute from '../assets/images/reverse_route_no.png';

const Home = () => (
  <div className="Grid-root">
    <section className="GridHeader-section">
      <div className="GridHeader-wrapper GridHeader-wrapperHome">
        <div className="GridHeader-container">
          <div className="GridHeader-titleContainer">
            <div className="GridHeader-logoSvg">
              <ReverseLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="Grid-container">
      <div className="Section-root">
        <div className="Section-block Section-is1to1">
          <div className="AboutRace-root">
            <p className="AboutRace-text">
              Это не просто гонка и даже не соревнование. Небольшой трёхдневный
              лагерь на берегу озера с разговорами у костра в хорошей компании
              единомышленников. Повод встретится на свежем воздухе, немного
              попотеть и создать тёплые воспоминания.
            </p>
            <p className="AboutRace-text">
              Трасса представляет из себя гравийную дорогу с участками асфальта
              и лесных просёлков. Ощущения несравнимые ни с чем.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="Grid-container">
      <header className="Grid-header">
        <h2>Трасса</h2>
      </header>
      <div className="Section-root">
        <div className="Section-block Section-is1to2">
          <p>
            Чтобы уравнять шансы гонщиков из других городов, мы открываем
            маршрут гонки за неделю до старта. Если хотите иметь примерное
            представление о дистанции гонки, смотрите треки предыдущих годов
            2017, 2018 и 2019.
          </p>
        </div>
        <div className="Section-block Section-is1to2">
          <div className="MapRace-root">
            <div className="MapRace-imageWrap">
              <img src={imgNoRoute} alt="route" className="MapRace-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="Grid-container">
      <header className="Grid-header">
        <h2>Волонтерам</h2>
      </header>
      <div className="Section-root">
        <div className="Section-block Section-is1to2">
          <p>
            Нам не обойтись без вашей поддержки. Волонтерство подразумевает
            помощь в постройке площадки ивента и нахождение на трассе в сложных
            участках во время гонки. Организация пунктов питания, регистрация,
            раздача воды и снеков участникам. Волонтерам предоставляется питание
            на все дни гонки, футболка с логотипом и другие плюшки. Уютный офис,
            есть чай и печеньки.
          </p>
        </div>
        <div className="Section-block Section-is1to2">
          <div className="MapRace-root">
            <div className="MapRace-imageWrap">
              <img src={imgNoRoute} alt="route" className="MapRace-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
