import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
                            <a href="/">HOME</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#none">PIZA</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#slider-container">STORY</a>
                        </dt>
                    </dl>
                </div>
                <div className="haeder-rnb">
                    <dl>
                        <a href="/register">회원가입</a>
                    </dl>
                    <dl>
                        <a href="/login">로그인</a>
                    </dl>
                    <dl>
                        <a href="/OrderCreate">주문하기</a>
                    </dl>
                </div>
                <div className="haeder-rnb">
                    <dl>
                        <span>XXX님 환영합니다.</span>
                    </dl>
                    <dl>
                        <a href="/mypage">내 정보</a>
                    </dl>
                    <dl>
                        <a href="/OrderCreate">주문하기</a>
                    </dl>
                </div>
            </div>
        </header>
    );
}

export default Header;
