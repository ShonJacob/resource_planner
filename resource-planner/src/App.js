import React, {useState, useEffect} from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TitleBar from './components/TitleBar/TitleBar';
import MainContent from './components/MainContent/MainContent';

import {companies} from './content.js'

// import Companies from './pages/Companies';
// import Customers from './pages/Customers';
// import Dashboard from './pages/Dashboard';
// import Settings from './pages/Settings';
// import Tasks from './pages/Tasks';
import './App.css';

const App = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState(companies)
    const [option, setOption] = useState("All")

    const searchChange= (event) =>{
        console.log(event.target.value)
        setSearch(event.target.value)
        // if (event.key === 'Enter') {
        //     setSearch(event.target.value)
        // }
    }

    const changeOption=(event) =>{
        console.log(event.target.value);
        setOption(event.target.value);
    }

    useEffect(()=>{
        // console.log(search)  
        console.log(companies);
        // setSearchResults(filteredResults);  
    },[])

    const filteredResults = searchResults.filter(company =>{
      return company.name.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <div className="page-wrapper">
            <TitleBar searchChange={searchChange} changeOption={changeOption} />
            <MainContent filteredRes={filteredResults} />
            {/* ROUTE THE PAGES HERE WITH ROUTER and in Pages import each component for that page */}
        </div>
    )
}

export default App

// const App = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/" exact component={Dashboard} />
//                 <Route path="/customers" exact component={Customers} />
//                 <Route path="/companies" exact component={Companies} />
//                 <Route path="/tasks" exact component={Tasks} />
//                 <Route path="/settings" exact component={Settings} />
//             </Switch>
//         </Router>
//     )
// }

// export default App
