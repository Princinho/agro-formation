import CountUp from "./CountUp";
import { stats } from "../data";
import "../styles/Sections.css";

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-card__value">
              <CountUp target={s.value} />
            </div>
            <div className="stat-card__label">{s.label}</div>
            <div className="stat-card__source">Source : {s.source}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
