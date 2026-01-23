import React from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import "./LandingPage.css";

const LandingPage = () => {
  const { setLearningView } = useGlobalContext();

  setLearningView("levels");
  return (
    <section className="landing-page">
      <div>
        <h2>Sketch Project</h2>

        <span>
          <Link to="/structured-learning">
            <Button>Structured Learning</Button>
          </Link>
          <Link to="/free-canvas">
            <Button>Free Canvas</Button>
          </Link>
        </span>
      </div>
    </section>
  );
};

export default LandingPage;
