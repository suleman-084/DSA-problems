const countDigits = (n) => {
    let count = 0
    while (n > 0) {

        count = count + 1
        n = Math.floor(n / 10)
    }
    return count
}
console.log(countDigits(5589));

// reverse of a number 

const reverseNumber = (n) => {
    let reverseNumber1 = 0
    while (n > 0) {
        const lastDigit = n % 10
        reverseNumber1 = (reverseNumber1 * 10) + lastDigit
        n = Math.floor(n / 10)
    }
    return reverseNumber1
}
console.log(reverseNumber(5589));

//palindrome or not 
const palindrome = (n) => {
    let reverseNumber = 0
    let duplicate = n

    while (n > 0) {
        const lastDigit = n % 10
        reverseNumber = (reverseNumber * 10) + lastDigit
        n = Math.floor(n / 10)
    }
    if (duplicate === reverseNumber) {
        return true

    } else {
        return false
    }

}
console.log(palindrome(121));

//Armstrong number 

const armStrong = (n) => {
    let sum = 0
    let duplicate = n

    while (n > 0) {
        const lastDigit = n % 10
        sum = sum + (lastDigit * lastDigit * lastDigit)
        n = Math.floor(n / 10)
    }
    if (sum === duplicate) {
        return true;
    } else {
        return false;
    } s
}
console.log(armStrong(371));


//print all divisors

const divisor = (n) => {
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);

        }
    }
}
divisor(2)