import "./HolidayResults.css";

export default function HolidayResults({ packages }) {
  if (packages.length === 0) {
    return <p style={{ textAlign: "center" }}>No packages found 😔</p>;
  }

  return (
    <div className="holiday-results">
      {packages.map((pkg) => (
        <div className="holiday-card" key={pkg.id}>
          <img src={pkg.image} alt={pkg.title} />
          <h3>{pkg.title}</h3>
          <p>{pkg.duration}</p>
          <p>₹{pkg.budget}</p>
        </div>
      ))}
    </div>
  );
}
