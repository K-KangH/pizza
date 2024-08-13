import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Header() {
    const { userInfo } = useAuth();
    const navigate = useNavigate();
    const handleOrderClick = (e) => {
        if (!userInfo) {
            e.preventDefault(); // 기본 동작(페이지 이동) 막기
            alert('회원가입이 필요합니다. 회원가입 페이지로 이동합니다.');
            navigate('/register'); // 회원가입 페이지로 이동
        }
    };
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
                            <a href="#slider-container">STORY</a>
                            {/* <Link to="/home#slider-container">STORY</Link> */}
                        </dt>
                    </dl>
                </div>
                {!userInfo && (
                    <div className="haeder-rnb">
                        <dl>
                            <Link to="/register">회원가입</Link>
                        </dl>
                        <dl>
                            <Link to="/login">로그인</Link>
                        </dl>
                        <dl>
                            <a
                                href="#none"
                                onClick={handleOrderClick}
                            >
                                주문하기
                            </a>
                        </dl>
                    </div>
                )}
                {userInfo && (
                    <div className="haeder-rnb">
                        <dl>
                            <Link to={`/users/${userInfo?.username}`}>{userInfo?.username}님 환영합니다.</Link>
                        </dl>
                        <dl>
                            <Link to={`/orderlist/${userInfo?.username}`}>주문조회</Link>
                        </dl>
                        <dl>
                            <Link to={`/orders/${userInfo?.username}`}>주문하기</Link>
                        </dl>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
