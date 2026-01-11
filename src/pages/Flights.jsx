// // // export default function Flights() {
// // //   return (
// // //     <>
// // //       <h2>Flight Booking</h2>

// // //       <input placeholder="From" />
// // //       <input placeholder="To" />
// // //       <input type="date" />
// // //       <button>Search Flights</button>
// // //     </>
// // //   );
// // // }


// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import flights from "../data/flightsData";
// // import "./Flights.css";

// // export default function Flights() {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="flights-page">
// //       <h2>Available Flights</h2>

// //       {flights.map((flight) => (
// //         <div className="flight-card" key={flight.id}>
// //           <h3>{flight.airline}</h3>
// //           <p>{flight.from} → {flight.to}</p>
// //           <p>{flight.time}</p>
// //           <p>{flight.type}</p>
// //           <h4>₹{flight.price}</h4>

// //           <button onClick={() => navigate(`/flight/${flight.id}`)}>
// //             View & Book
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import flights from "../data/flightsData";
// import "./Flights.css";

// export default function Flights() {
//   const navigate = useNavigate();

//   return (
//     <div className="flights-page">
//       <h2>Available Flights</h2>

//       {flights.map((flight) => (
//         <div className="flight-card" key={flight.id}>
          
//           {/* ✈️ FLIGHT IMAGE */}
//           <img
//             src={flight.image}
//             alt={flight.airline}
//             className="flight-img"
//           />

//           <h3>{flight.airline}</h3>
//           <p>{flight.from} → {flight.to}</p>
//           <p>{flight.time}</p>
//           <p>{flight.type}</p>
//           <h4>₹{flight.price}</h4>

//           <button onClick={() => navigate(`/flight/${flight.id}`)}>
//             View & Book
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import flights from "../data/flightsData";
// import "./Flights.css";

// export default function Flights() {
//   const navigate = useNavigate();

//   return (
//     <div className="flights-page">
//       <h2>Available Flights</h2>

//       <div className="flight-grid">
//         {flights.map((flight) => (
//           <div className="flight-card" key={flight.id}>
            
//             {/* IMAGE */}
//             <img
//               src={flight.image}
//               alt={flight.airline}
//               className="flight-img"
//             />

//             {/* CONTENT */}
//             <h3>{flight.airline}</h3>
//             <p className="route">
//               {flight.from} → {flight.to}
//             </p>
//             <p className="time">{flight.time}</p>
//             <p className="type">{flight.type}</p>

//             <p className="price">₹{flight.price}</p>

//             <button
//               className="book-btn"
//               onClick={() => navigate(`/flight/${flight.id}`)}
//             >
//               View & Book
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import flights from "../data/flightsData";
// import "./Flights.css";

// export default function Flights() {
//   const navigate = useNavigate();

//   return (
//     <div className="flights-page">
//       <h2>Available Flights</h2>

//       <div className="flight-grid">
//         {flights.map((flight) => (
//           <div className="flight-card" key={flight.id}>
            
//             {/* IMAGE */}
//             <img
//               src={flight.image}
//               alt={flight.airline}
//               className="flight-img"
//             />

//             {/* CONTENT */}
//             <h3>{flight.airline}</h3>

//             <p className="route">
//               {flight.from} → {flight.to}
//             </p>

//             <p className="time">{flight.time}</p>
//             <p className="type">{flight.type}</p>

//             <p className="price">₹{flight.price}</p>

//             <button
//               className="book-btn"
//               onClick={() => navigate(`/flight/${flight.id}`)}
//             >
//               View & Book
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import flights from "../data/flightsData";
import "./Flights.css";

export default function Flights() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // 🔹 optional filtering (basic)
  const filteredFlights = state
    ? flights.filter(
        (f) =>
          f.from.toLowerCase().includes(state.fromCity.split(" ")[0].toLowerCase()) &&
          f.to.toLowerCase().includes(state.toCity.split(" ")[0].toLowerCase())
      )
    : flights;

  return (
    <div className="flights-page">

      {/* ================= SEARCH SUMMARY (FROM HERO) ================= */}
      {state && (
        <div className="search-summary">
          <div>
            <strong>{state.fromCity}</strong> → <strong>{state.toCity}</strong>
          </div>

          <div>
            Date: {state.departureDate}
          </div>

          <div>
            Fare: {state.selectedFare}
          </div>

          <div>
            Est. Price: ₹{state.finalPrice}
          </div>
        </div>
      )}

      <h2>Available Flights</h2>

      {/* ================= FLIGHT LIST ================= */}
      <div className="flight-grid">
        {filteredFlights.map((flight) => (
          <div className="flight-card" key={flight.id}>

            {/* IMAGE */}
            <img
              src={flight.image}
              alt={flight.airline}
              className="flight-img"
            />

            {/* CONTENT */}
            <h3>{flight.airline}</h3>

            <p className="route">
              {flight.from} → {flight.to}
            </p>

            <p className="time">{flight.time}</p>
            <p className="type">{flight.type}</p>

            <p className="price">₹{flight.price}</p>

            <button
              className="book-btn"
              onClick={() => navigate(`/flight/${flight.id}`)}
            >
              View & Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
