import { createSlice } from "@reduxjs/toolkit";

const initialBooks = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "fiction",
    PublishedDate: "1813-01-28",
    pages: 279,
    coverImage:
      "https://rukminim2.flixcart.com/image/850/1000/kkec4280/book/d/h/d/pride-prejudice-original-imafzra6pfewjjwb.jpeg?q=90&crop=false",
    description:
      "A romantic novel about Elizabeth Bennet and Mr. Darcy. It highlights class, marriage, and societal expectations in 19th-century England.",
    price: 9.99,
    genre: "Romance, Classic",
    language: "English",
    Publisher: "T. Egerton, Whitehall",
    summary:
      "Elizabeth Bennet navigates the pressures of marriage, class distinctions, and societal expectations while falling in love with the enigmatic Mr. Darcy.",
    rating: 4.8,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "fiction",
    PublishedDate: "1960-07-11",
    pages: 281,
    coverImage:
      "https://1min1book.com/cdn/shop/files/ToKillaMockingbird.jpg?v=1685684229&width=1445",
    description:
      "A profound story about racial injustice and moral growth in the American South. Scout Finch navigates childhood while learning powerful lessons.",
    price: 9.99,
    genre: "Classic, Southern Gothic",
    language: "English",
    Publisher: "J.B. Lippincott & Co.",
    summary:
      "Set in the 1930s, this novel examines racism and injustice through the eyes of a young girl growing up in a segregated Southern town.",
    rating: 4.9,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "fiction",
    PublishedDate: "1925-04-10",
    pages: 180,
    coverImage:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg",
    description:
      "Set in the Roaring Twenties, this novel depicts the pursuit of wealth and love. It critiques the hollow pursuit of the American Dream.",
    price: 9.99,
    genre: "Classic, Tragedy",
    language: "English",
    Publisher: "Charles Scribner's Sons",
    summary:
      "Jay Gatsby's pursuit of the American Dream and his lost love, Daisy Buchanan, leads to his tragic downfall in this tale of opulence and disillusionment.",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "non-fiction",
    PublishedDate: "2011-09-01",
    pages: 443,
    coverImage:
      "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
    description: "An exploration of the history and impact of Homo sapiens.",
    price: 12.99,
    genre: "History, Non-fiction",
    language: "English",
    Publisher: "Harvill Secker",
    summary:
      "Harari explores the origins of humanity, from the rise of Homo sapiens to the present day, covering key developments in agriculture, religion, and technology.",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    category: "non-fiction",
    PublishedDate: "2018-02-20",
    pages: 334,
    coverImage:
      "https://m.media-amazon.com/images/I/71-4MkLN5jL._AC_UF1000,1000_QL80_.jpg",
    description:
      "A memoir of a young woman raised in a strict and abusive household.",
    price: 14.99,
    genre: "Memoir, Non-fiction",
    language: "English",
    Publisher: "Random House",
    summary:
      "Educated is a remarkable memoir about a woman who escapes a survivalist family and pursues an education despite many challenges.",
    rating: 4.8,
  },
  {
    id: 6,
    title: "Becoming",
    author: "Michelle Obama",
    category: "non-fiction",
    PublishedDate: "2018-11-13",
    pages: 448,
    coverImage:
      "https://m.media-amazon.com/images/I/81KGjsBXQ7L._AC_UF1000,1000_QL80_.jpg",
    description: "The memoir of the former First Lady of the United States.",
    price: 16.99,
    genre: "Memoir, Non-fiction",
    language: "English",
    Publisher: "Crown Publishing Group",
    summary:
      "Michelle Obama reflects on her life, from her childhood to her time in the White House, offering insight into the complexities of being a woman, wife, and public figure.",
    rating: 4.8,
  },
  {
    id: 7,
    title: "Dune",
    author: "Frank Herbert",
    category: "sci-fi",
    PublishedDate: "1965-08-01",
    pages: 412,
    coverImage:
      "https://www.hindustantimes.com/ht-img/img/2024/04/23/original/4261a6c2-015b-11ef-9329-2d40acfaa7ba_1713886950158.jpg",
    description: "A science fiction epic set on the desert planet Arrakis.",
    price: 11.99,
    genre: "Sci-fi, Space Opera",
    language: "English",
    Publisher: "Chilton Books",
    summary:
      "Dune is a science fiction masterpiece that explores themes of politics, religion, and ecology on the desert planet Arrakis, where powerful forces vie for control.",
    rating: 4.6,
  },
  {
    id: 8,
    title: "Neuromancer",
    author: "William Gibson",
    category: "sci-fi",
    PublishedDate: "1984-07-01",
    pages: 271,
    coverImage:
      "https://m.media-amazon.com/images/I/81q4f98tuUL._AC_UF1000,1000_QL80_.jpg",
    description: "A foundational work of the cyberpunk genre.",
    price: 10.99,
    genre: "Cyberpunk, Sci-fi",
    language: "English",
    Publisher: "Ace Books",
    summary:
      "Neuromancer is a classic cyberpunk novel that explores artificial intelligence, hacking, and cyberspace through the story of Case, a washed-up computer hacker.",
    rating: 4.4,
  },
  {
    id: 9,
    title: "The Martian",
    author: "Andy Weir",
    category: "sci-fi",
    PublishedDate: "2011-02-11",
    pages: 369,
    coverImage:
      "https://i0.wp.com/victoria-reads.com/wp-content/uploads/2020/06/The-Martian-1.jpg?resize=333%2C500&ssl=1",
    description: "The story of an astronaut stranded on Mars.",
    price: 12.99,
    genre: "Sci-fi, Adventure",
    language: "English",
    Publisher: "Crown Publishing Group",
    summary:
      "Mark Watney, an astronaut stranded on Mars, must rely on his ingenuity to survive while awaiting rescue in this gripping sci-fi adventure.",
    rating: 4.8,
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "fantasy",
    PublishedDate: "1937-09-21",
    pages: 310,
    coverImage:
      "https://m.media-amazon.com/images/I/717TGeIkVML._AC_UF1000,1000_QL80_.jpg",
    description: "The journey of Bilbo Baggins in a fantastical world.",
    price: 10.99,
    genre: "Fantasy, Adventure",
    language: "English",
    Publisher: "George Allen & Unwin",
    summary:
      "Bilbo Baggins embarks on a journey to recover treasure guarded by the dragon Smaug in this classic tale of high fantasy.",
    rating: 4.9,
  },
  {
    id: 11,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "fantasy",
    PublishedDate: "1997-06-26",
    pages: 309,
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg",
    description: "The beginning of Harry Potter’s journey at Hogwarts.",
    price: 8.99,
    genre: "Fantasy, Magic",
    language: "English",
    Publisher: "Bloomsbury",
    summary:
      "Harry Potter learns he is a wizard and embarks on a magical journey at Hogwarts School of Witchcraft and Wizardry in this beloved first book of the series.",
    rating: 4.9,
  },
  {
    id: 12,
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    category: "fantasy",
    PublishedDate: "1996-08-06",
    pages: 694,
    coverImage:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608872190/game-of-thrones-9781608872190_hr.jpg",
    description:
      "The first book in the epic fantasy series, A Song of Ice and Fire.",
    price: 14.99,
    genre: "Fantasy, Epic",
    language: "English",
    Publisher: "Bantam Books",
    summary:
      "The battle for the Iron Throne unfolds in this epic fantasy series, set in the dangerous and politically complex world of Westeros.",
    rating: 4.7,
  },
];

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
