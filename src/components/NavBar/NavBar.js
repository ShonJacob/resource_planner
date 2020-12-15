import React, { Fragment } from "react";
import "./NavBar.css";

import homeIcon from "../../assets/homeIcon.svg";
import tasksIcon from "../../assets/tasksIcon.svg";
import customersIcon from "../../assets/customersIcon.svg";
import companiesIcon from "../../assets/companiesIcon.svg";
import settingsIcon from "../../assets/settingsIcon.svg";

const NavBar = () => {
  return (
    <Fragment>
      <div className="navbar-wrapper">
        <ul className="navbar">
          <button className="list-item">
            <li className="navbar-item">
              <img src={homeIcon} alt="homeIcon" />
              <p>Dashboard</p>
            </li>
          </button>
          <button className="list-item">
            <li className="navbar-item">
              <img src={tasksIcon} alt="tasksIcon" />
              <p>Tasks</p>
            </li>
          </button>
          <button className="list-item">
            <li className="navbar-item">
              <img src={customersIcon} alt="customersIcon" />
              <p>Customers</p>
            </li>
          </button>
          <button className="list-item">
            <li className="navbar-item">
              <img src={companiesIcon} alt="companiesIcon" />
              <p>Companies</p>
            </li>
          </button>
          <button className="list-item">
            <li className="navbar-item">
              <img src={settingsIcon} alt="settingsIcon" />
              <p>Settings</p>
            </li>
          </button>
        </ul>
        <button className="signoutButton">Sign Out</button>
      </div>
    </Fragment>
  );
};

export default NavBar;
