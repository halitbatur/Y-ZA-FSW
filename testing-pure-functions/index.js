// list of employees with their names, salary, and department
const employees = [
  { name: "John", salary: 1000, department: "HR" },
  { name: "Jane", salary: 1500, department: "HR" },
  { name: "Jack", salary: 1200, department: "IT" },
  { name: "Jill", salary: 1300, department: "IT" },
  { name: "James", salary: 1100, department: "HR" },
  { name: "Jenny", salary: 1400, department: "IT" },
];

const addEmployee = (name, salary, department) => {
  if (name === "" || salary === 0 || department === "") {
    throw new Error("Employee information cannot be empty");
  }

  employees.push({ name, salary, department });
};

const removeEmployee = (name) => {
  const foundEmployee = employees.find((employee) => employee.name === name);
  if (!foundEmployee) {
    throw new Error("Employee not found");
  }

  const index = employees.indexOf(foundEmployee);
  employees.splice(index, 1);

  return foundEmployee;
};

module.exports = { employees, addEmployee, removeEmployee };
