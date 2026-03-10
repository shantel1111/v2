import "./styles/Bento.css";
import logo from "./assets/logo.png";

export default function Bento() {
  return (
    <main className="grid-container">
      <>
        <div className="grid-item bio-box" style={{ gridArea: "box-1" }}>
          <p>
            Hi, I’m <span className="bold-style">Shantel</span> — a
            <span className="bold-style"> Frontend Developer</span> who loves
            turning <span className="italic-style">technical logic</span> into
            vibrant, storytelling driven interfaces. I enjoy building
            <span className="bold-style"> ethical digital spaces</span> that
            connect people through{" "}
            <span className="bold-style">high-end design.</span>
          </p>
        </div>

        <div className="grid-item hook-box" style={{ gridArea: "box-2" }}>
          <h2 className="hook">
            I build intuitive, accessible web experiences that bridge the gap
            between complex logic and human-centered design.
          </h2>
        </div>

        <div className="grid-item logo-box" style={{ gridArea: "box-3" }}></div>

        <div className="grid-item tech-box" style={{ gridArea: "box-4" }}>
          <i
            className="fa-brands fa-html5 fa-2xl html-icon"
            aria-label="html icon"
          ></i>

          <i
            className="fa-brands fa-css fa-2xl css-icon"
            aria-label="css icon"
          ></i>

          <i
            className="fa-brands fa-js fa-2xl js-icon"
            aria-label="javascript icon"
          ></i>

          <i
            className="fa-brands fa-react fa-2xl react-icon"
            aria-label="react icon"
          ></i>

          <i
            class="fa-brands fa-git-alt fa-2xl git-icon"
            aria-label="git icon"
          ></i>
          <i
            class="fa-brands fa-figma fa-2xl figma-icon"
            aria-label="figma icon"
          ></i>
        </div>

        <div className="grid-item" style={{ gridArea: "box-5" }}>
          <h3>projects.</h3>
          <div className="projects-container">
            <div className="project-main">
              <div className="project-info">
                <h4>QUIZZICAL</h4>
                <p>HTML5, CSS3, JS, ReactJS</p>
              </div>

              <div className="project-btn">
                <a href="https://github.com/shantel1111/quizzical">
                  <i class="fa-solid fa-code"></i>
                </a>

                <a href="https://quizzical-0d8a04.netlify.app/">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="project-main">
              <div className="project-info">
                <h4>FILM FLOW</h4>
                <p>HTML5, CSS3, JS, ReactJS</p>
              </div>

              <div className="project-btn">
                <a href="https://github.com/shantel1111/movie-watchlist">
                  <i class="fa-solid fa-code"></i>
                </a>

                <a href="https://moviewatchlist-5bc64a.netlify.app/">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="project-main">
              <div className="project-info">
                <h4>MOTIVE</h4>
                <p>HTML5, CSS3, JS, ReactJS</p>
              </div>

              <div className="project-btn">
                <a href="https://github.com/shantel1111/quizzical">
                  <i class="fa-solid fa-code"></i>
                </a>

                <a href="https://quizzical-0d8a04.netlify.app/">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="project-main">
              <div className="project-info">
                <h4>PSWRD</h4>
                <p>HTML5, CSS3, JS</p>
              </div>

              <div className="project-btn">
                <a href="https://github.com/shantel1111/password-generator">
                  <i class="fa-solid fa-code"></i>
                </a>

                <a href="https://passwordgenerator-73787e.netlify.app/">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-item contact-box" style={{ gridArea: "box-6" }}>
          <h3>connect.</h3>
          <div className="contact-container">
            <img src={logo} />
            <div className="contact-links">
              <div>
                <p>feel free to contact me at: </p>
                <a href="mailto:artch.shantel@gmail.com">
                  artch.shantel@gmail.com
                </a>
              </div>

              <div>
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
              </div>
            </div>
          </div>
        </div>
      </>
    </main>
  );
}

//  <section className="logo-box">
//         <img src={logo} />
//       </section>

//       <section className="tech-box">
//
//           <i
//             className="fa-brands fa-html5 fa-xl html-icon"
//             aria-label="html icon"
//           ></i>
//
//
//           <i
//             className="fa-brands fa-css fa-xl css-icon"
//             aria-label="css icon"
//           ></i>
//
//           <i
//             className="fa-brands fa-js fa-xl js-icon"
//             aria-label="javascript icon"
//           ></i>
//
//           <i
//             className="fa-brands fa-react fa-xl react-icon"
//             aria-label="react icon"
//           ></i>
//
//       </section>

//       <section className="hook-box">
//         <h2 className="hook">
//           I build intuitive, accessible web experiences that bridge the gap
//           between complex logic and human-centered design.
//         </h2>
//       </section>

//       <section className="contact-box">
//         <h3>connect with me at:</h3>
//         <a href="mailto:artch.shantel@gmail.com">artch.shantel@gmail.com</a>
//         <a
//           className="icon"
//           href="https://www.linkedin.com/in/shantel-artch-415106208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
//         >
//           <i
//             className="fa-brands fa-linkedin-in fa-xl contact-icon"
//             aria-label="linkedin icon"
//           ></i>
//         </a>

//         <a href="https://github.com/shantel1111">
//           <i
//             className="fa-brands fa-github fa-xl contact-icon"
//             aria-label="github icon"
//           ></i>
//         </a>
//       </section>
