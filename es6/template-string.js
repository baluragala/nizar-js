function printCoord2(x, y) {
  console.log("(" + x + ", " + y + ")");
}

function printCoord2(x, y) {
  console.log(`(${x}, ${y})`);
}

var HTML5_SKELETON =
  "<!doctype html>\n" +
  "<html>\n" +
  "<head>\n" +
  '    <meta charset="UTF-8">\n' +
  "    <title></title>\n" +
  "</head>\n" +
  "<body>\n" +
  "</body>\n" +
  "</html>\n";

let title = "es6";
const HTML5_SKELETON = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${title.toUpperCase()}</title>
    </head>
    <body>
    </body>
    </html>`;

//tagged template literals

var person = "Mike";
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag`That ${person} is a ${age}`; // myTag(["That","is a",person,age])

console.log(output);
// That Mike is a youngster
