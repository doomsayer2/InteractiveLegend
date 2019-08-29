import React from 'react';

const Empty = () => {
    return <span/>
};

const LoadingIndicator = (props) => {
    return <div className={props.css}>
        <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
};

export {Empty, LoadingIndicator}