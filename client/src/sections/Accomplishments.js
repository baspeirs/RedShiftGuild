import React from "react";
import '../styles/Accomplishments.css'
import { AccomplishmentHeader } from '../common/AccomplishmentHeader';
import { SlideShow } from "../common/SlideShow";
import { useSelector } from "react-redux";

export const Accomplishments = () => {
  const accomplishments = useSelector(state => state.accomplishments.accomplishments)

  return (
    <section id='accomplishments-section'>
      <div className="accomplishments-section-heding">
        <h2 className="section-header">ACCOMPLISHMENTS</h2>
        <p className='section-subheader'>
          Join our guild and dominate the invadors from the Burning Legion
        </p>
      </div>
      <div className="phases">
        {accomplishments.map((acc, index) => {
          return <div className="phase-card" key={index}>
            <AccomplishmentHeader
              key={`accomp-header${index}`}
              phase={acc.phase}
              completed={acc.completed}
            />
            <SlideShow 
              key={`slide-show-bob${index}`}
              raids={acc.raids}
            />
          </div>
        })}
      </div>
    </section>
  )
};
