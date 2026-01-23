import { Link } from "react-router-dom";
import { Button } from "../index.jsx";
import "./HeaderBar.css";

const HeaderBar = ({ isLoggedIn = false }) => {
  return (
    <header className="header-bar">
      <span>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/structured-learning">
          <Button>Tutorials</Button>
        </Link>
        <Link to="/free-canvas">
          <Button>Canvas</Button>
        </Link>

        <Link to="/login">
          <Button className={isLoggedIn ? "account-button" : "login-button"}>
            {isLoggedIn ? "Account" : "Login"}
          </Button>
        </Link>
      </span>
    </header>
  );
};

export default HeaderBar;
