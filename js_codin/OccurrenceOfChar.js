//find the occurence of characters

function OccurrenceOfChar(str) {
    let obj = {};
    let maxChar = '';
    for(let i = 0; i<str.length; i++){
        let key = str[i];
        if(obj[key]) {
            obj[key]++;
        }else {
            obj[key] = 1;
        }
        if(maxChar == '' || obj[key]>obj[maxChar]){
            maxChar = key;
        }
    }
    //this will return the occurrence of characters
    return obj;
    //this will return the character which have maximum no of occurrence
    //return maxChar;
}

console.log(OccurrenceOfChar("hello"));