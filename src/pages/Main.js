import "./Main.css"
import { useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Skills, Projects, Experiences } from "../components/ProfileData.js"
import skills from "../components/skills.json"
import projects from "../components/projects.json"
import experiences from "../components/experiences.json"

function Main() {
  const sideRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");

    if (mq.matches) {
      if (sideRef.current) {sideRef.current.style.transform = "none"; }
      return;
    }

    let currentY = 0;
    let targetY = 0;

    const onScroll = () => {
      targetY = window.scrollY;
    };

    const animate = () => {
      currentY += (targetY - currentY) * 0.08;
      if (sideRef.current) {
        sideRef.current.style.transform = `translateY(${currentY}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="main-main">
      <div className="side-card" ref={sideRef}>
        <img
          src="images/profile.jpg"
          alt="DevMizeKR"
          className="side-image-profile"
        />
        <h1 className="side-text-profile">Mize</h1>
        <p className="side-text-description">Game Developer @ KR</p>
        <div className="side-link">
          <a href="https://www.instagram.com/hwang_c_k_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/%EC%B0%AC%EA%B8%B0-%ED%99%A9-6a75062ba/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon-linkedin" />
          </a>
          <a href="https://github.com/DevMizeKR" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon-github" />
          </a>
          <a href="mailto:hwangck0827@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon-mail" />
          </a>
        </div>
      </div>
      <div className="content-grid">
        <section className="content-card content-main-work">
          <h2>Main Work</h2>
          <div className="content-block">
            <h4>
              <span className="emoji">🎮</span>
              <span className="">Game Developer</span>
            </h4>
            <p>Designing & Developing Games with Various Tools</p>
          </div>
          <div className="content-block">
            <h4>
              <span className="emoji">📱</span>
              <span className="">App Developer</span>
            </h4>
            <p>Developing Mobile Apps, Especially on iOS</p>
          </div>
          <div className="content-block">
            <h4>
              <span className="emoji">🛠️</span>
              <span className="">Glitch Finder</span>
            </h4>
            <p>Finding & Utilizing Glitches, Especially in Classic Games</p>
          </div>
        </section>
        <section className="content-card content-skill-tools">
          <h2>Skill & Tools</h2>
          <div className="grid-icon grid-skill">
            {skills.map((skill) => (
              <Skills
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
              />
            ))}            
          </div>
        </section>
        <section className="content-card content-projects">
          <h2>Projects</h2>
          <div className="grid-icon grid-project">
            {projects.map((project) => (
              <Projects
                key={project.name}
                icon={project.icon}
                name={project.name}
                url={project.url}
              />
            ))}            
          </div>
        </section>
        <section className="content-card content-experiences">
          <h2>Experiences</h2>
          <div className="grid-experience">
            {experiences.map((experience) => (
              <Experiences
                key={experience.name}
                name={experience.name}
                subtitle={experience.subtitle}
                dateStart={experience.dateStart}
                dateEnd={experience.dateEnd}
                description={experience.description}
                url={experience.url}
                isEnd={experience.isEnd}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;