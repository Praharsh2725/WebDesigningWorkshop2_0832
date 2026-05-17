import React from "react";
import Student from "./Student";
import "./App.css";
import Greeting from "./Greeting";

function App() {
  return (
    <div className="container">
      <Greeting/>

      <h1 className="heading">👨‍🎓 Student Information</h1>
      
      <Student
        oname="Rahul Sharma"
        ocourse="BCA"
        omarks="85%"
      />

      <Student
        oname="Priya Verma"
        ocourse="MCA"
        omarks="92%"
      />

      <Student
        oname="Aman Gupta"
        ocourse="B.Tech"
        omarks="78%"
      />
    </div>
  );
}

export default App;