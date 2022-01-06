import React from 'react'
import login from '../CSS/Login.module.css'
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";
import Popup from '../Popup'
import LogoBaby from '/Project/FrontEnd/quan-ly-mang-thai-va-sinh-con/src/img/baby.png';
import PropTypes from 'prop-types';
import SignUp from '../SignUp'
import LoginInvalid from '../PopupLoginInvalid';

async function loginUser(credentials) {
    return fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [passwordShow, setPasswordShow] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupLogin, setPopupLogin] = useState(false);
    const togglePassword = () => {
        setPasswordShow(!passwordShow);
    };
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div>
            <div id={login.main}>
                {/* onSubmit={handleSubmit} */}
                <div id={login.content} >
                    <div className={login.contentSection}>
                        <div className={login.contentHeader}>
                            <img src={LogoBaby} alt="Logo em bé" className={login.babyImage} />
                            <h1 className={login.contentHeading}>Đăng nhập</h1>
                        </div>
                        <div className={login.contentBody}>
                            <div className={login.userName}>
                                <label>Tên đăng nhập:</label>
                                <input onChange={e => setUserName(e.target.value)} id="inputTDN" type="text"
                                    placeholder="Vui lòng nhập tên đăng nhập" onFocus={
                                        () => document.getElementById("errorLog").style.display = 'none'
                                    } />
                                <p id="errorLog" hidden> <strong style={{ color: 'red', fontSize: '12px' }} >
                                    Tên đăng nhập không được để trống !!! </strong></p>
                            </div>
                            <div className={login.password}>
                                <label>Mật khẩu:</label>
                                <div className={login.inputWithIcon}>
                                    <input onChange={e => setPassword(e.target.value)} type={passwordShow ? "text" : "password"}
                                        placeholder="Vui lòng nhập mật khẩu" />
                                    <button className={`${login.btn} ${login.eyeIcon}`} onClick={togglePassword}>
                                        {passwordShow ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>

                                <Link to="/" style={{ textDecoration: "underline" }} in react>
                                    Quên mật khẩu
                                </Link>
                                <button className={login.signInBtn} onClick={() => {
                                    // console.log('username: ', username)
                                    // console.log('password: ', password)
                                    if (document.getElementById("inputTDN").value.trim() === '')
                                        document.getElementById("errorLog").style.display = 'block'
                                }
                                }>
                                    Đăng nhập
                                </button>
                                <p>
                                    Hoặc đăng ký tài khoản
                                    <Link to="/dangky" onClick={() => setButtonPopup(true)}> Đăng ký</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <SignUp />
            </Popup>
            <Popup trigger={popupLogin} setTrigger={setPopupLogin}>
                <LoginInvalid />
            </Popup>
            <Routes>
                {/* <Route path="/dangky" element={<SignUp />} /> */}
            </Routes>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};