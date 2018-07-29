const members = ["jim", "kim", "lim", "dim", "bim"];
// const manager = memebers[0];
// const lead = memebers[1];
// const supportEng = memebers[2];

const [manager, lead, , supportEng] = members;
console.log(manager, lead, supportEng);

const { bar: prop1, foo: prop2, baz: prop3 = "n/a" } = {
  foo: "lorem",
  bar: "ipsum"
};
console.log(prop1);
// "lorem"
console.log(prop2);
// "ipsum"

var obj = { foo: "lorem", bar: "ipsum" },
  prop1 = obj.bar,
  prop2 = obj.foo,
  obj_baz = obj.baz,
  prop3 = obj_baz === undefined ? "n/a" : obj_baz;

console.log(prop1);
// "lorem"
console.log(prop2);
// "ipsum"

const order = {
  name: "cust1",
  address: {
    city: "ny",
    state: "ny"
  }
};

const {
  name: customerName,
  address: { city: cityName }
} = order;

console.log(customerName, cityName);
