import React from "react";
import "./Login.css";
import { useFormInputValidation } from "react-form-input-validation";
import axios from "axios";
// import { computeHeadingLevel } from "@testing-library/react";
import Swal from "sweetalert2";
import {CgProfile} from "react-icons/cg";
import {Link, Outlet} from "react-router-dom";

function Login() {
  const [fields, errors, form] = useFormInputValidation(
    {
      nic: "",
      role: "",
      password: "",
    },
    {
      nic: "required|between:10,13",
      role: "required",
      password: "required|between:6,15",
    }
  );
  const onsub = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      axios
        .post("http://localhost/20it0497/backend/verify.php", {
          nic: fields.nic,
          role: fields.role,
          password: fields.password,
        })
        .then(function (response) {
          // console.log(response.data);
          if (response.data) {
            if (response.data.role === "student") {
              console.log(response.data);
              localStorage.setItem("Role", response.data.role);
              localStorage.setItem("Nic", response.data.nic);
              localStorage.setItem("Name", response.data.fname);
              localStorage.setItem("Studentid", response.data.studentid);
              // set cookie
              const d = new Date();
              d.setTime(d.getTime() + 60 * 60 * 1000);
              let expires = "expires=" + d.toUTCString();
              document.cookie =
                "userCookie" +
                "=" +
                response.data.nic +
                ";" +
                expires +
                ";path=/";

              Swal.fire({
                icon: "success",
                title: "Done",
                text: "Student: You are successfully registered!",
              });
              window.location = "http://localhost:3000/";
            } else if (response.data.role === "teacher") {
              localStorage.setItem("Role", response.data.role);
              localStorage.setItem("Nic", response.data.nic);
              localStorage.setItem("Name", response.data.fname);
              // set cookie
              const d = new Date();
              d.setTime(d.getTime() + 60 * 60 * 1000);
              let expires = "expires=" + d.toUTCString();
              document.cookie =
                "userCookie" +
                "=" +
                response.data.nic +
                ";" +
                expires +
                ";path=/";

              Swal.fire({
                icon: "success",
                title: "Done",
                text: "Teacher: You are successfully registered!",
              });
              window.location = "http://localhost:3000/";
           
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops",
                text: "Username Password Invalid!",
              });
            }
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops",
              text: "Username Password Invalid!",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="loginbox">
        <h1> Login Here </h1>
        <div className="text-light my-2">
          <CgProfile size={50}/>
        </div>

        <form onSubmit={onsub} name="loginForm">
          <p> NIC : </p>
          <input
            type="text"
            id="nic"
            name="nic"
            placeholder="Enter NIC Number"
            onChange={form.handleChangeEvent}
            onBlur={form.handleBlurEvent}
          />
          <label className="error" style={{ color: "red" }}>
            {errors.nic ? errors.nic : ""}
          </label>

          <p>Select a Job Role : </p>
          <select
          className="bg-dark"
            name="role"
            id="role"
            onChange={form.handleChangeEvent}
            onBlur={form.handleBlurEvent}
          >
            <option > Job Role </option>
            <option value="student"> Student </option>
            <option value="teacher"> Teacher </option>
          </select>
          <label className="error" style={{ color: "red" }}>
            {errors.role ? errors.role : ""}
          </label>

          <p> Password :</p>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            onChange={form.handleChangeEvent}
            onBlur={form.handleBlurEvent}
          />
          <label className="error" style={{ color: "red" }}>
            {errors.password ? errors.password : ""}
          </label>

          <input type="submit" name="submit" value="Login" />
          <Link to="/Register" style={{ color: "white", cursor: "pointer" }}>
            Don't have account?
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
