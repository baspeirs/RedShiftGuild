import React from 'react';
import '../styles/Roster.css';
import { useSelector } from 'react-redux';
import { RosterGroup } from '../components/RosterGroup';
import { RecruitingGroup } from '../components/RecruitingGroup';


export const Roster = () => {
    const groups = useSelector(state => state.roster.rosters)

    return (
        <section id='roster-section'>
            <h2 className="section-header">ROSTER</h2>
            <div className='groups'>
                {groups.map((group, index) => {
                    return group.roster === 'recruiting'
                        ? <div className='display-group'>
                            <RecruitingGroup 
                                group={group.group}
                            />
                        </div>
                        : <div className='display-group'>
                            <RosterGroup
                                key={`roster-group-${index}`}
                                group={group}
                            />
                        </div>
                })}
            </div>

        </section>
    );
};
