console.log("************** DELIVERABLE 04 *********************");
//4. Read Books

console.log("Read Books");

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((book) => book.title === titleToSearch);
  return book?.isRead ? true : false;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log(isBookRead(books, "Harry Potter y la piedra filosofal")); // true
console.log(isBookRead(books, "The Lord of the Rings")); // false
