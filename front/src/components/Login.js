import React, { useState } from 'react';
// import Header from './Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState('');
    const [userpw, setUserpw] = useState('');
    const navigate = useNavigate();
    const loginClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, userpw });
            //로그인 성공하면
            // 로그인성공시 메세지
            alert(response.data.message);
            navigate('/home'); // 로그인 성공 시 /home으로 리다이렉션

            // 로그인상태 전역변수
            // 추가해서 관리하기!
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
        <div>
            {/* <Header /> */}
            <form
                className="Login"
                onSubmit={loginClick}
            >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <label htmlFor="username">
                    <b>Username</b>
                </label>
                <input
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
                    type="password"
                    placeholder="비밀번호"
                    name="userpw"
                    id="userpw"
                    value={userpw}
                    onChange={(e) => setUserpw(e.target.value)}
                    required
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;
