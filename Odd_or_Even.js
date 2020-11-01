function oddOrEven(array) {
    const arraySum = array.reduce((a, b) => a + b, 0);
    return result = arraySum % 2 === 0 ? "even" : "odd"
}