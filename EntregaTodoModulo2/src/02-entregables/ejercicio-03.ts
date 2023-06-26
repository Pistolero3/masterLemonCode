console.log("************** DELIVERABLE 03 *********************");
//3. Clone Merge

//CLONE

interface Person {
  name: string;
  age: number;
  nationality: string;
}

const person: Person = {
  name: "Antonio",
  age: 33,
  nationality: "Spanish",
};

console.log("Object", person);

console.log("**************************************");

console.log("Exercise 6 - CLONE");

function clone(source: Person): Person {
  const newPerson = { ...source };
  return newPerson;
}

console.log("Respuesta:", clone(person));

console.log("**************************************");

console.log("Exercise 7 - MERGE");

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  const newPerson = { ...target, ...source };
  return newPerson;
}

console.log("Respuesta:", merge(a, b));
