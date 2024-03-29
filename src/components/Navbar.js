import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ onLinkClick }) {
  const [isActive, setActive] = useState(false);
  const loc = useLocation().pathname;
  const Toggle = () => {
    setActive(!isActive)
    document.body.style.overflow = isActive ? 'visible' : 'hidden';
  }
  const Links = document.getElementsByClassName("linkEventListener");
  for (let index = 0; index < Links.length; index++) {
    const link = Links[index];
    link.addEventListener("click", () => {
      Toggle();
    });
  }

  return (
    <div id="navbar" className={`h-semibold ${isActive ? "active" : ""}`}>
      <ul>
        <li className="nav-item"><Link to="/">Student Academic Council</Link></li>
      </ul>
      <ul>
        <li className="navbar-item"><Link to="/" className={loc === "/" ? "active" : ""}>Home</Link></li>
        <li className="navbar-item"><Link to="/council" className={loc.startsWith("/council") ? "active" : ""}>Council</Link></li>
        <li className="navbar-item"><Link to="/experiences" className={loc.startsWith("/experiences") ? "active" : ""} onClick={() => onLinkClick(0)}>Experiences</Link></li>
        <div className={`hamburger ${isActive ? "active" : ""}`} onClick={Toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </ul>
      <div className={`ham-menu ${isActive ? "active" : ""}`}>
        <div className="ham-container">
          <ul className="ham-subcontainer">
            <li className="ham-item">
              <Link to="/" className="ham-link linkEventListener">Home</Link>
            </li>
            <li className="ham-item">
              <Link to="/council" className="ham-link linkEventListener">Council</Link>
            </li>
            <li className="ham-item">
              <Link to="/events" className="ham-link linkEventListener">Events</Link>
            </li>
            <li className="ham-item">
              <Link to="/SRCs" className="ham-link linkEventListener">SRCs</Link>
            </li>
            <li className="ham-item">
              <Link to="/experiences" className="ham-link linkEventListener" onClick={() => onLinkClick(0)}>Experiences</Link>
            </li>
            <ul>
            <li className="subham-item" style={{backgroundImage: `url(${"/student-academic-council/Images/arrow.svg"})`}}>
                <Link to="/experiences" className="ham-link linkEventListener" onClick={() => onLinkClick(0)}>Alumni Corner</Link>
              </li>
              <li className="subham-item" style={{backgroundImage: `url(${"/student-academic-council/Images/arrow.svg"})`}}>
                <Link to="/experiences" className="ham-link linkEventListener" onClick={() => onLinkClick(1)}>The Quill</Link>
              </li>
              <li className="subham-item" style={{backgroundImage: `url(${"/student-academic-council/Images/arrow.svg"})`}}>
                <Link to="/experiences" className="ham-link linkEventListener" onClick={() => onLinkClick(2)}>Student Archive</Link>
              </li>

              <li className="subham-item" style={{backgroundImage: `url(${"/student-academic-council/Images/arrow.svg"})`}}>
                <Link to="/experiences" className="ham-link linkEventListener" onClick={() => onLinkClick(3)}>QnA with Faculty</Link>
              </li>
            </ul>
            <li className="ham-item">
              <Link to="/CRs" className="ham-link linkEventListener">CRs</Link>
            </li>
          </ul>
          <ul className="ham-subcontainer">
            <li className="ham-item">
              <Link to="/grade-req-tracker" className="ham-link linkEventListener">Grad Req Tracker</Link>
            </li>
            <li className="ham-item">
              <Link to="/calculator" className="ham-link linkEventListener">P/F Calculator</Link>
            </li>
            <li className="ham-item">
              <Link to="/internships" className="ham-link linkEventListener">Internships</Link>
            </li>
            <li className="ham-item">
              <Link to="https://students.iitgn.ac.in/student-acad-council/project-courses/login" className="ham-link linkEventListener" target="blank">Project Courses</Link>
            </li>
            <li className="ham-item">
              <div className="ham-link linkEventListener">Important Links</div>
            </li>
            <ul>
            <li className="subham-item" style={{backgroundImage: `url(${"/student-academic-council/Images/arrow.svg"})`}}>
                <Link to="https://sites.google.com/iitgn.ac.in/iws/" className="ham-link linkEventListener" target="blank">Advisories</Link>
              </li>
              <li className="subham-item" style={{backgroundImage: `url(${"/student-academic-council/Images/arrow.svg"})`}}>
                <Link to="https://academics.iitgn.ac.in/request/home.php" className="ham-link linkEventListener" target="blank">Request Portal</Link>
              </li>
              <li className="subham-item" style={{backgroundImage: `url(${"/student-academic-council/Images/arrow.svg"})`}}>
                <Link to="https://iitgn.ac.in/careers/ocep" className="ham-link linkEventListener" target="blank">OCEO</Link>
              </li>

              <li className="subham-item" style={{backgroundImage: `url(${"/student-academic-council/Images/arrow.svg"})`}}>
                <Link to="https://iitgn.ac.in/academics/calendar/acadcal-2023-24" className="ham-link linkEventListener" target="blank">Academic Calendar</Link>
              </li>
            </ul>
            <li className="ham-item">
              <Link to="/ADH-PAL" className="ham-link linkEventListener">ADH & PAL</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`backdrop ${isActive ? "active" : ""}`}></div>
    </div>
  )
}
