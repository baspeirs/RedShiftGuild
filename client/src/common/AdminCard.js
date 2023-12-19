import React from "react";
import '../styles/AdminCard.css';
import Kaosyn from '../images/AdminPictures/Kaosyn.png';
import Dmontri from '../images/AdminPictures/Dmontri.png';
import Willfeign from '../images/AdminPictures/Willfeign.png';
import Jointboi from '../images/AdminPictures/Jointboi.png';

export const AdminCard = (props) => {

    const adminImage = (admin) => {
        switch (props.admin.toLowerCase()) {
            case 'willfeign':
            return Willfeign
        case 'dmontri':
            return Dmontri
        case 'kaosyn':
            return Kaosyn
        case 'jointboi':
            return Jointboi
            default:
                break;
        }
    }
    return (
        <div className="admin-card">
            <div className="admin-image" style={{
                backgroundImage: `url(${adminImage(props.admin)})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}></div>
            <div className="admin-card-info">
                <div className="admin-card-title">
                    <h4>{`${props.role}: `}</h4>
                    <h3>{props.admin}</h3>
                </div>
                <p>{props.quote}</p>
            </div>
        </div>
    )
};
