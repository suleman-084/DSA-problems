


//bubble sort
//given an array of integers sort the array
//arr = [-6, 20,,8,-2,4]
//bubblseSort array = [-6,-2,4,8,20]


const bubbleSort = (arr) => {
    let n = arr.length
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

            }


        }

    }

}
const arr1 = [-2, -6, 20, 8, 4]
bubbleSort(arr1)
console.log(arr1);



const fruits = ['orange', "apple", "orange", "kiwi", "grapes", "kiwi", "orange", "grapes", "grapes", "grapes", "orange", "orange", "banana"];
//count the array and sort the array in descending order

// Count the occurrences of each fruit
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

// Convert the fruit count object into an array of arrays
const fruitCountArray = Object.entries(fruitCount);


//const fruits = ['orange', "apple", "orange", "kiwi", "grapes", "kiwi", "orange", "grapes", "grapes", "grapes", "orange", "orange", "banana"];

// const fruitCount = {};

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     if (fruitCount[fruit] === undefined) {
//         fruitCount[fruit] = 1;
//     } else {
//         fruitCount[fruit]++;
//     }
// }

// console.log(fruitCount);

// console.log("frt",fruitCountArray);
// const fruitCountArray = Object.entries(fruitCount);
const sorting = (arr) => {
    let n = arr.length

    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n ; j++) {
            if (arr[j][1] > arr[i][1]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp;
            }
        }
    }
    return arr
}
sorting(fruitCountArray);
console.log("ninja",fruitCountArray);






