import React from 'react';
import './css/App.css'
import Header from './Header'
import SocialLinks from "./SocialLinks";
import Introduction from "./Introduction";
import Skills from './Skills'

const App = () => {
    return (
        <div className={'app'}>
            <Header />
            <div className="app__body">
                <SocialLinks />
                <Introduction />
                <Skills />
            </div>
        </div>
    );
};

export default App;