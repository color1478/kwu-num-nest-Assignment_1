function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}

function prime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function factorial(num) {
    let res = 1;
    for (let i = num; i >= 2; i--) {
        res *= i;
    }
    return res;
}

module.exports = {
    avg,
    prime,
    factorial
}

// exports.avg = avg;
// exports.prime = prime;
// exports.factorial = factorial;