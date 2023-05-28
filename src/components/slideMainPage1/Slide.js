import './slide.css'
import "../../style/popUp.scss";
import CarouselCompound from './carousel-compound'

export default function Slide() {

  const arrNumb = new Array(27).fill(1);
  return (
    <div className="app__main-container">
      <CarouselCompound 
      infinite
      loop
      // control
      interval={5000}
      >
        <CarouselCompound.Page>
          <div className="cart_item card_rate">
                        <div className="duplicat_rate">
                            <div className="card_title">Rate:</div>
                            <div className="card_item_one">
                            <ul className='rate_list'>
                                {arrNumb.map((item, idx) => (
                                    <li className='rate_list_item' key={idx}>
                                    {item}
                                    {idx === 14 && <span>,</span>}
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        </div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
        <div className="cart_item card_air">
                        <div className="air_duplicat">
                            <div className="card_title">Air:</div>
                            <div className="card_item_two">
                                <img src='/img/air_item.svg' alt="Item" />
                            </div>
                        </div>
                        </div>
        </CarouselCompound.Page>
      </CarouselCompound>
    </div>
  )
}
