import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
class ResumeComponent extends Component {
  render() {
    return (
      <div className="resume page">
        <div className="container">
          <embed type='application/pdf' src="jp_resume.pdf" width= "100%" height= "400px"></embed>
        </div>
      </div>
    )
  }
}
const Resume = AnimatedWrapper(ResumeComponent);
export default Resume;
