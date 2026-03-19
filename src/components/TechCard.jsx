import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiGit } from "react-icons/di";
import { SiTailwindcss, SiFigma, SiTypescript } from "react-icons/si";

export default function TechCard() {
  return (
    <div>
      <div className="tech-stack1">
        <DiHtml5 className="html-icon icon-size " />
        <DiCss3 className="css-icon icon-size" />
        <DiJavascript1 className="js-icon icon-size" />
        <SiTypescript className="typescript-icon icon-size" />
      </div>

      <div div className="tech-stack1">
        <DiReact className="react-icon icon-size" />
        <SiTailwindcss className="tailwind-icon icon-size" />
        <DiGit className="git-icon icon-size" />
        <SiFigma className="figma-icon icon-size" />
      </div>
    </div>
  );
}
