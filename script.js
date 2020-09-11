function reverseString(string) {
    let reversedStr = ''

    for (let i = 0; i < string.length; i++) {
        reversedStr = string[i] + reversedStr
    }
    console.log(reversedStr)
}

reverseString("The quick brown fox")