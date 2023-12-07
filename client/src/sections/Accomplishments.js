import React from "react";
import '../styles/Accomplishments.css'
// import { phase1 } from '../accomplishments/phase1';
import { AccomplishmentHeader } from '../common/AccomplishmentHeader';
import { SlideShow } from "../common/SlideShow";

export const Accomplishments = (props) => {
  const accomplishments = [
    {
      phase: '1',
      completed: true,
      raids: [
        { raid: 'magtheridon', completion: '1/1' },
        { raid: 'gruul and maulgar', completion: '1/1' },
        { raid: 'karazhan', completion: '1/1' }
      ]
    },
    {
      phase: '2',
      completed: true,
      raids: [
        { raid: 'magtheridon', completion: '1/1' },
        { raid: 'gruul and maulgar', completion: '1/1' },
        { raid: 'karazhan', completion: '1/1' }
      ]
    },
    {
      phase: '3',
      completed: true,
      raids: [
        { raid: 'magtheridon', completion: '1/1' },
        { raid: 'gruul and maulgar', completion: '1/1' },
        { raid: 'karazhan', completion: '1/1' }
      ]
    }
  ]

  return (
    <section id='accomplishments-section'>
      <div className="accomplishments-section-heding">
        <h2 className="accomplishments-header">Accomplishments</h2>
        <p className="accomplishments-statement">
          Join our guild and dominate the invadors from the Burning Legion
        </p>
      </div>
      <div className="phases">
        {accomplishments.map((acc) => {
          return <div className="phase-card">
            <AccomplishmentHeader
              phase={acc.phase}
              completed={acc.completed}
            />
            <SlideShow 
              raids={acc.raids}
            />
          </div>
        })}

        {/* <div className="phase-card">
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
        </div> */}
      </div>

      <div className="tilt">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>

    </section>
  )
};
