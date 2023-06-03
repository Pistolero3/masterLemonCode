//1. Array operations

const arr = ["hola", "mundo", "zelda"];
const arr2 = [1, 2, 3];
console.log("Arrays", arr, arr2);
const arr3 = [false, true, "Pedro"];

//HEAD

console.log("Exercise 1 - Head");

const head = ([first]) => first;

console.log("Respuesta:", head(arr));
console.log("Respuesta:", head(arr2));

console.log("**************************************");

//TAIL
console.log("Exercise 2 - Tail");

const tail = ([, ...rest]) => rest;

console.log("Respuesta:", tail(arr));
console.log("Respuesta:", tail(arr2));

console.log("**************************************");

//INIT

console.log("Exercise 3 - Init");

const init = (arr) => arr.slice(0, arr.length - 1);

console.log("Respuesta:", init(arr));
console.log("Respuesta:", init(arr2));

console.log("**************************************");

//LAST

console.log("Exercise 4 - Last");

const last = (arr) => {
  let result = "";
  result = arr.slice(arr.length - 1, arr.length);
  return result[0];
};
console.log("Respuesta:", last(arr));
console.log("Respuesta:", last(arr2));

console.log("**************************************");

//2. CONCAT

console.log("Exercise 5 - Concat");

const concat = (arr, arr2) => [...arr, ...arr2];
console.log("Respuesta:", concat(arr, arr2));

console.log("Exercise 5 - Concat Opcional");

const concatAll = (...arrays) => [].concat(...arrays);
console.log("Respuesta:", concatAll(arr, arr2, arr3));

console.log("**************************************");

//3. Clone Merge

//CLONE

const person = {
  name: "Antonio",
  age: 33,
  nationality: "Spanish",
};

console.log("Object", person);

console.log("**************************************");

console.log("Exercise 6 - CLONE");

function clone(...source) {
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

console.log("**************************************");

//4. Read Books

console.log("Exercise 8 - Read Books");

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
  const book = books.find((book) => book.title === titleToSearch);
  return book?.isRead ? true : false;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log(isBookRead(books, "Harry Potter y la piedra filosofal")); // true
console.log(isBookRead(books, "The Lord of the Rings")); // false

//5. Slot Machine

console.log("**************************************");

console.log("Exercise 8 - Slot Machine");

class SlotMachine {
  constructor() {
    this.money = 0;
  }

  roulette() {
    this.result = [];
    for (let i = 0; i < 3; i++) {
      this.result.push(Math.random() < 0.6);
    }

    const win = this.result.every((item) => item === true);

    if (win) {
      console.log(`Congratulations!!! You won ${this.money} coins!!`);
      this.money = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }

  play() {
    ++this.money;
    this.roulette();
  }
}

const newMachine = new SlotMachine();

newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();
newMachine.play();

console.log("**************************************");
