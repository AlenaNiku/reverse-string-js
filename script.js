function reverseString(string) {
    let reversedStr = ''

    for (let char of string) {
        reversedStr = char + reversedStr
    }
    console.log(reversedStr)
}

reverseString("The quick brown fox")