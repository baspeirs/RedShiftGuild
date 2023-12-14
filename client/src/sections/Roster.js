import React from 'react';
import '../styles/Roster.css';
import { useSelector } from 'react-redux';

export const Roster = () => {
    const tanks = useSelector(state => state.roster.roster.tanks);
    const healers = useSelector(state => state.roster.roster.healers);
    const damageDealers = useSelector(state => state.roster.roster.damageDealers);

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
            console.log(characterClass);
            console.log(image.toLocaleLowerCase().replace('_', '').replace('.png', ''));
            return image.toLocaleLowerCase().replace('_', '').replace('.png', '')
                .includes(characterClass)
        });

        return images[classImageKey];
    };

    return (
        <section>
            <h2 className="section-header">Roster</h2>
            <div className='roster-content'>
                <div className='tanks-and-heals-group'>
                    <h3>Tanks</h3>
                    {tanks?.map(tank => {
                        return tank.player
                            ? <div className='player-card player-info'>
                                <img src={getClassImage(tank.specialization)} alt={tank.specialization} />
                                <p>{tank.player}</p>
                            </div>
                            : <p className='player-card no-info'>Open Slot</p>
                    })}
                    <h3>Healers</h3>
                    {healers?.map(healer => {
                        return healer.player
                            ? <div className='player-card player-info'>
                                <img src={getClassImage(healer.specialization)} alt={healer.specialization} />
                                <p>{healer.player}</p>
                            </div>
                            : <p className='player-card no-info'>Open Slot</p>
                    })}
                </div>
                <div className='dps-side'>
                    <h3>DPS</h3>
                    <div className='dps-group'>
                        {damageDealers?.map(damageDealer => {
                            return damageDealer.player
                                ? <div className='player-card player-info'>
                                    <img src={getClassImage(damageDealer.specialization)} alt={damageDealer.specialization} />
                                    <p>{damageDealer.player}</p>
                                </div>
                                : <p className='player-card no-info'>Open Slot</p>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
