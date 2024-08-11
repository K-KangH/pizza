import React, { useState } from 'react';
// import Header from './Header';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [userpw, setUserpw] = useState('');

    const loginClick = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, userpw });
            console.log('Login successful:', response.data);
            // 로그인 성공 후 필요한 작업을 추가할 수 있습니다. 예: 페이지 리디렉션
        } catch (error) {
            // 에러 처리 로직을 추가하세요. 예: 사용자에게 에러 메시지 표시
            alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
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
                    onChange={e => setUsername(e.target.value)}
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
                    onChange={e => setUserpw(e.target.value)}
                    required
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;
