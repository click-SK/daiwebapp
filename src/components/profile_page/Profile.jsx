import React, { useState, useEffect } from "react";
import '../../style/profile.scss'
import TransactionHistory from './TransactionHistory';
import AirCounter from '../AirCounter';
import CounterYear from '../CounterYear';
import Counter from '../Counter';
const Profile = () => {
    const [allData, setAllData] = useState([]);
    const [lastRate, setaLastRate] = useState(0);
    const [lastAir, setLastAir] = useState(0);
    const [time, setTime] = useState(0);
    const [totalbalance, setTotalbalance] = useState(0);
    const [totalbalanceFinal, setTotalbalanceFinal] = useState(0);
    const [angle, setAngle] = useState(0);
    const [lastEmission, setLastEmission] = useState(0);
  
    useEffect(() => {
      fetch("https://calc-server.herokuapp.com/getall")
        .then((res) => res.json())
        .then((res) => setAllData(res));
    }, []);
  
    useEffect(() => {
      if (allData.length != 0) {
        let totalSumHeader = 0;
        let totalSum = 0;
        allData.forEach((item) => {
          totalSumHeader = item.balans + totalSumHeader;
        });
        setTotalbalanceFinal(totalSumHeader.toFixed(0));
  
        for (let i = 0; i < allData.length - 1; i++) {
          totalSum = allData[i].balans + totalSum;
        }
        setTotalbalance(totalSum.toFixed(0));
        returnLastItem(allData);
      }
    }, [allData]);
  
    const returnLastItem = (arr) => {
      setaLastRate(arr[arr.length - 1]?.rate);
      setLastEmission(arr[arr.length - 1]?.emission);
      setLastAir(arr[arr.length - 1]?.air * 100);
      const dateString = arr[arr.length - 1].createdAt;
      const dateObject = new Date(Date.parse(dateString));
      const dateMilliseconds = dateObject.getTime();
      setTime(dateMilliseconds);
    };
  
    useEffect(() => {
      const num = lastAir;
  
      if (num == 0) {
        setAngle(num + 215);
      } else if (num <= 5) {
        setAngle(num + 222);
      } else if (num <= 10) {
        setAngle(num + 232);
      } else if (num <= 15) {
        setAngle(num + 240);
      } else if (num <= 20) {
        setAngle(num + 251);
      } else if (num <= 25) {
        setAngle(num + 265);
      } else if (num <= 30) {
        setAngle(num + 275);
      } else if (num <= 35) {
        setAngle(num + 280);
      } else if (num <= 40) {
        setAngle(num + 292);
      } else if (num <= 45) {
        setAngle(num + 305);
      } else if (num <= 50) {
        setAngle(num + 312);
      } else if (num <= 55) {
        setAngle(num + 320);
      } else if (num <= 60) {
        setAngle(num + 330);
      } else if (num <= 65) {
        setAngle(num + 342);
      } else if (num <= 70) {
        setAngle(num + 349);
      } else if (num <= 75) {
        setAngle(num + 358);
      } else if (num <= 80) {
        setAngle(num + 370);
      } else if (num <= 85) {
        setAngle(num + 382);
      } else if (num <= 90) {
        setAngle(num + 389);
      } else if (num <= 95) {
        setAngle(num + 395);
      } else if (num <= 100) {
        setAngle(num + 405);
      }
    }, [lastAir]);

    const arrNumb = new Array(27).fill(1);
    const arrNum2 = new Array(15).fill(1);

    
    return (
      <div className="profile">
        <div className="main_background">
          <div className="profile_spotlight_one"></div>
          <div className="profile_spotlight_two"></div>
          <div className="profile_spotlight_three"></div>
        </div>
        <div className="container">
          <div className="profile_indicators">
            {/* <div className="air__prof">
                        <div className="card_title_prof">Air:</div>
                        <AirCounter angle={angle} lastAir={lastAir} />
                    </div> */}
            <div className="cart_item card_air">
              <div className="air_duplicat">
                <div className="card_title">Air:</div>
                <div className="card_item_two">
                  <AirCounter angle={angle} lastAir={lastAir} />
                </div>
              </div>
            </div>
            {/* <div className="rate_prof">
              <div className="card_title_prof">Rate:</div>
              <div className="number_item">
                <div className="card_item_one">
                  <ul className="rate_list">
                    {arrNumb.map((item, idx) => (
                      <li className="rate_list_item" key={idx}>
                        {item}
                        {idx === 14 && <span>,</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="cart_item card_rate">
              <div className="duplicat_rate">
                <div className="card_title">Rate:</div>
                <div className="card_item_one">
                  {/* <ul className='rate_list'>
                                {arrNumb.map((item, idx) => (
                                    <li className='rate_list_item' key={idx}>
                                    {item}
                                    {idx === 14 && <span>,</span>}
                                    </li>
                                ))}
                                </ul> */}
                  {lastRate && (
                    <CounterYear
                      firstValue={Number(lastRate)}
                      val={Number(lastRate * (lastAir / 100) + lastRate)}
                      time={time}
                      isBool={false}
                    />
                  )}
                </div>
              </div>
            </div>
            {/* <div className="rate_prof">
              <div className="card_title_prof">Emission:</div>
              <div className="number_item">
                <div className="card_item_one">
                  <ul className="rate_list">
                    {arrNumb.map((item, idx) => (
                      <li className="rate_list_item" key={idx}>
                        {item}
                        {idx === 14 && <span>,</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="rate_prof">
              <div className="card_title_prof">Emission:</div>
              <div className="number_item">
                <div className="card_item_one">
                  <ul className="rate_list">
                  {lastEmission && <Counter val={lastEmission} />}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="profile_main_desk">
            <div className="desk_one">
              <div className="total_number">
                <div className="desk_title">Загальна кількість:</div>
                <div className="total_number_item">
                  <div className="number_item_prof">
                    <h4 className="coin_name">USDT</h4>
                    <div className="number_block">
                      <div className="card_item_one">
                        <ul className="rate_list">
                          {arrNum2.map((item, idx) => (
                            <li className="rate_list_item" key={idx}>
                              {item}
                              {idx === 11 && <span>,</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="number_item_prof">
                    <h4 className="coin_name">Daiwo</h4>
                    <div className="number_block">
                      <div className="card_item_one">
                        <ul className="rate_list">
                          {arrNum2.map((item, idx) => (
                            <li className="rate_list_item" key={idx}>
                              {item}
                              {idx === 11 && <span>,</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile_analysis">
                <div className="desk_title">Аналіз:</div>
                <div className="analysis_board">
                  <div className="analysis_chart">
                    <img src="/img/chart_profile.svg" alt="chart" />
                  </div>
                  <div className="chart_info">
                    <div className="chart_info_data">
                      <div className="data_block">
                        <h5>
                          День <p>$475</p>
                        </h5>
                        <h5>
                          Тиждень <p>$3.327</p>
                        </h5>
                        <h5>
                          Місяць <p>$12.131</p>
                        </h5>
                      </div>
                      <div className="amount_block"></div>
                    </div>
                    <div className="chart_info_coin">
                      <h5 className="purple">USDT</h5>
                      <h5 className="emerald">Daiwo</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="desk_two">
              <div className="desk_title">Обмінник:</div>
              <div className="exchange_line_one">
                <div className="line_one_header">
                  <p className="avalible">Доступно</p>
                  <p className="sum">1234</p>
                </div>
                <div className="exchange_input_block">
                  <input
                    type="text"
                    className="exchange_input"
                    placeholder="Введіть к-сть"
                  />
                  <div className="coin_selector">
                    <img
                      src="/icons/icon_cryptocurrency-usdt.svg"
                      alt="crypto"
                    />
                    <img
                      className="arr_click"
                      src="/icons/icon_arrow_white.svg"
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
              <div className="vector_down">
                <img src="/icons/icon_vector_down.svg" alt="vector" />
              </div>
              <div className="exchange_line_one">
                <div className="exchange_input_block">
                  <input
                    type="text"
                    className="exchange_input"
                    placeholder="Введіть к-сть"
                  />
                  <div className="coin_selector">
                    <img src="/icons/icon_daiwo_coin.svg" alt="crypto" />
                    <img
                      className="arr_click"
                      src="/icons/icon_arrow_white.svg"
                      alt="arrow"
                    />
                  </div>
                </div>
                <div className="line_two_header">
                  <p className="commission">Комісія</p>
                  <p className="sum_commission">14</p>
                </div>
              </div>
              <div className="total_amount_sum">
                <h5>Cума до отримання:</h5>
                <p className="total_sum">123456</p>
                <img
                  className="coin_icon"
                  src="/icons/icon_daiwo_coin.svg"
                  alt="coin"
                />
              </div>
              <div className="btn_wraper_exchange">
                <button className="exchange_btn">Обміняти</button>
              </div>
            </div>
          </div>
          <TransactionHistory />
        </div>
      </div>
    );
}
 
export default Profile;