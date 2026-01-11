// export default function Cab() {
//   return (
//     <>
//       <h2>Cab Booking</h2>

//       <input placeholder="Pickup Location" />
//       <input placeholder="Drop Location" />
//       <button>Search Cab</button>
//     </>
//   );
// }


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
 

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import cabs from "../data/cabData";
// import "./Cab.css";

// export default function Cab() {
//   const navigate = useNavigate();

//   return (
//     <div className="cab-page">
//       <h2>Available Cabs</h2>

//       <div className="cab-grid">
//         {cabs.map((cab) => (
//           <div className="cab-card" key={cab.id}>
//             <img src={cab.image} alt={cab.name} />

//             <h3>{cab.name}</h3>
//             <p>
//               {cab.from} → {cab.to}
//             </p>
//             <p>{cab.type}</p>

//             <p className="price">₹{cab.price}</p>

//             <button onClick={() => navigate(`/cab/${cab.id}`)}>
//               View & Book
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
