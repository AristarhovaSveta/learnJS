function doubles(s) {
    var reducer = (result, currentElement) => {
        if (result.slice(-1)[0] === currentElement) {
            result.pop();
        } else {
            result.push(currentElement);
        }
        return result
    };
    return s.split('').reduce(reducer, []).join('')
}