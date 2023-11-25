console.log("THis is Code for Curring");

function outer(a) {
  return function inner(b) {
    return function innerMost(c) {
      return a + b + c;
    };
  };
}

const data = outer(5)(6)(17);

console.log("Data- >", data);
