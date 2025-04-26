// get all the male character
import userDetails from "./userDetails"

//using filter
function getMale(users) {
  let result = users.filter((user) => user.gender === Male);
  return result;
}

// without prebuild
function getMaleData(users) {
  let result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].gender === "Male") {
      result.push(users[i]);
    }
  }
  return result;
}

getMale(userDetails);
getMaleData(userDetails);