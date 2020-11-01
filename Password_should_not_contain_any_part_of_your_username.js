function validate(username, password) {
    if (username.length > password.length) {
        let substrPassword = getAllSubstr(password)
        return substrPassword.every(element =>
            username.indexOf(element) === -1)
    }
    else {
        let substrUsername = getAllSubstr(username)
        return substrUsername.every(element =>
            password.indexOf(element) === -1)
    }
}

function getAllSubstr(word) {
    let substr = []
    const halfWord = Math.round(word.length / 2);
    const wordEnd = word.length - halfWord + 1;
    for (let i = 0; i < wordEnd; i++) {
        substr.push(word.slice(i, i + halfWord));
    }
    console.log(substr)
    return substr
}