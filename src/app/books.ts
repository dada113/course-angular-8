export interface Book {
  id: number;
  name: string;
  author: string;
  published?: number;
  available?: boolean;
  coverUrl?: string;
}

export const BOOKS: Book[] = [
  {id: 1, name: 'Reamde', author:'Neal Stephenson', coverUrl: 'https://ia800602.us.archive.org/view_archive.php?archive=/12/items/olcovers693/olcovers693-L.zip&file=6938241-L.jpg&ext='},
  {id: 2, name: 'Alice in Wonderland', author: 'Lewis Carroll', published: 2009, coverUrl: 'https://covers.openlibrary.org/b/id/8596432-L.jpg' },
  {id: 3, name: 'Steve Jobs', author: 'Walter Isaacson', coverUrl: 'https://covers.openlibrary.org/w/id/6901315-M.jpg', available: true },
  {id: 4, name: 'Dune', author: 'Frank Herbert', coverUrl: 'https://covers.openlibrary.org/w/id/258358-M.jpg' },
  {id: 5, name: 'Newton', author: 'Kate Gordon', coverUrl: 'https://covers.openlibrary.org/w/id/1405776-M.jpg' },
  {id: 6, name: 'Abraham Lincoln', author: 'Carl Sandburg', coverUrl: 'https://covers.openlibrary.org/w/id/2560507-M.jpg' },
  {id: 7, name: 'Frankenstein', author: 'Mary Shelley', coverUrl: 'https://covers.openlibrary.org/w/id/4636490-M.jpg' },
  {id: 8, name: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: 'https://covers.openlibrary.org/w/id/8406761-M.jpg' },
  {id: 9, name: 'Harry Potter and the Philosopher\'s Stone', author: 'J. K. Rowling', coverUrl: 'https://covers.openlibrary.org/w/id/8267078-M.jpg' },
];
