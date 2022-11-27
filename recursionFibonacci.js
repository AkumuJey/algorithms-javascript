const recursiveFibonacci = (n) => {
    if (n<2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(10));
console.log(recursiveFibonacci(8));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(5));


// Big O = O(2^n)