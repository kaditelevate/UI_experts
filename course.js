import React from 'react';
// import './App.css'; // Import the CSS file
import bgImage from './bgimage1.jpg';
import bgImage1 from './bgimage2.jpg';

function CourseList() {
  const data = [
    { id: 1, Course: 'TNPSE', Duration: '3 months', Link: 'https://www.tnpsc.gov.in/' },
    { id: 2, Course: 'Group 1', Duration: '6 months', Link: 'https://www.adda247.com/ta/jobs/tnpsc-group-1-previous-year-question-papers/' },
    { id: 3, Course: 'Group 2', Duration: '5 months', Link: 'https://www.adda247.com/ta/jobs/tnpsc-group-2-question-paper/' },
    { id: 4, Course: 'Group 3', Duration: '4 months', Link: 'https://testbook.com/tnpsc-group-3/previous-year-papers/' },
    { id: 5, Course: 'Group 4', Duration: '7 months', Link: 'https://www.adda247.com/ta/jobs/tnpsc-group-4-question-paper/amp/' },
    { id: 6, Course: 'IBPS clerk', Duration: '3 months', Link: 'https://www.adda247.com/ta/jobs/tnpsc-group-4-question-paper/amp/' },
    { id: 7, Course: 'IBPS PO', Duration: '4 months', Link: 'https://www.adda247.com/jobs/ibps-po-previous-year-question-paper/' },
    { id: 8, Course: 'IBPS RRB', Duration: '6 months', Link: 'https://www.adda247.com/jobs/ibps-rrb-previous-year-question-paper/amp/' },
    { id: 9, Course: 'SBI clerk', Duration: '3 months', Link: 'https://www.adda247.com/jobs/sbi-clerk-previous-year-question-paper/amp/' }
  ];

  return (
    <>
   
      <header className="App-header"> 
        <h1>Ready to learn !!...</h1>
        
      </header>
      <div className="vision-mission">
        <div className="vision-box box">
          <h3>Vision</h3>
          <p>As per the Constitution of India, the Tamil Nadu Public Service Commission (TNPSC) strives to establish and cultivate a public service that is independent, impartial, ethical, effective, and capable. This service must be well-equipped to address new government challenges and responsive to the increasing expectations of the general public, including marginalized communities.</p>
        </div>
        <div className="mission-box box">
          <h3>Mission</h3>
          <ul>
            <li>Ensure a free, fair, and transparent recruitment process for the state civil services, by leveraging information technology solutions.</li>
            <li>Constantly update its recruitment methodology.</li>
            <li>Suitably advise the government on all the matters relating to the service conditions of the public servants.</li>
            <li>Safeguard the interest and integrity of public servants.</li>
          </ul>
        </div>
       
      </div>
      <div className="fun-text"> {/* Use appropriate class name */}
          <img src={bgImage} alt="Image Description" height='200' width='300' />
          <p><h1>"Learning never exhausts the mind"</h1> </p>
        </div>
        <div className="fun-text1"> {/* Use appropriate class name */}
          <img src={bgImage1} alt="Image Description" height='200' width='300' />
          <p><h1>"Where can we find the courage to act in spite of fear"</h1> </p>
        </div>
      <div className="exam-table">
        <h2>Course Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course</th>
              <th>Duration</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Course}</td>
                <td>{item.Duration}</td>
                <td><a href={item.Link} target="_blank" rel="noopener noreferrer">Click Here</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="containers">
            <h2>TNPSC Exams</h2>
            <p>Various recruitment exams for posts ranging from Group I to IV conducted by the Tamil Nadu Public Service Commission throughout the year are listed below:</p>
            <ul className="exams-lists">
                <li>Combined Civil Services Examination – I (Group 1 Services)</li>
                <li>Combined Civil Services Examination – II (Group-II and Group-II A Services)</li>
                <li>Combined Civil Services Examination-III (Group-III Services)</li>
                <li>Combined Civil Services Examination-IV (Group-IV Services & VAO)</li>
                <li>Combined Engineering Subordinate Services Examination</li>
                <li>TNPSC Assistant Engineer Examination</li>
                <li>TNPSC Assistant System Engineer Examination</li>
                <li>TNPSC District Education Officer Examination</li>
                <li>Combined Library and Information Services Examination</li>
                <li>Combined Geology Service Examination</li>
                <li>Combined Statistics Service Examination</li>
            </ul>
        </div>
        <div className="containerss">
            <h2>TNPSC Eligibility</h2>
            <p>The TNPSC Eligibility to recruit eligible candidates for different posts is determined by the Tamil Nadu Public Service Commission. Aspiring candidates are required to satisfy the TNPSC eligibility criteria in order to be eligible and appear for the exam.</p>
            <p>Exams for various posts in TNPSC Group 1, Group 2, Group 3, Group 4, etc. have their unique TNPSC eligibility conditions.</p>
            <p>Candidates are advised to read the TNPSC notification properly for different eligibility conditions such as TNPSC Age limit, TNPSC Educational Qualification, etc before filling up the TNPSC Application form.</p>
            <p>The basic requirement of TNPSC exam eligibility condition is that the applicants must be well versed with the Tamil language and must be an Indian Citizen.</p>
        </div>
        <div className="containersss">
            <h2>TNPSC Eligibility Criteria</h2>
            <table className="eligibility-table">
                <thead>
                    <tr>
                        <th>Exam</th>
                        <th>Age Limit</th>
                        <th>Educational Qualification</th>
                        <th>Other Conditions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TNPSC Group 1 Exam</td>
                        <td>General category: 32 years<br />Age relaxation: 5 years to SC, ST, OBC</td>
                        <td>Graduation from a Government recognized university</td>
                        <td>Special physical qualifications for specific posts</td>
                    </tr>
                    <tr>
                        <td>TNPSC Group 2 Exam</td>
                        <td>
                            Minimum: 18 years<br />
                            Sub-registrar Grade-II: 20 years<br />
                            Probation officer: 22 years<br />
                            Probation Officer (Social Defence): 26 years<br />
                            Maximum: 30 years (general category)<br />
                            No age limit for Reserved Candidates
                        </td>
                        <td>Varies according to post specialization<br />Minimum qualification: Graduation</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TNPSC Group 3 Exam</td>
                        <td>Minimum: 18 years for general candidates<br />Maximum: 42 years</td>
                        <td>Graduate</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TNPSC Group 4 Exam</td>
                        <td>
                            Minimum: 18 years<br />
                            General candidates: 30 years<br />
                            MBC / Denotified Communities / BC: 32 years<br />
                            SC / ST / Destitute Widows: 35 years
                        </td>
                        <td>Must have passed the S.S.L.C. Public examinations</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TNPSC Combined Engineering Services Exam</td>
                        <td>Minimum: 18 years<br />Maximum: 30 years (general category)<br />No age limit for Reserved Candidates</td>
                        <td>B.E. degree or equivalent in relevant specialization</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TNPSC Assistant System Engineer</td>
                        <td>
                            Minimum: 18 years<br />
                            General candidates: 30 years<br />
                            Destitute Widows, Most Backward Classes, Backward Classes (Muslims) and other Denotified Communities: 32 years<br />
                            SC / ST: 35 years
                        </td>
                        <td>B.E. or B. Tech degree or diploma in relevant specialization</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TNPSC Assistant Engineer</td>
                        <td>
                            Minimum: 18 years<br />
                            General candidates: 30 years<br />
                            Destitute Widows, Most Backward Classes, Backward Classes (Muslims) and other Denotified Communities: 32 years<br />
                            SC / ST: 35 years
                        </td>
                        <td>B.E. or B. Tech degree or diploma in relevant specialization</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TNPSC District Education Officer</td>
                        <td>
                            General category for teaching posts: 40 years<br />
                            Open market posts: 30 years<br />
                            Ex-servicemen: 48 years<br />
                            No age limit for Reserved Candidates
                        </td>
                        <td>Master’s degree, B.T., or B.Ed. Degree<br />Must have studied Tamil under part 1 or 2 of the Pre-university course or the Higher Secondary Course</td>
                        <td>10 years of age relaxation for differently-abled candidates</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="containe">
            <h2>TNPSC Exam Pattern</h2>
            <table className="exam-pattern-table">
                <thead>
                    <tr>
                        <th>Exam</th>
                        <th>Selection Process</th>
                        <th>Number of Papers</th>
                        <th>Subject Areas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TNPSC Group 1</td>
                        <td>Preliminary Exam, Main Exam, Interview</td>
                        <td>3</td>
                        <td>General Studies, Aptitude, General Tamil/English</td>
                    </tr>
                    <tr>
                        <td>TNPSC Group 2</td>
                        <td>Written Exam, Interview</td>
                        <td>2</td>
                        <td>General Studies, Aptitude</td>
                    </tr>
                    <tr>
                        <td>TNPSC Group 3</td>
                        <td>Written Exam</td>
                        <td>1</td>
                        <td>General Studies</td>
                    </tr>
                    <tr>
                        <td>TNPSC Group 4</td>
                        <td>Written Exam</td>
                        <td>1</td>
                        <td>General Studies, Aptitude</td>
                    </tr>
                    <tr>
                        <td>TNPSC Combined Engineering Services Exam</td>
                        <td>Written Exam, Interview</td>
                        <td>2</td>
                        <td>Subject-related Papers</td>
                    </tr>
                    <tr>
                        <td>TNPSC Assistant System Engineer</td>
                        <td>Written Exam</td>
                        <td>1</td>
                        <td>Subject-related Papers</td>
                    </tr>
                    <tr>
                        <td>TNPSC Assistant Engineer</td>
                        <td>Written Exam</td>
                        <td>1</td>
                        <td>Subject-related Papers</td>
                    </tr>
                    <tr>
                        <td>TNPSC District Education Officer</td>
                        <td>Written Exam, Interview</td>
                        <td>2</td>
                        <td>Subject-related Papers</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="cont">
            <h2>Bank Exams Eligibility Criteria</h2>
            <table className="eligibility-table">
                <thead>
                    <tr>
                        <th>Exam</th>
                        <th>Age Limit</th>
                        <th>Educational Qualification</th>
                        <th>Other Conditions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>IBPS PO Exam</td>
                        <td>Minimum: 20 years<br />Maximum: 30 years</td>
                        <td>Graduation from a recognized university</td>
                        <td>Computer literacy, language proficiency</td>
                    </tr>
                    <tr>
                        <td>SBI Clerk Exam</td>
                        <td>Minimum: 20 years<br />Maximum: 28 years</td>
                        <td>Graduation in any discipline</td>
                        <td>Language proficiency, computer skills</td>
                    </tr>
                    <tr>
                        <td>RRB Officer Scale-I Exam</td>
                        <td>18 to 30 years</td>
                        <td>Graduation in any discipline</td>
                        <td>Local language proficiency, computer knowledge</td>
                    </tr>
                    <tr>
                        <td>IBPS Clerk Exam</td>
                        <td>Minimum: 20 years<br />Maximum: 28 years</td>
                        <td>Graduation in any discipline</td>
                        <td>Language proficiency, computer skills</td>
                    </tr>
                    <tr>
  <td>IBPS RRB Office Assistant Exam</td>
  <td>18 to 28 years</td>
  <td>Graduation in any discipline</td>
  <td>Local language proficiency, computer skills</td>
</tr>
<tr>
  <td>SBI PO Exam</td>
  <td>Minimum: 21 years<br />Maximum: 30 years</td>
  <td>Graduation in any discipline</td>
  <td>Computer literacy, language proficiency</td>
</tr>
                </tbody>
            </table>
        </div>
        
        
  
      



    </>
  );
}

export default CourseList;