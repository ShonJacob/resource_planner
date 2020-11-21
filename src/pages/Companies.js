import React, { useEffect, useState } from 'react';
import TitleBar from '../components/TitleBar/TitleBar';
import MainContent from '../components/MainContent/MainContent';

import {companies} from '../content'
import '../App.css';

const Companies = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState(companies)

    const searchChange= (event) =>{
        console.log(event.target.value)
        setSearch(event.target.value)
        // if (event.key === 'Enter') {
        //     setSearch(event.target.value)
        // }
    }

    useEffect(()=>{

        // console.log(search)  
        console.log(companies);
        // setSearchResults(filteredResults);  
    })

    const filteredResults = searchResults.filter(company =>{
      return company.name.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <div className="page-wrapper">
            <TitleBar searchChange={searchChange} />
            <MainContent filteredRes={filteredResults} />
            {/* ROUTE THE PAGES HERE WITH ROUTER and in Pages import each component for that page */}
        </div>
    )
}

export default Companies
