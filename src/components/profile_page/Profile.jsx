import '../../style/profile.scss'
import TransactionHistory from './TransactionHistory';


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
                            <img src='/img/air_item.svg' alt="Item" />
                        </div>
                    </div>
                    <div className="rate_prof">
                        <div className="card_title_prof">Rate:</div>
                        <div className="number_item">
                            <img src='/img/rate_item.svg' alt="Item" />
                        </div>
                    </div>
                    <div className="rate_prof">
                        <div className="card_title_prof">Emission:</div>
                        <div className="number_item">
                            <img src='/img/rate_item.svg' alt="Item" />
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
                                        <img src='/img/total_num.svg' alt="total" />
                                    </div>
                                </div>
                                <div className="number_item_prof">
                                    <h4 className='coin_name'>Daiwo</h4>
                                    <div className="number_block">
                                        <img src='/img/total_num.svg'  alt="total" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile_analysis">
                            <div className="desk_title">Аналіз:</div>
                            <div className="analysis_board">
                                <div className="analysis_chart">
                                    <img src='/img/chart_profile.svg' alt="chart" />
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
                                    <img src='/icons/icon_cryptocurrency-usdt.svg' alt="crypto" />
                                    <img className='arr_click' src='/icons/icon_arrow_white.svg' alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <div className="vector_down">
                            <img src='/icons/icon_vector_down.svg' alt="vector" />
                        </div>
                        <div className="exchange_line_one">
                            <div className="exchange_input_block">
                                <input type="text" className='exchange_input' placeholder='Введіть к-сть'/>
                                <div className='coin_selector'>
                                    <img src='/icons/icon_daiwo_coin.svg' alt="crypto" />
                                    <img className='arr_click' src='/icons/icon_arrow_white.svg' alt="arrow" />
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
                            <img className='coin_icon' src='/icons/icon_daiwo_coin.svg' alt="coin" />
                        </div>
                        <button className='exchange_btn'>Обміняти</button>
                    </div>
                </div>
                <TransactionHistory/>
            </div>
        </div>
    );
}
 
export default Profile;