import React from 'react';

const Home = () => {
    return (<div id="about" className="about-section">
        <img src={'bg.jpg'} className="background-image" alt={'bg'}/>
        <div className="overlay-container">
            <div className="overlay-content">
                <h1 className={'fw-bolder'}>Hi There,</h1>
                <h1 className={'fw-bolder'}>I'm Ujjwal</h1>
                <p className={'fw-semibold'}>I am a Software Developer</p>
            </div>
            <img src={'avatar.png'} width={300} alt={'pfp'} className={'ms-5'}/>
        </div>
    </div>);
};

export default Home;