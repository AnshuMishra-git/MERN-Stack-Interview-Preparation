// Promise Related Question For Interview

// IF Any Either Resolve or Reject Run Then Any Other Will Not Going to Execute

// Syntax 1
new Promise((resolve, reject) => {
  resolve({
    data: "I am Here ",
  });
  reject("No Thing FOund");
})
  .then((data) => {
    console.log("Data", data);
  })
  .catch((err) => {
    console.log("Err", err);
  });

// Syntax 2
const response = new Promise((resolve, reject) => {
  resolve({
    data: "I am Here ",
  });
  reject("No Thing FOund");
});

response
  .then((d) => console.log("da", d))
  .catch((err) => console.log("err", err));
