import "./styles/Bento.css";
import logo from "./assets/logo.png";

export default function Bento() {
  return (
    <main>
      <section className="logo-box">
        <img src={logo} />
      </section>

      <section className="tech-box">
        <i
          className="fa-brands fa-html5 fa-xl html-icon"
          aria-label="html icon"
        ></i>
        <i
          className="fa-brands fa-css fa-xl css-icon"
          aria-label="css icon"
        ></i>
        <i
          className="fa-brands fa-js fa-xl js-icon"
          aria-label="javascript icon"
        ></i>
        <i
          className="fa-brands fa-react fa-xl react-icon"
          aria-label="react icon"
        ></i>
      </section>

      <section className="hook-box">
        <h2 className="hook">
          I build intuitive, accessible web experiences that bridge the gap
          between complex logic and human-centered design.
        </h2>
      </section>

      <section className="contact-box">
        <h3>connect with me at:</h3>
        <a href="mailto:artch.shantel@gmail.com">artch.shantel@gmail.com</a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/shantel-artch-415106208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        >
          <i
            className="fa-brands fa-linkedin-in fa-xl contact-icon"
            aria-label="linkedin icon"
          ></i>
        </a>

        <a href="https://github.com/shantel1111">
          <i
            className="fa-brands fa-github fa-xl contact-icon"
            aria-label="github icon"
          ></i>
        </a>
      </section>
    </main>
  );
}
