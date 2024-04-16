export default function createEmployeesObject(departmentName, employees) {
  let obj = { [departmentName]: employees };
  return obj;
}
