import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/page/MainPage.css';

const MainPage = () => {
    return (
        <div className='page'>
            <Header/>
            <div className='middle'>메인페이지</div>
            <Footer/>
        </div>
    );
};

export default MainPage;