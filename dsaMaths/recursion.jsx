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

// print from n to 1 

const nonLinearly = (i,n) => {
    if (i < 1) {
        return  
    }else {
        console.log(i);
        nonLinearly(i-1, n)
    }
}
nonLinearly(4,1)