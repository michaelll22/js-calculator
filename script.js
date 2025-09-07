function add(arr) {
    if (arr == null || arr.length === 0) {
        return 0;
    }
    
    return arr.reduce((total, current) => total + current);
}

function subtract(arr) {
    if (arr == null || arr.length === 0) {
        return 0;
    }

    return arr.reduce((total, current) => total - current);
}

function multiply(arr) {
    if (arr == null || arr.length === 0) {
        return 0;
    }
    return arr.reduce((total, current) => total * current);
} 
    

function divide(arr) {
    if (arr == null || arr.length === 0) {
        return 0;
    }
    return arr.reduce((total, current) => total / current);
}


console.log(add([]));
console.log(subtract([]));
console.log(multiply([]));
console.log(divide([]));



