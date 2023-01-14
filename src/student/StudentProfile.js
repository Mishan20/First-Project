import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useFormInputValidation } from "react-form-input-validation";

function StudentProfile() {
  const [fields, errors, form] = useFormInputValidation(
    {
      fname: "",
      lname: "",
      email: "",
      tnum: "",
    },
    {
      fname: "required",
      lname: "required",
      email: "required",
      tnum: "required|between:0,11",
    }
  );

  const onreg = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      axios
        .post("http://localhost/20it0497/backend/editProfile.php", {
          fname: fields.fname,
          lname: fields.lname,
          nic: localStorage.getItem("Nic"),
          email: fields.email,
          tnum: fields.tnum,
        })
        .then(function (response) {
          console.log(response.data);
          Swal.fire({
            icon: "success",
            title: "Done",
            text: "You are successfully edited!",
          });
          setTimeout(() => {
            window.location = "http://localhost:3000/SProfile";
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

  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost/20it0497/backend/getprofile.php", {
        role: localStorage.getItem("Role"),
        nic: localStorage.getItem("Nic"),
      })
      .then(function (response) {
        setdata(response.data);
        // console.log(response.data);
      })
      .catch(function (response) {
        alert("Something went wrong");
      });
  }, []);
  return (
    <div style={{height:"1000px"}}>
      <h2 className="text-center">EDIT PROFILE</h2>

      <div className="container rounded bg-white mt-2">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3">
              <img
                className="rounded-circle mt-5"
                alt="dp"
                src="http://brajrajnagarcollege.ac.in/wp-content/uploads/2017/09/profile-250x210.jpg"
                width="150"
              />
              <span className="font-weight-bold">
                Name : {data.fname} {data.lname}
              </span>
              <span className="text-black-50">Email : {data.email}</span>
              <span>Address: United States</span>
              <span>Index no : {data.studentid}</span>
              <span>NIC : {data.nic}</span>
              <span>Phone Number : {data.phone}</span>
              <span>Role : {data.role}</span>
            </div>
          </div>

          <form onSubmit={onreg} className="col-md-8">
            <div className="mb-3">
              <label className="small mb-1"> Student Id </label>
              <input
                className="form-control"
                id="index"
                name="index"
                type="text"
                placeholder={data.studentid}
                readOnly
              />
            </div>

            <div className="row gx-3 mb-3">
              <div className="col-md-6">
                <label className="small mb-1">First name</label>
                <input
                  onChange={form.handleChangeEvent}
                  onBlur={form.handleBlurEvent}
                  className="form-control"
                  id="fname"
                  name="fname"
                  type="text"
                  placeholder={data.fname}
                />

                <label className="error" style={{ color: "red" }}>
                  {errors.fname ? errors.fname : ""}
                </label>
              </div>

              <div className="col-md-6">
                <label className="small mb-1">Last name</label>
                <input
                  onChange={form.handleChangeEvent}
                  onBlur={form.handleBlurEvent}
                  className="form-control"
                  id="lname"
                  name="lname"
                  type="text"
                  placeholder={data.lname}
                />
                <label className="error" style={{ color: "red" }}>
                  {errors.lname ? errors.lname : ""}
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="small mb-1">Email address</label>
              <input
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                className="form-control"
                id="email"
                name="email"
                type="email"
                placeholder={data.email}
              />
              <label className="error" style={{ color: "red" }}>
                {errors.email ? errors.email : ""}
              </label>
            </div>

            <div className="row gx-3 mb-3">
              <div className="col-md-6">
                <label className="small mb-1">Phone number</label>
                <input
                  onChange={form.handleChangeEvent}
                  onBlur={form.handleBlurEvent}
                  className="form-control"
                  id="tnum"
                  name="tnum"
                  type="text"
                  placeholder={data.phone}
                />
                <label className="error" style={{ color: "red" }}>
                  {errors.tnum ? errors.tnum : ""}
                </label>
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
