import { useContext, useState } from "react";
import AuthContext from "../context/authContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

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
    <section>
      {error && msg}
      <div className="py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className=" flex flex-col  px-6 text-gray-500  mx-auto w-full lg:w-[40%] rounded-xl bg-white shadow-xl">
          <div className="mt-4 p-2 sm:p-16 mx-auto">
            <img
              src={logo}
              loading="lazy"
              className="w-32"
              alt="toyland logo"
            />
            <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
              Please Sign up to ToyLand.
            </h2>
          </div>
          <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col w-[60%]">
              <label htmlFor="">
                Username
                <input
                  type="text"
                  className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full p-1 my-2  text-base block bg-white
                  border-gray-300 rounded-md"
                />
              </label>
              <label htmlFor="">
                Email
                <input
                  type="email"
                  className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full p-1 my-2  text-base block bg-white
                  border-gray-300 rounded-md"
                />
              </label>
              <label htmlFor="">
                Password
                <input
                  type="password"
                  className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full p-1 my-2  text-base block bg-white
                  border-gray-300 rounded-md"
                />
              </label>
              <label htmlFor="">
                Photo Url
                <input
                  type="url"
                  className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full p-1 my-2  text-base block bg-white
                  border-gray-300 rounded-md"
                />
              </label>
              <div className="mt-8 grid">
                <button
                  className="w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 text-blue-400"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <p className="mx-auto my-6">
            Already have an account?
            <Link to="/login">Please login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
