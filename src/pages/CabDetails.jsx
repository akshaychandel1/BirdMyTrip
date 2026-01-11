import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import cabs from "../data/cabData";
import "./CabDetails.css";

export default function CabDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cab = cabs.find((c) => c.id.toString() === id);

  if (!cab) {
    return <h2 style={{ padding: 20 }}>Cab not found</h2>;
  }

  return (
    <div className="cab-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="cab-details-card">
        <img src={cab.image} alt={cab.name} className="cab-details-img" />

        <div className="cab-details-info">
          <h2>{cab.name}</h2>

          <p className="route">
            {cab.from} → {cab.to}
          </p>

          <p className="type">Type: {cab.type}</p>

          <p className="price">₹{cab.price}</p>

          <button className="book-now-btn">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
