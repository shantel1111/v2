import quiz from "../assets/quizzical.png";
import movie from "../assets/movie-watchlist.png";
import pswrd from "../assets/password-generator.png";

export default function ProjectCard() {
  return (
    <>
      <h3>projects.</h3>
      <div className="projects-container">
        <div className="project-names">
          <h4>quizzical</h4>
          <h4>movie</h4>
          <h4>pswrd</h4>
        </div>

        <div className="project-imgs"></div>

        <div className="project-icons">
          <i class="fa-solid fa-code"></i>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    </>
  );
}
