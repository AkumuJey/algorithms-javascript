function primeNumber(n) {
    if (n%2 === 0 & n < 2) {
        return false
    } else return true
}

console.log(primeNumber(5));
console.log(primeNumber(4));
console.log(primeNumber(111));
console.log(primeNumber(-2));

// Big O = O(1)


const isPrime = (n) => {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n%i === 0) {
            return false
        } else return true
    }
}

console.log(isPrime(4));
console.log(isPrime(111));
console.log(isPrime(-2));

// Big O = O(n)


// Optimized Primality test

const optimizedPrimality = (n) => {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n%i === 0) {
            return false
        } else return true
    }
}

console.log(optimizedPrimality(5));
console.log(optimizedPrimality(1));
console.log(optimizedPrimality(11));

// Big O = O sqrt(n)
