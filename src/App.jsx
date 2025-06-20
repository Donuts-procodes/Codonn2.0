// App.jsx
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import More from "./pages/More";
import About from "./pages/About";
import Latest from "./pages/Latest";
import Loader from "./components/Loader"; // Make sure this exists
import { auth } from "./firebase"; // Make sure Firebase is initialized correctly
import Workspace from "./pages/Workspace"; // ✅ Import at the top

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  if (loading) {
    return (
      <div
        className="container"
        style={{ display: "grid", placeItems: "center", height: "100vh" }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Redirect to /home if user is logged in, else show Intro */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Intro />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected route */}
        <Route
          path="/home"
          element={
            user ? <Home handleLogout={handleLogout} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/workspace"
          element={user ? <Workspace /> : <Navigate to="/" />}
        />

        {/* Additional routes - accessible by anyone for now */}
        <Route path="/more" element={<More />} />
        <Route path="/about" element={<About />} />
        <Route path="/latest" element={<Latest />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
