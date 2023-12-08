import { NavLink } from "react-router-dom";
import Image from "./../../assets/images/person-shrugging-light-skin-tone.svg";

import "./noPageFound.scss";

function NoPageFound() {
  return (
    <div className="main_content container-fluid">
      <div className=" content_container">
        <div className="container">
          <h1 className="display-4">Page Not Found</h1>
          <p className="lead">We are sorry, this page does not exist</p>
        </div>

        <img className="shrug" alt="Person Shrugging" src={Image} />
        <button type="button" className="btn btn-dark">
          <NavLink className="nav-link" to={"/"}>
            Home
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default NoPageFound;
