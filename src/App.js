import React, { useRef } from 'react';
import './styles/css/styles.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';

function App() {
    // const [showIntro, setShowIntro] = useState(true);
    const contentRef = useRef(null);
    const introRef = useRef(null);

    // const handleShowIntro = () => {
    //     setShowIntro(true);
    // };

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
                    // onComplete={handleHideIntro}
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
                <Main />
            </div>
        </div>
    );
}

export default App;
