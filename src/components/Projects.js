import React from 'react';
import './css/Projects.css';

const projects = [
    {
      icon: 'fas fa-code',
      header: 'Employ Me',
      desc: 'App for connecting developers with each others and with the employers',
      tec: 'react, nodeJS, MongoDB, Redux, heroku, Jsonwebtoken.',
      github: 'https://github.com/ahmed-gomaa2/EmployMe',
      extLink: 'https://nameless-anchorage-41801.herokuapp.com/dashboard'
    },
    {
        icon: 'fas fa-share-alt',
        header: 'Sharry',
        desc: 'App for sharing your posts with your friends.',
        tec: 'react, firebase, firestore, redux, redux-thunk',
        github: 'https://github.com/ahmed-gomaa2/sharry',
        extLink: 'https://sharry-16d2b.web.app/'

    },
    {
        icon: 'fas fa-comments',
        header: 'Chatty',
        desc: 'App for chatting with friends.',
        tec: 'react, firebase, firestore, redux, redux-thunk',
        github: 'https://github.com/ahmed-gomaa2/chat-app',
        extLink: 'https://chat-app-8a0e2.web.app/'
    },
    {
        icon: 'fas fa-briefcase',
        header: 'Work Recorder',
        desc: 'app for mobile maintenance shop recording their work history.',
        tec: 'react, node, mongoDB, MLab, redux.',
        github: 'https://github.com/ahmed-gomaa2/work-recorder',
        extLink: 'https://stark-sands-26066.herokuapp.com'
    },
    {
        icon: 'fas fa-shopping-cart',
        header: 'Shopping Store',
        desc: 'Shopping app for grocery products.',
        tec: 'react, node, mongoDB, MLab, redux',
        github: 'https://github.com/ahmed-gomaa2/grocerooo.git',
        extLink: 'https://whispering-brushlands-97312.herokuapp.com/'
    },
    {
        icon: 'fab fa-google',
        header: 'Google search clone',
        desc: 'simple clone for fetching data from google api when searching for and term.',
        tec: 'react, firebase',
        github: 'https://github.com/ahmed-gomaa2/google.git',
        extLink: 'https://fir-73d44.web.app/'
    },

    {
        icon: 'fab fa-spotify',
        header: 'Spotify clone',
        desc: 'spotify login and user interface.',
        tec: 'react, spotify web api, firebase ',
        github: 'https://github.com/ahmed-gomaa2/spotify.git',
        extLink: 'https://spotify-b41cc.web.app/'
    },

    {
        icon: 'fab fa-facebook-messenger',
        header: 'Messenger clone',
        desc: 'simple clone for messenger for sending messages only.',
        tec: 'react, firebase',
        github: 'https://github.com/ahmed-gomaa2/messenger.git',
        extLink: 'https://messenger-46ce5.web.app/'
    },

    {
        icon: 'fab fa-whatsapp',
        header: 'WhatsApp clone',
        desc: 'simple clone for creating chat rooms, sending messages and building the user interface.',
        tec: 'react, firebase, google oauth',
        github: 'https://github.com/ahmed-gomaa2/whatsapp.git',
        extLink: 'https://whatsapp-54ff5.web.app/'
    },

    {
        icon: 'fas fa-list',
        header: 'Todo App',
        desc: 'Todo App with some good functionality like adding tasks, removing, editing and completing tasks as wel as planing for week.',
        tec: 'react, firebase, redux',
        github: 'https://github.com/ahmed-gomaa2/todo-app.git',
        extLink: 'https://todo-cd3fe.web.app/'
    },

];

const projectCards = document.getElementsByClassName('projects__item');
const projectsContainer = document.getElementsByClassName('projects');

const isElementInViewport = (elem) => {

    let elemTop = elem.offsetTop + projectsContainer[0].offsetTop;
    let viewportBottom = window.scrollY + window.innerHeight;

    return elemTop < (viewportBottom - 50) && elemTop + elem.offsetHeight > window.scrollY;
}

window.addEventListener('scroll', () => {

    for(let i = 0; i < projectCards.length; i++) {

        if (
            isElementInViewport(projectCards[i])
        ) {
            projectCards[i].classList.add('projects__active');
        }else {
            projectCards[i].classList.remove('projects__active');

        }
    }

})

const Projects = () => {

    return (
        <div id={'projects'} className={'projects'}>
            <h1 className="projects__header">
                My Projects
            </h1>
            {projects?.map(project => (
                <div className="projects__item">
                    <div className="projects__itemIcons">
                        <a className={'projects__itemIconWrapper'}><i  className={`${project.icon} projects__itemIcon`}></i></a>
                        <div className="projects__itemRight">
                            <a target={'_blank'} href={project.github} className={'projects__itemIconWrapper'}><i className={'fab fa-github projects__itemGithub'}></i></a>
                            <a target={'_blank'} href={project.extLink} className={'projects__itemIconWrapper'}><i className="fas fa-external-link-alt projects__itemOpen"></i></a>
                        </div>
                    </div>

                    <div className="projects__itemInfo">
                        <h2 className="project__itemHeader">
                            {project.header}
                        </h2>
                        <p className="projects__itemDesc">
                            {project.desc}
                        </p>
                    </div>
                    <div className="projects__itemTec">
                        <p>
                            {project.tec}
                        </p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Projects;