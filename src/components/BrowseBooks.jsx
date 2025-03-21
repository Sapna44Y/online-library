import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import "./BrowseBooks.css"; // Assuming you have a separate CSS file for styling

const BrowseBooks = () => {
  const { category } = useParams(); // This captures the category from the route, e.g., /books/:category
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  // Filter books by category and search term
  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      !category || book.category.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-books-container">
      <h1>Browse Books</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="books-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-item">
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-cover"
              />
              <div className="book-details">
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <Link to={`/book/${book.id}`} className="view-details">
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No books found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
