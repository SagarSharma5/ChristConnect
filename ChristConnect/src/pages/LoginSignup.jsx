import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  // Validation regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 chars, one letter and one number

  // Form validation
  const validate = () => {
    const errors = {};
    if (!emailRegex.test(formData.email) && !isLogin) {
      errors.email = "Invalid email format.";
    }
    if (formData.username.length <= 3) {
      errors.username = "Username must be greater than 3 characters.";
    }
    if (!passwordRegex.test(formData.password)) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one number.";
    }
    if (formData.password !== formData.confirmPassword && !isLogin) {
      errors.confirmPassword = "Passwords do not match.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle between login and signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Add logic for handling login/signup here
      if (isLogin) {
        // Simulating a successful login
        // Here you would typically call an API for authentication
        const loginSuccess = true; // Assume login was successful for demo
        if (loginSuccess) {
          navigate("/"); // Redirect to landing page
        }
      } else {
        // Simulating a successful signup
        // Here you would typically call an API to create the user
        const signupSuccess = true; // Assume signup was successful for demo
        if (signupSuccess) {
          navigate("/"); // Redirect to login page
        }
      }
    }
  };

  return (
    <div className="flex justify-center w-[1903px] bg-darkblue">
      <div className="w-[90%] sm:w-[400px] h-fit mt-40 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-darkblue text-center mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-darkblue"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-darkblue"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </>
          )}
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-darkblue"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-darkblue"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          {!isLogin && (
            <div className="mb-4">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-darkblue"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-darkblue text-white rounded-lg transition duration-300 hover:bg-opacity-80"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-darkblue">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="font-semibold text-blue-500 hover:text-blue-700 transition duration-300"
            onClick={toggleForm}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;
