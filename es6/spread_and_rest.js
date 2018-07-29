// spread ... (giving)
// rest ... (receiving)

function add(a, b) {
  return a + b;
}

let args = [10, 20];

add(args[0], args[1]);
add(...args);

function sum(a, b, ...args) {
  console.log(args);
  var t = 0;
  for (var i = 0; i < args.length; i++) {
    t += args[i];
  }
  return t;
}

let input = [1, 2, 3, 4, 5];
sum(...input);

const members = ["jim", "kim", "lim", "dim", "bim"];
// const manager = memebers[0];
// const lead = memebers[1];
// const supportEng = memebers[2];

const [manager, lead, ...engineers] = members;
console.log(manager, lead, engineers);
