import { testimonials } from "../data";
import "../styles/Components.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <p className="section-label" style={{ textAlign: "center" }}>Ils l'ont fait</p>
        <div className="divider" style={{ margin: "16px auto 40px" }} />
        <h2 className="testimonials__title">
          La communauté <em>témoigne</em>
        </h2>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.avatar}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
