type Product = {
    a: number;
    b: number[];
    c: Product | number;
};

const original: Product = {
    a: 1,
    b: [1, 2, 3],
    c: {
        a: 1,
        b: [1, 2, 3],
        c: 3,
    },
};

function deepClone<T>(source: T): T {
    if (source === null || typeof source !== 'object') {
        return source;
    }

    if (Array.isArray(source)) {
        const arrayCopy = source.map(item => deepClone(item));
        return arrayCopy as T;
    }

    const objectCopy: Record<string, any> = {};
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            objectCopy[key] = deepClone(source[key]);
        }
    }
    return objectCopy as T;
}

const clonedObject = deepClone(original);
console.log(clonedObject);
console.log(clonedObject === original);
console.log(clonedObject.b === original.b);
console.log(clonedObject.c === original.c);
