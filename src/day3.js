let date = new Date();
let dy = date.getDate();
let day = date.getDay();
let year = date.getFullYear();
let time = date.getHours();
let minute = date.getMinutes();
let clock = document.getElementById("app");
let para = document.createElement("p");
para.textContent = `${dy}-${day}-${year}  ${time}:${minute}`;
clock.appendChild(para);
let x;
let z;
function cswitch(x) {
  switch (x) {
    case "10":
      console.log("hi i am big and fine");
      break;
    case "sunday":
      console.log("hi its sunday");
    default:
      break;
  }
}
export function takeinput() {
  let x = document.querySelector(".input").value;
  let container = document.getElementById("container");
  let newele = document.createElement("p");
  newele.innerText = x;
  let y;
  if (x > 10) newele.innerText = `value is greater then the 10`;
  else newele.innerText = `value is not greater then the 10`;
  cswitch(x);
  container.appendChild(newele);
}
window.takeinput = takeinput;

console.log(container);
