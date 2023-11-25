const testCallMethod = {
  testName: "Call ",
};
const testApplyMethod = {
  testName: "Apply ",
};
const testBindMethod = {
  testName: "Bind ",
};

const testingApplyFun = function (first, second, symbol = "%") {
  console.log(
    `I am Testing ${this.testName} with Arg of ${first} , ${second} & ${symbol}`
  );
};

testingApplyFun.call(testCallMethod, "1", "2"); // Need to Pass Argument Directly
testingApplyFun.apply(testApplyMethod, ["1", "2", "#"]); // Will Pass Argument In Array No Need to Acces with Index , Value will Automatically Assign
const res = testingApplyFun.bind(testBindMethod, "1", "2", "@"); // Same Like Call but it will return Copy of Function Which Need to Call Furthure
res();
