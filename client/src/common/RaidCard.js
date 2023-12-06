import React from "react";
import '../styles/RaidCard.css';
import MagtheridonImage from '../images/RaidBossImage/TBC-Magtheridons-Lair-Magtheridon-test5-4.jpg';
import GruulAndMaulgar from '../images/RaidBossImage/GruulMaulgar-test5-4.jpg';
import Karazhan from '../images/RaidBossImage/WoW-Karazhan-Entrance-scaled2.jpg';

export const RaidCard = (props) => {
    let bossImage = null;
    switch (props.raid.toLowerCase()) {
        case 'magtheridon':
            bossImage = MagtheridonImage
            break;
        case 'gruul and maulgar':
            bossImage = GruulAndMaulgar
            break;
        case 'karazhan':
            bossImage = Karazhan
            break;
        default:
            bossImage = null
            break;

    }

    return (
        <div className="raid-card" style={{
                    backgroundImage: `url(${bossImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="empty"></div>
                    <div className="raid-details">
                        <h3>{props.raid}</h3>
                        <p>{props.completion}</p>
                    </div>
                </div>
    );
};