/^abc$/.test("abc");

var regex1 = RegExp("foo*", "g");
var str1 = "table football, foosball";
var array1;
while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}
