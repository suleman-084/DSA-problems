const { object } = require("prop-types")

const selectionSort = (arr) => {
    let n = arr.length
    for (let i = 0; i <= n - 1; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp

            }

        }

    }
    return arr
}
const arr = [12,45,23,51,19,8]
console.log(selectionSort(arr));


const fruits = ['orange', "apple", "orange", "kiwi", "grapes", "kiwi", "orange", "grapes", "grapes", "grapes", "orange", "orange", "banana"];

const fruitCount = {};

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if (fruitCount[fruit] === undefined) {
        fruitCount[fruit] = 1;
    } else {
        fruitCount[fruit]++;
    }
}

console.log(fruitCount);

const sortedArray = Object.entries(fruitCount)
// console.log(sortedArray);

const descendingArray = (arr) => {
    n= arr.length
    for (let i = 0; i <= n-1; i++) {
        for (let j = 0; j <= n-1; j++) {
            if (arr[j][1] < arr[i][1]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp  

            }
      
        
        }
        
    }
    return sortedArray
}
const logi = descendingArray(sortedArray)
console.log("sorted array is", logi);