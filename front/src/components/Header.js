import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Header({ introDone }) {
    // const clickHome = () => {
    //     introRef.current.style.display = 'block';
    //     wrapRef.current.style.opacity = '0';
    // };

    return (
        <header id="header">
            <div className="inner head-in">
                <div id="h-logo">
                    <a href="#none">DominoPizza</a>
                </div>
                <div className="haeder-gnb">
                    <dl>
                        <dt>
                            <a href="/">Intro</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <Link to="/home">Main</Link>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#none">PIZA</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="/#slider-container">STORY</a>
                            {/* <Link to="/home#slider-container">STORY</Link> */}
                        </dt>
                    </dl>
                </div>
                <div className="haeder-rnb">
                    <dl>
                        <Link to="/register">회원가입</Link>
                    </dl>
                    <dl>
                        <Link to="/login">로그인</Link>
                    </dl>
                    <dl>
                        <Link to="/orders/:id">주문하기</Link>
                    </dl>
                </div>
                <div className="haeder-rnb">
                    <dl>
                        <Link to="/users/:id">XXX님 환영합니다.</Link>
                    </dl>
                    <dl>
                        <Link to="/orderlist/:id">주문조회</Link>
                    </dl>
                    <dl>
                        <Link to="/orders/:id">주문하기</Link>
                    </dl>
                </div>
            </div>
        </header>
    );
}

export default Header;
