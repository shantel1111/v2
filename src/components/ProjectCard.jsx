import quiz from "../assets/quizzical.png";
import movie from "../assets/movie-watchlist.png";
import pswrd from "../assets/password-generator.png";

export default function ProjectCard() {
  return (
    <>
      <h3>projects.</h3>

      <div className="projects-container">
        <div className="project-info">
          <img src={quiz} />
          <div className="project-text">
            <p>quizzical</p>
            <span className="project-skill">HTML, CSS, JS, REACT</span>
          </div>
        </div>
        <div className="project-links">
          <a href="https://github.com/shantel1111/quizzical">
            <i class="fa-solid fa-code"></i>
          </a>

          <a href="https://quizzical-0d8a04.netlify.app/">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>

      <div className="projects-container">
        <div className="project-info">
          <img src={movie} />
          <div className="project-text">
            <p>movie watchlist</p>
            <span className="project-skill">HTML, CSS, JS</span>
          </div>
        </div>
        <div className="project-links">
          <a href="https://github.com/shantel1111/movie-watchlist">
            <i class="fa-solid fa-code"></i>
          </a>

          <a href="https://moviewatchlist-5bc64a.netlify.app/">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>

      <div className="projects-container">
        <div className="project-info">
          <img src={pswrd} />
          <div className="project-text">
            <p>pswrd</p>
            <span className="project-skill">HTML, CSS, JS</span>
          </div>
        </div>
        <div className="project-links">
          <a href="https://github.com/shantel1111/password-generator">
            <i class="fa-solid fa-code"></i>
          </a>

          <a href="https://passwordgenerator-73787e.netlify.app/">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </>
  );
}
