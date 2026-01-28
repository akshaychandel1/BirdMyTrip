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





// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Hotels.css";

// export default function Hotels() {
//   const navigate = useNavigate();
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const res = await fetch(
//           "https://bmt-aw7b.onrender.com/api/hotels"
//         );

//         if (!res.ok) {
//           throw new Error("Failed to fetch hotels");
//         }

//         const data = await res.json();
//         setHotels(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHotels();
//   }, []);

//   if (loading) {
//     return <h2 style={{ textAlign: "center" }}>Loading hotels...</h2>;
//   }

//   if (error) {
//     return (
//       <h2 style={{ textAlign: "center", color: "red" }}>
//         {error}
//       </h2>
//     );
//   }

//   return (
//     <div className="hotels-page">
//       <h2>Available Hotels</h2>

//       <div className="hotel-grid">
//         {hotels.map((hotel) => (
//           <div className="hotel-card" key={hotel._id || hotel.id}>
//             <img
//               src={hotel.image}
//               alt={hotel.name}
//             />

//             <h3>{hotel.name}</h3>
//             <p>{hotel.city}</p>
//             <p>⭐ {hotel.rating}</p>
//             <p className="price">₹{hotel.price} / night</p>

//             <button
//               onClick={() => navigate(`/hotel/${hotel._id || hotel.id}`)}
//             >
//               View & Book
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Hotels.css";

// // export default function Hotels() {
// //   const navigate = useNavigate();

// //   const [hotels, setHotels] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const controller = new AbortController();

// //     const fetchHotels = async () => {
// //       try {
// //         const timeoutId = setTimeout(() => {
// //           controller.abort(); // ⛔ stop hanging request
// //         }, 15000); // 15 sec timeout

// //         const res = await fetch(
// //           "https://crafto-backend-zqcn.onrender.com/api/hotels",
// //           { signal: controller.signal }
// //         );

// //         clearTimeout(timeoutId);

// //         const result = await res.json();
// //         console.log("API RESULT 👉", result);

// //         if (Array.isArray(result)) {
// //           setHotels(result);
// //         } else if (Array.isArray(result.data)) {
// //           setHotels(result.data);
// //         } else if (Array.isArray(result.hotels)) {
// //           setHotels(result.hotels);
// //         } else {
// //           setHotels([]);
// //         }
// //       } catch (err) {
// //         console.error("Fetch Error:", err);
// //         setError("Backend not responding (Render sleep)");
// //       } finally {
// //         setLoading(false); // 🔥 NOW ALWAYS STOPS
// //       }
// //     };

// //     fetchHotels();

// //     return () => controller.abort();
// //   }, []);

// //   if (loading) {
// //     return <h2 style={{ textAlign: "center" }}>Loading hotels…</h2>;
// //   }

// //   if (error) {
// //     return (
// //       <h2 style={{ textAlign: "center", color: "red" }}>
// //         {error}
// //       </h2>
// //     );
// //   }

// //   return (
// //     <div className="hotels-page">
// //       <h2>Available Hotels</h2>

// //       <div className="hotel-grid">
// //         {hotels.map((hotel) => (
// //           <div className="hotel-card" key={hotel._id}>
// //             <img src={hotel.image} alt={hotel.name} />
// //             <h3>{hotel.name}</h3>
// //             <p>{hotel.city}</p>
// //             <p>⭐ {hotel.rating}</p>
// //             <p className="price">₹{hotel.price} / night</p>
// //             <button onClick={() => navigate(`/hotel/${hotel._id}`)}>
// //               View & Book
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }       
