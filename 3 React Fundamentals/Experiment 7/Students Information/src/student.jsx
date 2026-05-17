import React from "react";
import "./App.css";

function Student(props) {
  return (
    <div className="student-card">
      <h2>📋 Student Details</h2>

      <p>
        <strong>Name:</strong> {props.oname}
      </p>

      <p>
        <strong>Course:</strong> {props.ocourse}
      </p>

      <p>
        <strong>Marks:</strong> {props.omarks}
      </p>
    </div>
  );
}

export default Student;