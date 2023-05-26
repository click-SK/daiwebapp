import React from 'react';
import '../../style/service.scss'



const Service = () => {
    return (
        <div className='service'>
            <div className="service_wrap">
                <div className="service_info">
                    <div className="service_info_text">
                        <button className="btn_slider">Послуга</button>
                        <div className="service_info_title">Нейромережа <span>D.A.I.Wo</span> емітуватиме свої активкойни, тобто інвестиційні <span>смарт-контракти.</span> </div>
                        <div className="service_info_subtitle"><p className='p_one'>Вони будуть забезпечені програмним кодом мережі, який міститиме дані про активи, в які мережа інвестуватиме.</p>
                        <p className='p_two'> Монетизація інвесторів відбуватиметься шляхом отримання процентного арбітража. Це дасть змогу учасникам ринку легко заробляти гроші, шляхом об’єднання своїх фінансових можливостей.</p>
                       </div>
                    </div>
                    <div className="service_info_pictures">
                        <img className='coin_one' src='/img/coin1.svg' alt="Coin img" />
                        <img className='coin_two' src='/img/coin2.svg' alt="Coin img" />
                    </div>
                </div>
            </div>
            <div className="service_info_extra">
                <div className="info_block"><span>D.A.I.Wo</span> бере на себе важкий процес управління фінансами та інвестиціями</div> 
                <div className="info_block"><span>Штучний інтелект</span> самостійно інвестує та розподіляє кошти.</div>
                <div className="info_block">Прозорість та безпека забезпечена <span>смарт-конктрактами</span> </div>
            </div>
            <div className="know_more">
                <button className='btn_know_more'>Дізнатись більше</button>
                <img src='/icons/icon_arrow-forward.svg' alt="" />
            </div>
        </div>
    );
};

export default Service;