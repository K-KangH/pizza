import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);
function Intro() {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.logoboxs',
                start: 'center center',
                scrub: true,
                pin: 'true',
                // end: 'bottom bottom',
                markers: 'true',
            },
        });
        tl.from('.logobox-red', {
            // x: -150,
            // y: -100,
            scale: '2',
            opacity: 0,
            // rotation: 180,
            duration: 100,
            start: 'center center',
            // end: '300+=',
        });
        tl.from('.logobox-blue', {
            // x: -150,
            // y: 100,
            opacity: 0,
            // rotation: -180,
            // duration: 1,
        });

        tl.to('.logotext-n', {
            duration: 1,
            ease: 'none',
            duration: 3,
            text: {
                value: "Domino's",
                newclassName: 'logotext-n',
            },
        });

        tl.to('.sec-intro', { opacity: 0, scale: 0, top: 0, left: 0 });
    }, []);

    return (
        <div className="pin01">
            <section className="sec sec-intro">
                <div className="logoboxs">
                    <div className="logobox logobox-red">
                        <div className="dot dot-1"></div>
                    </div>
                    <div className="logobox logobox-blue">
                        <div className="dot dot-2"></div>
                        <div className="dot dot-3"></div>
                    </div>
                </div>
                <div className="logotext">
                    <div className="logotext-n"></div>
                </div>
            </section>
        </div>
    );
}

export default Intro;
