import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/page/KeywordPage.css';


const KeywordPage = () => {
    return (
        <div className='page'>
            <Header/>
            <div className='middle'>키워드</div>
            <Footer/>
        </div>
    );
};

export default KeywordPage;