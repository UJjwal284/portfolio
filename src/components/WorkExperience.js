import React from 'react';
import WorkCard from "./WorkCard";

const WorkExperience = () => {
    const works = {
        '1': {
            'Title': 'Software Engineer Intern',
            'Company': 'Incedo Inc.',
            'From': 'Jan 2022',
            'To': 'June 2022'
        },
        '2': {
            'Title': 'Software Engineer',
            'Company': 'Incedo Inc.',
            'From': 'July 2022',
            'To': 'Present'
        }
    };
    return (<div id="work" className="work-section pt-5">
        <h1 className={'mx-auto heading mt-5'}>Work Experience</h1>
        <div className="overlay-container align-items-start px-5 mt-4">
            <div className={'mx-5 d-flex flex-wrap justify-content-center align-items-center rounded py-5'}
                 id={'work-bg'}>
                {Object.entries(works).reverse().map(([key, values]) => (
                    <WorkCard key={key} workKey={key} workValue={values}/>))}
            </div>
        </div>
    </div>);
};

export default WorkExperience;