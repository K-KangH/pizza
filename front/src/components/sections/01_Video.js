import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { useInView } from 'react-intersection-observer';

function Video() {
    const { ref: inViewRef, inView: isVisible } = useInView({
        threshold: 0.7,
    });

    const playerRef = useRef(null);
    const [playerReady, setPlayerReady] = useState(false);

    const onReady = (event) => {
        playerRef.current = event.target;
        setPlayerReady(true); // 플레이어가 준비되었음을 알림
    };

    const opts = {
        height: '80%',
        width: '95%',
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

    useEffect(() => {
        if (playerReady && playerRef.current) {
            if (isVisible) {
                playerRef.current.mute();
                playerRef.current.playVideo();
            } else {
                playerRef.current.mute();
                playerRef.current.pauseVideo();
            }
        }
    }, [isVisible, playerReady]);

    return (
        <>
            <section
                id="video-container"
                ref={inViewRef}
                style={{ display: 'block' }}
            >
                <YouTube
                    videoId="WqNBIkFOoE4"
                    style={{
                        display: 'flex',
                        alignItems: 'top',
                        justifyContent: 'center',
                        height: '100vh',
                        width: '100%',
                    }}
                    opts={opts}
                    onReady={onReady}
                />
            </section>
        </>
    );
}

export default Video;
