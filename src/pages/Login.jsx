const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <section className="vh-80 w-75 mx-auto">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h2 className="mb-4">Login</h2>

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
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Log in With Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
