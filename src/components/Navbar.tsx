import "../styles/Navbar.css";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="#" className="navbar__logo">
        <span>M. Apélété &nbsp;</span>A.
      </a>
      <div className="navbar__links hide-mobile">
        {/* <a href="#formation" className="navbar__link">La Formation</a>
        <a href="#programme" className="navbar__link">Programme</a>
        <a href="#tickets" className="navbar__link">Tickets</a> */}
        <a
          href="https://dcaqaymu.mychariow.shop/prd_ae2gfq" target="_blank"
          className="cta-btn navbar__cta"
        >
          Je m'inscris
        </a>
      </div>
    </nav>
  );
}
