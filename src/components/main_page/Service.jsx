import React, { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import '../../style/service.scss'
import { Link, useNavigate } from 'react-router-dom';



const Service = () => {

    const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/service');
    window.scrollTo(0, 0); // Прокрутка сторінки вгору
  };

  const coinOneRef = useRef(null);
  const coinTwoRef = useRef(null);
  const [coinOneInView, setCoinOneInView] = useState(false);
  const [coinTwoInView, setCoinTwoInView] = useState(false);
  const { y: scrollY } = useWindowScroll();

  useEffect(() => {
    const coinOneElement = coinOneRef.current;
    const coinTwoElement = coinTwoRef.current;
    if (coinOneElement) {
      const { top, bottom } = coinOneElement.getBoundingClientRect();
      setCoinOneInView(top < window.innerHeight && bottom >= 0);
    }
    if (coinTwoElement) {
      const { top, bottom } = coinTwoElement.getBoundingClientRect();
      setCoinTwoInView(top < window.innerHeight && bottom >= 0);
    }
  }, [scrollY]);

    return (
        <div className='service'>
            <div className="service_wrap">
                <div className="service_info">
                    <div className="service_info_text">
                        <button className="btn_slider">Послуга</button>
                        <div className="service_info_title">Нейромережа <span>D.A.I.Wo</span> емітуватиме свої активкойни, тобто інвестиційні <span>смарт-контракти.</span> </div>
                        {/* <div className='coin_adaptive'>
                            <div className="pictures_coin">
                                <img className='coin_one_adaptive' src='/img/coin1.svg' alt="Coin img" />
                                <img className='coin_two_adaptiv' src='/img/coin2.svg' alt="Coin img" />
                            </div>
                        </div> */}
                        <div className="service_info_subtitle"><p className='p_one'>Вони будуть забезпечені програмним кодом мережі, який міститиме дані про активи, в які мережа інвестуватиме.</p>
                        <p className='p_two'> Монетизація інвесторів відбуватиметься шляхом отримання процентного арбітража. Це дасть змогу учасникам ринку легко заробляти гроші, шляхом об’єднання своїх фінансових можливостей.</p>
                       </div>
                    </div>
                    <div className="service_info_pictures">
                        <img 
                        ref={coinOneRef}
                        className={`coin_one ${coinOneInView ? 'coin_anim' : ''}`} 
                        src='/img/coin1.svg' alt="Coin img" />
                        <img
                        ref={coinTwoRef}
                        className={`coin_two ${coinTwoInView ? 'coin_anim2' : ''}`}  
                        src='/img/coin2.svg' alt="Coin img" />
                        <div className="main_small_animation">
                            <img src="./img/main_small_bg-anim.svg" alt="animation" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="service_info_extra">
                <div className="info_block">
                  <p> <span>  D.A.I.Wo</span> бере на себе важкий процес управління фінансами та інвестиціями </p></div> 
                <div className="info_block"> <p><span>Штучний інтелект</span> самостійно інвестує та розподіляє кошти. </p> </div>
                <div className="info_block"> <p>Прозорість та безпека забезпечена <span>смарт-конктрактами</span> </p>  </div>
            </div>
            <div className="know_more">
            <button className="btn_know_more" onClick={handleKnowMoreClick}>
      <p>Дізнатись більше</p>
    </button>
                <img src='/icons/icon_arrow-forward.svg' alt="" />
            </div>
        </div>
    );
};

export default Service;