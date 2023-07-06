const _id = Symbol("id");
const _name = Symbol("name");
const _credit = Symbol("credit");
const _department = Symbol("department");

class Subject {
  constructor({ id, name, credit, department }) {
    this[_id] = id;
    this[_name] = name;
    this[_credit] = credit || null;
    this[_department] = department || null;
  }
  get id() {
    return this[_id];
  }
  set id(value) {
    this[_id] = value;
  }
  get name() {
    return this[_name];
  }
  set name(value) {
    this[_name] = value;
  }
  get credit() {
    return this[_credit];
  }
  set credit(value) {
    this[_credit] = value;
  }
  get department() {
    return this[_department];
  }
  set department(value) {
    this[_department] = value;
  }

  toString() {
    return `ID: ${this[_id]}, Name: ${this[_name]}, Credit: ${this[_credit]}, department: ${this[_department]},`;
  }
}

module.exports = Subject;
