import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Experiences.css';
import { alumni, quill, qna_prof } from '../utilities/experiencesData';
import { Link, useParams } from 'react-router-dom';


export default function Experiences({ activeLink }) {
  const state = activeLink;
  const [isActive, setActive] = useState(state);
  const showAlumni = (view) => {
    window.open(`#/experiences/alumni/${view}`);
  };
  const showQuill = (view) => {
    window.open(`#/experiences/quill/${view}`);
  };
  const showQnA = (view) => {
    window.open(`#/experiences/QnA/${view}`);
  };

  return (
    <>
    <div className="your-component" style={{ backgroundImage: `url(${'/student-academic-council/Images/ExperiencesBG.webp'})` }}></div>
      <div id="experiences">
        <h1 className="h-bold">Experiences</h1>
        <p className="h-medium">How was your internship? How did you get selected? What did you work on? What did you like about it the most? How did your contest go? We invite students to share their experiences on the same. <br /> Finally, we publish them here. <br /> <br /> Use this button to share your own experience.</p>
        <button className="btn"><Link className="h-medium" to="https://docs.google.com/forms/d/e/1FAIpQLSeDFZ5RGLYRCUnh2v8baXWK04_DRr-AiDxxwna_SvOgWKXDCQ/viewform" rel="noreferrer" target="_blank">Share your story</Link></button>
        <div className="container h-bold">
          <h3 className={`subunit-1 ${isActive === 0 ? "active" : ""}`} onClick={() => setActive(0)}>Alumni Corner</h3>
          <h3 className={`subunit-2 ${isActive === 1 ? "active" : ""}`} onClick={() => setActive(1)}>The Quill</h3>
          <h3 className={`subunit-1 ${isActive === 2 ? "active" : ""}`} onClick={() => setActive(2)}>Student Archive</h3>
          <h3 className={`subunit-2 ${isActive === 3 ? "active" : ""}`} onClick={() => setActive(3)}>QnA with Faculty</h3>
        </div>
        <form className="search" action="backend.php">
          <input type="text" placeholder="What are you looking for......" />
          <div className="i-search">
            <img src="/student-academic-council/Images/search.webp" alt="" />
          </div>
        </form>
        <div id="alumni-corner" className={`container-1 ${isActive === 0 ? "active" : ""}`}>
          <div className="alumni-container">
            <div className="alumni-unit">
              {alumni.map((card, index) => (
                <div className="alumni-card" key={index}>
                  <div className="alumni-bg">
                    <div className="alumni-img">
                      <img src={card.imgSrc} onClick={() => showAlumni(index)} alt="" />
                    </div>
                  </div>
                  <h4 className="h-medium" onClick={() => showAlumni(index)}>{card.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="quill" className={`container-2 h-medium ${isActive === 1 ? "active" : ""}`}>
          <div className="quill-container">
            <div className="quill-unit">
              {quill.map((card, index) => (
                <div className="quill-card" key={index}>
                  <div className="quill-bg">
                    <div className="quill-img">
                      <img src={card.imgSrc} onClick={() => showQuill(index)} alt="" />
                    </div>
                  </div>
                  <h4 className="h-medium" onClick={() => showQuill(index)}>{card.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`container-3 ${isActive === 2 ? "active" : ""}`}>
          <button className="btn">
            <Link className="h-medium" to="./internship-series">Academic Internship series</Link>
          </button>
          <button className="btn">
            <Link className="h-medium" to="./invent">Invent@IITGN Experiences</Link>
          </button>
          <button className="btn">
            <Link className="h-medium" to="./internship">Internship Experiences</Link>
          </button>
          <button className="btn">
            <Link className="h-medium" to="./workshop">Conference/Workshop Experiences</Link>
          </button>
          <button className="btn">
            <Link className="h-medium" to="./overseas">Overseas Experiences</Link>
          </button>
        </div>
        <div id="quill" className={`container-2 h-medium ${isActive === 3 ? "active" : ""}`}>
          <div className="quill-container">
            <div className="quill-unit">
              {qna_prof.map((card, index) => (
                <div className="quill-card" key={index}>
                  <div className="quill-bg">
                    <div className="quill-img">
                      <img src={card.imgSrc} onClick={() => showQnA(index)} alt="" />
                    </div>
                  </div>
                  <h4 className="h-medium" onClick={() => showQnA(index)}>{card.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Experiences.propTypes = {
  activeLink: PropTypes.number,
};

Experiences.defaultProps = {
  activeLink: 1,
};

export function Preview(props) {
  const { index } = useParams();
  const alumni_ind = index % alumni.length
  const quill_ind = index % quill.length
  const qna_prof_ind = index % qna_prof.length
  return (
    <>
      {/* preview Section */}
      <div className="your-component" style={{ backgroundImage: `url(${'/student-academic-council/Images/PreviewBG.webp'})` }}></div>
      <div id="preview">
        <div id="preview-corner" className={`container-1 ${props.isActive === 0 ? "active" : ""}`}>
          <div className="preview-container">
            <div className="preview-card">
              <div className="preview-bg">
                <div className="preview-img">
                  <img src={alumni[alumni_ind].imgSrc} alt="" />
                </div>
              </div>
              <h3 className="h-medium">{alumni[alumni_ind].name}</h3>
            </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {alumni[alumni_ind].name} <br /> <br /> {alumni[alumni_ind].info}
            </div>
          </div>
        </div>
        <div id="preview-corner" className={`container-1 ${props.isActive === 1 ? "active" : ""}`}>
          <div className="preview-container">
            <div className="preview-card">
              <div className="preview-bg">
                <div className="preview-img">
                  <img src={quill[quill_ind].imgSrc} alt="" />
                </div>
              </div>
              <h3 className="h-medium">{quill[quill_ind].name}</h3>
            </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {quill[quill_ind].name} <br /> {quill[quill_ind].discipline} <br /> {quill[quill_ind].info} <br /> {quill[quill_ind].description}
            </div>
          </div>
        </div>
        <div id="preview-corner" className={`container-1 ${props.isActive === 2 ? "active" : ""}`}>
          <div className="preview-container">
            <div className="preview-card">
              <div className="preview-bg">
                <div className="preview-img">
                  <img src={qna_prof[qna_prof_ind].imgSrc} alt="" />
                </div>
              </div>
              <h3 className="h-medium">{qna_prof[qna_prof_ind].name}</h3>
            </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {qna_prof[qna_prof_ind].name} <br /> {qna_prof[qna_prof_ind].discipline} <br /> {qna_prof[qna_prof_ind].info} <br /> <br />{qna_prof[qna_prof_ind].description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}