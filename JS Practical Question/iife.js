// (() => {
//   console.log("I am On Top");
// })();

a = 50;
data();
function data() {
  console.log("IN Data Function ", a);
}

console.log(" A", a);
(() => {
  a = 40;
  console.log("I AM IN ", a);
})();
console.log("B", a);

(function (x, y) {
  console.log(x + y);
})(2, 3); // Outputs: 5
