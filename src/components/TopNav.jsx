import { Link } from "react-router-dom";
import "./Topnav.css";

export default function TopNav() {
  return (
    <div className="nav">
      <button>What's new</button>
      <button>Home</button>
      <button>About us</button>
      <button>More info</button>
      <div className="nav-child">
        <Link to="/login">
          <button className="btn-login">LogIn</button>
        </Link>
        <Link to="/register">
          <button className="btn-register">Register</button>
        </Link>
      </div>
    </div>
  );
}
