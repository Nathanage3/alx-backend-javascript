export default function createReportObject(employeesList) {
  let reportObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return reportObject;
}
