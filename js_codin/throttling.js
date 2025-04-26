// for frontend very imprtant to know this,
//  one of the goto question f they are really looking for frontend

function throttled(cb,delay){
    let lastCall = 0;
    return (...arg)=>{
        let currentTime = new Date().getTime();
        if(lastCall-currentTime >= delay) {
            cb(...arg);
            lastCall = currentTime;
        }
    }
}

const optimizedCall = throttled(callAPI, 1000);

const callAPI = ()=>{
    console.log("do api call here")
}