import { gsap } from 'gsap';
import React, { useRef, useEffect } from 'react';

function Banner() {
    const bannerRef = useRef(null);
    const closeBtnRef = useRef(null);

    // ms 단위 배너 x 닫기이후 재등장
    const bannerBack = 2000;

    useEffect(() => {
        gsap.to(bannerRef.current, {
            y: '-=30',
            duration: 1.5,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
        });
    });

    // 닫기 버튼 클릭 시 상자 숨기기
    const closeBtnClick = () => {
        gsap.to(bannerRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                setTimeout(() => {
                    gsap.to(bannerRef.current, {
                        opacity: 1,
                        duration: 0.5,
                    });
                }, bannerBack);
            },
        });
    };

    return (
        <div
            ref={bannerRef}
            className="banner-container inner"
        >
            <div className="banner"></div>
            <div
                ref={closeBtnRef}
                className="btn-close"
                onClick={closeBtnClick}
            ></div>
        </div>
    );
}

export default Banner;
