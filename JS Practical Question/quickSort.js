function quickSort(arr) {
  if (arr.length <= 1) {
    console.log("arr->", arr);
    return arr; // An array of zero or one elements is already sorted
  } else {
    var pivot = arr[0]; // Choose the pivot
    var left = [];
    var right = [];

    // Partition the array into two sub-arrays
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    console.log("Pivout", pivot);
    console.log("left", left);
    console.log("right", right);
    console.log("========================================");

    // Recursively sort the sub-arrays and combine them with the pivot
    return quickSort(left).concat(pivot, quickSort(right));
  }
}

const arrayToSort = [3, 7, 8, 9, 4, 7, 4, 2, 4, 6];

var sortedArray = quickSort(arrayToSort);

console.log(sortedArray);
console.log([...new Set(sortedArray)]);
