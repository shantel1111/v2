import logo from "../assets/logo.png";

export default function ContactCard() {
  return (
    <>
      <h3>connect.</h3>
      <div className="contact-container">
        <img src={logo} />
        <div className="contact-links">
          <div>
            <p>feel free to contact me at: </p>
            <a href="mailto:artch.shantel@gmail.com">artch.shantel@gmail.com</a>
          </div>

          <div className="contact-icons">
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
    </>
  );
}
