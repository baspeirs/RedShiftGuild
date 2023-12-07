import React from "react";
import '../styles/TitleCard.css'

export const TitleCard = props => {

    return (
        <section className="title-card">
            <h1>{props.header}</h1>
            <h2>{props.subHeader1}</h2>
            <h2>{props.subHeader2}</h2>
        </section>
    );
};
