function sumOrProduct(array, n) {
    const sortArray = array.sort(compare);
    const sum = (a, b) => a + b;
    const product = (a, b) => a * b;
    const smallestN = sortArray.slice(0, n).reduce(product);
    const biggestN = sortArray.slice(-n).reduce(sum);
    if (biggestN > smallestN) { return "sum" }
    if (biggestN < smallestN) { return "product" }
    return "same"
}

function compare(a, b) {
    if (a < b) { return -1 }
    if (a > b) { return 1 }
    return 0
}