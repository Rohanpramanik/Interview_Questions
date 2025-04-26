
// Asked in many companies--

// IIFE function - a function which execute as soon as it is defined.
// output - 0, 1, 2 withoue any apply

// explatation - 
// (function() {
//     console.log(i);
// })()

// so now setTimeout have IIFE so in that case when initially loop will start and when it
// reach to settimeout and see there is a IIFE fun so it start excuting even though timer is there 
// and everytime loop runs it gets the different value of i so it will print 0,1,2 
// and now when timer is over by the time loop already completed its excution so now callback fun will
// not return any thing because it just console statement it means this will give undefined  its like
// setTimeout(undefined, i*1000);

function test1(){
    for(var i=0;i<3;i++){
        setTimeout((function() {
            console.log(i);
        })(), i* 1000);
    }
}

test1();




