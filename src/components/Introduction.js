import React, {useEffect} from 'react';
import './css/Introduction.css'
import gsap from 'gsap'

const Introduction = () => {

    useEffect(() => {
        const tl= gsap.timeline({defaults: {ease: 'power2.out'}})
        tl.fromTo('.transforming', .3, {opacity:'0'}, {opacity:1})
        tl.to('.transforming', .5, {y: '0%', stagger:.06})
    }, [])

    return (
        <div className={'introduction'}>
            <p className={'transforming introduction__greeting'}>Hi, my name is</p>
            <h1 className={'transforming introduction__name'}>Ahmed Gomaa</h1>
            <h2 className={'transforming introduction__work'}>I create Web App.</h2>
            <p className={"transforming introduction__desc"}>I'm a full stack web developer, with so many front-end and back-end skills.</p>
            <a href="mailto:engahmedgomaa97@gmail.com" className="transforming introduction__button">
                <p>Contact Me!</p>
            </a>
        </div>
    );
};

export default Introduction;