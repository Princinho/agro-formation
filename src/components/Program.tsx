import { useState } from "react";
import { program } from "../data";
import "../styles/Sections.css";

export default function Program() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section id="programme" className="program">
      <div className="program__inner">
        <p className="section-label">Programme</p>
        <div className="divider" style={{ margin: "16px 0 40px" }} />
        <h2 className="program__title">Ce que vous apprendrez</h2>

        {program.map((item, i) => (
          <div key={i} className="program-item" onClick={() => toggle(i)}>
            <div className="program-item__header">
              <span className="program-item__icon">{item.icon}</span>
              <div className="program-item__body">
                <div className={`program-item__title-row ${activeIndex === i ? "program-item__title-row--open" : ""}`}>
                  <h3 className="program-item__title">
                    <span className="program-item__number">0{i + 1}</span>
                    {item.title}
                  </h3>
                  <span className={`program-item__toggle ${activeIndex === i ? "program-item__toggle--open" : ""}`}>
                    +
                  </span>
                </div>
                {activeIndex === i && (
                  <p className="program-item__desc">{item.desc}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
