import { useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar";
import "./home.css";
import Card from "../components/Card";

export default function Home() {
  const navigate = useNavigate();

  const handleCardClick = (language) => {
    navigate("/workspace", { state: { language } });
  };

  return (
    <div className="home-body">
      <Sidebar />
      <div className="scroll-body">
        <span onClick={() => handleCardClick("python")}>
          <Card title="Python" poweredBy="version:"  />
        </span>
        <span onClick={() => handleCardClick("cpp")}>
          <Card title="C++" poweredBy="version:"  />
        </span>
        <span onClick={() => handleCardClick("java")}>
          <Card title="Java" poweredBy="version"  />
        </span>
        <span onClick={() => handleCardClick("javascript")}>
          <Card title="JavaScript" poweredBy="verison"  />
        </span>
        <span onClick={() => handleCardClick("c")}>
          <Card title="C" poweredBy="verison"  />
        </span>
      </div>
    </div>
  );
}
