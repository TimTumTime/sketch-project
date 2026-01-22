import React from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";

const LandingPage = () => {
  const { setTransition } = useGlobalContext();

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
