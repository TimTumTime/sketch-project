import { Link } from "react-router-dom";
import { Button } from "../index.jsx";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import "./HeaderBar.css";

const HeaderBar = ({ isLoggedIn = false }) => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  const toggleAccountDropdown = () => {
    setAccountDropdown(!accountDropdown);
  };

  return (
    <header className="header-bar">
      <div className="logo">
        <h3>Sketch Project</h3>
        <button className="header-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>

      <div
        className="links-container"
        ref={linksContainerRef}
        style={linkStyles}
      >
        <Link to="/">
          <Button className="button">Home</Button>
        </Link>
        <Link to="/structured-learning">
          <Button className="button">Tutorials</Button>
        </Link>
        <Link to="/free-canvas">
          <Button className="button">Canvas</Button>
        </Link>

        {isLoggedIn ? (
          <Link to="/account">
            <Button className="account-button">Account</Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button className="login-button">Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default HeaderBar;
