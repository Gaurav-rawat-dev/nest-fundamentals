// //  reverse a string 
// const input =  "hello"

const { ConsoleLogger } = require("@nestjs/common")

// function reverseString(str){
//     // firt method 
//     // return  str.split("").reverse().join("")

//     //  secod using for loop

//     const arr = str.split("")
//     console.log(arr, "== this is arr============")
//     const myArr = []
//     for(let i=arr.length;i>0;--i){
//         // console.log(i, "======= value of i initial which should be ")
//         myArr.push(arr[i])
//     }

//     return myArr
// }

// const data = reverseString(input)
// console.log(data, "======= output ====")

// const input = "madam"

// function checkPalindrome(str){
//  this is using for loop
// ======================
// const inptArray = str.split("")
// console.log(input, "====== this is new array=======")
// const myArr = []
// for(let i=inptArray.length;i>0;--i){
//     // console.log(i, "======= value of i initial which should be ")
//     myArr.push(myArr[i])
// }
// if(inptArray==myArr){
//     console.log(" it is palindrome")
// }else{
//     console.log(" it is palindrome")
// }

// this is using strig methods
// =================
// const revString = str.split("").reverse().join("")
// console.log(str, "this is the input string ", revString, " this is revserd string")
// if(revString== str){
//     console.log(" it is palindrome.....")
// }else{
//        console.log(" it is  NOT palindrome.....")
// }

// }

// const data = checkPalindrome(input)

//  Count vowels in a string
// const input = "javascript"
// function checkVowels(str){
//     let vowels = 0
//     const arr = str.split("")
//     for(i=0;i<arr.length;i++){
//        if("aeiou".includes(arr[i])){
//         vowels += 1
//        }
//     }
// }
// const data = checkVowels(input)

// Find the most frequent character in a string

// const input = "javascript"

// function frequestElement(str) {
//     const arr = str.split("")
//     let myObj = {}
//     for (i = 0; i < arr.length; i++) {
//         if (myObj[arr[i]]) {

//             myObj[arr[i]] += 1
//         } else {
//             myObj[arr[i]] = 1
//         }

//     }

//     let maxKey 
//     let maxVal = 0
//     for (const key in myObj) {
//         if (myObj[key] > maxVal) {
//             maxVal = myObj[key];
//             maxKey = key;
//         }
//     }
//     console.log(maxKey, maxVal, "============ maximum =============")
// }

// const data = frequestElement(input)

// 
