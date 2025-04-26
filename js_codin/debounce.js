<input type="text" placeholder="Enter value" name="search" onChange={optimizedhandleChange}/>

const handleChange = async()=> {
    // const callAPI = await fetch("www.dummy.api");
    console.log("call me");
};

const debounce = (cb, delay) => {
    let timer = 0;
    return(...arg)=>{
        //clear the timer if its reunning
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            cb(...arg);
        },delay)
    }
}


const optimizedhandleChange = debounce(handleClick, 1000);