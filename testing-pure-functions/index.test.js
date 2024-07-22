const { employees, addEmployee, removeEmployee } = require("./index");

// test if adding a new employee works
describe("Adding employees to list of employees", () => {
  test("Add a new employee", () => {
    const previousEmployees = [...employees];
    addEmployee("Mpilo", 100000, "IT");
    expect(employees).toEqual([
      ...previousEmployees,
      { name: "Mpilo", salary: 100000, department: "IT" },
    ]);
  });

  test("Add a new employee without a name", () => {
    expect(() => addEmployee("", 100000, "IT")).toThrow(
      "Employee information cannot be empty"
    );

    // const previousEmployees = [...employees];
    // addEmployee("", 100000, "IT");
    // expect(employees).toEqual([...previousEmployees]);
  });
});

test("Remove an employee", () => {
  const previousEmployees = [...employees];
  const foundEmployee = removeEmployee("Jackson");
  const foundIndex = previousEmployees.indexOf(foundEmployee);
  previousEmployees.splice(foundIndex, 1);
  expect(employees).toEqual(previousEmployees);
});
