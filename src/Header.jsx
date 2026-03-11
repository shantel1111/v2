import "./styles/Header.css";
import myresume from "./assets/resume/ARTCH_SHANTEL.pdf";

export default function Header() {
  return (
    <header>
      <div>
        <i class="fa-solid fa-moon toggle-theme"></i>
        <a href={myresume} aria-label="download resume" download>
          <i class="fa-solid fa-file" nj></i>
        </a>
      </div>
      <div>
        <h1>shantel artch.</h1>
      </div>
    </header>
  );
}
