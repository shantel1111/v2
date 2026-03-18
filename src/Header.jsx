import "./styles/Header.css";
import myresume from "./assets/resume/ARTCH_SHANTEL.pdf";

export default function Header() {
  return (
    <header>
      <div className="resume">
        {/* <i className="fa-solid fa-moon toggle-theme"></i> */}
        <p className="">more about me... </p>
        <a href={myresume} aria-label="download resume" download>
          <i className="fa-solid fa-file" nj></i>
        </a>
      </div>
      <div>
        <h1>shantel artch.</h1>
      </div>
    </header>
  );
}
