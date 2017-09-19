import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AnimatedWrapper from "./AnimatedWrapper";
class ResumeComponent extends Component {
  render() {
    return (
      <div className="resume page">
        <div className="container">
          <embed type='application/pdf' src="/jp_resume.pdf" width= "80%" height= "800px"></embed>
        </div>
      </div>
    )
  }
}
const Resume = AnimatedWrapper(ResumeComponent);
export default Resume;
