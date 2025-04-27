import userDetails from "./userDetails";
import { employee } from "./userDetails";
// userDetails is the object which I passed in every function
// you can check once the obj heirechy for better understanding

// inbuild function are not recommended for interview but I have used here to show both ways
// you can use many approch like normal for loop or map anything

//return total height of users

function getTotalHeight(users) {
  const totalHeight = users.reduce((acc, user) => {
    return (acc += user.height);
  }, 0);
  return totalHeight;
}

//return total no chacracters in names of all user

function getTotalCharacters(users) {
  const totalHeight = users.reduce((acc, user) => {
    return (acc += user.name.length);
  }, 0);
  return totalHeight;
}

// return an array of having object of the user name as key and value is their character no

function getData(users) {
  const newData = users.reduce((acc, user) => {
    acc.push({ [user.name]: user.name.length });
    return acc;
  }, []);
  return newData;
}

//check all the person age is more then 25

function ageCheck(users) {
  for (let user of users) {
    if (user.age < 25) {
      return false;
    }
  }
  return true;
}

//return all the user whose age is more then 30

function getUser(users) {
  return users.filter((user) => user.age > 30);
}

//return array of male and female seperately
// ex--[{"male":{...all the male user},"female":{...all the female user}}]
// 1st way
function getGenderwisedData(users) {
  let result = [];
  const male = users.filter((user) => user.gender === "Male");
  const female = users.filter((user) => user.gender === "Female");
  result.push(male);
  result.push(female);
  return result;
}

//2nd way
function getGenderwisedData2() {
  let result = users.reduce(
    (acc, user) => {
      if (user.gender === "Male") {
        acc.male.push(user);
      } else {
        acc.female.push(user);
      }
      return acc;
    },
    { male: [], female: [] }
  );
  return result;
}

//check if any user having age more then 40
//1st way--traditional approach
function atleastAnyOne2(users) {
  let count = 0;
  for (let user of users) {
    console.log(count + 1);
    if (user.age > 30) {
      return true;
      break;
    }
  }
  return false;
}

//2nd way
//Used inbuild which might they will not accept
function atleastAnyOne() {
  let result = users.some((user) => user.age > 40);
  return result;
}

// return the sorted users based on the age
//1st way -- traditional approach
function sortedOnAge() {
  // sort((a,b)=>a-b);
  // let count = 0;
  for (let i = 0; i < users.length; i++) {
    for (let j = i + 1; j < users.length; j++) {
      if (users[i].age > users[j].age) {
        temp = users[j];
        users[j] = users[i];
        users[i] = temp;
      }
    }
  }
  return users;
}

//2nd way -- easiest and used in actual project
function sortedOnAge2() {
  return users.sort((a, b) => a.age - b.age);
}

// return sorted users based on name
//1st way--simple but not recommended in interview
function sortedOnName(users) {
  return users.sort((a, b) => a.name.localeCompare(b.name));
}

//2nd way
function sortedOnName2(users) {
  let updateUser = users.sort((a, b) => {
    const x = a.name.toUpperCase();
    const y = b.name.toUpperCase();
    if (x > y) {
      return 1;
    } else {
      return -1;
    }
  });
  return updateUser;
}

//3rd way -- they will accept but you can optimized if u want bcoz this is not optimized
function sortuser() {
  for (let i = 0; i < user.length; i++) {
    for (let j = i; j < user.length; j++) {
      let x = user[i].name.toUpperCase();
      let y = user[j].name.toUpperCase();
      if (x > y) {
        temp = user[j];
        user[j] = user[i];
        user[i] = temp;
      }
    }
  }
  return user;
}

//return updated employee, whoever country is not india set the pincode 0
// using employee obj
function updateEmpData() {
  let result = employee.map((emp) => {
    if (emp?.address?.country !== "India") {
      return {
        ...emp,
        address: {
          ...emp.address,
          pincode: 0,
          locationInfo: {
            ...emp.address.locationInfo,
          },
        },
      };
    } else {
      return {
        ...emp,
        address: {
          ...emp.address,
          locationInfo: {
            ...emp.address.locationInfo,
          },
        },
      };
    }
  });

  return result;
}

//return object having 2 obj, one for indians and other for others.
//  people from india should come inside india and other should have other then india
// ex - {india:[...all the indians],others:[...other then indian]}

//1st way
function basedOnNationality() {
  let india = [];
  let others = [];
  employee.map((emp) => {
    if (emp?.address?.country === "India") {
      india.push(emp);
    } else {
      others.push(emp);
    }
  });
  let result = { india, others };
  return result;
}

//2nd way
function basedOnNationality2() {
  const result = employee.reduce(
    (acc, emp) => {
      if (emp.address.country === "India") {
        acc.india.push(emp);
      } else {
        acc.others.push(emp);
      }
      return acc;
    },
    { india: [], others: [] }
  );

  return result;
}
