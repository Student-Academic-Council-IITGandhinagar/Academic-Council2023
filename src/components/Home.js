import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types'
import '../styles/Home.css';
import { Link } from "react-router-dom";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation once
  });
  return (
    <>
      {/* Home Section */}
      <div className="your-component" style={{ backgroundImage: `url(${'/student-academic-council/Images/IITGNBG.webp'})`, backgroundPosition: 'left' }}></div>
      <div id="home">
        <h1 className="h-extrabold">Student Academic Council</h1>
        <p className="h-semibold">IIT Gandhinagar prides itself in the freedom it gives to its students. The Student Academic Council is an extension of that same freedom - to cater to the academic needs of the student body, you need a student body. That's where we come in.</p>
        <button className="btn"><a className="h-semibold" href="/student-academic-council/PDFs/SAC_Objective_Structure.pdf" rel="noreferrer" target="_blank">Objective & Structure 2023-24</a></button>
      </div>

      {/* Student/Faculty Section */}
      <div id="students_faculty">
        <h1 className="h-extrabold">
          Students/Faculty
        </h1>
        <div className="container">
          <div className="subcontainer">
            <div className="box">
              <img src={'/student-academic-council/Images/teamwork.svg'} alt="Under Graduate" />
            </div>
            <div className="box">
              <h2 className="h-semibold" id='ug'>Under Graduate</h2>
            </div>
            <div className="box">
              <h2 className="h-semibold" ref={ref}>{inView && <CountUp start={0} end={1000} duration={5} suffix="+" />}</h2>
            </div>
          </div>
          <div className="subcontainer">
            <div className="box">
              <img src={'/student-academic-council/Images/team.svg'} alt="Post Graduate" />
            </div>
            <div className="box">
              <h2 className="h-semibold" id='pg'>Post Graduate</h2>
            </div>
            <div className="box">
              <h2 className="h-semibold" ref={ref}>{inView && <CountUp start={0} end={500} duration={5} suffix="+" />}</h2>
            </div>
          </div>
          <div className="subcontainer">
            <div className="box">
              <img src={'/student-academic-council/Images/teaching.svg'} alt="Faculty" />
            </div>
            <div className="box">
              <h2 className="h-semibold" id='f'>Faculty</h2>
            </div>
            <div className="box">
              <h2 className="h-semibold" ref={ref}>{inView && <CountUp start={0} end={120} duration={5} suffix="+" />}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* What we do Section */}
      <div id="whatwedo">
        <h1 className="h-extrabold">
          What we do
        </h1>
        <div className="container">
          <div className="box">
            <img src={'/student-academic-council/Images/hackathon.svg'} alt="Events" />
            <h2 className="h-semibold">Events</h2>
            <div className="box-link">
              <Link className="h-semibold" to="/events">Find out more</Link>
            </div>
            <div className="one-liner"><p>SAC conducts fun academic events to bring the student community together.</p></div>
          </div>
          <div className="box">
            <img src={'/student-academic-council/Images/meeting.svg'} alt="ADH & PAL" />
            <h2 className="h-semibold">ADH & PAL</h2>
            <div className="box-link">
              <Link className="h-semibold" to="/ADH">Find out more</Link>
            </div>
            <div className="one-liner"><p>ADH & PAL are mentorship programs where students learn from their peers.</p></div>
          </div>
          <div className="box">
            <img src={'/student-academic-council/Images/calculator.svg'} alt="Pass Fail Calculator" />
            <h2 className="h-semibold">P/F Calculator</h2>
            <div className="box-link">
              <Link className="h-semibold" to="/calculator">Find out more</Link>
            </div>
            <div className="one-liner"><p>P/F Calculator is a tool to help students figure courses to add to P/F.</p></div>
          </div>
          <div className="box">
            <img src={'/student-academic-council/Images/speech.svg'} alt="CRs" />
            <h2 className="h-semibold">CRs</h2>
            <div className="box-link">
              <Link className="h-semibold" to="/CRs">Find out more</Link>
            </div>
            <div className="one-liner"><p>Class Representatives act as medium of communication between students and professors.</p></div>
          </div>
          <div className="box">
            <img src={'/student-academic-council/Images/online-course.svg'} alt="SRCs" />
            <h2 className="h-semibold">SRCs</h2>
            <div className="box-link">
              <Link className="h-semibold" to="/SRCs">Find out more</Link>
            </div>
            <div className="one-liner"><p>SRCs are Graded 1 credit Short Courses taught by IITGN students.</p></div>
          </div>
        </div>
      </div>
    </>
  )
}

Home.propTypes = {
  ug: PropTypes.number,
  pg: PropTypes.number,
  f: PropTypes.number,
}