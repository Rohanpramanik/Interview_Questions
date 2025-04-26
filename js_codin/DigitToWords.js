
//asked in PWC

function getWords(num) {
    if(num>999 || num<0){
        console.log("enter wrong input");
    }
    
    const ones = ["","one","two","three","four","five","six","seven", "eight","nine"];
    const teens = ["","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    const tens = ["", "ten","twenty","thirty","forty", "fifty","sixty","seventy","eighty","ninety"];
    const hundreds = ["","one hundred", "two hundred", "three hundred", "four hundred", "five hundred","six hundred","seven hundred", "eight hundred", "nine hundred"];

    let words = "";

    //lets check for num = 416
    //To check hundred
    if(num > 100){
        let index = Math.floor(num/100);
        words = words + hundreds[index];  // till now words = four hundred
        num = num % 100;        // num = 16
        words = words + " ";    // 
    }
  
    //check for double digit
    if(num >= 20) {
        let index = Math.floor(num/10);
        words= words + tens[index]; 
        num = num % 10;             
        words = words + " "
    }

    // check for in between ten to twenty
    if(num > 10) {
        let index = Math.floor(num%10);  
        words=words + teens[index]+" "; // four hundred sixteen
    }

    if(num === 10) {
        words=words + "ten";
    }else if(num < 10) {
        words=words + ones[num];
    }

    //check for ten
    return words;
}

console.log(getWords(918));
