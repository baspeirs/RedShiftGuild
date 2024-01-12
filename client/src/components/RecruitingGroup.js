import React from 'react';
import '../styles/RecruitingGroup.css';
export const RecruitingGroup = (props) => {

    return (
        <div className='recruiting-card'>
            <h3 className='roster-group-header'>{props.group}</h3>
            <p className='recruiting-group-text'>
                {`We are currently organizing a roster for ${props.group} and are
                activley recruiting. If you are interested in joining our guild and
                participating in raids, please reach out to one of our admins in game`} 
            </p>
        </div>
    )
}