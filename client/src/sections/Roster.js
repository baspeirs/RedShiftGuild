import React from 'react';
import '../styles/Roster.css';
import { useSelector } from 'react-redux';
import { PlayerInfoCard } from '../common/PlayerInfoCard';
import { OpenSlotCard } from '../common/OpenSlotCard'

export const Roster = () => {
    const tanks = useSelector(state => state.roster.roster.tanks);
    const healers = useSelector(state => state.roster.roster.healers);
    const damageDealers = useSelector(state => state.roster.roster.damageDealers);

    return (
        <section id='roster-section'>
            <h2 className="section-header">ROSTER</h2>
            <h3 className='section-subheader'>Group 1</h3>
            <div className='roster-content'>
                <div className='roster-group'>
                    <div className='tanks-and-heals-group'>
                        <div className='battle-group'>
                            <h3 className='bg-header'>Tanks</h3>
                            <div className='tanks-group bg-list'>
                                {tanks?.map((tank, index) => {
                                    return tank.player
                                        ? <PlayerInfoCard
                                            key={index}
                                            specialization={tank.specialization}
                                            player={tank.player}
                                            playerInfo={tank}
                                            charRole={'tank'}
                                        />
                                        : <OpenSlotCard
                                            charRole={'tank'}
                                        />
                                })}
                            </div>
                        </div>
                        <div className='battle-group'>
                            <h3 className='bg-header'>Healers</h3>
                            <div className='heals-group bg-list'>
                                {healers?.map((healer, index) => {
                                    return healer.player
                                        ? <PlayerInfoCard
                                            key={index}
                                            specialization={healer.specialization}
                                            player={healer.player}
                                            playerInfo={healer}
                                            charRole={'healer'}
                                        />
                                        : <OpenSlotCard
                                            charRole={'healer'}
                                        />
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='dps-side'>
                        <div className='battle-group'>
                            <h3 className='bg-header'>DPS</h3>
                            <div className='dps-group bg-list'>
                                {damageDealers?.map((damageDealer, index) => {
                                    return damageDealer.player
                                        ? <PlayerInfoCard
                                            key={index}
                                            specialization={damageDealer.specialization}
                                            player={damageDealer.player}
                                            playerInfo={damageDealer}
                                            charRole={'dps'}
                                        />
                                        : <OpenSlotCard
                                            charRole={'dps'}
                                        />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
