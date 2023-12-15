import React from "react";
import '../styles/TitleCard.css'

export const TitleCard = props => {

    return (
        <section id="title-card">
            <div className="redshift-neon-logo">
                <h1>{props.header}</h1>
                <h2>{props.subHeader1}</h2>
                <h2>{props.subHeader2}</h2>
            </div>
        </section>
    );
};
