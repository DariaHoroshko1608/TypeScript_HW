type TreeNode = {
    value: number;
    child: TreeNode | null;
};

const buildTree = function (depth: number, startValue: number = 1): TreeNode | null {
    if (depth <= 0) {
        return null;
    }

    return {
        value: startValue,
        child: buildTree(depth - 1, startValue + 1)
    };
};

console.log(buildTree(3));

