import React from 'react';
import './css/Projects.css'
import FolderIcon from '@material-ui/icons/Folder';

const projects = [
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

    {
      icon: 'fab fa-youtube',
      header: 'Youtube Clone',
      desc: 'youtube clone of searching and playing videos and user interface using youtube api',
      tec: 'react, firebase, redux, youtube api v3',
      github: 'https://github.com/ahmed-gomaa2/youtube.git',
      extLink: 'https://clone-26004.web.app/'
    },

    {
        icon:'fab fa-tiktok',
        header: 'Tik Tok clone',
        desc: 'Tik Tok clone for the playing page only',
        tec: 'react, firebase, redux',
        github: 'https://github.com/ahmed-gomaa2/tik-tok.git',
        extLink: 'https://tik-tok-clone-1b177.web.app/'
    }
]

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
                            <a href={project.github} className={'projects__itemIconWrapper'}><i className={'fab fa-github projects__itemGithub'}></i></a>
                            <a href={project.extLink} className={'projects__itemIconWrapper'}><i className="fas fa-external-link-alt projects__itemOpen"></i></a>
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