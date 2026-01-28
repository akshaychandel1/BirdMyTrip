import "./ToursAttractions.css";
import { toursData } from "../data/toursData";

export default function ToursAttractions() {
  return (
    <div className="tours-wrapper">
      <div className="special-container">
        {toursData.map((section, index) => (
          <div className="tour-section" key={index}>
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>

            <div className="tour-grid">
              {section.items.map((item, i) => (
                <div className="tour-card" key={i}>
                  <img src={item.image} alt={item.name} />
                  <div className="tour-overlay">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
