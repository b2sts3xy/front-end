import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/page/KeywordPage.css';


const KeywordPage = () => {
    const [keyword, setKeyword] = useState('');
    const [word, setWord]= useState('');
    const onChange = (e) => {
    setKeyword(e.target.value);
    
    };
    const onReset = (e) => {
        setWord([
            ...word,
            keyword
        ])
        setKeyword(''); 
    }

    return (
        <div className='page'>
            <Header title = "키워드 알림 설정"/>
            <div className='middle'>      
                <input className="k_Text"
                type="text"
                placeholder="키워드를 입력하세요"
                onChange={onChange}
                value={keyword}
                />
            <button className="k_Add" onClick={onReset}>추가</button>
            <section className="keywordSection">
            {
            word && word.map((ele)=>{
                    return <div className='keyword' >#{ele}</div>
                })
            }
            </section>
            </div>
            <Footer/>
        </div>
    );
};

export default KeywordPage;