import "./styles/Bento.css";
import Card from "./components/Card";
import BioCard from "./components/BioCard";
import HookCard from "./components/HookCard";
import TechCard from "./components/TechCard";
import StatusCard from "./components/StatusCard";
import ProjectCard from "./components/ProjectCard";
import ContactCard from "./components/ContactCard";

export default function Bento() {
  return (
    <main className="grid-container">
      <Card gridArea="box-1" className="bio-card">
        <BioCard />
      </Card>

      <Card gridArea="box-2" className="hook-card">
        <HookCard />
      </Card>

      <Card gridArea="box-3" className="tech-card">
        <TechCard />
      </Card>

      <Card gridArea="box-4" className="status-card">
        <StatusCard />
      </Card>

      <Card gridArea="box-5" className="project-card">
        <ProjectCard />
      </Card>

      <Card gridArea="box-6" className="contact-card">
        <ContactCard />
      </Card>
    </main>
  );
}

{
  /* <div className="grid-item hook-box" style={{ gridArea: "box-2" }}></div> */
}
