import './styles/css/styles.css';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
    return (
        <div>
            <div className="demo"></div>
            <div id="intro">
                <Intro />
            </div>
            {/* <div id="warp">
                <Header />
            </div> */}
        </div>
    );
}

export default App;
