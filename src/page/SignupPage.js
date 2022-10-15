import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './../components/Footer';
import Header from './../components/Header';
import axios from 'axios';
import '../style/page/SignUpPage.css'

const SignupPage = () => {
    const PROXY = process.env.REACT_APP_PROXY;
    const departmentData = [
        '전자공학부',
        '건축학부',
        '산업공학부',
        '화학소재공학부',
        '신소재공학부',
        '기계공학과',
        '기계설계공학과',
        '기계시스템공학과',
        '토목공학과',
        '컴퓨터공학과',
        '컴퓨터소프트웨어공학과',
        '광시스템공학과',
        '메디컬IT융합공학과',
        '환경공학과',
        'IT융합학과',
        '인공지능공학과',
        '수리빅데이터학과',
        '화학생명과학과',
        '경영학과'
    ]

    const [sortValue, setSortValue]=useState('');
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate('');

    const selectValue = (e) => {
        setSortValue(e.target.value);
    }

    const handleSinup = (e) => {
        const userData = {
            username: username,
            password: password,
            department: sortValue,
        };

        axios.post(`${PROXY}signup/`, userData)
        .then((res) => {
            console.log(res.data);
            navigate('/login');
        })
        .catch((err)=>{
            console.log(err)
            alert('실패하였습니다')
            setUsername('');
            setPassword('');
            localStorage.clear();
        })
    }

    return (
        <div className='page'>
            <Header title = "회원가입"/>
            <div className='middle'>
                <input type="text" placeholder='아이디' value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="password" placeholder='비밀번호' value={password} onChange={e => setPassword(e.target.value)}/>
                <select value={sortValue} onChange={selectValue} >
                        <option value=''>학과선택</option>
                        {departmentData && departmentData.map((ele,idx) => <option key={idx} value={ele}>{ele}</option>)}
                </select>
                <button onClick={() => {handleSinup()}}>회원가입</button>
            </div>
            <Footer/>
        </div>
    );
};

export default SignupPage;