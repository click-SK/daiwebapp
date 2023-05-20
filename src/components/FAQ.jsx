import React,{useState} from 'react';
import './../style/faq.scss'
import logoSecond from './../img/logo_second.svg'
import arrowPurple from './../img/icons/icon_arrow-purple.svg'
import arrowForward from './../img/icons/icon_arrow-forward.svg'




const FAQ = () => {

    const [arr,setArr] = useState([
        'З якої суми, я можу почати інвестувати?',
        'Що таке смарт-контракти?',
        'Яка мінімальна сума інвестицій?',
        'Як відбувається монетизація?',
        'Для кого створений D.A.I.Wo?',
        'А чому саме D.A.I.Wo, а не банки чи інвестиційні фонди?',

    ]);
    
    return (
        <div className='faq'>
            <div className="faq_wrap">
                <div className="faq_btn">FAQ</div>
                <div className="faq_answer">
                    <div className="faq_answer_text">Відповіді на найбільш поширені <br /> запитання – все, що вам потрібно знати</div>
                    <div className="faq_answer_logo">
                        <img src={logoSecond} alt="logo" />
                    </div>
                </div>

                {arr.map((item,index)=> (
                     <div className="faq_question" key={index} >
                        <div className="faq_question_text">{item}</div>
                        <div className="faq_question_arrow">
                             <img src={arrowPurple} alt="icon" />
                        </div>
                    </div>
                ))}

               
                <div className="know_more">
                <a className='btn_know_more' href="#">Дізнатись більше</a>
                <img src={arrowForward} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;