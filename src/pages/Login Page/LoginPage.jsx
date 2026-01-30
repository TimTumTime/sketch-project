import { use, useEffect, useState } from "react";
import { Button } from "../../components";
import AlertBox from "../../components/Alert Box/AlertBox";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [loginView, setLoginView] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in all required fields.");
      setShowAlert(true);
      return;
    }

    return navigate("/");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      setError("Please fill in all required fields.");
      setShowAlert(true);
      return;
    }

    return navigate("/");
  };
  return (
    <>
      {loginView ? (
        <section className="login-page">
          <form onSubmit={handleLogin}>
            <label htmlFor="email-input">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              id="email-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password-input">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          {showAlert && <AlertBox message={error} />}
          <Button
            handleClick={() => setLoginView(false)}
            className="switch-btn"
          >
            <h4>Don't have an account? Sign Up</h4>
          </Button>
        </section>
      ) : (
        <section className="signup-page">
          <form onSubmit={handleRegister}>
            <label htmlFor="username-input">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              id="username-input"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email-input">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              id="email-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password-input">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              id="password-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
          <Button handleClick={() => setLoginView(true)} className="switch-btn">
            <h4>Already have an account? Login</h4>
          </Button>
        </section>
      )}
    </>
  );
};

export default LoginPage;
