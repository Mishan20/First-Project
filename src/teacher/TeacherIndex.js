import Home from "../Home.js";
import { Routes, Route } from "react-router-dom";
import NavTeacher from "./NavTeacher.js";
import TeacherProfile from "./TeacherProfile.js";
const TeacherIndex = () => {
  return (
    <div>
      <NavTeacher />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/THome" element={<Home />} />
        <Route path="/TProfile" element={<TeacherProfile />} />
      </Routes>
    </div>
  );
};

export default TeacherIndex;
