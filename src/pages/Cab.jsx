import React from "react";
import { useNavigate } from "react-router-dom";
import cabs from "../data/cabData";
import "./Cab.css";

export default function Cab() {
  const navigate = useNavigate();

  return (
    <div className="cab-page">
      <h2>Available Cabs</h2>

      <div className="cab-grid">
        {cabs.map((cab) => (
          <div className="cab-card" key={cab.id}>
            <img src={cab.image} alt={cab.name} />

            <h3>{cab.name}</h3>
            <p>{cab.from} → {cab.to}</p>
            <p>Type: {cab.type}</p>

            <p className="price">₹{cab.price}</p>

            <button onClick={() => navigate(`/cab/${cab.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
