function reverseArrayInPlace(arr) {
let left = 0;
let right = arr.length - 1;
while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
    }
    return arr;
}

  console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]