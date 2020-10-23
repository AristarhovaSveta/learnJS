let count8 = 0;
let count5 = 0;
let count3 = 0;
function solve(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (haveRightNumbers(i) && count8 >= count5 && count5 >= count3) { count += 1; }
        count8 = 0;
        count5 = 0;
        count3 = 0;
    }
    return count
}

function haveRightNumbers(number) {
    let digit = number % 10;
    if (digit !== 3 && digit !== 5 && digit !== 8) { return false }
    if (digit === 3) {
        count3 += 1;
    }
    else if (digit === 5) {
        count5 += 1;
    }
    else {
        count8 += 1;
    }
    if (number > 9) {
        return haveRightNumbers(Math.floor(number / 10))
    } else {
        return true
    }
}