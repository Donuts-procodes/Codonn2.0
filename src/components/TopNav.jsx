import { Link } from "react-router-dom";
import "./Topnav.css";

export default function TopNav() {
  return (
    <div className="nav">
      <Link to='/latest'>
        <button className="btn-login">What's new</button>
      </Link>
      <Link to='/about'>
        <button className="btn-login">About us</button>
      </Link>
      <Link to='/more'>
        <button className="btn-login">More info</button>
      </Link>
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
