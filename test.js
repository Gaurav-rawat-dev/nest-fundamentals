// const { ConsoleLogger } = require("@nestjs/common")
// const { number } = require("zod")

const { ConsoleLogger } = require("@nestjs/common")
const { set } = require("mongoose")
const { PassThrough } = require("stream")

// const { array } = require("zod")

// const str = "20"
// console.log(typeof str)

// const typeChanged = Number(str)
// console.log(typeof typeChanged)  

//  Flatten the array 

// const myArr = [[1,2], 3, [4,5]]

// function flattentArray(arr){
//     return arr.reduce((acc, val)=>{
//         if(Array.isArray(val)){
//            return acc.concat(flattentArray(val))
//         }
//         return acc.concat(val)
        
//     }, [])
// }

// const test = flattentArray(myArr)
// console.log(test)


//    Anagram problem 
//  silent, listen, anagrams

// approach :
// for loop over str1 and store letters in an array, 
// short cut , arrange them i sequenceEqual, split into array , if both macth anaragram

// const str1 = "silent"
// const str2 = "lisent"

// function checkAnagram(a, b){
//     function spliIntoArray(c){
//         return c.split("").sort().join("")
//     }

//     let str1Array = spliIntoArray(a)
//     let str2Array = spliIntoArray(b)

//     if(str1Array === str2Array){
//         return console.log(" it is anagram")
//     }else{
//         return console.log("not anagram")
//     }
    

// }

// const data = checkAnagram(str1, str2)
// console.log(data)


//  say hi after 4 seconds 

// function delayResponse(data, delay){
//     let timer 
//     clearTimeout(timer)
//     return setTimeout(() => {
//         console.log(data)
//     }, delay);
// }


// const data = delayResponse("hi freinds", 4000)
// console.log(data, "=========")




// const obj = { a: 1, b: 2 };

// const obKeys = Object.keys(obj);   // ["a", "b"]
// const obValue = Object.values(obj); // [1, 2]
// const obEntry = Object.entries(obj); // [["a", 1], ["b", 2]]

// console.log(obKeys)
// console.log(obValue)
// console.log(obEntry)

// const secondObj = { name: "Amit" };
// Object.freeze(secondObj);
// secondObj.name = "Ravi"; 

// console.log(secondObj, "==secons")


// const obj = {a : 1, b : 2}

// const secObje = {c:1, d:2}
//  Object.freeze(secObje)

// const result = Object.assign( secObje, obj)
// console.log(result, "========")

//  remove duplicte frm array

// const arr1 =  [1, 2, 2, 3, 4, 4]

// let myObj  = {}

// function removeDuplicate(arr){
//     let myObj  = {}
//     for(i=0;i<arr.length;i++){
//         if(!myObj.hasOwnProperty(arr[i])){
//              myObj[arr[i]] = 1.
//         }
       
//     } 
//     return Object.keys(myObj)

    
// } 
// const data = removeDuplicate(arr1)
// console.log(data, "================data =====")

// const nestedArr = [1,[2],[3,4,5],[[6,[7]]]]

// function flatArray(arr){
//     const newArray = []
//     for(i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             newArray.push(...flatArray(arr[i]))
//         }
//         newArray.push(arr[i])
//     }
//     return newArray
// }

// const data = flatArray(nestedArr)
// console.log(data, "================data =====")


// Input: [1, 2, 3, 4, 5], chunkSize = 2
// Output: [[1, 2], [3, 4], [5]]

// const test = [1, 2, 3, 4, 5]
// const chunkVal = 2

// function chunkArray (arr, chunk) {
//     const newArr = []
//     // newArr.push(arr.slice(0, chunk))
//     for(i=0;i<arr.length;i+=chunk){
//              newArr.push(arr.slice(i, i+chunk))
//         }
// return newArr
// }

// const data = chunkArray(test, chunkVal)
// console.log(data)

// Input: [1, 3, 2, 3, 4, 3]
// Output: 3

const  myArr = [1, 3, 2, 3, 4, 3, 3]

function frequestElement(arr){
    let myObj = {}
    for(i=0;i<arr.length;i++){
        if(myObj.hasOwnProperty(arr[i])){
            myObj[arr[i]]  += 1
        }else{
             myObj[arr[i]] = 1
        }
        
    }

    let maxValue = 0
    let key 
    for(let key in myObj){
        if(myObj[key]>maxValue){
            maxValue = myObj[key]
            key = key
        }

        
    }

    return {maxValue, key}

    

    
   
}

const data = frequestElement(myArr)
console.log(data, "==========data=========")