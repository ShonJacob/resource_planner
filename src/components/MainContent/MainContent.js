import React, { useMemo } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useTable } from "react-table";
import "./MainContent.css";
import { columns } from "../../content";
import SlidingButton from "../sildingButton/SlidingButton";

const MainContent = (props) => {
  const data = props.companies;
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
      <div className="addCompany">
        <p>All Companies</p>
        <button>Add new company</button>
      </div>
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
                          {(() => {
                            if (j === 3) {
                              {
                                return <SlidingButton />;
                              }
                            } else {
                              return cell.render("Cell");
                            }
                          })()}
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

export default MainContent;
