import React from 'react';

const WorkCard = (props) => {
    return (<div className="work py-2 my-2 rounded-5 mx-5">
        <h5 className="fw-bold mx-1 my-0">{props.workValue.Title}</h5>
        <h5 className="my-0">・</h5>
        <p className="fw-bold mx-1 my-0">{props.workValue.Company}</p>
        <p className="ms-auto fw-bold mx-1 my-0">{props.workValue.From}</p>
        <p className="my-0">-</p>
        <p className=" fw-bold mx-1 my-0">{props.workValue.To}</p>
    </div>);
};

export default WorkCard;