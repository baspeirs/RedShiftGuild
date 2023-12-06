import React from "react";
import '../styles/AccomplishemntHeader.css'

export const AccomplishmentHeader = (props) => {
    const completed = props.completed ? 'Completed' : 'Incomplete'

    return (
        <div className="accomplishment-header">
            <h3>{props.phase}</h3>
            <h4>{completed}</h4>
        </div>
    )
};
