import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    login("Luis Leal");
    navigate("/", { replace: true });
  };

  return (
    <div className="container mt-3">
      <h1>Login</h1>
      <hr />
      <button onClick={onLogin} className="btn btn-outline-primary">
        Login
      </button>
    </div>
  );
};
