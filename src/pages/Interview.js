import React from 'react';
import GridHeaderSection from '../components/GridHeaderSection';

import kravtsov from '../assets/images/reverse_interviev_kravtsov.jpg';
import seva from '../assets/images/reverse_interviev_seva.jpg';
import sherbina from '../assets/images/reverse_interviev_sherbina.jpg';

const Interview = () => (
  <div className="Grid-root">
    <GridHeaderSection title="Интервью" page="Interview" />
    <section className="Grid-container">
      <div className="Wiki-container">
        <aside className="Wiki-sidebar">
          <div className="Sidebar-root">
            <nav className="Sidebar-navigation">
              <ul className="Sidebar-navigationLinks">
                <li className="Sidebar-navigationLink">
                  <a href="#maksim-kravtsov" className="Sidebar-link">
                    С Максимом Кравцовым
                  </a>
                </li>
                <li className="Sidebar-navigationLink">
                  <a href="#seva-kovalenkov" className="Sidebar-link">
                    С Севой Коваленковым
                  </a>
                </li>
                <li className="Sidebar-navigationLink">
                  <a href="#nikita-scherbina" className="Sidebar-link">
                    С Никитой Щербиной
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <article className="Article-root">
          <div className="Article-container">
            <header className="Article-header">
              <h2>
                <a href="#maksim-kravtsov" name="maksim-kravtsov">
                  Максим Кравцов
                </a>
              </h2>
              <p>2 место фикс Гревел Кинг 2017</p>
              <p>3 место сингл Reverse 2019</p>
            </header>
            <img src={kravtsov} alt="kravtsov" />
            <p>
              <strong>
                – Максим, привет. Помню в первом гревелкинге ты на трассе
                потерял 4 бонки из 5 и приехал в тройке победителей зачета фикс,
                как для тебя прошло самое первое мероприятие?
              </strong>
            </p>
            <p>
              Помню, что где то на середине дистанции начало становиться тяжело,
              но еще было рвение, потом пески, которые забрали все силы. К
              последней четверти мыслей о местах призовых не оставалось, только
              о том чтоб доехать до финиша. Поэтому когда меня начали собирать
              последователи – даже не ускорялся, так было пофиг уже на места. Но
              все же свое получил. Это что по гонке. А туса как всегда топ,
              незабываемый кемп в лесу с кострами и толпой друзей. Лучшие
              выходные.
            </p>
            <p>
              <strong>
                – Как ты оценил весь ивент в целом? Расскажи подробнее чего тебе
                не хватало и хотелось изменить?
              </strong>
            </p>
            <p>
              Как я уже сказал, в целом ивент пушка. Изменить – ну разве что
              трассу хотелось бы менее “выживальческую”, более скоростную. Все
              таки гревел это о грунтовках.
            </p>
            <p>
              <strong>
                – Много ли поменялось спустя год, на втором ивенте? Опиши что
                там происходило вкратце.
              </strong>
            </p>
            <p>
              Стало лучше, стало труднее. Организация лагеря поднялась выше
              безусловно. Трасса стала еще сложнее. В этот раз у меня свело все
              мышцы на ногах и пару раз я потерялся на маршруте не заметив
              поворота. Хотелось бы ехать без гармина.
            </p>
            <p>
              Точнее хотелось бы накопить на него, но пока есть дела по-важнее.
            </p>
            <p>
              <strong>
                – Мне рассказали, что трасса в этом году была хардкорнее
                предыдущей, опиши что там творилось?
              </strong>
            </p>
            <p>
              Да, были техничные участки с лесовозными дорогами, брущаткой итд.
              И все бы прикольно, если бы они не были такими длинными. Меня
              такая участь миновала, но многие рассказывали, что когда
              пробрались по таким участкам по лесу было трудно тк они ехали со
              скоростью роя слепней, которые пытались их съесть.
            </p>
            <p>
              <strong>
                – Окей, а какую идеальную трассу ты бы построил для себя?
              </strong>
            </p>
            <p>
              Много скоростного грунта временами прерывающегося, на какие-то
              техничные, сложные, но короткие участки.
            </p>
            <header className="Article-header">
              <h2>
                <a href="#seva-kovalenkov" name="seva-kovalenkov">
                  Сева Коваленков
                </a>
              </h2>
              <p>1 место сингл Гревел Кинг 2017</p>
              <p> 1 место сингл Reverse 2019</p>
            </header>
            <img src={seva} alt="seva" />
            <p>
              <strong>
                – Привет Сева, ты самый голый из всех участников, почему так
                получается?
              </strong>
            </p>
            <p>
              Привет, ноги этого феномена растут ещё с первого псевдотуринга, ну
              я и придерживаюсь этой тактике.
            </p>
            <p>
              <strong>
                – Гонке уже два года и ты два раза был участником, что ты
                запомнил, приобрел или потерял на этих ивентах?
              </strong>
            </p>
            <p>
              На первом ГК запомнилась уютная компания у костра и прекраснейшая
              трасса на которой мы умеренно страдали. Второй ГК запомнился супер
              фееричным афтэпати, и сожравшей меня трассе.
            </p>
            <p>
              <strong>
                – Первая трасса после финиша всем показалась адом, но в
                следующем году была еще жестче, какая тебе была по душе и какую
                идеальную трассы ты бы построил для себя?
              </strong>
            </p>
            <p>
              Первая определенно далась мне легче, но её ехал на совершенно
              другом сэтапе и могу предположить что мне и второй ГК дался легче
              б если я поехал на старом байсикле. На моей идеальной трассе было
              б все, кроме брода только если но обилие луж и красной глины было
              б горантированно.
            </p>
            <p>
              <strong>
                – Вот ты уже опытен не по годам, много проводишь время в седле,
                какой экип ты посоветуешь тем, кто поедет в первый раз, вода,
                гели, и все такое, мы не говорим сейчас о велосипеде.
              </strong>
            </p>
            <p>
              Новичку я посоветую изначально отнестись серьезно к гонке, т.к.
              можно и заблудиться и заголодать и обсохнуть. Так что точно 2 бака
              жидкости, пару гелей и можно один углеводный батончик, этого точно
              хватит до промежуточного пункта питания и настоятельно всем
              рекомендую арендовать, добыть, родить, украсть нормальный
              спутниковый новигатор т.к. не раз видел как на гонке ребята
              которые ехали впереди меня просто проезжали нужный поворот.
            </p>
            <p>
              <strong>
                – У тебя были сексуальные связи с другими гонщиками?
              </strong>
            </p>
            <p>
              Ни с одним гонщиком на ГК я не имел половую связь, но чувства
              гораздо былее возвышенные имею.
            </p>
            <p>
              <strong>
                – Мне естественно хочется видеть тебя в первых рядах на старте и
                я хочу сделать эту гонку еще лучше, на что ты посоветуешь
                обратить внимание. Если немного отступить от интервью, я заметил
                что негативной обратной связи не было, но я знаю что есть
                моменты над которыми стоит работать. Твои пожелания?
              </strong>
            </p>
            <p>
              Очень приятно слышать такие слова. Хочется видеть чуть больше
              жёсткого гравийного или глиняного покрытия, постараться разметку
              лучше делать(хотя я прекрасно понимаю как это сложно сделать в
              рамках 80 километровой гонки), и мне лично хочется услышать
              афтэрэйс пати концерт Стоунер группы(будет идеально если это будут
              Electric Wizard)
            </p>
            <p>
              <strong>– Брить ноги или не брить?</strong>
            </p>
            <p>Мне врач прописал бритьё ног</p>
            <header className="Article-header">
              <h2>
                <a href="#nikita-scherbina" name="nikita-scherbina">
                  Никита Щербина
                </a>
              </h2>
              <p>1 место Гревел Кинг 2017</p>
            </header>
            <img src={sherbina} alt="sherbina" />
            <p>
              <strong>
                – Привет Никита, нас с тобой как раз сблизил первый гревел кинг,
                и кажется не только со мной, как для тебя прошел ивент?
              </strong>
            </p>
            <p>
              Привет Саш. Да действительно, это событие открыло для меня много
              новых знакомств, где нашел людей близких по духу и увлечениям.
              Очень рад этому. Безумно.
            </p>
            <p>
              Я остался доволен ивентом, по мне, так это грандиозное событие и
              подобных у нас в России не было. Помимо грэвел-гонки, была
              возможность насладиться природой, лесом, утренним кофе у костра,
              повеселиться с друзьями, а также искупаться в освежающем озере
              после самой гонки.
            </p>
            <p>
              <strong>
                – На следующий год ты приехал уже на карбоновом Canyon, почему
                не карбоновый шоссейник или другой велосипед, в чем именно
                прелесть гравийной езды для тебя?
              </strong>
            </p>
            <p>
              Карбоновый Canyon я приобрел для участия в велокроссовых
              соревнованиях, тк очень увлекся ими как со спортивной, так и с
              технической стороны этой дисциплины. Шоссейник довольно
              узкоспециализированный по своим возможностям. Да, на нем быстрее,
              но из-за его специфики, всегда привязан к асфальту, шоссе. Другое
              дело кроссовый или грэвел. В любой момент могу съехать с шоссе на
              лесные тропинки, гравийные или же проселочные дороги и полной
              грудью дышать чистым воздухом, вдали от авто.
            </p>
            <p>
              <strong>
                – Ощущения от второй гонки перекрыли первую? Она стала
                спортивнее или расслабленнее, как тебе атмосфера в лагере?
              </strong>
            </p>
            <p>
              Вторая гонка была открытием новых ощущений и в тоже время познание
              своего потенциала. В силу особенностей трассы, борьба была
              нешуточной. Ломили как кони. Было очень круто, что все довольно
              серьезно отнеслись к гонке и она получилось достаточно спортивной.
            </p>
            <p>
              Сам лагерь был максимально расслабленным. В любой компании все
              друг другу рады и не было ощущения будто ты «не в своей тарелке».
              Алкогольный угар присутствовал. Ну и наконец, я запомнил название
              этой страны.
            </p>
            <p>
              <strong>
                – Один такой ивент в год для тебя мало я так понимаю, ты хотел
                бы больше тематических мероприятий?
              </strong>
            </p>
            <p>
              Конечно, определенно мало. Да и не только для меня. Все подобные
              ивенты будут лишь повторять какие то особенности ГК. Но мы
              прекрасно понимаем, что ГК мало кто сможет переплюнуть. Пусть он
              будет уникальным и аутентичным ивентом.
            </p>
            <p>
              <strong>
                – Что бы ты хотел поменять или добавить для этого события?
              </strong>
            </p>
            <p>
              На самом деле, очень не хватало выступления муз группы. Тогда бы
              мы смогли смело назвать ГК фестивалем и отжигать по полной!
            </p>
            <p>
              Хотелось бы добавить безопасности в гонку. А именно запустить
              побольше техничек, мотоциклов сопровождения, чтобы была
              возможность помочь сошедшим, новичкам или же чтобы попросту никто
              не заблудился.
            </p>
            <p>
              <strong>– Какой бы была твоя идеальная гонка?</strong>
            </p>
            <p>
              Я как раз нахожусь в поисках своей идеальной гонки. Думаю что она
              должна быть очень динамичной, быстрой и разносторонней как по
              типам поверхности так и по техничности ее прохождения. Наверное,
              это все влияние велокросса.
            </p>
            <p>
              <strong>– Брить ноги или не брить?</strong>
            </p>
            <p>Брить. Само собой. Это эстетика. И выглядит аккуратнее.</p>
          </div>
        </article>
      </div>
    </section>
  </div>
);

export default Interview;
