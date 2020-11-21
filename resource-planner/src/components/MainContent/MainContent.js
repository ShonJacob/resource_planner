import React, {useMemo} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { useTable } from "react-table";
import './MainContent.css'
import {columns} from '../../content'

const MainContent = (props) => {
    const data = props.filteredRes;
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({
            columns,
            data,
        });

    return (
        <div className='wrapper'>
            <NavBar />
            <div className='main-section'>
                <div className="result-table">
                    <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                           
                        </tr>
                        
                        ))}
                    </thead>
                    
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}  className='table-row' >{cell.render('Cell')}</td>
                            })}
                            </tr>
                        )
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MainContent
