import React from "react";
import { useNavigate } from "react-router-dom";
import buses from "../data/busData";
import "./Bus.css";

export default function Bus() {
  const navigate = useNavigate();

  return (
    <div className="bus-page">
      <h2>Available Buses</h2>

      <div className="bus-grid">
        {buses.map((bus) => (
          <div className="bus-card" key={bus.id}>
            <img src={bus.image} alt={bus.operator} />

            <h3>{bus.operator}</h3>
            <p>{bus.from} → {bus.to}</p>
            <p>{bus.time}</p>
            <p>{bus.type}</p>

            <p className="price">₹{bus.price}</p>

            <button onClick={() => navigate(`/bus/${bus.id}`)}>
              View & Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
