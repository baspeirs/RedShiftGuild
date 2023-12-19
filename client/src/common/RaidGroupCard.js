import React from "react";
import '../styles/RaidGroupCard.css';

export const RaidGroupCard = (props) => {

    return (
        <div className="raid-group-card">
            <h4 className="raid-group-card-header">Group 1</h4>
            <div className="raid-group-card-details">
            <p>Gruul || Mag || SSC || TK</p>
            <p>Tuesdays & Wednesdays 8:00 PM ST - 11 PM ST</p>
            <p>Invites @ 7:30 PM ST</p>
            </div>
        </div>
    )
};
