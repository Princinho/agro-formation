import { tickets } from "../data";
import "../styles/Components.css";

export default function Tickets() {
  const handleClick = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section id="tickets" className="tickets">
      <div className="floating-leaf" style={{ top: "-5%", right: "-5%" }}>🌿</div>

      <div className="tickets__inner">
        <p className="section-label" style={{ textAlign: "center" }}>Réservation</p>
        <div className="divider" style={{ margin: "16px auto 40px" }} />
        <h2 className="tickets__title">Choisissez votre place</h2>
        <p className="tickets__subtitle">
          Paiement sécurisé via Chariow · Mobile Money & autres moyens disponibles
        </p>

        <div className="tickets__grid">
          {tickets.map((t, i) => (
            <div key={i} className={`ticket-card ${t.highlight ? "ticket-card--highlight" : ""}`}>
              {t.highlight && (
                <span className="ticket-card__badge">RECOMMANDÉ</span>
              )}
              <div className="ticket-card__icon">{t.icon}</div>
              <div className="ticket-card__type">{t.type}</div>
              <div className="ticket-card__price">
                {t.price}
                {t.price !== "À venir" && <span> XOF</span>}
              </div>

              <ul className="ticket-card__features">
                {t.features.map((f, j) => (
                  <li key={j} className="ticket-card__feature">
                    <span className="ticket-card__check">✓</span> {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleClick(t.url)}
                className={`cta-btn ticket-card__btn ${t.highlight ? "" : "cta-btn--outline"}`}
              >
                {t.price === "À venir" ? "Être notifié" : "Réserver maintenant"}
              </button>
            </div>
          ))}
        </div>

        <p className="tickets__note">
          🔒 Paiement sécurisé · Un reçu vous sera envoyé par email après confirmation
        </p>
      </div>
    </section>
  );
}
