import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/browse">Browse Books</Link>
      </li>
      <li>
        <Link to="/add">Add Book</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
