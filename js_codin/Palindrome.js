// very common question in any companies like tcs, infosys

//check the string is palindrom or not?
//palindrome means a string which will be same if its reverse

const checkPalindrome = (str) => {
    console.log(str.length);
    let start = 0;
    let end = str.length-1;

    while(start<end){
        if(str[start] !== str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(checkPalindrome("lool"));