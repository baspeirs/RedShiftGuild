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
        <h2 className="section-header">Accomplishments</h2>
        <p className="accomplishments-statement">
          Join our guild and dominate the invadors from the Burning Legion
        </p>
      </div>
      <div className="phases">
        {accomplishments.map((acc, index) => {
          return <div className="phase-card">
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

      {/* <div className="tilt">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div> */}
    </section>
  )
};
