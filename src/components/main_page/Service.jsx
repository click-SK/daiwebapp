import React from 'react';
import '../../style/service.scss'



const Service = () => {
    return (
        <div className='service'>
            <div className="service_wrap">
                <div className="service_info">
                    <div className="service_info_text">
                        <button className="btn_slider">Послуга</button>
                        <div className="service_info_title">Нейромережа <span>D.A.I.Wo </span> емітуватиме <br /> свої активкойни, тобто<br /> інвестиційні<span>смарт-контракти.</span> </div>
                        <div className="service_info_subtitle"><p className='p_one'>Вони будуть забезпечені програмним кодом мережі, який<br /> міститиме дані про активи, в які мережа інвестуватиме. </p>
                        <p className='p_two'> Монетизація інвесторів відбуватиметься шляхом отримання<br /> процентного арбітража. Це дасть змогу учасникам ринку<br /> легко заробляти гроші, шляхом об’єднання своїх фінансових<br /> можливостей.</p>
                       </div>
                    </div>
                    <div className="service_info_pictures">
                        <img className='coin_one' src='/img/coin1.svg' alt="Coin img" />
                        <img className='coin_two' src='/img/coin1.svg' alt="Coin img" />
                    </div>
                </div>
            </div>
            <div className="service_info_extra">
                <div className="info_block"><span>D.A.I.Wo </span> бере на себе важкий <br /> процес управління фінансами<br /> та інвестиціями</div> 
                <div className="info_block"><span>Штучний інтелект</span> <br />самостійно інвестує та <br />розподіляє кошти.</div>
                <div className="info_block">Прозорість та безпека <br />забезпечена <span>смарт-<br />конктрактами</span> </div>
            </div>
            <div className="know_more">
                <a className='btn_know_more' href="#">Дізнатись більше</a>
                <img src='/icons/icon_arrow-forward.svg' alt="" />
            </div>
        </div>
    );
};

export default Service;