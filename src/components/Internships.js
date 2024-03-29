import React, { useState } from 'react';
import AcademicData from './AcadIntern';
import IndustryData from './IndustryIntern';

function Internship() {
  const [activeComponent, setActiveComponent] = useState(<AcademicData />);

  const handleFetchCSVData1 = () => {
    setActiveComponent(<AcademicData />);
  };

  const handleFetchCSVData2 = () => {
    setActiveComponent(<IndustryData />);
  };


  return (
    <>
    <div className="your-component" style={{ backgroundImage: `url(${'/student-academic-council/Images/EventsBG.webp'})` }}></div>
    <div id="intern">
      <div className="intern-box">
        <h1 className="h-extrabold" style={{ marginBottom: "2rem" }}>Databases of Academic & Industrial Internships & Fellowships</h1>
        <div className="intern-button">
          <button onClick={handleFetchCSVData1}>Academic Internship Data</button>
          <button onClick={handleFetchCSVData2}>Industrial Internship Data</button>
        </div>
        {activeComponent}
      </div>
    </div>
    </>
  );
}

export default Internship;


