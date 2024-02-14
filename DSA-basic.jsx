//palindrome number 

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