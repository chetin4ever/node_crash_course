//importing people module
// const xyz = require("./people"); // relative path
// console.log(xyz); //giving empty object
// //console.log(xyz.pepole); //giving undifined if module not exports
// console.log(xyz.people);

const { people, ages } = require("../people");
console.log(people, ages);

// os module
const os = require("os");
//console.log(os);
console.log(os.platform()); // give os name
console.log(os.homedir()); // give home directory absoulte path
