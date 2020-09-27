import React from 'react';
import './css/Introduction.css'
import profile from './images/portfolioImage.jpg'

const Introduction = () => {
    return (
        <div className={'introduction'}>
            <p className={'introduction__greeting'}>Hi, my name is</p>
            <h1 className={'introduction__name'}>Ahmed Gomaa</h1>
            <h2>I create Web App.</h2>
            <p className={"introduction__desc"}>I'm a full stack web developer, with so many front-end and back-end skills.</p>
            <a href="" className="introduction__button">
                <p>Contact Me!</p>
            </a>
        </div>
    );
};

export default Introduction;