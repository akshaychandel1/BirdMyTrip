// // export default function Train() {
// //   return (
// //     <>
// //       <h2>Train Booking</h2>

// //       <input placeholder="From Station" />
// //       <input placeholder="To Station" />
// //       <input type="date" />
// //       <button>Search Train</button>
// //     </>
// //   );
// // }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import trains from "../data/trainData";
// import "./Train.css";

// export default function Train() {
//   const navigate = useNavigate();

//   return (
//     <div className="train-page">
//       <h2>Available Trains</h2>

//       <div className="train-grid">
//         {trains.map((train) => (
//           <div className="train-card" key={train.id}>
//             <img src={train.image} alt={train.name} />

//             <h3>{train.name}</h3>
//             <p>{train.from} → {train.to}</p>
//             <p>{train.time}</p>
//             <p>{train.type}</p>

//             <div className="price">₹{train.price}</div>

//             <button onClick={() => navigate(`/train/${train.id}`)}>
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
// import trains from "../data/trainData";
// import "./Train.css";

// export default function Train() {
//   const navigate = useNavigate();

//   return (
//     <div className="train-page">
//       <h2>Available Trains</h2>

//       <div className="train-grid">
//         {trains.map((train) => (
//           <div className="train-card" key={train.id}>
//             <img src={train.image} alt={train.name} />

//             <h3>{train.name}</h3>
//             <p>
//               {train.from} → {train.to}
//             </p>
//             <p>{train.time}</p>
//             <p>{train.type}</p>

//             <div className="price">₹{train.price}</div>

//             <button onClick={() => navigate(`/train/${train.id}`)}>
//               View & Book
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import trains from "../data/trainData";
import "./Train.css";

export default function Train() {
  const navigate = useNavigate();

  return (
    <div className="train-page">
      <h2>Available Trains</h2>

      <div className="train-grid">
        {trains.map((train) => (
          <div className="train-card" key={train.id}>
            <img src={train.image} alt={train.name} />

            <h3>{train.name}</h3>

            <p>
              {train.from} → {train.to}
            </p>

            <p>{train.time}</p>
            <p>{train.type}</p>

            <p className="price">₹{train.price}</p>

            <button onClick={() => navigate(`/train/${train.id}`)}>
              View & Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
