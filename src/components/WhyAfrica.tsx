import { whyAfrica } from "../data";
import "../styles/Sections.css";

export default function WhyAfrica() {
  return (
    <section className="why">
      <div className="why__inner">
        <p className="section-label">Pourquoi maintenant ?</p>
        <div className="divider" style={{ margin: "16px auto 40px" }} />

        <h2 className="why__title">
          L'Afrique nourrit le monde.<br />
          <em>Vous pouvez en être acteur.</em>
        </h2>

        <div className="why__grid">
          {whyAfrica.map((item, i) => (
            <div key={i} className="why-card">
              <div className="why-card__icon">{item.icon}</div>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
