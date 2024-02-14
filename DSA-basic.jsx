//palindrome number 

const palindrome = (x) => {
    return x === +x.toString().split("").reverse().join("")
}
const res = palindrome(10)
console.log(res);
//outpu true or false