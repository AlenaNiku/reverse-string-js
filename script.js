function reverseString(string) {
    let reversedStr = '';

    for (let char of string) {
        reversedStr = char + reversedStr
    }
    console.log(reversedStr)
}

reverseString("The quick brown fox")

// To be able to use HOF such as .forEach() we need to turn our string into an array first
// .forEach() takes in a funcrion (callback) that takes in an iterator as a parameter

function reverseString2(string) {
    let revString = '';

    string.split('').forEach(element => {
        revString = element + revString
    });
    return revString
}