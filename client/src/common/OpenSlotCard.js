import React from "react";
import '../styles/OpenSlotCard.css'
import OpenSlotIcon from '../images/Icons/Open_Slot.png'

export const OpenSlotCard = (props) => {

    return (
        <>
            <div className={`open-slot-card player-info ${props.charRole}`}>
                <img src={OpenSlotIcon} alt={'open slot'} />
                <p>Open Slot</p>
            </div>
        </>
    )
};
