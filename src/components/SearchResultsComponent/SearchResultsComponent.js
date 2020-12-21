import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./SearchResultsComponent.css";
import { columns } from "../../searchContent";
// import SlidingButton from "../sildingButton/SlidingButton";

const SearchResultsComponent = (props) => {
  const data = props.filteredRes;
  console.log("data", data);
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
    <div className="wrapper">
      <div className="main-section">
        <div className="result-table">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell, j) => {
                      {
                        /* debugger; */
                      }
                      return (
                        <td {...cell.getCellProps()} className="table-row">
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsComponent;
