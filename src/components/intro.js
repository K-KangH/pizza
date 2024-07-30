// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { TextPlugin } from 'gsap/TextPlugin';

// gsap.registerPlugin(ScrollTrigger, TextPlugin);

// function Intro() {
//     const rBR = useRef(null);
//     const bBR = useRef(null);
//     const tBR = useRef(null);

//     useEffect(() => {
//         gsap.set(rBR.current, {
//             x: 50,
//             y: 0,
//             rotation: 45,
//             opacity: 1,
//         });

//         gsap.set(bBR.current, {
//             x: -10,
//             y: 20,
//             rotation: 45,
//             opacity: 1,
//         });

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: '.sec-intro',
//                 // 객체의 xx 가 뷰포트 xx 에 오면 시작
//                 // 현재 객체의 center가 뷰포트 center에 오면
//                 start: 'center center',
//                 // 객체의 xx가 xx에 도착하면 끝
//                 // 객체의 bottom이 top에 도착하면끝
//                 end: 'bottom top',
//                 scrub: true,
//                 pin: true,
//                 // markers: true,
//                 pinSpacing: false,
//                 // pinSpacing: 'margin',
//             },
//         });

//         tl.from(rBR.current, {
//             onStart: () => console.log('redbox start'),
//             duration: 3,
//             x: -150,
//             y: -100,
//             opacity: 0,
//             rotation: 180,
//             onComplete: () => console.log('redbox done'),
//         });

//         tl.from(bBR.current, {
//             onStart: () => console.log('bluebox start'),
//             duration: 3,
//             x: -150,
//             y: 100,
//             opacity: 0,
//             rotation: -180,
//             onComplete: () => console.log('bluebox done'),
//         });

//         tl.to(tBR.current, {
//             duration: 2,
//             ease: 'none',
//             text: {
//                 value: "Domino's",
//                 newclassName: 'logotext-n',
//             },
//         });

//         tl.to('.sec-intro', { duration: 1, opacity: 0, scale: 0, delay: 10 });
//     }, []);

//     return (
//         <div className="pin01">
//             <section className="sec sec-intro">
//                 <div
//                     className="logobox logobox-red"
//                     ref={rBR}
//                 >
//                     <div className="dot dot-1"></div>
//                 </div>
//                 <div
//                     className="logobox logobox-blue"
//                     ref={bBR}
//                 >
//                     <div className="dot dot-2"></div>
//                     <div className="dot dot-3"></div>
//                 </div>
//                 <div className="logotext">
//                     <div
//                         className="logotext-n"
//                         ref={tBR}
//                     ></div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Intro;

//
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function Intro() {
    const rBR = useRef(null);
    const bBR = useRef(null);
    const tBR = useRef(null);

    useEffect(() => {
        // 초기 상태 설정
        gsap.set(rBR.current, {
            x: -150,
            y: -100,
            rotation: 180,
            opacity: 0,
        });

        gsap.set(bBR.current, {
            x: -150,
            y: 100,
            rotation: -180,
            opacity: 0,
        });

        gsap.set(tBR.current, {
            opacity: 0,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.sec-intro',
                start: 'center center',
                end: 'bottom top',

                scrub: true,
                pin: true,
                markers: true,
                pinSpacing: false,
            },
        });

        tl.to(rBR.current, {
            onStart: () => console.log('redbox start'),
            duration: 4,
            x: 80,
            y: -60,
            rotation: 45,
            opacity: 1,
            onComplete: () => console.log('redbox done'),
        });

        tl.to(bBR.current, {
            onStart: () => console.log('bluebox start'),
            duration: 4,
            x: 20,
            y: -40,
            rotation: 45,
            opacity: 1,
            onComplete: () => console.log('bluebox done'),
        });

        tl.to(tBR.current, {
            duration: 5,
            ease: 'none',
            text: {
                value: "Domino's",
                newClass: 'logotext-n',
            },
            opacity: 1,
        });

        tl.to('.sec-intro', { duration: 2, opacity: 0, scale: 0.2, delay: 10 });
    }, []);

    return (
        <div className="pin01">
            <section className="sec sec-intro">
                <div
                    className="logobox logobox-red"
                    ref={rBR}
                >
                    <div className="dot dot-1"></div>
                </div>
                <div
                    className="logobox logobox-blue"
                    ref={bBR}
                >
                    <div className="dot dot-2"></div>
                    <div className="dot dot-3"></div>
                </div>
                <div className="logotext">
                    <div
                        className="logotext-n"
                        ref={tBR}
                    ></div>
                </div>
            </section>
        </div>
    );
}

export default Intro;
