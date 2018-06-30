var jane = {
  name: "Jane",
  describe: function() {
    return "Person named " + this.name;
  },
  school: {
    name: "abc",
    grade: "A",
    address: {
      city: "ny",
      state: "ny"
    }
  }
};
console.log(jane.name);
console.log(jane.describe());
jane["age"] = 23;
console.log(jane.school.address.state);
console.log(jane["school"].address["state"]);
