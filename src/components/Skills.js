import React from 'react';
import './css/About.css'

const skills = ['HTML5', 'CSS3', 'Bootstrap 4', 'Semantic UI', 'Material-UI', 'Javascript', 'Heroku', 'GitHub', 'React JS','Redux', 'Reactjs Hooks', 'NodeJS', 'MongoDB', 'Firebase']

const levels = [94, 80, 71, 60, 70, 90, 85, 77, 90, 88, 60, 80, 70, 90]


const Skills = () => {
    return (
        <div className={'about'}>
            <div className="about__info">
                <h1>About Me</h1>
                <p>Hi, I'm Ahmed, a software engineer. </p>
                <p>I learned web development with my self because, I enjoy coding so mush.</p>
                <p>So I learned so many <span>skills</span> Like:</p>
            </div>

            {skills.map(skill => {
                const skillIndex = skills.indexOf(skill)
                return <div className="skill-details">
                    <p className="skill-name">{skill}</p>
                    <p className="skill-percent">{levels[skillIndex]}%</p>
                    <div className="meter">
                        <span style={{width: `${levels[skillIndex]}%`}}></span>
                    </div>
                </div>
            })}
        </div>
    );
};

export default Skills;