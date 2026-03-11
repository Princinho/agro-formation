import "../styles/Sections.css";

export default function About() {
  return (
    <section id="formation" className="about">
      <div className="about__grid">
        <div>
          <p className="section-label">Votre formateur</p>
          <div className="divider" style={{ margin: "16px 0 40px" }} />

          <h2 className="about__title">
            Apelete A.<br />
            <em>Fermier, mentor,<br />entrepreneur.</em>
          </h2>

          <p className="about__text">
            Apelete A. n'enseigne pas depuis un manuel. Il vit chaque jour ce qu'il transmet :
            à la tête de sa propre ferme, il a bâti un modèle agro-business rentable et reproductible.
          </p>

          <p className="about__text">
            Depuis des années, il accompagne des membres de la diaspora africaine à créer et développer
            leurs projets agricoles en Afrique — à distance, avec méthode, et avec des résultats concrets.
            Sur TikTok, sa communauté de <strong>+500 000 abonnés</strong> témoigne de l'impact
            de son approche pédagogique unique.
          </p>

          <a
            href="https://tiktok.com/@apelete_a"
            target="_blank"
            rel="noreferrer"
            className="cta-btn cta-btn--outline"
          >
            Voir son contenu TikTok →
          </a>
        </div>

        <div className="about__photo-wrapper">
          <div className="about__photo-placeholder">
            <span className="about__photo-icon">👨🏾‍🌾</span>
            <p className="about__photo-caption">Votre photo ici</p>
            <div className="about__photo-corner about__photo-corner--tr" />
            <div className="about__photo-corner about__photo-corner--bl" />
          </div>

          <div className="about__badge">
            <div className="about__badge-value">500K+</div>
            <div className="about__badge-label">abonnés TikTok</div>
          </div>
        </div>
      </div>
    </section>
  );
}
