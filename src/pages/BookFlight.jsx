// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import flights from "../data/flightsData";
// import "./BookFlight.css";

// export default function BookFlight() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const flight = flights.find((f) => f.id === Number(id));
//   if (!flight) return <h2>Flight not found</h2>;

//   return (
//     <div className="book-flight">

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Back
//       </button>

//       <h2>Flight Booking Confirmation</h2>
//       <h3>{flight.airline}</h3>
//       <p>{flight.from} → {flight.to}</p>
//       <p>{flight.time}</p>
//       <p>Price: ₹{flight.price}</p>

//       <button className="confirm-btn">
//         Confirm Booking
//       </button>
//     </div>
//   );
// }

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import flights from "../data/flightsData";
// import "./BookFlight.css";



// export default function BookFlight() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const flight = flights.find((f) => f.id === Number(id));
//   if (!flight) return <h2>Flight not found</h2>;

//   return (
//     <div className="book-flight">

//       {/* BACK BUTTON */}
//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Back
//       </button>

//       <h2>Flight Booking Confirmation</h2>
//       <h3>{flight.airline}</h3>
//       <p>{flight.from} → {flight.to}</p>
//       <p>{flight.time}</p>
//       <p>Price: ₹{flight.price}</p>

//       {/* CONFIRM BUTTON */}
//       <button className="confirm-btn">
//         Confirm Booking
//       </button>
//     </div>
//   );
// }



import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import flights from "../data/flightsData";
import SearchTabs from "../components/SearchTabs";
import ExploreMoreBar from "../components/ExploreMoreBar";
import "./BookFlight.css";

export default function BookFlight() {
  const { id } = useParams();
  const navigate = useNavigate();

  const flight = flights.find((f) => f.id === Number(id));

  if (!flight) return <h2>Flight not found</h2>;

  return (
    <>
      {/* 🔍 SEARCH SECTION */}
      <SearchTabs />

      {/* ✅ WHERE2GO STRIP (SEARCH KE NICHE) */}
      <ExploreMoreBar />

      {/* 📦 BOOKING DETAILS */}
      <div className="book-flight">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h2>Flight Booking Confirmation</h2>
        <h3>{flight.airline}</h3>
        <p>{flight.from} → {flight.to}</p>
        <p>{flight.time}</p>
        <p>Price: ₹{flight.price}</p>

        <button className="confirm-btn">
          Confirm Booking
        </button>
      </div>
    </>
  );
}
