const countDigits = (n) => {
    let count = 0
    while(n>0) {
        const lastDigit = n % 10
        count = count + 1
        n = Math.floor(n / 10)
    }
    return count
}
console.log(countDigits(5589));