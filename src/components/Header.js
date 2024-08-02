function Header({ introRef, contentRef }) {
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
                            <a
                                href="#none"
                                onClick={() => {
                                    introRef.current.style.display = 'block';
                                    contentRef.current.style.opacity = '0';
                                }}
                            >
                                HOME
                            </a>
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
                        <a href="#none">로그인</a>
                    </dl>
                    <dl>
                        <a href="#none">주문하기</a>
                    </dl>
                </div>
            </div>
        </header>
    );
}

export default Header;

// function Header({ introRef, contentRef }) {
//     // const clickHome = () => {
//     //     introRef.current.style.display = 'block';
//     //     wrapRef.current.style.opacity = '0';
//     // };

//     return (
//         <header id="header">
//             <div className="inner head-in">
//                 <div id="h-logo">
//                     <a href="#none">DominoPizza</a>
//                 </div>
//                 <div className="haeder-gnb">
//                     <dl>
//                         <dt>
//                             <a
//                                 // href="#none"
//                                 onClick={() => {
//                                     introRef.current.style.display = 'block';
//                                     contentRef.current.style.opacity = '0';
//                                 }}
//                             >
//                                 HOME
//                             </a>
//                         </dt>
//                     </dl>
//                     <dl>
//                         <dt>
//                             <a href="#none">PIZA</a>
//                         </dt>
//                     </dl>
//                     <dl>
//                         <dt>
//                             <a href="#none">STORY</a>
//                         </dt>
//                     </dl>
//                 </div>
//                 <div className="haeder-rnb">
//                     <dl>
//                         <a href="#none">회원가입</a>
//                     </dl>
//                     <dl>
//                         <a href="#none">로그인</a>
//                     </dl>
//                     <dl>
//                         <a href="#none">주문하기</a>
//                     </dl>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;
