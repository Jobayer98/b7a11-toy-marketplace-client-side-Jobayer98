import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const { login, loginInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  const handleGoogle = () => {
    loginInWithGoogle();
    navigate(from, { replace: true });
  };
  return (
    <section className="vh-80 w-75 mx-auto">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h2 className="mb-4">Login</h2>
            {error && <p>Failed Login. Invalid Email or Password</p>}

            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control form-control-lg"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block mb-2"
              >
                Log in
              </button>
            </form>
            <button
              onClick={handleGoogle}
              type="submit"
              className="btn btn-primary btn-lg btn-block"
            >
              Log in With Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
