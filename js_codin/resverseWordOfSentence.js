// asked in small startup

//reverse each word of sentence
function reverse(arg){
    let result = "";
    let word = ""
    
    for(let i=0; i<arg.length; i++){
        let reverseWord = ""
        if(arg[i]==" " || arg.length-1 == i){
            if(arg.length-1 == i){
                word += arg[i];
            }
            // reverseWord = word.split("").reverse().join("");
            for(let j=word.length-1; j>=0; j--){
                result = result + word[j];
            }
            // result += reverseWord;
            word = ""
            if(arg[i] == " ") {
                result += " ";
            }
        }else {
            word += arg[i];
        }
    }
    return result;
}

console.log(reverse("how are you"));