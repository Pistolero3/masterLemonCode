console.log("************** DELIVERABLE 01 *********************");
//1. Array operations

const arr: string[] = ["hola", "mundo", "zelda"];
const arr2: number[] = [1, 2, 3];
console.log("Arrays", arr, arr2);
const arr3 = [false, true, "Pedro"];

//HEAD

console.log("Exercise 1 - Head");

const head = ([first]: string[] | number[]) => first;

console.log("Respuesta:", head(arr));
console.log("Respuesta:", head(arr2));

console.log("**************************************");

//TAIL
console.log("Exercise 2 - Tail");

const tail = ([, ...rest]: string[] | number[]) => rest;

console.log("Respuesta:", tail(arr));
console.log("Respuesta:", tail(arr2));

console.log("**************************************");

//INIT

console.log("Exercise 3 - Init");

const init = (arr: string[] | number[]) => arr.slice(0, arr.length - 1);

console.log("Respuesta:", init(arr));
console.log("Respuesta:", init(arr2));

console.log("**************************************");

//LAST

console.log("Exercise 4 - Last");

const last = (arr: string[] | number[]) => {
  let result: string[] | number[] = [];
  result = arr.slice(arr.length - 1, arr.length);
  return result[0];
};
console.log("Respuesta:", last(arr));
console.log("Respuesta:", last(arr2));
