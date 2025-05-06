// const allUsers = [
//   {
//     firstName: "Aman yadav",
//     gender: "male",
//   },
//   {
//     firstName: "raman",
//     gender: "male",
//     metadata: {
//       age: 34,
//       address: "",
//     },
//   },
//   {
//     firstName: "vineetha",
//     gender: "female",
//   },
// ];

// for (let i = 0; i < allUsers.length; i++) {
//   if (allUsers[i].metadata && allUsers[i].metadata.age === 34) {
//     console.log(allUsers[i]["firstName"]);
//   }
// }

function greet() {
  console.log("Hi Aman");
}

setTimeout(greet, 3 * 1000);
setInterval(greet, 1 * 1000);
