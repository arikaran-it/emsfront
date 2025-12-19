import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import logo from "../assets/logo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      const message = await login({ username, password });
      if (message === "Login successful") {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else {
        setError(message);
      }
    } catch {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex">
      
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-10">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">EMS</h1>
          <p className="text-gray-500 mb-8">
            Welcome to the Employee Management System
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            {/* Username */}
            <div>
              <label className="text-blue-800 font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-blue-800 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Remember + Reset */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="text-blue-700 cursor-pointer hover:underline">
                Reset Password?
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 font-semibold"
            >
              Login
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              This is login by <span className="text-blue-700 font-medium">Admin</span>.
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden md:flex w-1/2 bg-indigo-900 text-white items-center justify-center relative">
        <div className="text-center px-10">
          <div className="bg-gradient-to-br rounded-full w-72 h-72 flex items-center justify-center mx-auto mb-10">
            <img src={logo} alt="EMS Logo" className="w-96 h-96 object-contain" />
          </div>

          <h2 className="text-3xl font-bold leading-snug">
            Manage all <span className="text-yellow-400">HR Operations</span>{" "}
            from the comfort of your home.
          </h2>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            <span className="w-10 h-2 bg-yellow-400 rounded-full"></span>
            <span className="w-10 h-2 bg-white rounded-full opacity-60"></span>
            <span className="w-10 h-2 bg-white rounded-full opacity-60"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
