import React, { useRef, useState, useEffect } from 'react';
import './styles/css/styles.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';
// import Login from './components/members/Login';

function App() {
    const [introDone, setIntroDone] = useState(false);
    // const [message, setMessage] = useState('ttttt');
    const contentRef = useRef(null);
    const introRef = useRef(null);

    const handleintroDone = () => {
        setIntroDone(true);
    };

    // 백엔드로 임시 요청을 보내는 부분
    useEffect(() => {
        fetch('http://localhost:5000/test')
            .then((response) => response.json())
            .then((data) => {
                console.log('백엔드 응답:', data.message); // 받은 메시지를 콘솔에 출력
            })
            .catch((error) => console.error('Error:', error)); // 에러 처리
    }, []);

    return (
        <div id="wrap">
            <div
                id="intro"
                ref={introRef}
                style={{
                    position: 'relative',
                    height: '100vh',
                    width: '100%',
                }}
            >
                <Intro
                    contentRef={contentRef}
                    introRef={introRef}
                    introDone={handleintroDone}
                />
            </div>

            <div
                id="content"
                ref={contentRef}
                style={{ opacity: '0' }}
            >
                <Header
                    contentRef={contentRef}
                    introRef={introRef}
                    introDone={introDone}
                />
                <Main introDone={introDone} />
            </div>
        </div>
    );
}

export default App;
