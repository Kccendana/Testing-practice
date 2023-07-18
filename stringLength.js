const stringLength = string => {
    if(string.length < 1) {
        throw new Error('String should be more than 1 character')
    }
    if(string.length > 10) {
        throw new Error('String should less than 11 characters')
    }
    return string.length
}

module.exports = stringLength;