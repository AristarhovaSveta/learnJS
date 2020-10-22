function lifePathNumber(dateOfBirth) {
    const numbers = dateOfBirth.split("-");
    const year = numbers[0];
    const month = numbers[1];
    const day = numbers[2];
    let lifenum = 0;
    lifenum = getSimpleNumber(year) + getSimpleNumber(month) + getSimpleNumber(day);
    return getSimpleNumber(lifenum);
}

let sum = 0;
function getSimpleNumber(number) {
    if (number < 10 && number > 0) { return number }
    else {
        result = number % 10 + getSimpleNumber(Math.floor(number / 10));
        if (result > 9) {
            return getSimpleNumber(result)
        }
        else {
            return result
        }
    }
}