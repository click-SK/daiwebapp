import React,{useState} from 'react';
import '../../style/faq.scss'
import { Link, useNavigate } from 'react-router-dom';
import ItemValue from './ItemValue';






const FAQ = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [arr,setArr] = useState([
        {   name :'З якої суми, я можу почати інвестувати?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
        {   name :'Що таке смарт-контракти?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
        {   name :'Яка мінімальна сума інвестицій?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
        {   name :'Як відбувається монетизація?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
        {   name :'Для кого створений D.A.I.Wo?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
        {   name :'А чому саме D.A.I.Wo, а не банки чи інвестиційні фонди?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
    ]);


      
    const navigate = useNavigate();

    const handleKnowMoreClick = () => {
    navigate('/faq');
    window.scrollTo(0, 0); // Прокрутка сторінки вгору
    };
    
    return (
        <div className='faq'>
            <div className="faq_wrap">
                <div className="faq_btn">FAQ</div>
                <div className="faq_answer">
                    <div className="faq_answer_text">Відповіді на найбільш поширені запитання – все, що вам потрібно знати</div>
                    <div className="faq_answer_logo">
                        <img src='/img/logo_second.svg' alt="logo" />
                    </div>
                </div>

                {arr.map((item,index)=> (

                        <ItemValue
                        key={index}
                        item = {item}
                        />
   
                    
                ))}

               
                <div className="know_more">
                <button className="btn_know_more" onClick={handleKnowMoreClick}>
                <p>Дізнатись більше</p>
                </button>
                <img src='/icons/icon_arrow-forward.svg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;