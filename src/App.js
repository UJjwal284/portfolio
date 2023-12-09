import './App.css';

import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Resume from "./components/Resume";

const App = () => {
    return (<div>
        <Home/>
        <Skills/>
        <Projects/>
        <WorkExperience/>
        <Resume/>
    </div>);
};

export default App;
