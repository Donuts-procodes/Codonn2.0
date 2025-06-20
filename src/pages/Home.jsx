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
        <div onClick={() => handleCardClick("python")}>
          <Card title="Popular this month" poweredBy="Powered by" source="Uiverse" />
        </div>
        <div onClick={() => handleCardClick("cpp")}>
          <Card title="Top Picks" poweredBy="Curated by" source="Codonn" />
        </div>
        <div onClick={() => handleCardClick("java")}>
          <Card title="Editor's Choice" poweredBy="Selected by" source="OpenAI" />
        </div>
        <div onClick={() => handleCardClick("javascript")}>
          <Card title="Try JavaScript" poweredBy="Run in" source="Browser" />
        </div>
        <div onClick={() => handleCardClick("c")}>
          <Card title="Run C code" poweredBy="Compiled with" source="GCC" />
        </div>
      </div>
    </div>
  );
}
