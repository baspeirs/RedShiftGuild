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
            <div>
                <img className="admin-image" src={`${adminImage(props.admin)}`} alt={`admin ${props.admin}`} />
            </div>
            <div className="admin-card-info">
                <div className="admin-card-title">
                    <h3 className="card-title-role">{`${props.role}: `}</h3>
                    <h3 className="card-title-admin">{props.admin}</h3>
                </div>
                <p>{props.quote}</p>
            </div>
        </div>
    )
};

