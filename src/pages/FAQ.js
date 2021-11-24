import React from 'react';
import GridHeaderSection from '../components/GridHeaderSection';

const FAQ = () => (
  <div className="Grid-root">
    <GridHeaderSection title="faq" page="Faq" />
    <section className="Grid-container">
      <div className="Wiki-container">
        <aside className="Wiki-sidebar">
          <div className="Sidebar-root">
            <nav className="Sidebar-navigation">
              <ul className="Sidebar-navigationLinks">
                <li className="Sidebar-navigationLink">
                  <a href="#chto-eto-za-gonka" className="Sidebar-link">
                    Что это за гонка?
                  </a>
                </li>
                <li className="Sidebar-navigationLink">
                  <a
                    href="#kto-moget-prinyat-ychastie"
                    className="Sidebar-link"
                  >
                    Кто может принять участие?
                  </a>
                </li>
                <li className="Sidebar-navigationLink">
                  <a href="#kakoy-velosiped-podoydet" className="Sidebar-link">
                    Какой велосипед подойдет?
                  </a>
                </li>
                <li className="Sidebar-navigationLink">
                  <a
                    href="#eto-proffesionalnaya-gonka"
                    className="Sidebar-link"
                  >
                    Это проффесиональная гонка?
                  </a>
                </li>
                <li className="Sidebar-navigationLink">
                  <a
                    href="#bydet-preimywestvo-y-rebyat"
                    className="Sidebar-link"
                  >
                    Будет ли у ребят из Питера преимущество?
                  </a>
                </li>
                <li className="Sidebar-navigationLink">
                  <a
                    href="#mogy-ya-priehat-tolko-na-gonky"
                    className="Sidebar-link"
                  >
                    Могу ли я приехать только на гонку?
                  </a>
                </li>
                <li className="Sidebar-navigationLink">
                  <a href="#gde-nahoditsya-trassa" className="Sidebar-link">
                    Где находится трасса?
                  </a>
                </li>
                <li className="Sidebar-navigationLink">
                  <a
                    href="#mogy-ya-priehat-s-semyoy-i-druzyami"
                    className="Sidebar-link"
                  >
                    Могу ли я приехать с семьей или друзьями?
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <article className="Article-root">
          <div className="Article-container">
            <h2>
              <a href="#chto-eto-za-gonka" name="chto-eto-za-gonka">
                Что это за гонка?
              </a>
            </h2>
            <p>
              Гонка по красивейшим гравийным маршрутам Ленинградской области,
              совмещенная с кемпингом в приятной компании.
            </p>
            <p>
              Вас ждут 3 дня отдыха в палатках у костра и интересная гравийная
              гонка. Мы составили отличный маршрут длиной в 100-200км. Т.к.
              основная часть трассы пройдёт в лесу, качество дороги сильно
              зависит от дождей. Но в любом случае вы столкнетесь, с острым
              щебнем, песчаными ловушками, бродом, небольшим количеством
              хорошего асфальта, а так же плохого, иногда на наших трассах
              встречаются небольшие броды и булыга.
            </p>
            <h2>
              <a
                href="#kto-moget-prinyat-ychastie"
                name="kto-moget-prinyat-ychastie"
              >
                Кто может принять участие?
              </a>
            </h2>
            <p>
              Любой человек обладающий подходящим по регламенту велосипедом, и
              предварительно зарегистрировавшийся.
            </p>
            <h2>
              <a
                href="#kakoy-velosiped-podoydet"
                name="kakoy-velosiped-podoydet"
              >
                Какой велосипед подойдет?
              </a>
            </h2>
            <p>
              Любой велосипед без амортизаторов, а если таковой есть, то
              обязательное условие для них руль баран. Мы понимаем, что вероятно
              отсеиваем большой пласт туристических велосипедов, поэтому можно
              предварительно согласовать с организаторами ваше участие, если ваш
              велосипед не подходит под описанные выше критерии. Небольшой гайд
              в картинках о подходящем велосипеде тут.
            </p>
            <p>Идеальным же будет гравийный велосипед на 40с резине.</p>
            <h2>
              <a
                href="#eto-proffesionalnaya-gonka"
                name="eto-proffesionalnaya-gonka"
              >
                Это проффесиональная гонка?
              </a>
            </h2>
            <p>
              Мы ожидаем совершенно разнообразный состав участников, поэтому
              каждый найдет себе соперника по уровню. Главное быть готовым
              проехать 100 км. по пересеченной местности.
            </p>
            <h2>
              <a
                href="#bydet-preimywestvo-y-rebyat"
                name="bydet-preimywestvo-y-rebyat"
              >
                Будет ли у ребят из Питера преимущество?
              </a>
            </h2>
            <p>Нет, мы сообщим расположение трассы за неделю до гонки.</p>
            <h2>
              <a
                href="#mogy-ya-priehat-tolko-na-gonky"
                name="mogy-ya-priehat-tolko-na-gonky"
              >
                Могу ли я приехать только на гонку?
              </a>
            </h2>
            <p>
              Да, не обязательно оставаться на все 3 дня кемпинга. Но вы многое
              упускаете. Не только отличный отдых на природе, выступления
              диджеев после гонки, но так же и лекции от знаковых людей нашей
              велоиндустрии.
            </p>
            <h2>
              <a href="#gde-nahoditsya-trassa" name="gde-nahoditsya-trassa">
                Где находится трасса?
              </a>
            </h2>
            <p>
              Точное расположение трассы мы откроем за неделю до гонки. Пока
              можем сказать, что она находится в 60-90 минутах езды на
              электричке от города.
            </p>
            <h2>
              <a
                href="#mogy-ya-priehat-s-semyoy-i-druzyami"
                name="mogy-ya-priehat-s-semyoy-i-druzyami"
              >
                Могу ли я приехать с семьей или друзьями?
              </a>
            </h2>
            <p>Определенно да.</p>
          </div>
        </article>
      </div>
    </section>
  </div>
);

export default FAQ;
