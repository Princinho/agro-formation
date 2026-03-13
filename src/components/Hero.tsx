import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background emojis */}
      <div className="hero__bg-emoji hero__bg-emoji--right">🌿</div>
      <div className="hero__bg-emoji hero__bg-emoji--left">🌾</div>

      {/* Decorative circles */}
      <div className="hero__circle hero__circle--large" />
      <div className="hero__circle hero__circle--small" />

      <div className="hero__content">
        <div className="hero__badge">
          {/* <img src={logo} alt="logo" /> */}
          <a
            href="https://tiktok.com/@apelete_a"
            target="_blank"
            rel="noopener noreferrer"
            className="tiktok-badge"
          >
            <span>▶</span> @apelete_a · 500K+ abonnés TikTok
          </a>
        </div>

        <p className="section-label hero__date">
          Paris · Mai 2025 · Date à confirmer
        </p>

        <h1 className="hero__title">
          L"AgroBusiness
          <br />
          <em>Rentable</em>
          <br />
          <em>au Togo.</em>
        </h1>

        <p className="hero__subtitle">
          En tant que diaspora africaine, vous avez une longueur d'avance
          unique.
          <br />
          Apelete A vous montre comment en faire une opportunité concrète et
          rentable.
        </p>

        <div className="hero__cta-group">
          <a
            href="https://dcaqaymu.mychariow.shop/prd_ae2gfq"
            target="_blank"
            className="cta-btn"
          >
            Réserver ma place
          </a>
          {/* <a href="#formation" className="cta-btn cta-btn--outline">
            Découvrir la formation
          </a> */}
        </div>
      </div>

      {/* <div className="hero__scroll-indicator">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div> */}
    </section>
  );
}
