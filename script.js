function reverseString(string) {
    let reversedStr = ''

    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + string[i]
    }

    console.log(reversedStr)
}

reverseString("The quick brown fox")