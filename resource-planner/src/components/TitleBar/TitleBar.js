import React, { Fragment, useState, useEffect } from 'react'
import './TitleBar.css'

import logo from '../../assets/plannerIcon.svg'
// import searchIconThin from '../../assets/searchIconThin.svg'

const NavBar = ({searchChange, changeOption}) => {

    // [search,setSearch] = useState('');


    return (
        <Fragment>
            <div className="navbar-title">
                <img src={logo} alt="plannerIcon"/>
                <h1>Planner</h1>
                <div className='searchbar'>
                    <select className='selectbox' onChange={changeOption}>
                        <option className="selectbox-option" value="All">All</option>
                        <option className="selectbox-option" value="Projects">Projects</option>
                        <option className="selectbox-option" value="Contractors">Contractors</option>
                        <option className="selectbox-option" value="Resources">Resources</option>
                    </select>
                        <input className="searchbox" onChange={searchChange} type="text" placeholder="Search tasks, @Users..." />
                    
                    {/* <button type='submit'><img src={searchIconThin} alt="search icon"/></button> */}
                </div>
            </div>
            <div className='addCompany'>
                <p>All Companies</p>
                <button>Add new company</button>
            </div>
        </Fragment>
    )
}

export default NavBar
