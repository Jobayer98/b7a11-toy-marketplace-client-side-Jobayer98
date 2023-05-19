import { useContext, useState } from "react";
import AuthContext from "../context/authContext";
import { useLocation, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const { register } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    register(email, password)
      .then((result) => {
        result.user.displayName = name;
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setError(true);
        setMsg(e.message);
      });
  };

  return (
    <section className="vh-80 w-75 mx-auto">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h2 className="mb-4">Sign Up</h2>
            <p> {error && msg}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="name">
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control form-control-lg"
                />
              </div>
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
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
