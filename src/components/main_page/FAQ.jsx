import React,{useState} from 'react';
import '../../style/faq.scss'
import { Link, useNavigate } from 'react-router-dom';






const FAQ = () => {

    const [arr,setArr] = useState([
        'З якої суми, я можу почати інвестувати?',
        'Що таке смарт-контракти?',
        'Яка мінімальна сума інвестицій?',
        'Як відбувається монетизація?',
        'Для кого створений D.A.I.Wo?',
        'А чому саме D.A.I.Wo, а не банки чи інвестиційні фонди?',

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
                     <div className="faq_question" key={index} >
                        <div className="faq_question_text">{item}</div>
                        <div className="faq_question_arrow">
                             <img src='/icons/icon_arrow-purple.svg' alt="icon" />
                        </div>
                    </div>
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