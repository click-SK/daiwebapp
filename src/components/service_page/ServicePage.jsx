import React,{useState} from 'react';
import '../../style/servicePage.scss'
import AnimWave from '../wave/AnimWave';




const ServicePage = () => {

    const [arr2,setArr2] = useState([

      {
        title:'Проведення емісії',
        description:'Нейромережа емітуватиме свої активкойни, тобто інвестиційні смарт-контракти.'
      },
      {
        title:'Інвестування',
        description:'Вони будуть забезпечені програмним кодом мережі, який міститиме дані про активи, в які мережа інвестуватиме.'
      },
      {
        title:'Винагорода',
        description:'Монетизація інвесторів відбуватиметься шляхом отримання процентного арбітража.'
      },

    ])

    const [arr,setArr] = useState([
        {
            title:'Децентралізованість',
            description:'Основа блокчейну в платформі пропонує децентралізовану інфраструктуру',
            img: 'elipse_icon1.svg',
        },
        {
          title:'Швидкість та ефективність',
          description:'Платформа значно прискорює процеси інвестування та розрахунків',
          img: 'elipse_icon4.svg',
        },
        {
            title:'Прозорість',
            description:'Технологія забезпечує прозорість та недоступність для маніпулювання даними.',
            img: 'elipse_icon2.svg',
        },
        {
          title:'Розширені можливості ',
          description:'D.A.I.Wo відкриває нові можливості для інвестування в цифрові активи',
          img: 'elipse_icon5.svg',
        },
        {
            title:'Глобальний доступ',
            description:'Платформа D.A.I.Wo доступна з будь-якого місця в світі з доступом до Інтернету.',
            img: 'elipse_icon3.svg',
        },


        {
            title:'Безпека',
            description:'Смарт-контракти побудовані на базі криптографічних принципів, що забезпечує високий рівень безпеки.',
            img: 'elipse_icon6.svg',
        },
    ])

    return (
      <div className="service_page">
        {/* <div className="background">
          <AnimWave />
        </div> */}
        <div className="main_background">
          <div className="service_spotlight_one"></div>
          <div className="service_spotlight_two"></div>
          <div className="service_spotlight_three"></div>
          <div className="service_spotlight_four"></div>
        </div>
        <div className="container">
          <div className="service_title_block">
            <div className="service_title">
              <h1 className="title_h1">
                З <span>D.A.I.Wo</span> інвестування можна розпочати лише з 1
                центу.
              </h1>
              <h3 className="subtitle_h3">
                Так-так, не зі 100$, 10$ чи 1$ – а з 1 центу! Це найдешевший
                вхід в інвестиції в світі.
              </h3>
              <div className='btn_wrap'>
                   <button className="btn_start service_title_btn">Почати</button>
              </div>
            </div>

            <div className="service_title_img">
              <img
                className="page_coin_one"
                src="/img/coin1.svg"
                alt="Coin img"
              />
              <img
                className="page_coin_two"
                src="/img/coin2.svg"
                alt="Coin img"
              />
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
                  src="/img/section1_animation.svg"
                  alt="animation"
                />
              </div>
              <div className="how_work_info">
                <img
                  className="item_bar"
                  src="/img/item_bar_service.svg"
                  alt="item"
                />
                {arr2.map((item, index) => (
                  <div className="info_blok" key={index}>
                    <p className="info_blok_title">{item.title}</p>
                    <p className="info_blok_subtitle">{item.description}</p>
                  </div>
                ))}
                <div className='btn_wraper'>
                    <button className="btn_start">Почати</button>
                    <div className="how_work_animation how_work_animation_2 ">
                    <img
                      className="service_anim"
                      src="/img/section1_animation.svg"
                      alt="animation"
                    />
                  </div>
                </div>
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
      </div>
    );
}
 
export default ServicePage;