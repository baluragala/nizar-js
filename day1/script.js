(function() {
  var a1 = 10;

  function test() {
    var a2 = 20;
  }

  test();

  setTimeout(() => console.log(a1), 200);
})();

// IIFE
