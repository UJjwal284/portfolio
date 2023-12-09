import React from 'react';

const Resume = () => {
    const handleDownload = () => {
        const filePath = process.env.PUBLIC_URL + '/Ujjwal Pratap Ratnakar - Resume.pdf';
        const a = document.createElement('a');
        a.href = filePath;
        a.download = 'Ujjwal Pratap Ratnakar - Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (<div id="resume" className="resume-section">
        <div className="overlay-container align-items-center justify-content-center px-5">
            <button className='btn-danger rounded-5 downloadBtn' onClick={handleDownload}>Download Resume</button>
        </div>
    </div>);
};

export default Resume;