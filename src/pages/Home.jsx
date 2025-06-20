import Sidebar from "../components/SideBar";
import "./home.css";
import Card from "../components/Card";
export default function Home() {
  return (
    <>
      <div className="home-body">
        <Sidebar />
        <div className="scroll-body">
          <Card
            title="Popular this month"
            poweredBy="Powered by"
            source="Uiverse"
          />
          <Card title="Top Picks" poweredBy="Curated by" source="Codonn" />
          <Card
            title="Editor's Choice"
            poweredBy="Selected by"
            source="OpenAI"
          />
          <Card
            title="Editor's Choice"
            poweredBy="Selected by"
            source="OpenAI"
          />
          <Card
            title="Editor's Choice"
            poweredBy="Selected by"
            source="OpenAI"
          />
          <Card
            title="Editor's Choice"
            poweredBy="Selected by"
            source="OpenAI"
          />
          <Card
            title="Editor's Choice"
            poweredBy="Selected by"
            source="OpenAI"
          />
          <Card
            title="Editor's Choice"
            poweredBy="Selected by"
            source="OpenAI"
          />
        </div>
      </div>
    </>
  );
}
