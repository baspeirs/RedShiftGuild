import React from "react";
import '../styles/Accomplishments.css'
// import { phase1 } from '../accomplishments/phase1';
import { AccomplishmentHeader } from '../common/AccomplishmentHeader';
import { SlideShow } from "../common/SlideShow";

export const Accomplishments = (props) => {

  return (
    <section id='accomplishments-section'>
      <h2>Accomplishments</h2>
      <div className="phases">
        <div className="phase-card">
          <AccomplishmentHeader
            phase={'Phase 1'}
            completed={true}
          />
          <SlideShow />
        </div>
        <div className="phase-card">
          <AccomplishmentHeader
            phase={'Phase 1'}
            completed={true}
          />
          <SlideShow />
        </div>
        <div className="phase-card">
          <AccomplishmentHeader
            phase={'Phase 1'}
            completed={true}
          />
          <SlideShow />
        </div>
      </div>
      {/* <div className="accomplishment-title">
        <AccomplishmentHeader
          phase={'Phase 1'}
          completed={true}
        />
      </div>
      <div className="accomplishment-cards">
        <AccomplishmentCard
          raids={phase1}
        />
      </div> */}
      <div className="tilt">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  )
};
