const Person = require("./Person.js");
const Student = require("./Student");
const Teacher = require("./Teacher");

const p = new Person("ali", "ali@gmail.com");
const s = new Student("ali", "ali@gmail.com", ["math", "cse", "se"], 500000);
const t = new Teacher("abdullah", "abdullah@gmail.com", "math", 3000);

console.log(p);
console.log(s);
console.log(t);
// s.print();
// t.print();
