// const naming = (n) => {
//     let result = []
//     for (let i = 0; i < n; i++) {
//       result[i] = "suleman"
//     }
//     return result
// }
// // console.log("names",naming(5) );

// const recursive = (i,n) => {
//     if(i > n) {
//         return //basecase
//     }else {
//         // console.log("suleman");// for printing 5 names 
//         console.log(i); // for printing linearly from 1 to n
//         recursive(i + 1 ,n)
//     }
// }
// recursive(1,4)

// // print from n to 1 

const nonLinearly = (i, n) => {
    if (i < 1) {
        return
    } else {
        console.log(i);
        nonLinearly(i - 1, n)


    }
}
nonLinearly(5, 1)


// // print 1 to n without using  i +1 with backtrack

// const backtrack = (i, n) => {
//     if (i < 1) {
//         return
//     } else {

//         backtrack(i - 1, n)
//         console.log(i);

//     }
// }
// backtrack(5, 5) //o/p = 1 2 3 4 5

// // print n to 1 without using  i -1 with backtrack
// const numberTrack = (i,n) => {
//     if (i > n) {
//         return    
//     }
//     else {
//         numberTrack(i + 1, n)
//             console.log(i);

//     }
// }
// numberTrack(1,4)

//sum of first n number n=3 o/p = 6
//parameterised way


// const parameterisedWay = (i, sum) => {
//     if (i < 1) {
//         console.log(sum);
//         return
//     } else {
//         parameterisedWay(i - 1, sum + i)
//     }

// }
// parameterisedWay(3, 0)

// const functionalWay = (n) => {
//     if (n === 0) {
//         return 0
//     } else {
//         return n + functionalWay(n - 1)
//     }
// }
// console.log(functionalWay(4));


// const factorial = (n) => {
//     if (n === 0) {
//         return 1

//     } else {
//         return n * factorial(n - 1)
//     }
// }
// console.log(factorial(4));


// //reverse of array 
// const revArray = (arr,l,r) => {
//     if (l >= r) {
//         return
//     }else {
//         let temp = arr[l]
//         arr[l] = arr[r]
//         arr[r] = temp
//         revArray(arr,l+1,r-1)
//     }
// }
// let arr = [1,2,3,4,5]
// revArray(arr,0,arr.length - 1);
// console.log(arr);
