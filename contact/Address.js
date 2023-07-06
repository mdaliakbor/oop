const _id = Symbol("id");
const _roadNo = Symbol("roadNo");
const _postalCode = Symbol("postalCode");
const _city = Symbol("city");
const _region = Symbol("region");
const _country = Symbol("country");

class Address {
  constructor({ id, roadNo, postalCode, city, region, country }) {
    this[_id] = id;
    this[_roadNo] = roadNo || "";
    this[_postalCode] = postalCode || "";
    this[_city] = city || "";
    this[_region] = region || "";
    this[_country] = country || "";
  }
  get id() {
    return this[_id];
  }
  get roadNo() {
    return this[_roadNo];
  }
  set roadNo(value) {
    this[_roadNo] = value;
  }
  get postalCode() {
    return this[_postalCode];
  }
  set postalCode(value) {
    this[_postalCode] = value;
  }
  get city() {
    return this[_city];
  }
  set city(value) {
    this[_city] = value;
  }
  get region() {
    return this[_region];
  }
  set region(value) {
    this[_region] = value;
  }
  get country() {
    return this[_country];
  }
  set country(value) {
    this[_country] = value;
  }
  toString() {
    return `ID: ${this[_id]},
     RoadNo: ${this[_roadNo]},
      PostalCode: ${this[_postalCode]},
       City: ${this[_city]},
       Region: ${this[_region]},
       Country: ${this[_country]}
       `;
  }
}

module.exports = Address;
