let isEven = (num) => {
    if (num % 2 === 0) {
        console.log("Numer is even");
        
        return true;
    }
    else {
        console.log("Number is odd");
        return false;
    }
}

let num = isEven(10);
console.log(num); // Output: true

let maxOfThree = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}

let maxNum = maxOfThree(10, 20, 30);
console.log(maxNum); // Output: 30

let reverseString = (str) => {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

let reversed = reverseString("hello");
console.log(reversed); // Output: "olleh"