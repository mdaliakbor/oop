const UniPerson = require("./UniPerson");

const _employeeID = Symbol("employeeID");
const _salary = Symbol("fee");

class Employee extends UniPerson {
  constructor(id, name, employeeID) {
    super(id, name);
    this[_employeeID] = employeeID;
    this[_salary] = null;
  }
  get employeeID() {
    return this[_employeeID];
  }
  get fee() {
    return this[_salary];
  }
  set fee(value) {
    this[_salary] = value;
  }

  toString() {
    return `${super.toString()},EMPLOYEE-ID: ${this.employeeID}`;
  }
}

module.exports = Employee;
