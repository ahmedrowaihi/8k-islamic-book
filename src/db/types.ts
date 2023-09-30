export interface Author {
  author_id: number;
  author_name: string;
  death_number: number;
  death_text: string;
}

export interface AuthorBook {
  author_id: number;
  book_id: number;
}

export interface CoauthorBook {
  author_id: number;
  book_id: number;
}

export interface Book {
  book_id: number;
  book_name: string;
  book_category: number;
  book_type: number;
  book_date: number;
  authors: string;
  main_author: number;
  printed: number;
  group_id: number;
  hidden: number;
  major_online: number;
  minor_online: number;
  major_ondisk: number;
  minor_ondisk: number;
  pdf_links: string;
  pdf_ondisk: number;
  pdf_online: number;
  cover_ondisk: number;
  cover_online: number;
  meta_data: string;
  parent: number;
}
export interface Biblio {
  id: number;
  name: string;
  is_deleted: string;
  category: string;
  type: string;
  date: string;
  author: string;
  printed: string;
  minor_release: string;
  major_release: string;
  bibliography: string;
  hint: string;
  pdf_links: string;
  metadata: string;
}

export interface Bio {
  authid: number;
  auth: string;
  inf: string;
  Lng: string;
  HigriD: string;
  AD: number;
  oNum: number;
  oVer: number;
  seal: string;
}

export interface Category {
  category_id: number;
  category_name: string;
  category_order: number;
}

export interface Version {
  key: string;
  value: number;
}
export interface DbVar {
  value: number;
}
