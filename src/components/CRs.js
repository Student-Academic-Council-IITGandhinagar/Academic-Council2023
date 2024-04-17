import React from 'react';
import '../styles/CRs.css'
import { allCRs } from '../utilities/crsData'

export default function CRs() {

  return (
    <>
      {/* CRs Section */}
      <div className="your-component" style={{ backgroundImage: `url(${'/student-academic-council/Images/CouncilBG.webp'})` }}></div>
      <div id="crs">
        <h1 className="h-bold">Class Representatives</h1>
        <div className="allcrs">
          {allCRs.map((group, groupIndex) => (
            <div>
              <div className="batchname"><h2 className="h-bold" >Batch B.Tech {20 + groupIndex}</h2></div>
              <div className="batch" key={groupIndex}>
                {group.map((cards, index) => (
                  <div className="blocks" key={`${groupIndex}-${index}`}>
                    <h3 className="h-semibold name">{cards.name}</h3>
                    <h3 className="h-semibold code">{cards.branch}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
