import Home from "../Home.js";
import { Routes, Route } from "react-router-dom";
import NavStudent from "./NavStudent.js";
import StudentProfile from "./StudentProfile.js";
import StudentResult from "./StudentResult.js";
const StudentIndex = () => {
 
  return (
    <div>
      <NavStudent/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/SHome" element={<Home />} />
        <Route path="/SProfile" element={<StudentProfile />} />
        <Route path="/SResult" element={<StudentResult />} />
      </Routes>
    </div>
  );
};
export default StudentIndex;
