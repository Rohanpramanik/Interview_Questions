//return an array each string first word should be capital and rest are samll

let arr =['Rohan', 'ravi', 'rahuL'];

function changeFormat () {
    let result = [];

    for( let word of arr) {
        let updatedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        result.push(updatedWord);
    }

    return result;
}

//retuen as an title formate for ex:- input : "how are you", output : "How Are You"

let title = "how are you";

// 1st way
function titleFormat() {
    let arr = title.split(" ");
    let updatedArr =[];
    for(let ch of arr){
        updateWord = ch[0].toUpperCase() + ch.slice(1);
        updatedArr.push(updateWord);
    }
    return JSON.stringify(updatedArr.join(" "));
}

// 2st way
function titleFormat2() {
    let result = "";
    let word = "";
    for(let i =0; i<title.length; i++){
        if(title[i] !== " ") {
            word += title[i];
        }
        if(title[i] === " " || i === title.length-1){
            result = result + word[0].toUpperCase() + word.slice(1).toLowerCase();
            word = "";
            if(i !== title.length-1) {
                result += " ";
            }
        }
    }
    return result;
}