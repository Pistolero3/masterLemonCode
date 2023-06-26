console.log("************** DELIVERABLE 02 *********************");
const arr4 = ["hola", "mundo", "zelda"];
const arr5 = [1, 2, 3];
const arr6 = [false, true, "Pedro"];

//2. CONCAT

console.log("Exercise 5 - Concat");

const concat = (arr4, arr5) => [...arr4, ...arr5];
console.log("Respuesta:", concat(arr4, arr5));

console.log("Exercise 5 - Concat Opcional");

const concatAll = (...arrays) => [].concat(...arrays);
console.log("Respuesta:", concatAll(arr4, arr5, arr6));
