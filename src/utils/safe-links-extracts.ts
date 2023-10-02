import type { Book } from "../db/types";

export function safeLinksExtracts(book: Book): string[] {
  let links: string[] = [];
  let root: string = "";
  try {
    links = JSON.parse(book.pdf_links).files || [];
    root = JSON.parse(book.pdf_links).root || "";
    links = polyfillLinks(root, links);
  } catch (error) {
    links = [];
  }
  return links;
}

export function polyfillLinks(root: string, links: string[]) {
  if (root) {
    links = links.map((link) => {
      const url = new URL(root);
      link = `${link.split("|")[0]}`;
      return `${url.origin}${url.pathname}${link}`;
    });
  }
  return links;
}
