import book1 from "../../assets/images/books/book-1-img.png";
import book2 from "../../assets/images/books/book-2-img.png";
import book3 from "../../assets/images/books/book-3-img.png";

type Book = {
  title: string;
  author: string;
  image: string;
};

export const books: Book[] = [
  {
    title: "SUPERNATURAL SPEED",
    author: "Prophet I.O Samuel",
    image: book1,
  },
  {
    title: "THE SPIRIT OF HALLOWEEN EXPOSED",
    author: "Prophet I.O Samuel",
    image: book2,
  },
  {
    title: "BREAKTHROUGH BY THE BLOOD OF JESUS",
    author: "Prophet I.O Samuel",
    image: book3,
  },
  {
    title: "SUPERNATURAL SPEED",
    author: "Prophet I.O Samuel",
    image: book1,
  },
  {
    title: "THE SPIRIT OF HALLOWEEN EXPOSED",
    author: "Prophet I.O Samuel",
    image: book2,
  },
  {
    title: "BREAKTHROUGH BY THE BLOOD OF JESUS",
    author: "Prophet I.O Samuel",
    image: book3,
  },
];
