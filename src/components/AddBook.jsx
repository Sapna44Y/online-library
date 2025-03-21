import { useDispatch } from "react-redux";
import { useState } from "react";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Assuming you will add the corresponding CSS here

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    rating: "",
    coverImage: "",
    genre: "",
    price: "",
    publishedDate: "",
    pages: "",
    summary: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...form, id: Date.now() }));
    navigate("/browse");
  };

  return (
    <div className="add-book-container">
      <h1>Add New Book</h1>
      <p>Fill the form detail related to book</p>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="coverImage"
          placeholder="Cover Image URL(Ex Url :- https://www.adhanbooks.com/wp-content/224/7434.jpg)"
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <input type="date" name="publishedDate" onChange={handleChange} />
        <input
          type="number"
          name="pages"
          placeholder="Number of Pages"
          onChange={handleChange}
        />
        <textarea
          name="summary"
          placeholder="Summary"
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
