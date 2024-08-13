import React, { useState } from 'react';
// import Header from './Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
    // 미리 만들어둔 유저 정보를 담을 함수!
    const { saveUserInfo } = useAuth();
    //로그인창에서 유저 정보 받아서 백엔드에 뿌려줄 변수
    const [username, setUsername] = useState('');
    const [userpw, setUserpw] = useState('');

    const navigate = useNavigate();

    const loginClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, userpw });
            //로그인 성공하면
            // 유저의 데이터를 객체로 담고!
            // +@ 이는 나중에 토큰적용시 반드시 없앨것.
            const userData = response.data.user;
            // 전역변수에 담아두기!
            saveUserInfo(userData);

            // 로그인성공 메세지출력
            alert(response.data.message);
            navigate('/home'); // 로그인 성공 시 /home으로 리다이렉션
        } catch (error) {
            if (error.response && error.response.data.message) {
                // 백엔드에서 설정해둔 메세지 출력
                alert(error.response.data.message);
            } else {
                alert('로그인 중 오류가 발생했습니다.'); // 기타 에러 처리
            }
        }
    };

    return (
        <div className="login-container inner">
            <h2>로그인</h2>
            <div className="login-input">
                <form
                    className="Login"
                    onSubmit={loginClick}
                >
                    <label htmlFor="username">
                        <b>Username</b>
                    </label>
                    <input
                        autoComplete="off"
                        type="text"
                        placeholder="아이디"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="userpw">
                        <b>Password</b>
                    </label>
                    <input
                        autoComplete="off"
                        type="password"
                        placeholder="비밀번호"
                        name="userpw"
                        id="userpw"
                        value={userpw}
                        onChange={(e) => setUserpw(e.target.value)}
                        required
                    />
                    <button
                        className="login-btn"
                        type="submit"
                    >
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
