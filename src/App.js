import './App.css';

import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "./components/Skills";

const App = () => {
    return (<div>
        <Home/>
        <Skills/>
        <Projects/>
    </div>);
};

export default App;
