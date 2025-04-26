//check the strings are angram to each other
//angram means both the string should have same no character in any order

import { Recommend } from "@mui/icons-material";


//1nd way
//this is easiest way if they accept inbuild which they will not
const checkAnagram2 = (str1, str2) => {
    return str1.split('').sort().join() === str2.split('').sort().join()
} 

// 2rd way
const checkAnagram3 = (str1, str2) => {
    // If the lengths of the strings are different, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Create two objects to store the frequency of characters
    const freq1 = {};
    const freq2 = {};

    // Count the occurrences of each character in str1
    for (let char of str1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }

    // Count the occurrences of each character in str2
    for (let char of str2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }

    // Compare the two frequency objects
    for (let char in freq1) {
        if (freq1[char] !== freq2[char]) {
            return false;
        }
    }

    return true;
};

//3rd way
const checkAnagram1 = (str1, str2) => {
    let obj = {};

    // If the lengths of the strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Count occurrences of characters in str1
    for (let i = 0; i < str1.length; i++) {
        obj[str1[i]] = (obj[str1[i]] || 0) + 1;
    }

    // Decrement occurrences based on str2
    for (let i = 0; i < str2.length; i++) {
        if (!obj[str2[i]] || obj[str2[i]] <= 0) {
            return false;  
            // If a character in str2 is missing or has zero occurrences, return false
        } else {
            obj[str2[i]] -= 1;
        }
    }

    // Check if all character counts are 0
    // let result = Object.values(obj).every(count => count === 0);
    
    return true;
};


// 2nd one is most Recommend and acceptable way you can do  



console.log(checkAnagram1("rohan", "rohan"));  // Output: true
console.log(checkAnagram2("listen", "silent")); // Output: true
console.log(checkAnagram3("hello", "world"));  // Output: false