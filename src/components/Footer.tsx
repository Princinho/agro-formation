import { faqs } from "../data";
import "../styles/Components.css";

export function Faq() {
  return (
    <section className="faq">
      <div className="faq__inner">
        <h2 className="faq__title">Questions fréquentes</h2>
        {faqs.map((item, i) => (
          <div key={i} className="faq-item">
            <h3 className="faq-item__question">
              <span className="faq-item__arrow">→</span>
              {item.q}
            </h3>
            <p className="faq-item__answer">{item.r}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="cta-final__ring cta-final__ring--large" />
      <div className="cta-final__ring cta-final__ring--small" />

      <div className="cta-final__content">
        <p className="section-label" style={{ marginBottom: "24px" }}>Paris · Avril 2025</p>
        <h2 className="cta-final__title">
          Votre prochain chapitre<br />
          <em>commence ici.</em>
        </h2>
        <p className="cta-final__subtitle">
          Les places sont limitées. Ne laissez pas passer cette opportunité.
        </p>
        <a href="#tickets" className="cta-btn cta-final__btn">
          Réserver ma place maintenant
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <span>A.</span>A Formation · Agro Business
      </div>
      <div className="footer__links">
        <a
          href="https://tiktok.com/@apelete_a"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          TikTok @apelete_a
        </a>
        <a href="#tickets" className="footer__link">Inscription</a>
      </div>
      <p className="footer__copy">© 2025 Apelete A. · Paris</p>
    </footer>
  );
}
