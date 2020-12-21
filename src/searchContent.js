export const columns = [
  {
    Header: "Project Name",
    accessor: "projectname",
  },
  {
    Header: "Contractor Name",
    accessor: "contractorname",
  },
  {
    Header: "Task Number",
    accessor: "tasknumber",
  },
  {
    Header: "Assigned To",
    accessor: "assignedto",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const searchResults = [
  {
    projectname: "Jersey Engineering",
    contractorname: "Contractor1",
    tasknumber: "11FGTY188",
    assignedto: "@Arun",
    status: "Ongoing",
  },
  {
    projectname: "Jersey Engineering",
    contractorname: "Contractor1",
    tasknumber: "11FGTY189",
    assignedto: "@Shon",
    status: "Completed",
  },
  {
    projectname: "Jersey Engineering",
    contractorname: "Contractor2",
    tasknumber: "11FGTY190",
    assignedto: "@Arun",
    status: "Pending",
  },
  {
    projectname: "York Engineering",
    contractorname: "Contractor2",
    tasknumber: "11FGTY191",
    assignedto: "@Arun",
    status: "Ongoing",
  },
  {
    projectname: "York Engineering",
    contractorname: "Contractor1",
    tasknumber: "11FGTY192",
    assignedto: "@Shon",
    status: "Completed",
  },
  {
    projectname: "Test Engineering",
    contractorname: "Contractor3",
    tasknumber: "11FGTY193",
    assignedto: "@Arun",
    status: "Ongoing",
  },
];

export const filter = (searchInput, filterCategory) => {
  let searchRegex = new RegExp(`${searchInput}`, "i");
  // searchRegex.test(element.projectname)
  // let count = 0;
  return searchResults.filter((element) => {
    // if (count >= 5) {
    //   return false;
    // }
    let ismatch = false;
    if (filterCategory === "Projects") {
      ismatch = ismatch || searchRegex.test(element.projectname);
    }
    if (filterCategory === "Contractors") {
      ismatch = ismatch || searchRegex.test(element.contractorname);
    }
    if (filterCategory === "Resources") {
      ismatch = ismatch || searchRegex.test(element.assignedto);
    }
    // count++;
    return ismatch;
  });
};

// console.log(filter("xyz", 1));
