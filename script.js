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
document.getElementById("btn1").addEventListener("click", function () {
   var exc = GenereExcuse(who, action, what, when);
   document.getElementById("exc").textContent = exc;
 });
