import Video from './sections/01_Video';
import Swiper from './sections/02_Swiper';
import Banner from './sections/05_banner';
import Header from './Header';

function Main1({ introDone }) {
    return (
        <div className="wrap">
            <section id="main">
                <Video introDone={introDone} />
                <Swiper />
                <Banner />
            </section>
        </div>
    );
}

export default Main1;
