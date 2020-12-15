import React from 'react';
import Inner from './Inner';
import bg from '../assets/bg.jpg';

const LClock = () => {

    return <div className='l_clock'>
        <Inner />

        {/*language=SCSS*/}
        <style jsx>{`
            .l_clock{
                height: 100%;
                background: url(${bg});
                background-size: cover;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                width: 100%;
                height: 100vh;
                transition: ease .5s linear;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        `}</style>
    </div>
}

export default LClock;