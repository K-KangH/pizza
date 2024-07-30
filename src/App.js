import './styles/css/styles.css';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
    return (
        <div
            id="intro"
            style={{
                position: 'relative',
                height: '100vh',
                width: '100vw',
            }}
        >
            <div className="demo"></div>
            <Intro />
            <div className="demo"></div>
        </div>

        // {/* <div id="warp">
        //     <Header />
        // </div> */}
    );
}

export default App;
