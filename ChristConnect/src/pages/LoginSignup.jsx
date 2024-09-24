import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Toggle between Login and Signup mode
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const url = isLogin
        ? "http://127.0.0.1:8000/login/"
        : "http://127.0.0.1:8000/signup/";

      const payload = isLogin
        ? { username: formData.username, password: formData.password }
        : {
            username: formData.username,
            email: formData.email,
            password: formData.password,
          };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        if (response.ok) {
          if (isLogin) {
            // On login success, redirect to landing page
            localStorage.setItem("username", data.username); // Store username
            navigate("/"); // Redirect to landing page
          } else {
            // On signup success, switch to login form
            alert("Signup successful, please login.");
            toggleForm(); // Switch to login mode
          }
        } else {
          alert(data.error || "An error occurred");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  // Validate form fields
  const validate = () => {
    const validationErrors = {};
    if (!formData.username) validationErrors.username = "Username is required";
    if (!formData.password) validationErrors.password = "Password is required";
    if (!isLogin && formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return (
    <div className="flex justify-center w-full bg-darkblue min-h-screen">
      <div className="w-full max-w-md mt-20 bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-4 text-darkblue">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-darkblue"
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>

          {!isLogin && (
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-darkblue"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          )}

          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-darkblue"
              required
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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-darkblue"
                required
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
