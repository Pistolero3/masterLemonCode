console.log("************** PRACTICE *********************");
console.log("Use this folder 00 practice to practice with homework exercises");

//1. Biggest Word
console.log("Exercise 1 - Biggest Word");

function biggestWord(phrase) {
  let longestWord = "";
  let phraseArray = phrase.split(" ");
  phraseArray.map((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Nadie nos pertenece excepto en los recuerdos")); // "pertenece"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"

console.log("**************************************");

//VALUES
console.log("Exercise 2 - Values");

function values(obj) {
  let values = [];
  Object.values(obj).map((value) => values.push(value));
  return values;
}

// Ejemplo:
console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
); // [31, 310, "long video", "mp4"]

console.log("**************************************");

//Califications

console.log("Exercise 3 - Califications");
const eso2o = {
  David: 2.25,
  Maria: 5.5,
  Jose: 3.75,
  Juan: 7.5,
  Blanca: 8.75,
  Carmen: 9,
};

function average(arr) {
  const sumMarks = arr.reduce((acc, currentValue) => (acc += currentValue), 0);
  const average = sumMarks / arr.length;
  return average;
}

function printAverage(classResults) {
  let classMarks = values(classResults);
  const total = average(classMarks);

  if (total === 10) {
    console.log("Matriculo de Honor");
  } else if (total >= 9 && total < 10) {
    console.log("Sobresaliente");
  } else if (total >= 7 && total < 9) {
    console.log("Notable");
  } else if (total >= 6 && total < 7) {
    console.log("Bien");
  } else if (total >= 5 && total < 6) {
    console.log("Suficiente");
  } else if (total >= 4 && total < 5) {
    console.log("Insuficiente");
  } else if (total < 4) {
    console.log("Muy deficiente");
  } else {
    console.log("No entiendo tus notas");
  }
}

printAverage(eso2o);

console.log("**************************************");

//Check Arguments

console.log("Exercise 4 - Check Arguments");

function f(input) {
  let result = input ?? "Unknown";
  return result;
}

console.log(f(null));
console.log(f(undefined));
console.log(f("Zelda"));

console.log("**************************************");

//Deep Equal

console.log("Exercise 5 - Deep Equal - APARTADO A");

const user = { name: "María", age: 30 };
const clonedUser = { name: "María", age: 30 };

function isEqual(a, b) {
  if (typeof a !== "object" || typeof b !== "object") {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(a);
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (const key of aKeys) {
    if (!b.hasOwnProperty(key)) {
      return false;
    }

    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

console.log(user === clonedUser); // false
console.log(isEqual(user, clonedUser)); // true

console.log("**************************************");

console.log("Exercise 5 - Deep Equal - APARTADO B");

let user1 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
let clonedUser1 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {
  if (typeof a !== "object" || typeof b !== "object") {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(a);
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (const key of aKeys) {
    if (!b.hasOwnProperty(key)) {
      return false;
    }

    const valueA = a[key];
    const valueB = b[key];

    if (typeof valueA === "object" && typeof valueB === "object") {
      if (!isEqual(valueA, valueB)) {
        return false;
      }
    } else {
      if (valueA !== valueB) {
        return false;
      }
    }
  }
  return true;
}

console.log(user1 === clonedUser1); // false
console.log(isDeepEqual(user1, clonedUser1)); // true

console.log("**************************************");
console.log("Exercise 06 - Dices");

function dices() {
  let dice1 = 0;
  let dice2 = 0;

  return {
    throwDices: () => {
      if (dice1 !== undefined && dice2 !== undefined) {
        console.log("You already threw the dices! Please, reset them!");
      }
      dice1 = Math.floor(Math.random() * 6) + 1;
      dice2 = Math.floor(Math.random() * 6) + 1;
    },
    reset: () => {
      dice1 = undefined;
      dice2 = undefined;
    },
    print: () => {
      if (dice1 === undefined || dice2 === undefined) {
        console.log("You should throw the dices first!!!");
      } else {
        console.log(`Dado 1: ${dice1} - Dado 2: ${dice2}`);
        if (dice1 === 6 && dice2 === 6) {
          console.log("Wow! You rolled a double 6!");
        }
      }
    },
  };
}

const dicesGame = dices();
dicesGame.reset();
dicesGame.print();
dicesGame.throwDices();
dicesGame.print();
dicesGame.reset();
dicesGame.throwDices();
dicesGame.print();
dicesGame.throwDices();
dicesGame.reset();
dicesGame.throwDices();
dicesGame.print();

console.log("**************************************");
console.log("Exercise 07 - Hoisting");

/*function f() {
  console.log(a); undefined
  console.log(g()); undefined

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a); good job!
}

f(); */ // undefined undefined good job!

//******************************

// var a = 1;

// (function () {
//   console.log(a); 1
//   var a = 2;
//   b = 4; // b is not defined
//   var c = 3;
// })();

// console.log(a);  1
// console.log(b);  undefined
// console.log(c);  error
//****************************** */

/*  f();
var a = 1;

function f() {
  console.log(a); 1
  b = 4; // b is not defined
  var c = 3;
}

console.log(a); 1
console.log(b); undefined
console.log(c); error */

console.log("**************************************");
console.log("Exercise 7 - INCLUDES");

//INCLUDES

const arrInclude = (
  arr: string[] | number[],
  value: string | number
): boolean => {
  let result = false;
  arr.map((item) => {
    if (item === value) {
      result = true;
    }
  });
  return result;
};

// Ejemplo:
console.log(arrInclude([1, 2, 3], 3)); // true
console.log(arrInclude(["Hola", "Mundo"], "Mundo")); // true'
console.log(arrInclude([1, 2, 3], 0)); // false

console.log("**************************************");
console.log("Exercise 7 - INCLUDES 2 - Challenge");

const arrInclude2 = (arr, value) => {
  return arr.indexOf(value) !== -1;
};

console.log(arrInclude2([1, 2, 3], 3)); // true
console.log(arrInclude2(["Hola", "Mundo"], "Mundo")); // true'
console.log(arrInclude2([1, 2, 3], 0)); // false

console.log("**************************************");
console.log("Exercise 8 - PRIMES");

const isPrime = (num) => {
  if (num === 0 || num === 1 || num === 4) return false;
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const showPrimes = (from: number, to: number): void => {
  for (let i = from; i <= to; i++) {
    isPrime(i)
      ? console.log(`${i} is Prime`)
      : console.log(`${i} is not Prime`);
  }
};

showPrimes(1, 14);

console.log("**************************************");
console.log("Exercise 9- Reverse Text");

const reverseText = (text: string): string => {
  return text.split(" ").reverse().join(" ");
};

console.log(reverseText("Uno dos tres"));

console.log("**************************************");
console.log("Exercise 10 - Subsets");

const subsets = (word: string): string[] => {
  let sets = [];
  for (let i = word.length - 1; i > 0; i--) {
    word = word.split("").slice(1).join("");
    sets.push(word);
  }
  return sets;
};

console.log(subsets("Message"));

console.log("**************************************");
console.log("Exercise 11 - THIS");

// var surname = "Pérez";
// var persona = {
//   name: "Juan",
//   surname: "González",
//   wife: {
//     name: "Ana",
//     surname: "Jiménez",
//     getSurname: function () {
//       return this.surname;
//     },
//   },
// };

// console.log(persona.wife.getSurname()); // "Jiménez"
// let surnameFunction = persona.wife.getSurname();
// console.log(surnameFunction()); // "Pérez"
// console.log(surnameFunction.call(persona)); // "González"

console.log("**************************************");
console.log("Exercise 12 - ZIP");

interface YourObject {
  [key: string]: string;
}

const zipObject = (keys: string[], values: string[]): YourObject => {
  let yourObject = {};
  keys.map((key) => {
    if (values.length !== 0) {
      yourObject[key] = values.shift();
    }
  });
  return yourObject;
};

console.log(
  zipObject(
    ["spanish", "english", "french", "italian"],
    ["hola", "hi", "salut"]
  )
);

console.log("**************************************");
console.log("Exercise 13 - ZZCrypt");

let secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

const zzCrypt = (text: string): string => {
  let message = "";
  let plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
  let cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

  text.split(" ").map((word) => {
    word.split("").map((letter) => {
      let index = cipher.indexOf(letter);
      message += plain.slice(index, index + 1);
    });
    message += " ";
  });

  return message;
};

console.log(zzCrypt(secret));

console.log("**************************************");
console.log("Exercise 14 - Args");

// function funcTheory(a, { b } = {}, c = 100) {
//   console.log(arguments.length);
//   console.log(a, a === arguments[0]);
//   console.log(b, b === arguments[1]);
//   console.log(c, c === arguments[2]);
// }

// funcTheory("JS rocks!", { b: "b" });

console.log("**************************************");
console.log("Exercise 15 - Console");

// var aa = 1;
// let bb = 2;

// {
//   try {
//     console.log(aa, bb);
//   } catch (error) {}
//   let bb = 3;
//   console.log(aa, bb);
// }

// console.log(aa, bb);

// () => {
//   console.log(aa);
//   var aa = 5;
//   let bb = 6;
//   console.log(aa, bb);
// };

// console.log(aa, bb);

console.log("**************************************");
console.log("Exercise 16 - Fibonacci");

const fibonacci = (num: number): number => {
  let fib0: number = 0;
  let fib1: number = 1;
  let result: number = 0;

  if (num === 0) {
    return fib0;
  } else if (num === 1) {
    return fib1;
  } else {
    for (let i = 2; i <= num; i++) {
      result = fib0 + fib1;
      fib0 = fib1;
      fib1 = result;
    }
  }
  return result;
};

console.log("fibonacci", fibonacci(2));
console.log("fibonacci", fibonacci(3));
console.log("fibonacci", fibonacci(4));
console.log("fibonacci", fibonacci(5));
console.log("fibonacci", fibonacci(6));
console.log("fibonacci", fibonacci(7));
console.log("fibonacci", fibonacci(8));

console.log("**************************************");
console.log("Exercise 17 - Players Order");

const getPlayersOrder = (players: string[], turns: number): string[] => {
  for (let i = 0; i < turns; i++) {
    const [player, ...restPlayers] = players;
    players = [...restPlayers, player];
  }
  return players;
};

console.log(getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia", "Pedro"], 1));
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

console.log("**************************************");
console.log("Exercise 18 - Reminder");

class Reminder {
  text: string;
  constructor(text) {
    this.text = text;
  }

  remindMe(delay): void {
    setTimeout(
      function () {
        console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
      }.bind(this),
      delay * 1000
    );
  }
}

const newReminder = new Reminder("I found it!!!");
newReminder.remindMe(2);

console.log("**************************************");
console.log("Exercise 19 - Swap");

let c = "A";
let d = "B";

[c, d] = [d, c];

let youDitIt = c === "B" && d === "A" ? "You did it!" : "Keep trying!";

console.log(youDitIt);

console.log("**************************************");
console.log("Exercise 20 - Califications-Summary");

interface StudentList {
  name: string;
  califications: number[];
}

interface NewStudentList {
  name: string;
  highestCalification: number;
  averageCalifications: string;
}

const students = [
  {
    name: "Juan",
    califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34],
  },
  {
    name: "Álvaro",
    califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01],
  },
  {
    name: "María",
    califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3],
  },
  {
    name: "Jorge",
    califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69],
  },
  {
    name: "Mónica",
    califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48],
  },
];

const summarizeClassRoom = (studentList: StudentList[]): NewStudentList[] => {
  let newStudentList: NewStudentList[] = [];
  studentList.map((student) => {
    let newStudent = {
      name: student.name,
      highestCalification: Number(
        Math.max(...student.califications).toFixed(2)
      ),
      averageCalifications: Number(
        student.califications.reduce((a, b) => a + b, 0) /
          student.califications.length
      ).toPrecision(3),
    };
    newStudentList.push(newStudent);
  });
  return newStudentList;
};

console.log(summarizeClassRoom(students));
// [
//   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
//   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
//   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
//   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
//   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
// ]

console.log("**************************************");
console.log("Exercise 21 - Curry Setter");

const julia = { name: "Julia", surname: "Álvarez", age: 19 };

function set(obj, prop, value) {
  return {
    ...obj,
    [prop]: value,
  };
}
const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

console.log("**************************************");
console.log("Exercise 21 - Curry Setter - OPCIONAL");

interface User {
  name: string;
  surname: string;
  age: number;
}

const set2 = (prop: keyof User, value: User[keyof User], obj: User): User => {
  return {
    ...obj,
    [prop]: value,
  };
};

const setName = (value: User[keyof User], obj: User): User =>
  set2("name", value, obj);
const setSurname = (value: User[keyof User], obj: User): User =>
  set2("surname", value, obj);
const setAge = (value: User[keyof User], obj: User): User =>
  set2("age", value, obj);

const julia2: User = { name: "Julia", surname: "Álvarez", age: 19 };

console.log(setName("Ana", julia2)); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname("González", julia2)); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(27, julia2)); // { name: 'Julia', surname: 'Álvarez', age: 27 }

console.log("**************************************");
console.log("Exercise 22 - Morse");

const morseAlphabet = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

interface Transmitter {
  transmitMessage(message: string): void;
}

interface TransmitterFactoryConfig {
  morseMap: { [key: string]: string };
  timeoutFn: (callback: () => void, points: number) => void;
  writerFn: (text: string) => void;
  callbackFn: () => void;
}

function createTransmitterFactory(
  config: TransmitterFactoryConfig
): Transmitter {
  const { morseMap, timeoutFn, writerFn, callbackFn } = config;

  class MorseTransmitter implements Transmitter {
    transmitMessage(message: string): void {
      const formattedMessage = message.toLowerCase().trim();
      console.log(formattedMessage, "Formatted Message");
      let totalTime = 0;

      formattedMessage.split("").map((char) => {
        const morseCode = morseMap[char];

        if (morseCode) {
          morseCode.split("").map((symbol) => {
            const morseSymbol = symbol;

            if (morseSymbol === ".") {
              timeoutFn(() => writerFn("Punto-On"), totalTime + 1);
              timeoutFn(() => writerFn("Punto-Off"), totalTime + 2);
            } else if (morseSymbol === "-") {
              timeoutFn(() => writerFn("Raya-On"), totalTime + 1);
              timeoutFn(() => writerFn("Raya-Off"), totalTime + 4);
            }

            totalTime += 2;
          });
        }
        totalTime += 4;
      });

      timeoutFn(callbackFn, totalTime);
    }
  }

  return new MorseTransmitter();
}

// Ejemplo de uso

// Implementación de la función de timeout
function timeout(callback: () => void, points: number): void {
  setTimeout(callback, points * 1000);
}

// Implementación de la función de escritura por consola
function consoleWriter(text: string): void {
  console.log(text);
}

// Implementación del callback de finalización
function transmissionComplete(): void {
  console.log("Transmisión completa");
}

const morseTransmitter = createTransmitterFactory({
  morseMap: morseAlphabet,
  timeoutFn: timeout,
  writerFn: consoleWriter,
  callbackFn: transmissionComplete,
});

morseTransmitter.transmitMessage("H");
