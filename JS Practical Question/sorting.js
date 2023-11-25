// Sort Number

const numberToSort = [
  2, 4, 6, 3, 7, 8, 9, 4, 7, 4, 3454, 65, 543232, 54, 65, 65,
];

numberToSort.sort((a, b) => {
  return a - b;
});
console.log(numberToSort);

// Sort String
const stringToSort = ["Zabara", "Carat", "Apple", "Banana"];

console.log(stringToSort.sort());

const toughTestCase = [
  "grape",
  "apple",
  "23Orange",
  "@Banana",
  "Carrot",
  "#fruit",
  "Zebra",
  "kiwi",
  "123",
  "1Apple",
];

// Sorting the array
// toughTestCase.sort((a, b) =>
//   a.localeCompare(b, undefined, { sensitivity: "base" })
// );

console.log(toughTestCase.sort());
