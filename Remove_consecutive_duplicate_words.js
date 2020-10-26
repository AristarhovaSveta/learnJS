const removeConsecutiveDuplicates = s => {
    const words = s.split(' ');
    let newS = [];
    newS.push(words[0]);
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i] !== words[i + 1]) { newS.push(words[i + 1]) }
    }
    return newS.join(' ')
}