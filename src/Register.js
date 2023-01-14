import React from "react";
import "./Register.css";
import Swal from "sweetalert2";
import { useFormInputValidation } from "react-form-input-validation";
import axios from "axios";

function Register() {
 

  const [fields, errors, form] = useFormInputValidation(
    {
      index: "",
      fname: "",
      lname: "",
      nic: "",
      email: "",
      role: "",
      tnum: "",
      password: "",
      cpassword: "",
    },
    {
      index: "between:3,10",
      fname: "required",
      lname: "required",
      nic: "required|between:10,13",
      email: "required",
      role: "required",
      tnum: "required|between:0,11",
      password: "required|between:6,15",
      cpassword: "required|between:6,15",
    }
  );

  const onreg = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      axios
        .post("http://localhost/20it0497/backend/registration.php", {
          index: fields.index,
          fname: fields.fname,
          lname: fields.lname,
          nic: fields.nic,
          email: fields.email,
          role: fields.role,
          tnum: fields.tnum,
          password: fields.password,
        })
        .then(function (response) {
          console.log(response.data);
          Swal.fire({
            icon: "success",
            title: "Done",
            text: "You are successfully registered!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
          setTimeout(() => {
            window.location = "http://localhost:3000/Login";
          }, 2000);
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops",
            text: "Something went wrong. Please try again",
          });
        });
    }
  };

  return (
    <>
      <div className="registerForm" style={{ marginBottom: "500px" }}>
        <h1> Register Here </h1>

        <form onSubmit={onreg} name="registerForm">
          <p> Index Number : </p>
          <input
            className="form-control"
            type="text"
            id="index"
            name="index"
            placeholder="Enter Index Number"
            onChange={form.handleChangeEvent}
            onBlur={form.handleBlurEvent}
          />
          <label className="error" style={{ color: "red" }}>
            {errors.index ? errors.index : ""}
          </label>

          <p>First Name : </p>
          <input
            className="form-control"
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter First Name"
            onChange={form.handleChangeEvent}
            onBlur={form.handleBlurEvent}
          />
          <label className="error" style={{ color: "red" }}>
            {errors.fname ? errors.fname : ""}
          </label>

          <p>Last Name : </p>
          <input
            className="form-control"
            type="text"
            id="lname"
            name="lname"
            placeholder="Enter Last Name"
            onChange={form.handleChangeEvent}
            onBlur={form.handleBlurEvent}
          />
          <label className="error" style={{ color: "red" }}>
            {errors.lname ? errors.lname : ""}
          </label>

          <p> NIC : </p>
          <input
            className="form-control"
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

          <p>Email : </p>
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email"
            onChange={form.handleChangeEvent}
            onBlur={form.handleBlurEvent}
          />
          <label className="error" style={{ color: "red" }}>
            {errors.email ? errors.email : ""}
          </label>

          <p>Select a Jobe Role : </p>
          <select
            className="form-control"
            name="role"
            id="role"
            onChange={form.handleChangeEvent}
            onBlur={form.handleBlurEvent}
          >
            <option value="Select a Jobe Role "> Select a Jobe Role </option>
            <option value="student"> Student </option>
            <option value="teacher"> Teacher </option>
          </select>
          <label className="error" style={{ color: "red" }}>
            {errors.role ? errors.role : ""}
          </label>

          <p> Phone Number : </p>
          <input
            className="form-control"
            type="text"
            id="tnum"
            name="tnum"
            placeholder="Enter Phone Number"
            onChange={form.handleChangeEvent}
            onBlur={form.handleBlurEvent}
          />
          <label className="error" style={{ color: "red" }}>
            {errors.tnum ? errors.tnum : ""}
          </label>

          <p>Enter your password :</p>
          <input
            className="form-control"
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

          <p>Comform your password :</p>
          <input
            className="form-control"
            type="password"
            id="cpassword"
            name="cpassword"
            placeholder="Enter Password"
            onChange={form.handleChangeEvent}
            onBlur={form.handleBlurEvent}
          />
          <br />
          <label className="error" style={{ color: "red" }}>
            {errors.cpassword ? errors.cpassword : ""}
          </label>

          <input type="submit" className="btn" name="" value="Register" />
        </form>
        <div className="nothing"></div>
      </div>
    </>
  );
}

export default Register;
