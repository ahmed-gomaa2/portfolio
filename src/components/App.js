import React from 'react';
import './css/App.css'
import Header from './Header'
import SocialLinks from "./SocialLinks";
import Introduction from "./Introduction";
import Skills from './Skills'
import Projects from "./Projects";
import Footer from "./Footer";

const App = () => {
    return (
        <div className={'app'}>
            <Header />
            <div className="app__body">
                <SocialLinks />
                <Introduction />
                <Skills />
                <Projects />
                <Footer />
            </div>
        </div>
    );
};

export default App;