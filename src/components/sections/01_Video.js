import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { useInView } from 'react-intersection-observer';

function Video() {
    const { ref: inViewRef, inView: isVisible } = useInView({
        threshold: 0.7,
    });

    const playerRef = useRef(null);

    const onReady = (event) => {
        playerRef.current = event.target;
        // console.log('yt이미 준비되서 재생시작함!');
        // event.target.mute();
        // event.target.playVideo();
    };
    const opts = {
        height: '80%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            rel: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: 'WqNBIkFOoE4',
        },
    };
    useEffect(
        (introDone) => {
            if (isVisible) {
                console.log(isVisible);
                playerRef.current.mute();
                playerRef.current.playVideo();
            } else {
                console.log('안보임 ㅎ!');
                // playerRef.current.mute();
                // playerRef.current.pauseVideo();
            }
        },
        [isVisible]
    );
    return (
        <>
            <section
                id="video-container"
                ref={inViewRef}
            >
                <YouTube
                    videoId="WqNBIkFOoE4"
                    style={{ height: '100vh' }}
                    opts={opts}
                    onReady={onReady}
                    ref={playerRef}
                />
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Video;
