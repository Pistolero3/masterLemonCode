console.log("************** CHALLENGES *********************");

console.log("************** TRAZAS POR CONSOLA *********************");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers) => {
  for (let i = 0; i < triggers.length; i++) {
    await triggers[i]();
  }
  console.log("first");
};

run(triggers);

console.log("************** DEEP ACCESS *********************");

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = (obj, ...args) => {
  if (args.length === 0) return obj;
  const [key, ...rest] = args;
  if (!obj || !obj[key]) return undefined;
  return deepGet(obj[key], ...rest);
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}

console.log("************** DEEP SET *********************");

const myObject2 = {};

const deepSet = (value, obj, ...args) => {
  if (args.length === 1) {
    obj[args[0]] = value;
    return obj;
  } else if (args.length === 0) {
    return;
  }
  const [key, ...rest] = args;
  if (!obj[key]) obj[key] = {};
  return deepSet(value, obj[key], ...rest);
};

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2)); // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2)); // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}

console.log("************** APLANANDO ARRAYS *********************");

interface FlattenArray<T> extends Array<T | FlattenArray<T>> {}

const sample: FlattenArray<number | number[]> = [
  1,
  [2, 3],
  [[4], [5, 6, [7, 8, [9]]]],
];

const flatten = <T>(array: FlattenArray<T>): T[] => {
  return array.reduce<T[]>((acc: T[], val: T | T[]) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
};

console.log(flatten<number | number[]>(sample));

console.log("************** MEMOIZE *********************");

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

const memoize = <T>(func: () => T): (() => T) => {
  let memoizedValue: T = null;
  return () => memoizedValue ?? (memoizedValue = func());
};

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

console.log("************** MEMOIZE APARTADO C *********************");

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

type Primitive = string | number | boolean;

const memoize2 = <T>(
  func: (...args: Primitive[]) => T
): ((...args: Primitive[]) => T) => {
  const cache: Record<string, T> = {};

  return (...args: Primitive[]): T => {
    const key = args.join("-");

    if (cache.hasOwnProperty(key)) {
      console.log("Llamada memoizada");
      return cache[key];
    }

    console.log("Una única llamada");
    const result = func(...args);
    cache[key] = result;
    return result;
  };
};

const memoizedGreet = memoize2(repeatText);

console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2

console.log("************** ARBOL *********************");

//El valor de any se podria cambiar dependiendo del tipo de dato que nos va a llegar

interface TreeNode<T> {
  value: T;
  children?: TreeNode<T>[];
}

// Uso de la interfaz TreeNode
const tree: TreeNode<string> = {
  value: "A",
  children: [
    {
      value: "B",
      children: [
        {
          value: "D",
        },
        {
          value: "E",
        },
      ],
    },
    {
      value: "C",
      children: [
        {
          value: "F",
        },
      ],
    },
  ],
};

console.log("************** COMPRENDIENDO JS *********************");
console.log("**** CUESTION 1 ***********");

const x = NaN;
console.log(x === x); // false

console.log("**** CUESTION 2 ***********");

const isNaNValue = (v) => Number.isNaN(v);
console.log(isNaNValue(NaN)); // true

console.log("**** CUESTION 3 ***********");

//const isNaNValue = (v) => Number.isNaN(v);

(window as any).x2 = 1;
Object.defineProperty(window, "x2", {
  get() {
    return Math.random();
  },
});

console.log(
  !isNaNValue((window as any)["x2"]) &&
    (window as any)["x2"] !== (window as any)["x2"]
);

console.log("**** CUESTION 4 ***********");

const x3 = Infinity;
console.log(x3 + 1 === x3 - 1); // true

console.log("**** CUESTION 5 ***********");

const x4 = {
  value: 1,
  [Symbol.toPrimitive]() {
    return --this.value;
  },
};

console.log(x4 > x4); // true
