import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AnimatedWrapper from "./AnimatedWrapper";
class ResumeComponent extends Component {
 render() {
  return (
    <div className="resume page">
      <div className="container">
        <iframe src="http://docs.google.com/gview?url=/jp_resume.pdf&embedded=true"
style="width:600px; height:500px;" frameborder="0"></iframe>
      </div>
    </div>
  )
 }
}
const Resume = AnimatedWrapper(ResumeComponent);
export default Resume;
