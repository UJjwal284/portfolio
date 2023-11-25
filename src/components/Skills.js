import React from 'react';
import SkillCard from "./SkillCard";

const Skills = () => {
    const skills = ["Java", "Spring Boot", "Docker", "CI/CD", "Jenkins", "Python", "Terraform", "Git", "Amazon Web Services", "Kubernetes", "Release Management",
        "SQL", "Linux", "ReactJS"];
    return (<div id="skills" className="skills-section">
        <h1 className={'mx-auto heading mt-5'}>Skills</h1>
        <div className="overlay-container align-items-start px-5 mt-4">
            <div className={'mx-5 d-flex flex-wrap justify-content-center align-items-center py-5 rounded'} id={'skills-bg'}>
                {skills.map(skill => (
                    <SkillCard skill={skill}/>
                ))}
            </div>
        </div>
    </div>);
};

export default Skills;