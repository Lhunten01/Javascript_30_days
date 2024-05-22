let x = 1;
let y = 10;
x > y
  ? console.log("x is greater then the y")
  : console.log("y is greater then then x");
console.log(x++);
console.log(x);
console.log(x != y);
console.log(x > y || y >= x);
// let num1 = prompt("give me the number");
// let num2 = prompt("Give second number");
console.log(`the area of the rectangle ${x * y}`);
let date = new Date();
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getTime());
console.log(`${Math.sqrt(x) + 3 * x + 1}`);
let name = "Tenzin Lhundup";
name.length > 7 ? console.log("long name") : console.log(" short name");
let dy = date.getDate();
let day = date.getDay();
let year = date.getFullYear();
let time = date.getHours();
let minute = date.getMinutes();
let clock = document.getElementById("app");
let para = document.createElement("p");
para.textContent = `${dy}-${day}-${year}  ${time}:${minute}`;
clock.appendChild(para);
