import React from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const handleClick = () => {};
  return (
    <div>
      Sketch Project
      <nav>
        <Button>
          <Link to="/structured-learning">Structured Learning</Link>
        </Button>
        <Button>
          <Link to="/free-canvas">Free Canvas</Link>
        </Button>
      </nav>
    </div>
  );
};

export default LandingPage;
