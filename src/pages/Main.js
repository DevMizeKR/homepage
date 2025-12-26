import "./Main.css"

function Main() {
  return (
    <body className="">
      <aside className="side-card">
        <img
          src="images/profile.jpg"
          alt="DevMizeKR"
          className="side-image-profile"
        />
        <h1 className="side-text-profile">Mize</h1>
        <p className="">Game Developer @ KR</p>
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
      </aside>
    </body>
  );
}

export default Main;