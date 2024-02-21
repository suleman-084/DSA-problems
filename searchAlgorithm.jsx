// two types linear search & binary search

//Given an array of 'n' ele & a target ele 't' find index of 't' in the array. return -1 if the target ele is  not found 
//ex arr= [-5,2,10,4,6] t=10 return 2
//ex arr= [-5,2,10,4,6] t=6 return 4
//ex arr= [-5,2,10,4,6] t=50 return -1


const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
return -1
}
// console.log(linearSearch([-5,2,10,4,6], target = 10))
// console.log(linearSearch([-5,2,10,4,6], target = 6))
// console.log(linearSearch([-5,2,10,4,6], target = 70))

//Binary Search
//given a sorted array of 'n' ele & a target ele 't' find index of 't' in the array. return -1 if the target ele is  not found 
//ex arr= [-5,2,10,4,6] t=10 return 2
//ex arr= [-5,2,10,4,6] t=6 return 4
//ex arr= [-5,2,10,4,6] t=50 return -1

const binarySearch = (arr, target) => {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex / 2))
        if(target === arr[middleIndex]) {
            return middleIndex
        }
        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
console.log(binarySearch([-5,2,4,6,10], 4))