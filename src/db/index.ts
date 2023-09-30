import type { Book, Category } from "./types";
import Database from "better-sqlite3";
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
    .prepare("SELECT * FROM book WHERE book_category = ?")
    .all(id) as Book[];
};
export const getBooks = () => {
  return db.prepare("SELECT * FROM book").all() as Book[];
};

export const getBook = (id: number = 1) => {
  return db.prepare("SELECT * FROM book WHERE book_id = ?").get(id) as Book;
};
