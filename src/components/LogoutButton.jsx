import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate("/login"); // redirect to login page after logout
    } catch (error) {
      console.error("Logout error:", error.message);
      alert("Logout failed: " + error.message);
    }
  };

  return (
    
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
}
