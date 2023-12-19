import React from 'react';
import '../styles/Roster.css';
import { useSelector } from 'react-redux';
import { PlayerInfoCard } from '../common/PlayerInfoCard';

export const Roster = () => {
    const tanks = useSelector(state => state.roster.roster.tanks);
    const healers = useSelector(state => state.roster.roster.healers);
    const damageDealers = useSelector(state => state.roster.roster.damageDealers);

    return (
        <section>
            <h2 className="section-header">Roster</h2>
            <div className='roster-content'>
                <div className='tanks-and-heals-group'>
                    <h3>Tanks</h3>
                    {tanks?.map(tank => {
                        return tank.player
                            ? <PlayerInfoCard 
                                specialization={tank.specialization}
                                player={tank.player}
                                playerInfo={tank}
                            />
                            : <p className='player-card no-info'>Open Slot</p>
                    })}
                    <h3>Healers</h3>
                    {healers?.map(healer => {
                        return healer.player
                            ? <PlayerInfoCard 
                            specialization={healer.specialization}
                            player={healer.player}
                            playerInfo={healer}
                        />
                            : <p className='player-card no-info'>Open Slot</p>
                    })}
                </div>
                <div className='dps-side'>
                    <h3>DPS</h3>
                    <div className='dps-group'>
                        {damageDealers?.map(damageDealer => {
                            return damageDealer.player
                                ? <PlayerInfoCard 
                                specialization={damageDealer.specialization}
                                player={damageDealer.player}
                                playerInfo={damageDealer}
                            />
                                : <p className='player-card no-info'>Open Slot</p>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
