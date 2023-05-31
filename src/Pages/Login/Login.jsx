import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext, auth } from "../../provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
const Login = () => {
  const { SignIn, setLoading, setUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    SignIn(email, password)
      .then((result) => {
        setLoading(true);
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, provider).then((res) => {
      const user = res.user;
      setUser(user);
      setSuccess("Logged In successfully..");
      navigate(from, { replace: true });
    });
  };

  return (
    <section>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
        <div className="w-1/2 max-w-md">
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <h2 className="text-3xl text-center text-gray-800 font-bold mb-6">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  required
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Log In
                </button>
              </div>
              <div className="flex items-center justify-between mt-5">
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Sign In with GOOGLE
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <a className="text-blue-500 hover:underline" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <p className="text-center text-gray-100 mt-4">
            Don't have an account?{" "}
            <Link to="/register">
              <button
                className="text-blue-300 font-extrabold tracking-wide hover:underline"
                href="#"
              >
                Sign Up
              </button>
            </Link>
            <p className="text-lg font-medium text-yellow-500"> {success} </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
