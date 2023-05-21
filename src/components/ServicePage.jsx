import React,{useState} from 'react';
import './../style/servicePage.scss'
import coinOne from './../img/coin1.svg'
import coinTwo from './../img/coin2.svg'
import Footer from "./Footer";
import service_anim from './../img/section1_animation.svg'
import itemBar from './../img/item_bar_service.svg'


const ServicePage = () => {

    const [arr,setArr] = useState([
        {
            title:'Децентралізованість',
            description:'Основа блокчейну в платформі пропонує децентралізовану інфраструктуру',
            img: 'elipse_icon1.svg',
        },
        {
            title:'Прозорість',
            description:'Технологія забезпечує прозорість та недоступність для маніпулювання даними.',
            img: 'elipse_icon2.svg',
        },
        {
            title:'Глобальний доступ',
            description:'Платформа D.A.I.Wo доступна з будь-якого місця в світі з доступом до Інтернету.',
            img: 'elipse_icon3.svg',
        },
        {
            title:'Швидкість та ефективність',
            description:'Платформа значно прискорює процеси інвестування та розрахунків',
            img: 'elipse_icon4.svg',
        },
        {
            title:'Розширені можливості ',
            description:'D.A.I.Wo відкриває нові можливості для інвестування в цифрові активи',
            img: 'elipse_icon5.svg',
        },
        {
            title:'Безпека',
            description:'Смарт-контракти побудовані на базі криптографічних принципів, що забезпечує високий рівень безпеки.',
            img: 'elipse_icon6.svg',
        },
    ])

    return (
      <div className="service_page">
        <div className="container">
          <div className="service_title_block">
            <div className="service_title">
              <h1 className="title_h1">
                З <span>D.A.I.Wo</span> інвестування можна розпочати <br /> лише
                з 1 центу.
              </h1>
              <h3 className="subtitle_h3">
                Так-так, не зі 100$, 10$ чи 1$ – а з 1 центу! <br />
                Це найдешевший вхід в інвестиції в світі.
              </h3>
            </div>

            <div className="service_title_img">
              <img className="page_coin_one" src={coinOne} alt="Coin img" />
              <img className="page_coin_two" src={coinTwo} alt="Coin img" />
            </div>
          </div>
          <div className="how_work">
            <div className="how_work_title">
              <h2>
                Як <span>працює</span> платформа?
              </h2>
            </div>
            <div className="how_work_wrap">
              <div className="how_work_animation">
                <img
                  className="service_anim"
                  src={service_anim}
                  alt="animation"
                />
              </div>
              <div className="how_work_info">
                <img className="item_bar" src={itemBar} alt="" />
                <div className="info_blok">
                  <p className="info_blok_title">Проведення емісії</p>
                  <p className="info_blok_subtitle">
                    Нейромережа емітуватиме <br />
                    свої активкойни, тобто <br />
                    інвестиційні смарт-контракти.
                  </p>
                </div>
                <div className="info_blok">
                  <p className="info_blok_title">Інвестування</p>
                  <p className="info_blok_subtitle">
                    Вони будуть забезпечені програмним <br /> кодом мережі, який
                    міститиме дані про <br />
                    активи, в які мережа інвестуватиме.
                  </p>
                </div>
                <div className="info_blok">
                  <p className="info_blok_title">Винагорода</p>
                  <p className="info_blok_subtitle">
                    Монетизація інвесторів
                    <br /> відбуватиметься шляхом отримання <br />
                    процентного арбітража.
                  </p>
                </div>
                <button className="btn_start">
                  <a href="#">Почати</a>
                </button>
              </div>
            </div>
          </div>
          <div className="service_why_info">
            <h2>
              Чому треба<span>обрати</span>саме нашу платформу?
            </h2>
            <h3 className="subtitle_h3">
              Інвестування в <span>D.A.I.Wo</span> є однією з найбільш
              привабливих інвестиційних можливостей, яка надає інвесторам ряд
              переваг.
            </h3>
          </div>
          <div className="service_card_columns">
            <div className="service_column">
              {arr.map((item, index) => (
                <div className="column_item" key={index}>
                  <div className="column_item_border"></div>
                  <div className="column_item_card">
                    <p className="card_header">{item.title}</p>
                    <p className="card_info">{item.description}</p>
                    <img
                      className="elipse_icon"
                      src={`./img/${item.img}`}
                      alt="icon"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
 
export default ServicePage;