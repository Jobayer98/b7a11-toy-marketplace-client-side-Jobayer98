import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import AuthContext from "../context/authContext";
import logo from "../assets/logo.png";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const { loginInWithGoogle, login } = useContext(AuthContext);

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
    <section>
      {error && <p>Failed to login</p>}
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
              Please Sign in to ToyLand.
            </h2>
          </div>
          <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col w-[60%]">
              <label htmlFor="">
                Email
                <input
                  type="email"
                  name="email"
                  className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full p-1 my-2  text-base block bg-white
                  border-gray-300 rounded-md"
                />
              </label>
              <label htmlFor="">
                Password
                <input
                  type="password"
                  name="password"
                  className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full p-1 my-2  text-base block bg-white
                  border-gray-300 rounded-md"
                />
              </label>

              <div className="mt-8 grid">
                <button
                  onClick={handleGoogle}
                  className="w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 hover:text-blue-400"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="mt-3 grid">
            <button
              onClick={handleGoogle}
              className="w-[60%] flex justify-center items-center gap-2 mx-auto h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 hover:text-blue-400"
            >
              <FcGoogle className="text-xl" />
              Contiune with google
            </button>
          </div>
          <div className="mt-3 grid">
            <button
              className="w-[60%] flex justify-center items-center gap-2 mx-auto h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 hover:text-blue-400"
            >
              <BsFacebook className="text-xl text-blue-600" />
              Contiune with facebook
            </button>
          </div>
          <p className="mx-auto my-6">
            New to ToyLand?
            <Link to="/signup">Please signup</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
