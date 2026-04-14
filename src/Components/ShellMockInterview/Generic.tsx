function concatenateArrays<T>(array1: T[], array2: T[]): T[] {
    return [...array1, ...array2]
}

console.log(concatenateArrays([1], [2]))