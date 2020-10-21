function getDrinkByProfession(param) {
    let x = correctSting(param);
    switch (x) {
        case 'Jabroni':
            return 'Patron Tequila';
            break;
        case 'School Counselor':
            return 'Anything with Alcohol';
            break;
        case 'Programmer':
            return 'Hipster Craft Beer';
            break;
        case 'Bike Gang Member':
            return 'Moonshine';
            break;
        case 'Politician':
            return 'Your tax dollars';
            break;
        case 'Rapper':
            return 'Cristal';
            break;
        default:
            return 'Beer';
    }
}


function firstLetterCaps(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function correctSting(param) {
    let words = param.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        result.push(firstLetterCaps(words[i].toLowerCase()));
    }
    return result.join(' ')
}