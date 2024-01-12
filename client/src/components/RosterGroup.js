import React from 'react';
import '../styles/RosterGroup.css'
import { PlayerInfoCard } from '../common/PlayerInfoCard';
import { OpenSlotCard } from '../common/OpenSlotCard';

export const RosterGroup = ({group}) => {

    return (
        <>
            <h3 className='roster-group-header'>{group.group}</h3>
            <div className='roster-content'>
                <div className='roster-group'>
                    <div className='tanks-and-heals-group'>
                        <div className='battle-group'>
                            <h3 className='bg-header'>Tanks</h3>
                            <div className='tanks-group bg-list'>
                                {group.roster?.tanks?.map((tank, index) => {
                                    return tank.player
                                        ? <PlayerInfoCard
                                            key={`tank-${index}`}
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
                                {group.roster?.healers?.map((healer, index) => {
                                    return healer.player
                                        ? <PlayerInfoCard
                                            key={`healer-${index}`}
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
                                {group.roster?.damageDealers?.map((damageDealer, index) => {
                                    return damageDealer.player
                                        ? <PlayerInfoCard
                                            key={`dps-${index}`}
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
        </>
    )
}