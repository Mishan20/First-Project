import { Outlet, Link } from "react-router-dom";

import axios from "axios";

function NavStudent() {
  const logout = () => {
    document.cookie = "";
    localStorage.clear();
    axios
      .post("http://localhost/20it0497/backend/logout.php")
      .then(function (response) {
        console.log(response.data);
        if (response.data === "fine") {
          document.cookie = "";
          localStorage.clear();
          window.location = "http://localhost:3000/";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item text-light">STUDENT MANAGEMENT SYSTEM</li>
          </ul>
          <form>
            <div className="d-flex">
              <Link
                to="/SHome"
                className="form-control mr-sm-2 btn  btn-light btn-outline-danger"
              >
                Home{" "}
              </Link>
              <Link
                to="/SProfile"
                className="form-control mr-sm-2 btn  btn-light btn-outline-danger"
              >
                Profile
              </Link>

              <Link
                to="/SResult"
                className="form-control mr-sm-2 btn  btn-light btn-outline-danger"
              >
                Result
              </Link>
              <button
                onClick={() => logout()}
                className="form-control mr-sm-2   btn-light btn-outline-danger"
              >
                Logout{" "}
              </button>
            </div>
          </form>
        </div>
      </nav>
      <br />
      <br />
      <footer className="bg-light text-center text-lg-start fixed-bottom">
        <div className="container p-4"></div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © Powered by Ishan:
        </div>
      </footer>

      <Outlet />
    </div>
  );
}

export default NavStudent;
