import Video from './sections/01_Video';
import React, { useState } from 'react';

function Main({ introDone }) {
    return (
        <section id="main">
            <Video introDone={introDone} />
        </section>
    );
}

export default Main;
