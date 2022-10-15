import React, { useState } from 'react';
import Header from './../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './../components/Footer';
import '../style/page/LoginPage.css'

const LoginPage = () => {
    const PROXY = process.env.REACT_APP_PROXY;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        const user = {
            username: username,
            password: password
        };

        axios.post(`${PROXY}login/`, user)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token',res.data.token);
            navigate('/');
        })
        .catch((err)=>{
            console.log(err)
            // setUsername('');
            // setPassword('');
            localStorage.clear();
        })
    }

    return (
        <div className='page'>
            <Header title = "로그인"/>
            <div className='middle'>
                <input type="text" placeholder='아이디' value={username} onChange={e => setUsername(e.target.value)}/><br />
                <input type="password" placeholder='비밀번호' value={password} onChange={e => setPassword(e.target.value)}/><br />
                <button onClick={()=>{handleLogin()}}>확인</button>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;