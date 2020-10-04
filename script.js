// function reverseString(string) {
//     let reversedStr = '';

//     for (let char of string) {
//         reversedStr = char + reversedStr
//     }
//     console.log(reversedStr)
// }

// reverseString("The quick brown fox")

// To be able to use HOF such as .forEach() we need to turn our string into an array first
// .forEach() takes in a funcrion (callback) that takes in an iterator as a parameter

// function reverseString2(string) {
//     let revString = '';

//     string.split('').forEach(element => {
//         revString = element + revString
//     });
//     return revString
// }

// function fizzBuzz() {
//     for (let i = 1; i < 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz()

// function isPalindrome (string) {
//     const reversedStr = string.split('').reverse().join('');
    
//     if (reversedStr === string) {
//         console.log(true) 
//     } else {
//         console.log(false)
//     }
// }

// isPalindrome('racecar')

function findLongestWord(string) {
    
    let words = string.split(' ');
    
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    console.log(longestWord.length)
}

findLongestWord("The quick brown fox jumped over the lazy dog")