// Promise  All Related Question For Interview

const response1 = new Promise((resolve, reject) => {
  resolve({
    data: "I am Here 1 ",
  });
  reject("No Thing FOund 1");
});
const response2 = new Promise((resolve, reject) => {
  resolve({
    data: "I am Here 2",
  });
  reject("No Thing FOund 2");
});
const response3 = new Promise((resolve, reject) => {
  resolve({
    data: "I am Here 3",
  });
  reject("No Thing FOund 3");
});

Promise.all([response1, response2, response3])
  .then((data) => {
    const [resp1, ...resp] = data;
    console.log("Data", data);
    console.log("resp1", resp1);
    console.log("resp", resp);
  })
  .catch((err) => {
    console.log("Err-", err);
  });
