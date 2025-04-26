function optimizedValue(cb) {
    let cache = {};
    return (...arg)=>{
        let key = JSON.stringify(arg);
        if(cache[key]){
            return cache[key];
        }else {
            let result = cb(...arg);
            cache[key] = result;
            return result;
        }
    }
}

const calculate = (x) => {
    return x*x;
}

const optimizedCalculete = optimizedValue(calculate);
console.log(optimizedCalculete(5));
console.log(optimizedCalculete(15));
console.log(optimizedCalculete(5));