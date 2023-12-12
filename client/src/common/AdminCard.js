import React from "react";
import '../styles/AdminCard.css';
import Willfeign from '../images/AdminPictures/Kaoson.png'

export const AdminCard = (props) => {

    return (
        <div className="admin-card">
            <div className="admin-image" style={{
                backgroundImage: `url(${Willfeign})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}></div>
            <div className="admin-card-info">
                <h3>Your Overlord - Willfeign</h3>
                <p>"Go on, get!"</p>
            </div>
        </div>
    )
}