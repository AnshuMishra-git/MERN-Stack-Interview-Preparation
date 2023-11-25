// InterView Question Related with Set Time Out

function a() {
  var a = 1;
  setTimeout(function () {
    console.log(a);
  }, 3000);
  console.log("Learn ");
}
// a();

// Learn
// 1

// ===========================================================================

// Print in console 1, 2, 3, 4, 5 … 10, after each and every second. Means 1 after 1 sec, 2 after 2 sec, 3 after 3 sec and so on. How would you do it?

function b() {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      console.log("i ->", i);
    }, i * 1000);
  }
}
// b();

// ===========================================================================

// What If you have to only use var and prints 1,2,3,..10 every second? What to do?

function c() {
  for (var i = 0; i < 6; i++) {
    function inner(i) {
      setTimeout(() => {
        console.log("i ->", i);
      }, i * 1000);
    }
    inner(i);
  }
}
c();
