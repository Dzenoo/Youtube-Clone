import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

import logo from "../../assets/logo.png";
import profileImg from "../../assets/profileImg.png";

const Navigation = () => {
  return (
    <div>
      <div className="navbar__section">
        <div className="navbar_logo_btn">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar_profile_icon">
          <img src={profileImg} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navigation;
