// export default function Hotels() {
//   return (
//     <>
//       <h2>Hotel Booking</h2>

//       <input placeholder="City" />
//       <input type="date" />
//       <input type="date" />
//       <button>Search Hotels</button>
//     </>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import hotels from "../data/hotelsData";
// import "./Hotels.css";

// export default function Hotels() {
//   const navigate = useNavigate();
 
// }


//   return (
//     <div className="hotels-page">
//       <h2>Available Hotels</h2>

//       <div className="hotel-grid">
//         {hotels.map((hotel) => (
//           <div className="hotel-card" key={hotel.id}>
//             <img src={hotel.image} alt={hotel.name} />
//             <h3>{hotel.name}</h3>
//             <p>{hotel.city}</p>
//             <p>⭐ {hotel.rating}</p>
//             <p className="price">₹{hotel.price} / night</p>

//             <button
//               onClick={() => navigate(`/hotel/${hotel.id}`)}
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
import { useNavigate } from "react-router-dom";
import hotels from "../data/hotelsData";
import "./Hotels.css";

export default function Hotels() {
  const navigate = useNavigate();

  return (
    <div className="hotels-page">
      <h2>Available Hotels</h2>

      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />

            <h3>{hotel.name}</h3>
            <p>{hotel.city}</p>
            <p>⭐ {hotel.rating}</p>
            <p className="price">₹{hotel.price} / night</p>

            <button onClick={() => navigate(`/hotel/${hotel.id}`)}>
              View & Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

