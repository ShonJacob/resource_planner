import React, { Fragment, useState, useEffect } from "react";
import "./TitleBar.css";

import logo from "../../assets/plannerIcon.svg";
// import searchIconThin from '../../assets/searchIconThin.svg'

const NavBar = ({ searchChange, changeOption }) => {
  // [search,setSearch] = useState('');
  const [active, setActive] = useState(false);
  const [option, setOption] = useState("All");

  const toggle = (e) => {
    // console.log(e.target.innerText);
    setActive(!active);
  };

  return (
    <>
      <div className="navbar-title">
        <img src={logo} alt="plannerIcon" />
        <h1>Planner</h1>
        <div className="searchbar">
          <div className="dropdown" onClick={toggle}>
            <div className="dropdown-select">
              <span className="select">{option}</span>
              <i className="fa fa-caret-down icon"></i>
            </div>
            {active ? (
              <div
                className="dropdown-list"
                onClick={toggle}
                onClick={(e) => setOption(e.target.innerText)}
              >
                <div className="dropdown-list_item">All</div>
                <div className="dropdown-list_item">Contractors</div>
                <div className="dropdown-list_item">Projects</div>
              </div>
            ) : null}
          </div>
          <input
            className="search-input"
            onChange={searchChange}
            type="text"
            placeholder="Search tasks, @Users..."
          />

          {/* <button type='submit'><img src={searchIconThin} alt="search icon"/></button> */}
        </div>
      </div>
      <div className="addCompany">
        <p>All Companies</p>
        <button>Add new company</button>
      </div>
    </>
  );
};

export default NavBar;
