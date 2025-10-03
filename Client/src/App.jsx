import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Dashboard from "./Components/Dashboard.jsx";

import { useState } from "react";
import NotFound from "./components/NotFound.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => setUser(null);

  // Protect dashboard route
  const ProtectedRoute = ({ children }) => {
    if (!user) return <Navigate to="/" />;
    return children;
  };

  return (
    <Router>
   
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<Home setUser={setUser} />} />
          
          {/* Protected Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
