const Person = require("./Person");
const _department = Symbol("department");
const _contact = Symbol("contact");

class UniPerson extends Person {
  constructor(id, name) {
    super(id, name);
    this[_department] = department;
    this[_contact] = contact;
  }
  get department() {
    return this[_department];
  }
  set department(value) {
    this[_department] = value;
  }
  get contact() {
    return this[_contact];
  }
  set contact(value) {
    this[_contact] = value;
  }
  toString() {
    return `${super.toString()}, DEPARTMENT: ${this[_department]}, CONTACT: ${this[_contact]}`
  }
}

module.exports = UniPerson;
