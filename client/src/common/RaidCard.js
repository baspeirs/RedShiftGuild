import React from "react";
import '../styles/RaidCard.css';
import MagtheridonImage from '../images/RaidBossImage/TBC-Magtheridons-Lair-Magtheridon-test5-4.jpg';
import GruulAndMaulgar from '../images/RaidBossImage/GruulMaulgar-test5-4.jpg';
import Karazhan from '../images/RaidBossImage/WoW-Karazhan-Entrance-scaled2.jpg';
import Serpentshrine from '../images/RaidBossImage/WoW-SSC-LadyVoshj.png';
import TempestKeep from '../images/RaidBossImage/WoW-TK-Bosses.png';
import MountHyjal from '../images/RaidBossImage/Archimonde-Strategy-Guide-Mount-Hyjal-TBC-Classic.jpg';
import BlackTemple from '../images/RaidBossImage/illidan-stormrage-in-burning-crusade-classic.jpg'

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
        case 'serpentshrine cavern':
            bossImage = Serpentshrine
            break;
        case 'tempest keep':
            bossImage = TempestKeep
            break;
        case 'mount hyjal':
            bossImage = MountHyjal
            break;
        case 'black temple':
            bossImage = BlackTemple
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
                <h4>{props.raid}</h4>
                <p>{props.completion}</p>
            </div>
        </div>
    );
};
