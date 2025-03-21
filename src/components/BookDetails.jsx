import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return (
      <div className="book-not-found">
        <p>
          Book not found. <Link to="/browse">Back to Browse</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="book-details-container">
      <div className="book-image">
        <img src={book.coverImage} alt={book.title} />
      </div>
      <div className="book-info">
        <h1>{book.title}</h1>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>Price:</strong> ${book.price}
        </p>
        <p>
          <strong>Published Date:</strong> {book.PublishedDate}
        </p>
        <p>
          <strong>Pages:</strong> {book.pages}
        </p>
        <p>
          <strong>Summary:</strong> {book.summary}
        </p>
        <p>
          <strong>Description:</strong> {book.description}
        </p>
        <p>
          <strong>Rating:</strong> {book.rating} / 5
        </p>
        <Link to="/browse" className="back-button">
          Back to Browse
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
