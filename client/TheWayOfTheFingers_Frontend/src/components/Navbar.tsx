interface NavbarTheme {
  bgColor: string;
  textColor: string;
  textFont: string;
  logoFont: string
}

function Navbar({ bgColor, textColor, textFont, logoFont }: NavbarTheme) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${bgColor}`}>
        <a
          className={`navbar-brand ${textColor}`}
          href="#"
          style={{ fontFamily: logoFont }} 
        >
          The Way of the Fingers
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className={`nav-link ${textColor}`}
                href="#"
                style={{ fontFamily: textFont }}
              >
                Test
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${textColor}`}
                href="#"
                style={{ fontFamily: textFont }}
              >
                Leaderboards
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${textColor}`}
                href="#"
                style={{ fontFamily: textFont }}
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
