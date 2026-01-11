import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import trains from "../data/trainData";
import "./BookTrain.css";

export default function BookTrain() {
  const { id } = useParams();
  const navigate = useNavigate();

  const train = trains.find((t) => t.id === Number(id));
  if (!train) return <h2>Train not found</h2>;

  return (
    <div className="book-train">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>Train Booking Confirmation</h2>
      <h3>{train.name}</h3>
      <p>{train.from} → {train.to}</p>
      <p>{train.time}</p>
      <p>{train.type}</p>

      <h3>₹{train.price}</h3>

      <button className="confirm-btn">Confirm Booking</button>
    </div>
  );
}
