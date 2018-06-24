// for (⟦«init»⟧; ⟦«condition»⟧; ⟦«post_iteration»⟧)
//     «statement»

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    break;
  }
  console.log(arr[i]);
}

var i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

do {
  // ...
} while (condition);

// break;
// continue;
