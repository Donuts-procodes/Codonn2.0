// src/components/RunButton.jsx

export default function RunButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: "1rem",
        padding: "0.5rem 1.2rem",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      ▶️ Run
    </button>
  );
}
