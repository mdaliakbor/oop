const { Guardian } = require("./person");
const { Contact, Address } = require("./contact");

// Guardian 1 //
const guardian = new Guardian(1, "Ali", "Developer", 80000);
guardian.blood = "A+";
guardian.contact = new Contact({
  id: 1,
  email: "ali@gmail.com",
  phone: "01793953023",
});
guardian.contact.address = new Address({
  id: 1,
  roadNo: " 13-B",
  postalCode: "1216",
  city: "Dhaka city",
  region: "Dhaka region",
  country: "BD",
});
// console.log(guardian);
// console.log(guardian.contact + "");
// console.log(guardian.contact.address.country);
// console.log(guardian.contact.address.city);
