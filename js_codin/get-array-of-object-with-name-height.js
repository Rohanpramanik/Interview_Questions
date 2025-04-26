import userDetails from "./userDetails";

// 1sy way
function getUpdatedDetails (users) {
    const result = users.map( (user) => {
        if(user){
            return {
                name : user.name,
                height: user.height,
            }
        }
    });
    return result;
}


// 2nd way
function getUpdatedDetailsReduce(users){
    let result = users.reduce( (acc,user) => {
        if(user.name && user.height_cm){
            acc.push({
                "name":user.name,
                "height": user.height_cm
            });
        }
        return acc;
    },[]);
    return result;
}
getUpdatedDetails(userDetails);
getUpdatedDetailsReduce(userDetails)