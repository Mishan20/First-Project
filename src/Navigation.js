
import { Outlet, Link}  from "react-router-dom";


function Navigation(){
    return(
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item text-light" style={{ fontFamily: "Times New Roman", fontSize: "20px", fontWeight: "900" }}>
        STUDENT MANAGEMENT SYSTEM
      </li>
      
    </ul>
    <form>
    <div className="d-flex">
    <Link to="/Home" className="form-control mr-sm-2 btn-danger btn-outline-light">Home </Link>
    <Link to="/Login" className="form-control mr-sm-2 btn-danger btn-outline-light">Login </Link>
    <Link to="/Register" className="form-control mr-sm-2 btn-danger btn-outline-light">Register </Link>
    </div>

    </form>
  </div>
</nav>
<br/>
<br/>

<footer className="bg-light text-center text-lg-start fixed-bottom">
  <div className="container p-4">
  
  </div>

  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © Powered by Ishan:
  </div>
</footer>
<Outlet/>
        </div>
    );
}

export default Navigation;
