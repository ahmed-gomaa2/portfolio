import React, {useEffect} from 'react';
import './css/Introduction.css'

const introduction = document.getElementsByClassName('introduction');

const isElementInViewport = (elem) => {
    const elemTop = elem.offsetTop;
    const viewportBottom = window.scrollY + window.innerHeight;
    console.log(elemTop, viewportBottom)
    return elemTop < viewportBottom && elemTop + elem.offsetHeight > window.scrollY
}

window.addEventListener('scroll', () => {
    if(isElementInViewport(introduction[0])) {
        introduction[0].classList.add('introduction__visible')
    }else {
        introduction[0].classList.remove('introduction__visible')
    }
})

const Introduction = () => {

    React.useEffect(() => {
        setTimeout(() => {
            introduction[0].classList.add('introduction__visible')
        }, 300)
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