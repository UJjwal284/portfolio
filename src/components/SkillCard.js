import React from 'react';

const SkillCard = (props) => {
    return (
        <h5 className={'skill rounded mx-1'} key={props.skill}>{props.skill}</h5>
    );
};

export default SkillCard;