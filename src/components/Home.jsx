import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"];

  const books = useSelector((state) => state.books);

  // Select the first 4 books as popular books
  const popularBooks = books.slice(5, 8);

  return (
    <div className="home-container">
      <h1>Welcome to the Online Library</h1>

      <section className="categories-section">
        <h2>Book Categories</h2>
        <ul className="categories-list">
          {categories.map((category) => (
            <li key={category}>
              <Link
                to={`/books/${category.toLowerCase()}`}
                className="category-link"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="popular-books-section">
        <h2>Popular Books</h2>
        <div className="popular-books">
          {popularBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-cover-image"
              />
              <div className="book-details">
                <h3>{book.title}</h3>
                <Link to={`/book/${book.id}`} className="view-details-link">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
