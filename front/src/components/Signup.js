import React, { useState } from 'react';
// import Header from './Header';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [userpw, setUserpw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [useraddress, setUserAddress] = useState(); // 상세 주소
    const [postcode, setPostcode] = useState(); // 우편번호
    const [detailaddress, setDetailaddress] = useState(); // 상세 주소

    const scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    const searchAddress = useDaumPostcodePopup(scriptUrl);

    const handleAddress = (data) => {
        setPostcode(data.zonecode);
        setDetailaddress(data.address);
    };

    const handleClick = () => {
        searchAddress({ onComplete: handleAddress });
    };

    const navigate = useNavigate();
    const signupClick = async (e) => {
        e.preventDefault();
        const fullAddress = `${postcode} ${detailaddress} ${useraddress}`;
        if (userpw !== pwCheck) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        try {
            const response = await axios.post('/register', { username, userpw, useraddress: fullAddress });
            alert(response.data.message); // 백엔드에서 설정해둔 메세지 출력
            navigate('/home'); // 회원가입 성공 시 /home으로 리다이렉션
        } catch (error) {
            if (error.response && error.response.data.message) {
                alert(error.response.data.message); // 에러와 에러에 대해서 사전정의 해둔경우의 메세지!
            } else {
                alert('회원가입 중 오류가 발생했습니다.'); // 기타 에러 처리
            }
        }
    };

    return (
        <div className="signup-container inner">
            <form
                className="signup"
                onSubmit={signupClick}
            >
                <h3>회원가입</h3>
                <div className="signup">
                    <div className="userInfo">
                        <input
                            autocomplete="off"
                            type="text"
                            placeholder="아이디"
                            name="username"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="userpw"></label>
                        <input
                            autocomplete="off"
                            type="password"
                            placeholder="비밀번호"
                            name="userpw"
                            id="userpw"
                            value={userpw}
                            onChange={(e) => setUserpw(e.target.value)}
                            required
                        />
                        <label htmlFor="pwCheck"></label>
                        <input
                            autocomplete="off"
                            type="password"
                            placeholder="비밀번호 확인"
                            name="pwCheck"
                            id="pwCheck"
                            value={pwCheck}
                            onChange={(e) => setPwCheck(e.target.value)}
                            required
                        />
                    </div>
                    <div className="userAbbress">
                        {/* <button
                            className="signup-btn"
                            onClick={handleClick}
                        >
                            주소검색
                        </button> */}
                        <div
                            className="signup-btn"
                            onClick={handleClick}
                            role="button"
                            style={{ cursor: 'pointer' }}
                        >
                            주소검색
                        </div>
                        <input
                            autocomplete="off"
                            id="postcode"
                            value={postcode}
                            placeholder="우편번호"
                            onClick={handleClick}
                        />
                        <input
                            autocomplete="off"
                            id="detailaddress"
                            value={detailaddress}
                            placeholder="주소"
                            onClick={handleClick}
                        />
                        <input
                            autocomplete="off"
                            type="text"
                            value={useraddress}
                            onChange={(e) => setUserAddress(e.target.value)}
                            placeholder="상세주소"
                        />
                    </div>
                </div>
                <button
                    className="signup-btn"
                    id="joinbtn"
                    type="submit"
                >
                    회원가입
                </button>
            </form>
        </div>
    );
}

export default Signup;
