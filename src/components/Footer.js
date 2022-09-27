import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/components/Footer.css'

function Footer(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    const goKeyword = () => {
        navigate('/keyword')
    }
    return (
        <div className='bottom'>
            {
                location.pathname === '/' ?
                <>
                    <img src='img/Add.png' alt='' onClick={goKeyword}/>
                </> :
                <>
                    <img src='img/Home.png' alt='' onClick={goHome}/>
                </>
            }
        </div>
    );
}

export default Footer;