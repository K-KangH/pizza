import React, { useRef, useState } from 'react';
import './styles/css/styles.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';

function App() {
    const [introDone, setIntroDone] = useState(false);
    const contentRef = useRef(null);
    const introRef = useRef(null);

    const handleintroDone = () => {
        setIntroDone(true);
    };

    // const handleHideIntro = () => {
    //     setShowIntro(false);
    // };

    return (
        <div id="wrap">
            <div
                id="intro"
                ref={introRef}
                style={{
                    position: 'relative',
                    height: '100vh',
                    width: '100vw',
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
                />
                <Main introDone={introDone} />
            </div>
        </div>
    );
}

export default App;
