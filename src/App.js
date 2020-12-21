import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TitleBar from "./components/TitleBar/TitleBar";
import MainContent from "./components/MainContent/MainContent";
import NavBar from "./components/NavBar/NavBar";
import SearchResultsComponent from "./components/SearchResultsComponent/SearchResultsComponent";

import { companies } from "./content.js";

import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(companies);
  const [option, setOption] = useState("All");
  const [searchResultsOfSearch, setSearchResultsOfSearch] = useState([]);
  const [showContent, setshowContent] = useState(true);

  const changeShowContent = () => {
    setshowContent(!showContent);
  };

  const setSearchResultsOfSearchFunction = (e) => {
    console.log("search", e);
    setSearchResultsOfSearch(e);
  };

  const setSearchFunction = (e) => {
    setSearch("");
    console.log("search", search);
  };

  const searchChange = (event) => {
    // console.log(event.target.value);
    // event.target.value = event.target.value.toLowerCase();
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const changeOption = (event) => {
    console.log(event.target.value);
    setOption(event.target.value);
    console.log(event.target.value);
  };

  // useEffect(() => {
  //   // console.log(companies);
  // }, []);

  // const filteredResults = searchResults.filter((company) => {
  //   console.log("company", company);
  //   return company.name.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <div className="page-wrapper">
      <TitleBar
        searchChange={searchChange}
        changeOption={changeOption}
        setSearch={setSearchFunction}
        // filteredRes={filteredResults}
        search={search}
        changeShowContent={changeShowContent}
        sendFilteredResultsUp={setSearchResultsOfSearchFunction}
      />
      <div className="main-content-area">
        <NavBar />
        {showContent ? (
          <MainContent companies={companies} />
        ) : (
          <SearchResultsComponent filteredRes={searchResultsOfSearch} />
        )}
      </div>
    </div>
  );
};

export default App;
