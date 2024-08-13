import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import { useAuth } from './AuthContext';
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function Intro() {
    const rBR = useRef(null);
    const bBR = useRef(null);
    const tBR = useRef(null);
    const component = useRef(null);
    const { handleHideIntro } = useAuth();
    const [visible, setVisible] = useState(true);
    const scrollRef = useRef(null);

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
                    console.log('intro done');
                    window.scrollTo(0, 0);
                    // introDone();
                    // done();
                    handleHideIntro();
                    tl.kill();
                },
            });
        }, [component]);

        return () => {
            ctx.revert(); // cleanup!
        };
    }, [handleHideIntro]);

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
