import React, { Fragment, useState, useEffect } from "react";
import "./TitleBar.css";
import MainContent from "../MainContent/MainContent";
import Recommendations from "../Recommendations/Recommendations";

import logo from "../../assets/plannerIcon.svg";
// import searchIconThin from '../../assets/searchIconThin.svg'

const TitleBar = ({
  searchChange,
  changeOption,
  filteredRes,
  search,
  changeShowContent,
  sendFilteredResultsUp,
  setSearch,
}) => {
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState(false);
  const [option, setOption] = useState("All");
  const [Category, setCategory] = useState("Projects");
  const [CategoryObject, setCategoryObject] = useState({});

  const toggle = (e) => {
    setActive(!active);
  };

  const settingfilteredResultsFromRecommendation = (e) => {
    sendFilteredResultsUp(e);
    setSearch();
    const selector = document.getElementsByClassName("search-input");
    console.log("selector", selector);
    selector[0].value = "";
  };

  const settingCategory = (e) => {
    console.log("e", e);
    setCategory(e.target.innerText);
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
                <div className="dropdown-list_item" onClick={settingCategory}>
                  All
                </div>
                <div className="dropdown-list_item" onClick={settingCategory}>
                  Projects
                </div>
                <div className="dropdown-list_item" onClick={settingCategory}>
                  Contractors
                </div>
                <div className="dropdown-list_item" onClick={settingCategory}>
                  Resources
                </div>
              </div>
            ) : null}
          </div>
          <div className="input-field">
            <i className="fa fa-search search-icon"></i>
            <input
              className="search-input"
              onChange={searchChange}
              type="text"
              placeholder="Search tasks, @Users..."
              // onBlur={onFocusChange}
            />
            <div className="recommendations">
              {(() => {
                if (search !== "" && !hide) {
                  return (
                    <Recommendations
                      searchString={search}
                      Category={Category}
                      settingCategory={settingCategory}
                      changeShowContent={changeShowContent}
                      filteredResultsFromRecommendation={
                        settingfilteredResultsFromRecommendation
                      }
                    />
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleBar;
