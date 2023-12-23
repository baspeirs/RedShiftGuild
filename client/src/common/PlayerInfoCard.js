import React, { useState } from "react";
import { Modal } from "./Modal";
import '../styles/PlayerInfoCard.css'

const importImages = (importedImages) => {
    let images = {};
    importedImages.keys().forEach((item, index) => {
        images[item.replace('./', '')] = importedImages(item);
    });
    return images;
};
const images = importImages(require.context('../images/Icons', false));

const getClassImage = (characterClass) => {
    characterClass = characterClass.toLowerCase()
        .replace('(', '')
        .replace(')', '')
        .replace(' ', '')
    const classImageKey = Object.keys(images).find(image => {
        return image.toLocaleLowerCase().replace('_', '').replace('.png', '')
            .includes(characterClass)
    });

    return images[classImageKey];
};

export const PlayerInfoCard = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className={`player-card player-info ${props.charRole}`} onClick={() => setModalOpen(true)}>
                <img src={getClassImage(props.specialization)} alt={props.specialization} />
                <p>{props.player}</p>
            </div>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                playerInfo={props.playerInfo}
                classImage={getClassImage(props.specialization)}
            />
        </>
    )
};
