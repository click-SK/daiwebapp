import './../style/profile.scss'
import rateItem from './../img/rate_item.svg'
import airItem from './../img/air_item.svg'
import totalNum from './../img/total_num.svg'
import chart from './../img/chart_profile.svg'
import cryptoCoin1 from './../img/icons/icon_cryptocurrency-usdt.svg'
import arrowWhite from './../img/icons/icon_arrow_white.svg'
import vectorDown from './../img/icons/icon_vector_down.svg'
import daiwoCoin from './../img/icons/icon_daiwo_coin.svg'
import deposit from './../img/icons/icon_deposit.svg'
import withdrawal from './../img/icons/icon_withdrawal.svg'
import arrowForward from './../img/icons/icon_arrow-forward.svg'
import Footer from './Footer'


const Profile = () => {
    return ( 
        <div className="profile">
            <div className="main_background">
                <div className="profile_spotlight_one"></div>
                <div className="profile_spotlight_two"></div>
                <div className="profile_spotlight_three"></div>
            </div>
            <div className="container">
                <div className="profile_indicators">
                    <div className="air__prof">
                        <div className="card_title_prof">Air:</div>
                        <div className="buster_item">
                            <img src={airItem} alt="Item" />
                        </div>
                    </div>
                    <div className="rate_prof">
                        <div className="card_title_prof">Rate:</div>
                        <div className="number_item">
                            <img src={rateItem} alt="Item" />
                        </div>
                    </div>
                    <div className="rate_prof">
                        <div className="card_title_prof">Emission:</div>
                        <div className="number_item">
                            <img src={rateItem} alt="Item" />
                        </div>
                    </div>
                </div>
                <div className="profile_main_desk">
                    <div className="desk_one">
                        <div className="total_number">
                            <div className="desk_title">Загальна кількість:</div>
                            <div className="total_number_item">
                                <div className="number_item_prof">
                                    <h4 className='coin_name'>USDT</h4>
                                    <div className="number_block">
                                        <img src={totalNum} alt="total" />
                                    </div>
                                </div>
                                <div className="number_item_prof">
                                    <h4 className='coin_name'>Daiwo</h4>
                                    <div className="number_block">
                                        <img src={totalNum} alt="total" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile_analysis">
                            <div className="desk_title">Аналіз:</div>
                            <div className="analysis_board">
                                <div className="analysis_chart">
                                    <img src={chart} alt="chart" />
                                </div>
                                <div className="chart_info">
                                    <div className="chart_info_data">
                                        <div className="data_block">
                                            <h5>День</h5>
                                            <h5>Тиждень</h5>
                                            <h5>Місяць</h5>
                                        </div>
                                        <div className="amount_block">
                                            <p>$475</p>
                                            <p>$3.327</p>
                                            <p>$12.131</p>
                                        </div>
                                    </div>
                                    <div className="chart_info_coin">
                                        <h5 className='purple'>USDT</h5>
                                        <h5 className='emerald'>Daiwo</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="desk_two">
                        <div className="desk_title">Обмінник:</div>
                        <div className="exchange_line_one">
                            <div className="line_one_header">
                                <p className='avalible'>Доступно</p>
                                <p className='sum'>1234</p>
                            </div>
                            <div className="exchange_input_block">
                                <input type="text" className='exchange_input' placeholder='Введіть к-сть'/>
                                <div className='coin_selector'>
                                    <img src={cryptoCoin1} alt="crypto" />
                                    <img className='arr_click' src={arrowWhite} alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <div className="vector_down">
                            <img src={vectorDown} alt="vector" />
                        </div>
                        <div className="exchange_line_one">
                            <div className="exchange_input_block">
                                <input type="text" className='exchange_input' placeholder='Введіть к-сть'/>
                                <div className='coin_selector'>
                                    <img src={daiwoCoin} alt="crypto" />
                                    <img className='arr_click' src={arrowWhite} alt="arrow" />
                                </div>
                            </div>
                            <div className="line_two_header">
                                <p className='commission'>Комісія</p>
                                <p className='sum_commission'>14</p>
                            </div>
                        </div>
                        <div className="total_amount_sum">
                            <h5>Cума до отримання:</h5>
                            <p className='total_sum'>123456</p>
                            <img className='coin_icon' src={daiwoCoin} alt="coin" />
                        </div>
                        <button className='exchange_btn'>Обміняти</button>
                    </div>
                </div>
                <div className="transaction_history">
                    <div className="desk_title">Історія транзакцій:</div>
                    <div className="history_desk">
                        <div className="transaction_name">
                            <img src={deposit} alt="" />
                            <h5>Депозит</h5>
                        </div>
                        <div className="transaction_date">Квітень 25.22</div>
                        <div className="transaction_sum">+$874</div>
                    </div>
                    <div className="history_desk">
                        <div className="transaction_name">
                            <img src={withdrawal} alt="" />
                            <h5>Виведення</h5>
                        </div>
                        <div className="transaction_date">Квітень 25.22</div>
                        <div className="transaction_sum">+$874</div>
                    </div>
                    <div className="history_desk">
                        <div className="transaction_name">
                            <img src={deposit} alt="" />
                            <h5>Депозит</h5>
                        </div>
                        <div className="transaction_date">Квітень 25.22</div>
                        <div className="transaction_sum">+$874</div>
                    </div>
                    <div className="show_more">
                        <a className='btn_show_more' href="#">Дізнатись більше</a>
                        <img src={arrowForward} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Profile;