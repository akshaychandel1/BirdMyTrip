// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import flights from "../data/flightsData";
// import "./FlightDetails.css";

// export default function FlightDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const flight = flights.find((f) => f.id === Number(id));
//   if (!flight) return <h2>Flight not found</h2>;

//   return (
//     <div className="flight-details">

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Back
//       </button>

//       <h2>{flight.airline}</h2>
//       <p>{flight.from} → {flight.to}</p>
//       <p>{flight.time}</p>
//       <p>{flight.type}</p>
//       <h3>₹{flight.price}</h3>

//       <button
//         className="book-btn"
//         onClick={() => navigate(`/book-flight/${flight.id}`)}
//       >
//         Book Flight
//       </button>
//     </div>
//   );
// }



import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import flights from "../data/flightsData";
import "./FlightDetails.css";

export default function FlightDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const flight = flights.find((f) => f.id === Number(id));
  if (!flight) return <h2>Flight not found</h2>;

  return (
    <div className="flight-details">

      {/* 🔙 BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* ✈️ FLIGHT IMAGE */}
      <img
        src={flight.image}
        alt={flight.airline}
        className="flight-detail-img"
      />

      <h2>{flight.airline}</h2>
      <p>{flight.from} → {flight.to}</p>
      <p>{flight.time}</p>
      <p>{flight.type}</p>
      <h3>₹{flight.price}</h3>

      <button
        className="book-btn"
        onClick={() => navigate(`/book-flight/${flight.id}`)}
      >
        Book Flight
      </button>
    </div>
  );
}
