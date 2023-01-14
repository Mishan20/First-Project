import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Navigation from "./Navigation.js";
import StudentIndex from "./student/StudentIndex";
import TeacherIndex from "./teacher/TeacherIndex";

function App() {
  if (localStorage.getItem("Role") === "student" && document.cookie) {
    return (
      <div style={{background: "linear-gradient(90deg, rgba(198,198,203,1) 0%, rgba(147,131,140,1) 94%, rgba(150,143,131,1) 100%)"}}>
        {console.log(localStorage.getItem("Role"))}
        {console.log("cookies iss- " + document.cookie)}
        <StudentIndex />
      </div>
    );
  } else if (localStorage.getItem("Role") === "teacher" && document.cookie) {
    return (
      <div style={{background: "linear-gradient(90deg, rgba(198,198,203,1) 0%, rgba(147,131,140,1) 94%, rgba(150,143,131,1) 100%)"}}>
        <TeacherIndex />
      </div>
    );
  } else {
    return (
      <div style={{background: "linear-gradient(90deg, rgba(198,198,203,1) 0%, rgba(147,131,140,1) 94%, rgba(150,143,131,1) 100%)"}}>
        <Navigation />
        
        <Routes>
          {/* <Route path = "/" element ={<Navigation />} > */}
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          {/* </Route> */}
        </Routes>
      </div>
    );
  }
}

export default App;
