let reverseText = (text) => {
    let reversedText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i];
    }
    return reversedText;
}

let reversed = reverseText("hello");
console.log(reversed); // Output: "olleh"

let countVowels = (str) => {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

let vowelCount = countVowels("hello");
console.log(vowelCount); // Output: 2

let isAnagram = (str1, str2) => {
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
}

let anagramCheck = isAnagram("listen", "silent");
console.log(anagramCheck); // Output: true
