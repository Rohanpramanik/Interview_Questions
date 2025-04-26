// return all the names as an array
import userDetails from "./userDetails";

// 1st way
function getNames(users) {
  let result = [];
  for (let i = 0; i < users.length; i++) {
    result.push(users[i].name);
  }
  return result;
}


// 12st way
function getNamesUsingMap(users) {
  let result = [];
  users.map((user) => {
    if (user.name !== "") {
      result.push(user.name);
    }
  });
  return result;
}

//3rd way
function getNamesUsingReduce(users) {
  let result = users.Reduce((acc, user) => {
    if (user.name !== "") {
      acc.push(user.name);
    }
    return acc;
  }, []);
  return result;
}


getNames(userDetails);
getNamesUsingMap(userDetails);
getNamesUsingReduce(userDetails);