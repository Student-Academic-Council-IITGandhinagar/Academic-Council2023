import React from 'react';
import '../styles/ADH_PAL.css'
import { allMentors } from '../utilities/adh_palData'

export default function ADH_PAL() {

  return (
    <>
      {/* ADH & PAL Section */}
      <div className="your-component" style={{ backgroundImage: `url(${'/student-academic-council/Images/CouncilBG.webp'})` }}></div>
      <div id="adh_pal">
        <h1 className="h-bold">ADH & PAL Mentors</h1>
        <div className="mentors">
          {allMentors.map((cards, index) => (
            <div className="cards" key={index}>
              <h3 className="h-bold code">{cards.code}</h3>
              <h3 className="h-bold name" style={{color: 'var(--blue)'}}>{cards.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
