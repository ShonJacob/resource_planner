import React, { useState } from "react";
import "./Recommendations.css";
import { filter } from "../../searchContent";

const Recommendations = ({
  searchString,
  Category,
  settingCategory,
  changeShowContent,
  hideRecommendation,
  filteredResultsFromRecommendation,
}) => {
  const filteredRes = filter(searchString, Category);

  const [active, setActive] = useState({
    Projects: true,
    Contractors: false,
    Resources: false,
  });

  const onCategoryFilter = (e) => {
    console.log("target Inner", e.target.innerText);
    console.log(active);
    // active[e.target.innerText] = !active[e.target.innerText];
    setActive({ ...active, [e.target.innerText]: !active[e.target.innerText] }); //creates new object
    settingCategory(e);
  };

  return (
    <div className="recommendationResults">
      <div className="categoryButtons">
        <button
          className={active.Projects ? "setbackground" : null}
          onClick={onCategoryFilter}
        >
          Projects
        </button>
        <button
          className={active.Contractors ? "setbackground" : null}
          onClick={onCategoryFilter}
        >
          Contractors
        </button>
        <button
          className={active.Resources ? "setbackground" : null}
          onClick={onCategoryFilter}
        >
          Resources
        </button>
      </div>
      <div>
        {filteredRes.map((e, i) => {
          return (
            <div className="recommendedRes" key={i}>
              <p>
                {e.projectname}-{e.tasknumber}-{e.assignedto}
              </p>
              <p style={{ color: "green", marginLeft: "30px" }}>{e.status}</p>
            </div>
          );
        })}
      </div>
      <button
        className="viewMoreButton"
        onClick={function (event) {
          changeShowContent();
          console.log();
          filteredResultsFromRecommendation(filteredRes);
          hideRecommendation;
        }}
      >
        View More
      </button>
    </div>
  );
};

export default Recommendations;
