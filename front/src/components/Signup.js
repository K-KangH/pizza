import React, { useState } from 'react';
// import Header from './Header';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [userpw, setUserpw] = useState('');
    const [pwCheck, setPwCheck] = useState('');

    const signupClick = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', { username, userpw, pwCheck });
            console.log('Login successful:', response.data);
            // 회원가입 성공 시
        } catch (error) {
            // 에러 처리 로직을 추가하세요. 예: 사용자에게 에러 메시지 표시
            alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div>
            {/* <Header /> */}
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
            <form
                className="signup"
                onSubmit={signupClick}
            >
                <h1>회원가입 페이지</h1>
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
                <label htmlFor="pwCheck">
                    <b>Confirm Password</b>
                </label>
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    name="pwCheck"
                    id="pwCheck"
                    value={pwCheck}
                    onChange={e => setPwCheck(e.target.value)}
                    required
                />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default Signup;
