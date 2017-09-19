import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
class ResumeComponent extends Component {
  render() {
    return (
      <div className="resume page">
        <div className="container">
          <embed type="application/pdf" src="jp_resume.pdf" height="600" internalinstanceid="92" width="80%" style="margin:0 10% 0 10%" title=""></embed>
        </div>
      </div>
    )
  }
}
const Resume = AnimatedWrapper(ResumeComponent);
export default Resume;
