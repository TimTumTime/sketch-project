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
          <Button>
            <Link to="/structured-learning">Structured Learning</Link>
          </Button>
          <Button>
            <Link to="/free-canvas">Free Canvas</Link>
          </Button>
        </span>
      </div>
    </section>
  );
};

export default LandingPage;
