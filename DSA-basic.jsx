//palindrome number 

const { number } = require("prop-types");

const palindrome = (x) => {
    return x === +x.toString().split("").reverse().join("")
}
const res = palindrome(10)
console.log(res);
//outpu true or false


//2. fibonacci series 0,1,1,2,3,5,8,13,21,34 .....
//f(0) =0 
//f(1) =1

//f(n) = f(n-1) +f(n-2) for n>1 

const fab = (n) => {
    const arr = [0, 1]

    for (let i = 2; i <= n; i++) {

        arr.push(arr[i - 1] + arr[i - 2])

    }
    return arr[n]

}
console.log(fab(7))

//recurrsion method
const fib = (n) => {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(3));

//two sum 
// given an array of integer nums and an integer target
//return indices of the two number  such that they add up to target 
//ex1 input:nums[2,7,11,15],target = 9 
//output: [0,1] bcos nums[0] + nums[1 ] i.e 2 + 7 = 9


const sum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }

        }
    }
}
console.log(sum([2, 7, 11, 15], 9));

//given a & bur func shd return a value a power b

const power = (a, b) => {
    return Math.pow(a, b);
}

const a = 2;
const b = 3;
const resu = power(a, b);
console.log("power is", resu);


//given an array of size N, print second largest distinct element from an array

//i/p: [12,35,1,10,34,1] o/p: 34
//i/p: [10,5,10] o/p: 5


//brutr force approach 



const secondLargestNumber = (arr) => {
    const uniqueArray = Array.from(new Set(arr)) //nlogn
    uniqueArray.sort((a, b) => { return b - a }) //for descending order

    if (uniqueArray.length >= 2) {
        return uniqueArray[1]
    } else {
        return -1
    }
}
// console.log(secondLargestNumber([12, 35, 1, 10, 34, 1]));
// console.log(secondLargestNumber([10, 5, 10]));

//without inbuilt functions

const secondlargestOptimised = (arr) => {
    let largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] != largest && arr[i] > secondLargest) {
             secondLargest = arr[i]
        }


    }
    return secondLargest

}
console.log(secondlargestOptimised([12, 35, 1, 10, 34, 1]));
console.log(secondlargestOptimised([10, 5, 10]));


const fruits = ['orange', "apple", "orange", "kiwi", "grapes", "kiwi", "orange", "grapes", "grapes", "grapes", "orange", "orange", "banana"]

const fruitCount = fruits.reduce((acc,fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
  },{})
  console.log(fruitCount)
  
  const sortedFruits = Object.entries(fruitCount).sort((a,b) => b[1] - a[1] )
  console.log(sortedFruits)

  //factorain of n numbers 

  const factorial = (n) => {
    // if(n === 0 || n === 1) {
    //     return 1 
    // }
    let result = 1
    for (let i=2;  i<=n; i++) {
        result = result * i
        // result *= i

    }
    return result
  }
  console.log(factorial(1));
