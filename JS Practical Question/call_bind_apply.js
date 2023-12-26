const name = {
  firstName: "Anshu Mishra",
};

const lname = {
  firstName: "Ankit Mishra",
};

function getMyName(address, city) {
  console.log("Inside of My Get Name", this.firstName, address, city);
}
console.clear();
getMyName.call(lname, "Ram Nath Deoria ", "Deoria");
getMyName.apply(name, ["90/85A", "New Delhi"]);

console.log(getMyName.bind(lname, "A 30 ", "Bhopal")());

// console.log("funCall", funCall);
// console.log("funCall1", funCall1);

// const testCallMethod = {
//   testName: "Call ",
// };
// const testApplyMethod = {
//   testName: "Apply ",
// };
// const testBindMethod = {
//   testName: "Bind ",
// };

// const testingApplyFun = function (first, second, symbol = "%") {
//   console.log(
//     `I am Testing ${this.testName} with Arg of ${first} , ${second} & ${symbol}`
//   );
// };

// testingApplyFun.call(testCallMethod, "1", "2"); // Need to Pass Argument Directly
// // O/p => I am Testing Call  with Arg of 1 , 2 & %

// testingApplyFun.apply(testApplyMethod, ["1", "2", "#"]); // Will Pass Argument In Array No Need to Acces with Index , Value will Automatically Assign

// // O/p => I am Testing Apply  with Arg of 1 , 2 & #

// const res = testingApplyFun.bind(testBindMethod, "1", "2", "@"); // Same Like Call but it will return Copy of Function Which Need to Call Furthure
// res();
// // O/p => I am Testing Bind  with Arg of 1 , 2 & @
