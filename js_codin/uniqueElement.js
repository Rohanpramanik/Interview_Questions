//return unique element

const arr = [3,6,1,8,3,6];

// simple but inbuild
function uniqueEle() {
    return new Set([...arr]);
}

//this is acceptable and simple
function uniqueEle2() {
    let result = [];
    for(let ele of arr){
        if(!result.includes(ele)){
            result.push(ele);
        }
    }
    return result;
}