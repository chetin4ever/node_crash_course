//console.log(global);

//global setTimeOut
setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 5000);
//global setTimeOut
const int = setInterval(() => {
  console.log("in the interval");
}, 1000);
//directory name and filename ---> give absolute path

console.log(__dirname);
console.log(__filename);
// cant access window object
//console.log(document.querySelector);
