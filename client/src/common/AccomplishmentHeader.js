import React from "react";
import '../styles/AccomplishemntHeader.css';

export const AccomplishmentHeader = (props) => {
    const completed = props.completed ? 'Completed' : 'Incomplete'

    return (
        <div className="accomplishment-header">
            <p className="phase-title">{`phase ${props.phase}:`}</p>
            <p className="phase-completion">{completed}</p>
        </div>
    );
};
