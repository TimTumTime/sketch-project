import { useEffect, useState } from "react";
const LoginPage = () => {
  const [view, setView] = useState("login");

  useEffect(() => {});
  return (
    <section className="login-page">
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginPage;
