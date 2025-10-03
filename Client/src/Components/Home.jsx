import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Home({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="mb-6">
        <button
          onClick={() => setShowLogin(true)}
          className={`px-4 py-2 rounded-l-lg ${
            showLogin ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setShowLogin(false)}
          className={`px-4 py-2 rounded-r-lg ${
            !showLogin ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          Register
        </button>
      </div>

      <div className="w-full max-w-md">
        {showLogin ? (
          <Login setUser={setUser} />
        ) : (
          <Register onRegistered={() => setShowLogin(true)} />
        )}
      </div>
    </div>
  );
}
