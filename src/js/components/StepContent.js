import React, { Fragment } from 'react';
import parse from 'html-react-parser';

const StepContent = ({ content }) => {
    const contentHTML = parse(content);

    return (
        <Fragment>
            <span>{contentHTML}</span>
        </Fragment>
    )
};

export default StepContent;