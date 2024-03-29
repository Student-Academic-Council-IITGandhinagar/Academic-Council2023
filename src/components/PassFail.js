import React, { Component } from 'react';
import '../styles/PassFail.css';
const grade_map = {
  "A+": 11, "A": 10, "A-": 9, "B": 8, "B-": 7, "C": 6, "C-": 5, "D": 4, "E": 2, "F": -1, "P": 0, "S": 0, "U": -1, "P[E]": 0
};

class PassFailCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gdata: '',
      cpi: { credits: 0, grade: 0 },
      spi: {},
      sems: {},
      counter: 0,
      pf: [],
      selectedCourses: [], // New state property to store selected course codes
    };
  }

  bind(num) {
    return num > 10.0 ? 10.0 : num;
  }

  pprocess(txt) {
    const courses = txt.trim().split('\n');
    const res = {};
    for (const course of courses) {
      const [sem, code, name, credit, grade] = course.split("\t");
      const gradeNum = grade_map[grade.trim()];
      if (!(sem in res)) {
        res[sem] = [];
      }
      const temp = { code, name, credit: parseInt(credit), grade: gradeNum };
      res[sem].push(temp);
    }
    return res;
  }

  doCPISPI(pdata, pfc) {
    const spi = {};
    let cpnum = 0;
    let cpdenom = 0;
    let credits = 0;

    for (const sem in pdata) {
      let num = 0;
      let denom = 0;
      let semcredits = 0;

      for (const crs of pdata[sem]) {
        if (crs.grade !== -1) {
          if (pfc.indexOf(crs.code) === -1 && crs.code !== "799" && !["S", "U"].includes(crs.grade)) {
            cpnum += crs.grade * crs.credit;
            num += crs.grade * crs.credit;

            if (crs.grade !== 0) {
              cpdenom += crs.credit;
              denom += crs.credit;
            }
          }
          credits += crs.credit;
        } else {
          if (crs.code.slice(0, 2) !== 'SC' || crs.code.slice(0, 2) !== 'FP') {
            denom += crs.credit;
            cpdenom += crs.credit;
          }
        }
        semcredits += crs.credit;
      }

      spi[sem] = {
        name: sem,
        grade: this.bind(Math.round((num * 100) / denom) / 100),
        credits: semcredits,
      };
    }

    const cpi = {
      grade: this.bind(Math.round((cpnum * 100) / cpdenom) / 100),
      credits,
    };

    return { cpi, spi };
  }


  doCalc() {
    const { gdata, pf, sems } = this.state;
    const pdata = this.pprocess(gdata);
    const cpispi = this.doCPISPI(pdata, pf);

    this.setState({
      cpi: cpispi.cpi,
      spi: cpispi.spi,
      sems: pdata,
    });
  }

  changet(course, semester) {
    const { pf, sems, selectedCourses } = this.state;
    const coursecode = course.code;
    const courseCredit = course.credit;

    // Check if the course has a grade of 0
    if (course.grade === 0) {
      alert(`You cannot convert this course to pass-fail; it is already designated as pass-fail`);
      return;
    }

    const maxCreditsAllowed = 8; // Maximum allowed credits
    const maxSelectedCourses = 2; // Maximum number of selected courses
  
    const currentTotalCredits = pf.reduce((total, code) => {
      const selectedCourse = Object.values(sems).flat().find(course => course.code === code);
      return total + (selectedCourse ? selectedCourse.credit : 0);
    }, 0);

    if (selectedCourses.includes(coursecode)) {
      // Deselect the course
      const newPf = pf.filter(code => code !== coursecode);
      const updatedSelectedCourses = selectedCourses.filter(code => code !== coursecode);
      const cpispi = this.doCPISPI(sems, newPf);

      this.setState({
        counter: newPf.length,
        pf: newPf,
        selectedCourses: updatedSelectedCourses,
        cpi: cpispi.cpi,
        spi: cpispi.spi,
      });
    } else {
      // Select the course
      if (currentTotalCredits + courseCredit > maxCreditsAllowed || selectedCourses.length >= maxSelectedCourses) {
        alert(`You can select a maximum of ${maxSelectedCourses} courses with a total of ${maxCreditsAllowed} credits.`);
      } else {
        const newCounter = pf.length + 1;
        const newPf = [...pf, coursecode];

        this.setState({ counter: newCounter, pf: newPf });

        // Toggle the course in the selectedCourses list
        this.setState((prevState) => ({
          selectedCourses: [...prevState.selectedCourses, coursecode],
        }));

        const cpispi = this.doCPISPI(sems, newPf);

        this.setState({
          cpi: cpispi.cpi,
          spi: cpispi.spi,
        });
      }
    }
  }
  
  

  render() {
    const { cpi, spi, sems, selectedCourses } = this.state;

    return (
      <>
      <div className="your-component" style={{ backgroundImage: `url(${'/student-academic-council/Images/ExperiencesBG.webp'})` }}></div>
      <div id="passfail">
        <div className="container" style={{ paddingTop: '20px', paddingBottom: '50px' }}>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-lg-12 col-sm-10">
              <h1 className='h-bold'>Pass Fail Calculator</h1>
              <p>The pass fail calculator helps the students to figure out what courses to add to Pass/Fail given the choices they have to reap its benefits.</p>
              <p style={{ marginBottom: "10px" }}>The document below contains the step-by-step process to use this feature.</p>

              <a className="btn btn-info guide" href="/student-academic-council/PDFs/P_F_Calculator_Guide.pdf" target="_">Pass Fail Calculator Guide</a>
            </div>
          </div>

          <div>
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label htmlFor="gdata">Paste your grade data from the table on IMS here:</label>
              <textarea
                id="gdata"
                name="gdata"
                className="form-control"
                rows="5"
                value={this.state.gdata}
                onChange={(e) => this.setState({ gdata: e.target.value })}
              ></textarea>
            </div>
            <button onClick={() => this.doCalc()} className="btn btn-primary">Submit</button>
          </div>

          <h3 className="haha">Credits: {cpi.credits}</h3>
          <h3 className="haha">Grade: {cpi.grade}</h3>

          {Object.keys(spi).length > 0 && (
            <div className="row">
              {Object.keys(spi).map((sem) => (
                <div key={sem} className="col-6 card" style={{ width: '100%' }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">{spi[sem].name}</h5>
                    <ul className="list-group">
                      {sems[sem].map((course) =>
                        course.credit ? (
                          <li
                            key={course.code}
                            className={`list-group-item list-group-item-action ${selectedCourses.includes(course.code) ? 'selected-course' : ''}`}
                            onClick={() => this.changet(course, sem)}
                          >
                            {course.code}: {course.name} [C: {course.credit} | G: {course.grade}]
                          </li>
                        ) : null
                      )}
                    </ul>
                    <p className="card-text">Credits Taken: {spi[sem].credits}</p>
                    <p className="card-text">Grade: {spi[sem].grade}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </>
    );
  }
}

export default PassFailCalculator;
