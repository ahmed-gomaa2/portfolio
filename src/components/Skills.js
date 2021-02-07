import React from 'react';
import './css/Skills.css'

const skills = ['HTML5',
    'CSS3', 'Bootstrap 4', 'Semantic UI', 'Material-UI', 'Javascript', 'Heroku', 'GitHub', 'React JS','Redux', 'Reactjs Hooks', 'NodeJS', 'MongoDB', 'Firebase'
]

const levels = [94, 80, 71, 60, 70, 90, 85, 77, 90, 88, 60, 80, 70, 90]

const skillsBars = document.getElementsByClassName('skill-details');
const skillsContainer = document.getElementsByClassName('about');

const isElementInViewport = (elem) => {

    let elemTop = elem.offsetTop + skillsContainer[0].offsetTop;
    let viewportBottom = window.scrollY + window.innerHeight;

    return elemTop < (viewportBottom) && elemTop + elem.offsetHeight > window.scrollY;
}

document.addEventListener('scroll', () => {
    for (let i = 0; i < skillsBars.length; i++) {
        if(isElementInViewport(skillsBars[i])){
            skillsBars[i].childNodes[2].childNodes[0].style.width = `${levels[i]}%`
        }else {
            skillsBars[i].childNodes[2].childNodes[0].style.width = 0;
        }
    }
});

const Skills = () => {
    React.useEffect(() => {
        setTimeout(() => {
            skillsContainer[0].classList.add('introduction__visible')
        }, 300)
    }, [])

    return (
        <div id={'about'} className={'about'}>
            <div className="about__info">
                <h1 className={'transforming'}>About Me</h1>
                <p className={'transforming'}>Hi, I'm Ahmed, a software engineer. </p>
                <p className={'transforming'}>I learned web development with my self because, I enjoy coding so mush.</p>
                <p className={'transforming'}>So I learned so many <span>skills</span> Like:</p>
            </div>

            <div className={'skills'}>
                {skills.map(skill => {
                    const skillIndex = skills.indexOf(skill)
                    return <div className="skill-details">
                        <p className="skill-name">{skill}</p>
                        <p className="skill-percent">{levels[skillIndex]}%</p>
                        <div className="meter">
                            <span style={{width: 0}}></span>
                        </div>
                    </div>
                })}
            </div>

        </div>
    );
};

export default Skills;