import type { Book, Category } from "./types";
import Database from "better-sqlite3";
import { writeFileSync } from "fs";
const db = new Database("kizana.sqlite", { verbose: console.log });

/**
 * 
 * Available tables   
  { name: 'category' },
  { name: 'book' },
  { name: 'author' },
  { name: 'author_book' },
  { name: 'version' },
  { name: 'db_ver' },
  { name: 'coauthor_book' },
  { name: 'biblio' },
  { name: 'bio' }
 */

export const getCategories = (): Category[] => {
  return db.prepare("SELECT * FROM category").all() as Category[];
};

export const getCategoryBooks = (id: number = 1) => {
  return db
    .prepare(
      // "SELECT * FROM book WHERE book_category = ? AND pdf_links IS NOT NULL"
      "select * from book CROSS JOIN author ON book.main_author = author.author_id CROSS JOIN category ON category.category_id = book.book_category WHERE book_category = ? AND pdf_links IS NOT NULL"
    )
    .all(id) as Book & { category_name: string; author_name: string }[];
};
export const getBooks = () => {
  return db
    .prepare("SELECT book_id, pdf_links FROM book WHERE pdf_links IS NOT NULL")
    .all() as Book[];
};

export const getBook = (id: number = 1) => {
  return db
    .prepare(
      "SELECT * FROM book CROSS JOIN author ON book.main_author = author.author_id CROSS JOIN category ON category.category_id = book.book_category WHERE book_id = ?"
    )
    .get(id) as Book & { category_name: string; author_name: string };
};

const getMissingBooks = () => {
  return db
    .prepare(
      `select book_id, book_name, category_id, main_author, author_id, author_name category_name from (SELECT * FROM book CROSS JOIN author ON book.book_category = author.author_id CROSS JOIN category ON category.category_id = book.book_category WHERE pdf_links IS NULL) as missing_books`
    )
    .all() as Book & { category_name: string; author_name: string }[];
};

// writeFileSync("missing_books.json", JSON.stringify(getMissingBooks(), null, 2));
