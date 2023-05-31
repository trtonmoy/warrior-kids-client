import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirmPassword.value;
    console.log(email, password, confirm);
    if (password !== confirm) {
      setError("password does not matched!");
    }
    if (!/[A-Z]/.test(password)) {
      setError("Please use an uppercase character.");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError("Please use number");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been created successfully..");
        form.reset();
        // setUser(loggedUser);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
        <div className="w-1/2 max-w-md">
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <h2 className="text-3xl text-center text-gray-800 font-bold mb-6">
              Register
            </h2>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
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
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="confirm_password"
                >
                  Password
                </label>
                <input
                  name="confirmPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <p className="text-center text-gray-100 mt-4">
            Already have an account?{" "}
            <Link to="/login">
              <button
                className="text-blue-300 font-extrabold tracking-wide hover:underline"
                href="#"
              >
                Login
              </button>
            </Link>
            <p className="text-lg font-medium text-yellow-500"> {success} </p>
            <p className="text-lg font-medium text-red-600"> {error} </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
