"use strict";
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
var reverseArray = function (arr) {
    var length = arr.length;
    for (var i = 0; i < length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
};
console.log(reverseArray(arr));
var reversedArr = reverseArray(arr);
console.log(reversedArr === arr);
