import "./Main.css"

function Main() {
  return (
    <main className="main-main">
      <div className="side-card">
        <img
          src="images/profile.jpg"
          alt="DevMizeKR"
          className="side-image-profile"
        />
        <h1 className="side-text-profile">Mize</h1>
        <p className="side-text-description">Game Developer @ KR</p>
        <div className="side-link">
          <a href="https://www.instagram.com/hwang_c_k_/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/logo_instagram.svg" alt="Instagram" className="side-image-link" />
          </a>
          <a href="https://www.linkedin.com/in/%EC%B0%AC%EA%B8%B0-%ED%99%A9-6a75062ba/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/logo_linkedin.svg" alt="LinkedIn" className="side-image-link" />
          </a>
          <a href="https://github.com/DevMizeKR" target="_blank" rel="noopener noreferrer">
            <img src="/icons/logo_github.svg" alt="GitHub" className="side-image-link" />
          </a>
          <a href="mailto:hwangck0827@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/logo_gmail.svg" alt="Gmail" className="side-image-link" />
          </a>
        </div>
      </div>
      <div className="content-grid">
        <section className="content-card main-work">
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
        <section className="content-card skill-tools">
          <h2>Skill & Tools</h2>
        </section>
        <section className="content-card projects">
          <h2>Projects</h2>
        </section>
        <section className="content-card experiences">
          <h2>Experiences</h2>
        </section>
      </div>
    </main>
  );
}

export default Main;