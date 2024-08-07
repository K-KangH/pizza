import Video from './sections/01_Video';
import Swiper from './sections/02_Swiper';
import React, { useState } from 'react';

function Main({ introDone }) {
    return (
        <section id="main">
            <Video introDone={introDone} />
            <Swiper />
        </section>
    );
}

export default Main;
