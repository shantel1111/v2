export default function ProjectCard() {
  return (
    <>
      <h3>projects.</h3>

      <div className="projects-container">
        <div className="project-info">
          <h4>quizzical</h4>
          <div className="project-links">
            <a href="https://github.com/shantel1111/quizzical">
              <i class="fa-solid fa-code"></i>
            </a>

            <a href="https://quizzical-0d8a04.netlify.app/">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <span className="project-skill">HTML, CSS, JS, REACT</span>
        <p className="project-description">
          A dynamic trivia app built with React that fetches real-time data from
          external APIs. Focuses on complex state management and conditional
          rendering to create a seamless, interactive quiz flow.
        </p>
      </div>

      <div className="projects-container">
        <div className="project-info">
          <h4>movie watchlist</h4>
          <div className="project-links">
            <a href="https://github.com/shantel1111/movie-watchlist">
              <i class="fa-solid fa-code"></i>
            </a>

            <a href="https://moviewatchlist-5bc64a.netlify.app/">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <span className="project-skill">HTML, CSS, JS</span>
        <p className="project-description">
          A personalized film discovery tool using the OMDb API. Implements
          asynchronous logic and localStorage to allow users to search, view
          details, and persist a curated favorites list.
        </p>
      </div>

      <div className="projects-container">
        <div className="project-info">
          <h4>pswrd</h4>
          <div className="project-links">
            <a href="https://github.com/shantel1111/password-generator">
              <i class="fa-solid fa-code"></i>
            </a>

            <a href="https://passwordgenerator-73787e.netlify.app/">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <span className="project-skill">HTML, CSS, JS</span>
        <p className="project-description">
          A security-focused utility emphasizing logic-driven UI. Features
          customizable character sets and dynamic length validation, showcasing
          clean JavaScript logic and responsive, user-centric design.
        </p>
      </div>
    </>
  );
}
