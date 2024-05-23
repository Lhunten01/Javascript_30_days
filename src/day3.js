//for loop
const array = [];
const fruits = ["apple", "orange", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  array.push(fruits[i]);
}
for (const fruit of fruits) {
  array.push(fruit);
}
//do-while
let x = 1;
do {
  console.log(x);
  x++;
} while (x < 10);

export function takeinput() {
  let container = document.getElementById("container");
  let newele = document.createElement("p");
  newele.innerText = array;
  container.appendChild(newele);
}
window.takeinput = takeinput;

console.log(container);
