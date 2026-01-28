import { useEffect, useState } from "react";
import { Button } from "../../components";
const LoginPage = () => {
  const [loginView, setLoginView] = useState(true);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email === "" || data.password === "") {
      alert("Please fill in all fields");
      return;
    }

    if (loginView) {
    } else {
    }
  };
  useEffect(() => {});
  return (
    <>
      {loginView ? (
        <section className="login-page">
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <Button
            handleClick={() => setLoginView(false)}
            className="switch-btn"
          >
            <h4>Don't have an account? Sign Up</h4>
          </Button>
        </section>
      ) : (
        <section className="signup-page">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
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
