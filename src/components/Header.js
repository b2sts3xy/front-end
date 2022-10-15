import React from 'react';
import '../style/components/Header.css'
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    const goLogin = () => {
        navigate("/login")
    }
    const goSignUp = () => {
        navigate("/signup")
    }
    const goLogout = () => {
        // 로그아웃 통신 추가
        localStorage.removeItem('token');
        navigate("/");
    }
    return (
        <div className='top'>
            {props.title}
            <div className='logbox'>
                {localStorage.getItem('token') ?
                    <>
                        <span onClick={goLogout} className='user-text'>로그아웃</span>
                    </> :
                    <>
                        <span onClick={goLogin} className='user-text'>로그인</span>
                        <span>/</span>
                        <span onClick={goSignUp} className='user-text'>회원가입</span>
                    </>
                }
            </div>
        </div>
    );
}

export default Header;