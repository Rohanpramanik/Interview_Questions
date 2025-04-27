//very common

// reverse the string

function reverseString(arg) {
    let result = "";
    for(let i = arg.length-1; i>=0; i--){
        result = result + arg[i];
    }
    return result;
}

console.log(reverseString("rohan"))