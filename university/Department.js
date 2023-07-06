const _id = Symbol("id");
const _name = Symbol("name");
const _subjects = Symbol("subjects");
const _dean = Symbol("dean");
const _teacher = Symbol("teacher");

class Department {
  constructor({ id, name, subjects, dean, teacher }) {
    this[_id] = id;
    this[_name] = name;
    this[_subjects] = subjects || [];
    this[_dean] = dean || null;
    this[_teacher] = teacher || [];
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
  get subjects() {
    return this[_subjects];
  }
  set subjects(value) {
    this[_subjects] = value;
  }
  addSubject(subject) {
    this[_subjects.push(subject)];
  }
  get dean() {
    return this[_dean];
  }
  set dean(value) {
    this[_dean] = value;
  }
  get teacher() {
    return this[_teacher];
  }
  set teacher(value) {
    this[_teacher] = value;
  }
  addTeacher(teacher) {
    this[_teacher.push(teacher)];
  }

  toString() {
    return `ID: ${this[_id]}, Name: ${this[_name]}, Subject: ${this[_subjects]}, Dean: ${this[_dean]}, Teacher: ${this[teacher]},`;
  }
}

module.exports = Department;
