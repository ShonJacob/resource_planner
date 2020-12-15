import React, { useState, useEffect } from "react";
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TitleBar from "./components/TitleBar/TitleBar";
import MainContent from "./components/MainContent/MainContent";

import { companies } from "./content.js";

import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(companies);
  const [option, setOption] = useState("All");

  const searchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const changeOption = (event) => {
    console.log(event.target.value);
    setOption(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    console.log(companies);
  }, []);

  const filteredResults = searchResults.filter((company) => {
    return company.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="page-wrapper">
      <TitleBar searchChange={searchChange} changeOption={changeOption} />
      <MainContent filteredRes={filteredResults} />
      {/* ROUTE THE PAGES HERE WITH ROUTER and in Pages import each component for that page */}
    </div>
  );
};

export default App;
