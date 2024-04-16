export default function createIteratorObject(report) {
  let employees = [];
  for (let department in report.allEmployees) {
    employees = [...employees, ...report.allEmployees[department]];
  }

  let index = 0;
  return {
    [Symbol.iterator]: function() {
      return {
        next: function() {
          if (index < employees.length) {
            return { value: employees[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}
