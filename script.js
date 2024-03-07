const who = ["My dog", "My sister", "My grandma", "His bird", "My neighbor"];
const action = ["ate", "crushed", "broke", "peed"];
const what = ["my homework", "the keys", "the umbrella", "the car"];
const when = [
  "before the class",
  "right now",
  "during my lunch",
  "while I was sleeping",
];

function GenereExcuse(arr1, arr2, arr3, arr4) {
  let excuse = " ";

  let rand1 = Math.floor(Math.random() * arr1.length);
  let rand2 = Math.floor(Math.random() * arr2.length);
  let rand3 = Math.floor(Math.random() * arr3.length);
  let rand4 = Math.floor(Math.random() * arr4.length);

  excuse =
    arr1[rand1] +
    " " +
    arr2[rand2] +
    " " +
    arr3[rand3] +
    " " +
    arr4[rand4] +
    ".";

  return excuse;
}
// USAR PARA PROBAR EN LA CONSOLA

//let excusaa = GenereExcuse(who, action, what, when);
//console.log(excusaa);

// USAR PARA CONECTAR CON EL BOTON DEL HTML

// document.getElementById("btn1").addEventListener("click", function () {
//   var excu = GenereExcuse(who, action, what, when);
//   document.getElementById("exc").textContent = excu;
// });

// OTRA VERSION DE HACERLO QUE HA FUNCIONADO Y YA NO

// function modfyText() {
//   let tx = document.getElementById("exc");
//   let excusa = GenereExcuse(who, action, what, when);
//   tx.textContent = excusa;
// }

// function load() {
//   let el = document.getElementById("btn1");
//   el.addEventListener("click", modfyText, false);
// }

function newExcuse() {
  let h3text = document.getElementById("exc");
  let excusa = GenereExcuse(who, action, what, when);
  h3text.innerText = excusa;
}
