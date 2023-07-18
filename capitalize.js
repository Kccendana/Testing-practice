function capitalize(string){
    const stringSplit = string.split('');
    const firstToUpC = stringSplit[0].toUpperCase();
    stringSplit[0] = firstToUpC;
    const newString = stringSplit.join('');
    return newString;
}

module.exports = capitalize;