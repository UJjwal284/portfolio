import React from 'react';
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = {
        'Online Shopping': ["Spring Boot", "MySQL", "JS", "HTML", "CSS", "Java"],
        'Portfolio': ["ReactJS", "HTML", "CSS", "JS"],
        'CI/CD Infrastructure Automation': ["Terraform", "AWS", "Github"],
        'AWS Infrastructure Automation': ["Terraform", "AWS", "Github", "Spring Boot", "MySQL"],
        'Kafka with Spring Boot': ["Kafka", "Spring Boot", "MySQL"]
    };
    return (<div id="projects" className="projects-section">
        <h1 className={'mx-auto heading'}>Projects</h1>
        <div className="overlay-container align-items-start px-5 mt-4">
            <div className={'mx-5 d-flex flex-wrap justify-content-center align-items-center rounded py-5'} id={'projects-bg'}>
                {Object.entries(projects).map(([key, values]) => (
                    <ProjectCard projectKey={key} projectValue={values}/>))}
            </div>
        </div>
    </div>);
};

export default Projects;