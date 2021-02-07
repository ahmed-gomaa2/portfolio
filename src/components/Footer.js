import React from 'react';
import './css/Footer.css';

const footer = document.getElementsByClassName('footer');

const isElementInViewport = (elem) => {

    let elemTop = elem.offsetTop;
    let viewportBottom = window.scrollY + window.innerHeight;

    return elemTop < (viewportBottom - 50) && elemTop + elem.offsetHeight > window.scrollY;
}

window.addEventListener('scroll', () => {

    if (
        isElementInViewport(footer[0])
    ) {
        footer[0].style.opacity = 1;
    }else {
        footer[0].style.opacity = 0;
    }

})

const Footer = () => {
    return (
        <div id={'footer'} className={'footer'}>
            <h1 className="footer__header">
                Get In Touch
            </h1>

            <div className="footer__links">
                <a target={'blank'} href="https://www.facebook.com/eng.ahmed.gomaa.aly/"><i className={'fab fa-facebook-f'}></i></a>
                <a target={'blank'} href="https://github.com/ahmed-gomaa2"><i className={'fab fa-github'}></i></a>
                <a href="mailto:engahmedgomaa97@gmail.com"><i className={'fab fa-google'}></i></a>
            </div>

            <p className="footer__copyRight">
                Built By Ahmed Gomaa @2020
            </p>
        </div>
    );
};

export default Footer;