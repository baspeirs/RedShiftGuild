import React from "react";
import ReactDom from "react-dom";
import '../styles/Modal.css'

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7',
    zIndex: 1000
}

export const Modal = (props) => {

    if (!props.open) return null;

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>

            <div className="player-modal">
                <div style={{ border: '5px solid #182335', outline: '5px solid #E15546', borderRadius: '5px', padding: '15px' }}>
                    <div className="modal-header">
                        <img className='modal-header-image' src={props.classImage} alt={`${props.playerInfo.specialization}`} />
                        <div className="modal-header-text">
                            <p className='modal-header-player'>{props.playerInfo.player}</p>
                            <p className='modal-header-spec'>{props.playerInfo.specialization}</p>
                        </div>
                    </div>
                    <div className='modal-content'>
                        <p>{`Current Role: ${props.playerInfo.role}`}</p>
                        <p>{`Profession 1: ${props.playerInfo.profession1}`}</p>
                        <p>{`Profession 2: ${props.playerInfo.profession2}`}</p>
                        <p>{`Attuned: ${props.playerInfo.attuned}`}</p>
                    </div>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
};
