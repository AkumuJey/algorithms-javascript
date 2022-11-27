const isPowerOfTwo = (n)=> {
    if(n<1){
        return false
    }
    while(n>1) {
        if (n%2 !== 0) {
            return false
        }
        n = n/2
    }
    return true
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(5));

// Big O = O of log(n)
const isPowerBit =(n) => {
    if (n<1) {
        return false
    }
    return (n & (n-1)) === 0
}

console.log(isPowerBit(1));
console.log(isPowerBit(3));
console.log(isPowerBit(5));
console.log(isPowerBit(2));


// Big O = O(1)