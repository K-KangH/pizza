import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function Intro({ introRef, contentRef, introDone }) {
    const rBR = useRef(null);
    const bBR = useRef(null);
    const tBR = useRef(null);
    const component = useRef(null);

    const done = () => {
        const test = document.querySelector('body');
        const tl = gsap.timeline();
        tl.set(introRef.current, { display: 'none' })
            .set(
                test,
                {
                    height: '100vh',
                    overflowY: 'hidden',
                    onComplete: () => {
                        gsap.set(test, { height: 'auto', overflowY: 'visible', delay: 1 });
                    },
                },
                '<',
            )
            .to(contentRef.current, { opacity: 1, duration: 1.5 });
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(rBR.current, {
                opacity: 0,
                rotation: 225,
            });

            gsap.set(bBR.current, {
                opacity: 0,
                y: 300,
                rotation: 225,
            });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    start: 'center center',
                    end: 'bottom top',
                    scrub: 0.75,
                    pin: true,
                    anticipatePin: 1,
                    // markers: true,
                    once: true,
                },
            });

            tl.to(rBR.current, {
                onStart: () => console.log('redbox start'),
                duration: 2,
                x: 80,
                y: 90,
                opacity: 1,
                rotation: 405,
                onComplete: () => console.log('redbox done'),
            });

            tl.to(bBR.current, {
                onStart: () => console.log('bluebox start'),
                duration: 2,
                x: 20,
                y: 110,
                opacity: 1,
                rotation: 405,
                onComplete: () => console.log('bluebox done'),
            });

            tl.to(tBR.current, {
                duration: 5,
                ease: 'none',
                text: {
                    value: "Domino's",
                    newClass: 'logotext-n',
                },
            });

            tl.to(component.current, {
                duration: 1,
                opacity: 0,
                scale: 0.2,
                delay: 0,
                onComplete: () => {
                    window.scrollTo(0, 0);
                    introDone();
                    done();
                    console.log('intro done');
                    tl.kill();
                },
            });
        }, component);

        return () => {
            ctx.revert(); // cleanup!
        };
    }, []);

    return (
        <div
            ref={component}
            className="sec sec-intro"
        >
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
        </div>
    );
}

export default Intro;
