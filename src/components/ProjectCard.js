import React from 'react';

const ProjectCard = (props) => {
    return (<div className="project flex-column mt-2 rounded">
        <h2 className="rounded mx-1">{props.projectKey}</h2>
        <div className="d-flex flex-wrap justify-content-center mt-2">
            {props.projectValue.map((value, index) => (
                <p key={index}
                   className="rounded mx-1 px-2">
                    {value}
                </p>
            ))}
        </div>
    </div>);
};

export default ProjectCard;