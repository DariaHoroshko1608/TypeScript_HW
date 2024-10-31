"use strict";
var buildTree = function (depth, startValue) {
    if (startValue === void 0) { startValue = 1; }
    if (depth <= 0) {
        return null;
    }
    return {
        value: startValue,
        child: buildTree(depth - 1, startValue + 1)
    };
};
console.log(buildTree(3));
