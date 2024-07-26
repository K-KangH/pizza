function Header() {
    return (
        <header id="haeder">
            <div className="inner head-in">
                <div className="haeder-logo">
                    <a href="#none">글자는 안보이게 될 예정 + before로 로고 넣기</a>
                </div>
                <div>
                    <div className="haeder-gnb">
                        <dl>
                            <dt>
                                <a href="#none">HOME</a>
                            </dt>
                        </dl>
                        <dl>
                            <dt>
                                <a href="#none">PIZA</a>
                            </dt>
                        </dl>
                        <dl>
                            <dt>
                                <a href="#none">STORY</a>
                            </dt>
                        </dl>
                    </div>
                    <div className="haeder-rnb">
                        <dl>
                            <a href="#none">회원가입</a>
                        </dl>
                        <dl>
                            <a href="#none">주문하기</a>
                        </dl>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
