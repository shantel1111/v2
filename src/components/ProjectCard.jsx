import quiz from "../assets/quizzical.png";

export default function ProjectCard() {
  return (
    <>
      <h3>projects.</h3>
      <div className="projects-container">
        <div className="projects-preview">
          <div className="project-img">
            <img src={quiz} />
          </div>
          <div className="project-tabs">
            <button className="project-btn">01. </button>
            <button className="project-btn">02. </button>
            <button className="project-btn">03. </button>
          </div>
        </div>

        <div className="code-btn">
          <p>HTML - CSS - JS - REACT</p>
          <i class="fa-solid fa-code"></i>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    </>
  );
}
