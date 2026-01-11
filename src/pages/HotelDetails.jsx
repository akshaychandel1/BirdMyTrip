// // // // // // // // // import React from "react";
// // // // // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // // // // import hotels from "../data/hotelsData";
// // // // // // // // // import "./HotelDetails.css";

// // // // // // // // // export default function HotelDetails() {
// // // // // // // // //   const { id } = useParams();
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const hotel = hotels.find((h) => h.id === Number(id));

// // // // // // // // //   if (!hotel) return <h2>Hotel not found</h2>;

// // // // // // // // //   return (
// // // // // // // // //     <div className="hotel-details">
// // // // // // // // //       <img src={hotel.image} alt={hotel.name} />
// // // // // // // // //       <h2>{hotel.name}</h2>
// // // // // // // // //       <p>{hotel.city}</p>
// // // // // // // // //       <p>{hotel.description}</p>
// // // // // // // // //       <h3>₹{hotel.price} / night</h3>

// // // // // // // // //       <button
// // // // // // // // //         onClick={() => navigate(`/book-hotel/${hotel.id}`)}
// // // // // // // // //       >
// // // // // // // // //         Book Now
// // // // // // // // //       </button>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // import React from "react";
// // // // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // // // import hotels from "../data/hotelsData";
// // // // // // // // import "./HotelDetails.css";

// // // // // // // // export default function HotelDetails() {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const hotel = hotels.find((h) => h.id === Number(id));
// // // // // // // //   if (!hotel) return <h2>Hotel not found</h2>;

// // // // // // // //   return (
// // // // // // // //     <div className="hotel-details">

// // // // // // // //       {/* 🔙 BACK BUTTON */}
// // // // // // // //       <button
// // // // // // // //         className="back-btn"
// // // // // // // //         onClick={() => navigate(-1)}
// // // // // // // //       >
// // // // // // // //         ← Back
// // // // // // // //       </button>

// // // // // // // //       <img src={hotel.image} alt={hotel.name} />

// // // // // // // //       <h2>{hotel.name}</h2>
// // // // // // // //       <p>{hotel.city}</p>
// // // // // // // //       <p>{hotel.description}</p>

// // // // // // // //       <h3>₹{hotel.price} / night</h3>

// // // // // // // //       <button
// // // // // // // //         className="book-btn"
// // // // // // // //         onClick={() => navigate(`/book-hotel/${hotel.id}`)}
// // // // // // // //       >
// // // // // // // //         Book Now
// // // // // // // //       </button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }





// // // // // // // import React, { useState } from "react";
// // // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // // import hotels from "../data/hotelsData";
// // // // // // // import "./HotelDetails.css";

// // // // // // // export default function HotelDetails() {
// // // // // // //   const { id } = useParams();
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const hotel = hotels.find((h) => h.id === Number(id));
// // // // // // //   if (!hotel) return <h2>Hotel not found</h2>;

// // // // // // //   const [checkIn, setCheckIn] = useState("");
// // // // // // //   const [checkOut, setCheckOut] = useState("");
// // // // // // //   const [roomType, setRoomType] = useState("Standard");
// // // // // // //   const [ac, setAc] = useState("AC");
// // // // // // //   const [adults, setAdults] = useState(2);
// // // // // // //   const [children, setChildren] = useState(0);
// // // // // // //   const [breakfast, setBreakfast] = useState(false);
// // // // // // //   const [pickup, setPickup] = useState(false);

// // // // // // //   const nights =
// // // // // // //     checkIn && checkOut
// // // // // // //       ? Math.max(
// // // // // // //           1,
// // // // // // //           (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
// // // // // // //         )
// // // // // // //       : 1;

// // // // // // //   const extras =
// // // // // // //     (breakfast ? 500 : 0) +
// // // // // // //     (pickup ? 800 : 0);

// // // // // // //   const total = nights * hotel.price + extras;

// // // // // // //   return (
// // // // // // //     <div className="hotel-details">
// // // // // // //       <button className="back-btn" onClick={() => navigate(-1)}>
// // // // // // //         ← Back
// // // // // // //       </button>

// // // // // // //       <img src={hotel.image} alt={hotel.name} className="hotel-img" />

// // // // // // //       <h2>{hotel.name}</h2>
// // // // // // //       <p>{hotel.city}</p>
// // // // // // //       <p>{hotel.description}</p>

// // // // // // //       {/* BOOKING FORM */}
// // // // // // //       <div className="booking-box">
// // // // // // //         <h3>Book Your Stay</h3>

// // // // // // //         <div className="grid">
// // // // // // //           <div>
// // // // // // //             <label>Check-in</label>
// // // // // // //             <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
// // // // // // //           </div>

// // // // // // //           <div>
// // // // // // //             <label>Check-out</label>
// // // // // // //             <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
// // // // // // //           </div>

// // // // // // //           <div>
// // // // // // //             <label>Room Type</label>
// // // // // // //             <select onChange={(e) => setRoomType(e.target.value)}>
// // // // // // //               <option>Standard</option>
// // // // // // //               <option>Deluxe</option>
// // // // // // //               <option>Suite</option>
// // // // // // //             </select>
// // // // // // //           </div>

// // // // // // //           <div>
// // // // // // //             <label>AC / Non-AC</label>
// // // // // // //             <select onChange={(e) => setAc(e.target.value)}>
// // // // // // //               <option>AC</option>
// // // // // // //               <option>Non-AC</option>
// // // // // // //             </select>
// // // // // // //           </div>

// // // // // // //           <div>
// // // // // // //             <label>Adults</label>
// // // // // // //             <input
// // // // // // //               type="number"
// // // // // // //               min="1"
// // // // // // //               value={adults}
// // // // // // //               onChange={(e) => setAdults(e.target.value)}
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div>
// // // // // // //             <label>Children</label>
// // // // // // //             <input
// // // // // // //               type="number"
// // // // // // //               min="0"
// // // // // // //               value={children}
// // // // // // //               onChange={(e) => setChildren(e.target.value)}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* EXTRAS */}
// // // // // // //         <div className="extras">
// // // // // // //           <label>
// // // // // // //             <input
// // // // // // //               type="checkbox"
// // // // // // //               onChange={() => setBreakfast(!breakfast)}
// // // // // // //             />
// // // // // // //             Breakfast Included (+₹500)
// // // // // // //           </label>

// // // // // // //           <label>
// // // // // // //             <input type="checkbox" onChange={() => setPickup(!pickup)} />
// // // // // // //             Airport Pickup (+₹800)
// // // // // // //           </label>
// // // // // // //         </div>

// // // // // // //         {/* SUMMARY */}
// // // // // // //         <div className="summary">
// // // // // // //           <p>Price per night: ₹{hotel.price}</p>
// // // // // // //           <p>Nights: {nights}</p>
// // // // // // //           <p>Extras: ₹{extras}</p>
// // // // // // //           <h3>Total: ₹{total}</h3>
// // // // // // //         </div>

// // // // // // //         <button
// // // // // // //           className="confirm-btn"
// // // // // // //           onClick={() => navigate(`/book-hotel/${hotel.id}`)}
// // // // // // //         >
// // // // // // //           Confirm Booking
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }




// // // // // // import React, { useState } from "react";
// // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // import hotels from "../data/hotelsData";
// // // // // // import "./HotelDetails.css";

// // // // // // export default function HotelDetails() {
// // // // // //   const { id } = useParams();
// // // // // //   const navigate = useNavigate();

// // // // // //   /* 🔥 ALL HOOKS AT TOP */
// // // // // //   const [checkIn, setCheckIn] = useState("");
// // // // // //   const [checkOut, setCheckOut] = useState("");
// // // // // //   const [roomType, setRoomType] = useState("Standard");
// // // // // //   const [acType, setAcType] = useState("AC");
// // // // // //   const [adults, setAdults] = useState(2);
// // // // // //   const [children, setChildren] = useState(0);
// // // // // //   const [breakfast, setBreakfast] = useState(false);
// // // // // //   const [pickup, setPickup] = useState(false);

// // // // // //   const hotel = hotels.find((h) => h.id === Number(id));

// // // // // //   /* ✅ CONDITIONAL RETURN AFTER HOOKS */
// // // // // //   if (!hotel) {
// // // // // //     return <h2 style={{ padding: 30 }}>Hotel not found</h2>;
// // // // // //   }

// // // // // //   const nights =
// // // // // //     checkIn && checkOut
// // // // // //       ? Math.max(
// // // // // //           1,
// // // // // //           (new Date(checkOut) - new Date(checkIn)) /
// // // // // //             (1000 * 60 * 60 * 24)
// // // // // //         )
// // // // // //       : 1;

// // // // // //   const extras = (breakfast ? 500 : 0) + (pickup ? 800 : 0);
// // // // // //   const total = nights * hotel.price + extras;

// // // // // //   return (
// // // // // //     <div className="hotel-details">
// // // // // //       <button className="back-btn" onClick={() => navigate(-1)}>
// // // // // //         ← Back
// // // // // //       </button>

// // // // // //       <img src={hotel.image} alt={hotel.name} className="hotel-img" />

// // // // // //       <h2>{hotel.name}</h2>
// // // // // //       <p>{hotel.city}</p>
// // // // // //       <p>{hotel.description}</p>

// // // // // //       <div className="booking-box">
// // // // // //         <h3>Book Your Stay</h3>

// // // // // //         <div className="grid">
// // // // // //           <div>
// // // // // //             <label>Check-in</label>
// // // // // //             <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <label>Check-out</label>
// // // // // //             <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <label>Room Type</label>
// // // // // //             <select onChange={(e) => setRoomType(e.target.value)}>
// // // // // //               <option>Standard</option>
// // // // // //               <option>Deluxe</option>
// // // // // //               <option>Suite</option>
// // // // // //             </select>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <label>AC / Non-AC</label>
// // // // // //             <select onChange={(e) => setAcType(e.target.value)}>
// // // // // //               <option>AC</option>
// // // // // //               <option>Non-AC</option>
// // // // // //             </select>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <label>Adults</label>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               min="1"
// // // // // //               value={adults}
// // // // // //               onChange={(e) => setAdults(e.target.value)}
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <label>Children</label>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               min="0"
// // // // // //               value={children}
// // // // // //               onChange={(e) => setChildren(e.target.value)}
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="extras">
// // // // // //           <label>
// // // // // //             <input
// // // // // //               type="checkbox"
// // // // // //               checked={breakfast}
// // // // // //               onChange={() => setBreakfast(!breakfast)}
// // // // // //             />
// // // // // //             Breakfast (+₹500)
// // // // // //           </label>

// // // // // //           <label>
// // // // // //             <input
// // // // // //               type="checkbox"
// // // // // //               checked={pickup}
// // // // // //               onChange={() => setPickup(!pickup)}
// // // // // //             />
// // // // // //             Airport Pickup (+₹800)
// // // // // //           </label>
// // // // // //         </div>

// // // // // //         <div className="summary">
// // // // // //           <p>Price / night: ₹{hotel.price}</p>
// // // // // //           <p>Nights: {nights}</p>
// // // // // //           <p>Extras: ₹{extras}</p>
// // // // // //           <h3>Total: ₹{total}</h3>
// // // // // //         </div>

// // // // // //         <button
// // // // // //           className="confirm-btn"
// // // // // //           onClick={() => navigate(`/book-hotel/${hotel.id}`)}
// // // // // //         >
// // // // // //           Confirm Booking
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // <div className="hotel-details">

// // // // //   {/* HEADER */}
// // // // //   <div className="hotel-header">
// // // // //     <h2>{hotel.name}</h2>
// // // // //     <p className="location">{hotel.city}</p>
// // // // //     <span className="badge">5★ Luxury</span>
// // // // //     <p className="desc">{hotel.description}</p>
// // // // //   </div>

// // // // //   {/* IMAGE */}
// // // // //   <img src={hotel.image} alt={hotel.name} className="hotel-img" />

// // // // //   {/* BOOKING CARD */}
// // // // //   <div className="booking-card">
// // // // //     <h3>Book Your Stay</h3>

// // // // //     <div className="form-grid">
// // // // //       <div>
// // // // //         <label>Check-in</label>
// // // // //         <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
// // // // //       </div>

// // // // //       <div>
// // // // //         <label>Check-out</label>
// // // // //         <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
// // // // //       </div>

// // // // //       <div>
// // // // //         <label>Room Type</label>
// // // // //         <select onChange={(e) => setRoomType(e.target.value)}>
// // // // //           <option>Standard</option>
// // // // //           <option>Deluxe</option>
// // // // //           <option>Suite</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       <div>
// // // // //         <label>AC Preference</label>
// // // // //         <select onChange={(e) => setAcType(e.target.value)}>
// // // // //           <option>AC</option>
// // // // //           <option>Non-AC</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       <div>
// // // // //         <label>Adults</label>
// // // // //         <input type="number" min="1" value={adults}
// // // // //           onChange={(e) => setAdults(e.target.value)} />
// // // // //       </div>

// // // // //       <div>
// // // // //         <label>Children</label>
// // // // //         <input type="number" min="0" value={children}
// // // // //           onChange={(e) => setChildren(e.target.value)} />
// // // // //       </div>
// // // // //     </div>

// // // // //     {/* EXTRAS */}
// // // // //     <div className="extras-box">
// // // // //       <label>
// // // // //         <input type="checkbox" checked={breakfast}
// // // // //           onChange={() => setBreakfast(!breakfast)} />
// // // // //         Breakfast (+₹500)
// // // // //       </label>

// // // // //       <label>
// // // // //         <input type="checkbox" checked={pickup}
// // // // //           onChange={() => setPickup(!pickup)} />
// // // // //         Airport Pickup (+₹800)
// // // // //       </label>
// // // // //     </div>

// // // // //     {/* PRICE SUMMARY */}
// // // // //     <div className="price-summary">
// // // // //       <div>
// // // // //         <span>Price / night</span>
// // // // //         <strong>₹{hotel.price}</strong>
// // // // //       </div>
// // // // //       <div>
// // // // //         <span>Nights</span>
// // // // //         <strong>{nights}</strong>
// // // // //       </div>
// // // // //       <div>
// // // // //         <span>Extras</span>
// // // // //         <strong>₹{extras}</strong>
// // // // //       </div>

// // // // //       <div className="total">
// // // // //         <span>Total Payable</span>
// // // // //         <strong>₹{total}</strong>
// // // // //       </div>
// // // // //     </div>

// // // // //     <button className="confirm-btn">
// // // // //       Confirm Booking
// // // // //     </button>
// // // // //   </div>
// // // // // </div>


// // // // import React, { useState, useMemo } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import hotels from "../data/hotelsData";
// // // // import "./HotelDetails.css";

// // // // export default function HotelDetails() {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();

// // // //   /* ================= FIND HOTEL ================= */
// // // //   const hotel = hotels.find((h) => h.id === Number(id));
// // // //   if (!hotel) return <h2>Hotel not found</h2>;

// // // //   /* ================= STATES (ALL AT TOP ✅) ================= */
// // // //   const [checkIn, setCheckIn] = useState("");
// // // //   const [checkOut, setCheckOut] = useState("");
// // // //   const [roomType, setRoomType] = useState("Standard");
// // // //   const [acType, setAcType] = useState("AC");
// // // //   const [adults, setAdults] = useState(2);
// // // //   const [children, setChildren] = useState(0);
// // // //   const [breakfast, setBreakfast] = useState(true);
// // // //   const [pickup, setPickup] = useState(false);

// // // //   /* ================= CALCULATIONS ================= */
// // // //   const nights = useMemo(() => {
// // // //     if (!checkIn || !checkOut) return 1;
// // // //     const inDate = new Date(checkIn);
// // // //     const outDate = new Date(checkOut);
// // // //     const diff =
// // // //       (outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24);
// // // //     return diff > 0 ? diff : 1;
// // // //   }, [checkIn, checkOut]);

// // // //   const extras = useMemo(() => {
// // // //     let extra = 0;
// // // //     if (breakfast) extra += 500;
// // // //     if (pickup) extra += 800;
// // // //     return extra;
// // // //   }, [breakfast, pickup]);

// // // //   const total = hotel.price * nights + extras;

// // // //   /* ================= UI ================= */
// // // //   return (
// // // //     <div className="hotel-details">

// // // //       {/* 🔙 BACK */}
// // // //       <button className="back-btn" onClick={() => navigate(-1)}>
// // // //         ← Back
// // // //       </button>

// // // //       {/* HEADER */}
// // // //       <div className="hotel-header">
// // // //         <h2>{hotel.name}</h2>
// // // //         <p className="location">{hotel.city}</p>
// // // //         <span className="badge">5★ Luxury</span>
// // // //         <p className="desc">{hotel.description}</p>
// // // //       </div>

// // // //       {/* IMAGE */}
// // // //       <img src={hotel.image} alt={hotel.name} className="hotel-img" />

// // // //       {/* BOOKING CARD */}
// // // //       <div className="booking-card">
// // // //         <h3>Book Your Stay</h3>

// // // //         <div className="form-grid">
// // // //           <div>
// // // //             <label>Check-in</label>
// // // //             <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
// // // //           </div>

// // // //           <div>
// // // //             <label>Check-out</label>
// // // //             <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
// // // //           </div>

// // // //           <div>
// // // //             <label>Room Type</label>
// // // //             <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
// // // //               <option>Standard</option>
// // // //               <option>Deluxe</option>
// // // //               <option>Suite</option>
// // // //             </select>
// // // //           </div>

// // // //           <div>
// // // //             <label>AC / Non-AC</label>
// // // //             <select value={acType} onChange={(e) => setAcType(e.target.value)}>
// // // //               <option>AC</option>
// // // //               <option>Non-AC</option>
// // // //             </select>
// // // //           </div>

// // // //           <div>
// // // //             <label>Adults</label>
// // // //             <input
// // // //               type="number"
// // // //               min="1"
// // // //               value={adults}
// // // //               onChange={(e) => setAdults(Number(e.target.value))}
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label>Children</label>
// // // //             <input
// // // //               type="number"
// // // //               min="0"
// // // //               value={children}
// // // //               onChange={(e) => setChildren(Number(e.target.value))}
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* EXTRAS */}
// // // //         <div className="extras-box">
// // // //           <label>
// // // //             <input
// // // //               type="checkbox"
// // // //               checked={breakfast}
// // // //               onChange={() => setBreakfast(!breakfast)}
// // // //             />
// // // //             Breakfast (+₹500)
// // // //           </label>

// // // //           <label>
// // // //             <input
// // // //               type="checkbox"
// // // //               checked={pickup}
// // // //               onChange={() => setPickup(!pickup)}
// // // //             />
// // // //             Airport Pickup (+₹800)
// // // //           </label>
// // // //         </div>

// // // //         {/* PRICE SUMMARY */}
// // // //         <div className="price-summary">
// // // //           <div>
// // // //             <span>Price / night</span>
// // // //             <strong>₹{hotel.price}</strong>
// // // //           </div>
// // // //           <div>
// // // //             <span>Nights</span>
// // // //             <strong>{nights}</strong>
// // // //           </div>
// // // //           <div>
// // // //             <span>Extras</span>
// // // //             <strong>₹{extras}</strong>
// // // //           </div>

// // // //           <div className="total">
// // // //             <span>Total Payable</span>
// // // //             <strong>₹{total}</strong>
// // // //           </div>
// // // //         </div>

// // // //         <button className="confirm-btn">
// // // //           Confirm Booking
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }





// // // import React, { useState, useMemo } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import hotels from "../data/hotelsData";

// // // export default function HotelDetails() {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();

// // //   /* ✅ FIND HOTEL (NO RETURN HERE) */
// // //   const hotel = hotels.find((h) => h.id === Number(id));

// // //   /* ✅ ALL HOOKS AT TOP — ALWAYS */
// // //   const [checkIn, setCheckIn] = useState("");
// // //   const [checkOut, setCheckOut] = useState("");
// // //   const [roomType, setRoomType] = useState("Standard");
// // //   const [acType, setAcType] = useState("AC");
// // //   const [adults, setAdults] = useState(2);
// // //   const [children, setChildren] = useState(0);
// // //   const [breakfast, setBreakfast] = useState(true);
// // //   const [pickup, setPickup] = useState(false);

// // //   const nights = useMemo(() => {
// // //     if (!checkIn || !checkOut) return 1;
// // //     const inDate = new Date(checkIn);
// // //     const outDate = new Date(checkOut);
// // //     const diff =
// // //       (outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24);
// // //     return diff > 0 ? diff : 1;
// // //   }, [checkIn, checkOut]);

// // //   const extras = useMemo(() => {
// // //     let extra = 0;
// // //     if (breakfast) extra += 500;
// // //     if (pickup) extra += 800;
// // //     return extra;
// // //   }, [breakfast, pickup]);

// // //   const total = hotel ? hotel.price * nights + extras : 0;

// // //   /* ✅ EARLY RETURN COMES AFTER ALL HOOKS */
// // //   if (!hotel) {
// // //     return <h2>Hotel not found</h2>;
// // //   }

// // //   /* ✅ JSX */
// // //   return (
// // //     <div>
// // //       <button onClick={() => navigate(-1)}>← Back</button>
// // //       <h2>{hotel.name}</h2>
// // //       <p>{hotel.city}</p>
// // //       <p>Total: ₹{total}</p>
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useMemo } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import hotels from "../data/hotelsData";
// // import "./HotelDetails.css";

// // export default function HotelDetails() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   /* ================= FIND HOTEL ================= */
// //   const hotel = hotels.find((h) => h.id === Number(id));

// //   /* ================= ALL STATES (TOP ONLY) ================= */
// //   const [checkIn, setCheckIn] = useState("");
// //   const [checkOut, setCheckOut] = useState("");
// //   const [roomType, setRoomType] = useState("Standard");
// //   const [acType, setAcType] = useState("AC");
// //   const [adults, setAdults] = useState(2);
// //   const [children, setChildren] = useState(0);
// //   const [breakfast, setBreakfast] = useState(true);
// //   const [pickup, setPickup] = useState(false);

// //   /* ================= CALCULATIONS ================= */
// //   const nights = useMemo(() => {
// //     if (!checkIn || !checkOut) return 1;
// //     const start = new Date(checkIn);
// //     const end = new Date(checkOut);
// //     const diff =
// //       (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
// //     return diff > 0 ? diff : 1;
// //   }, [checkIn, checkOut]);

// //   const extras = useMemo(() => {
// //     let total = 0;
// //     if (breakfast) total += 500;
// //     if (pickup) total += 800;
// //     return total;
// //   }, [breakfast, pickup]);

// //   const totalPrice = hotel
// //     ? hotel.price * nights + extras
// //     : 0;

// //   /* ================= SAFETY ================= */
// //   if (!hotel) {
// //     return <h2 style={{ padding: 30 }}>Hotel not found</h2>;
// //   }

// //   /* ================= UI ================= */
// //   return (
// //     <div className="hotel-details-page">
// //       <button className="back-btn" onClick={() => navigate(-1)}>
// //         ← Back
// //       </button>

// //       <img src={hotel.image} alt={hotel.name} className="hotel-img" />

// //       <h2>{hotel.name}</h2>
// //       <p className="city">{hotel.city}</p>
// //       <p className="desc">{hotel.description}</p>

// //       <div className="booking-box">
// //         <h3>Book Your Stay</h3>

// //         <div className="grid">
// //           <div>
// //             <label>Check-in</label>
// //             <input
// //               type="date"
// //               value={checkIn}
// //               onChange={(e) => setCheckIn(e.target.value)}
// //             />
// //           </div>

// //           <div>
// //             <label>Check-out</label>
// //             <input
// //               type="date"
// //               value={checkOut}
// //               onChange={(e) => setCheckOut(e.target.value)}
// //             />
// //           </div>

// //           <div>
// //             <label>Room Type</label>
// //             <select
// //               value={roomType}
// //               onChange={(e) => setRoomType(e.target.value)}
// //             >
// //               <option>Standard</option>
// //               <option>Deluxe</option>
// //               <option>Suite</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label>AC / Non-AC</label>
// //             <select
// //               value={acType}
// //               onChange={(e) => setAcType(e.target.value)}
// //             >
// //               <option>AC</option>
// //               <option>Non-AC</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label>Adults</label>
// //             <input
// //               type="number"
// //               min="1"
// //               value={adults}
// //               onChange={(e) => setAdults(Number(e.target.value))}
// //             />
// //           </div>

// //           <div>
// //             <label>Children</label>
// //             <input
// //               type="number"
// //               min="0"
// //               value={children}
// //               onChange={(e) => setChildren(Number(e.target.value))}
// //             />
// //           </div>
// //         </div>

// //         <div className="extras">
// //           <label>
// //             <input
// //               type="checkbox"
// //               checked={breakfast}
// //               onChange={() => setBreakfast(!breakfast)}
// //             />
// //             Breakfast (+₹500)
// //           </label>

// //           <label>
// //             <input
// //               type="checkbox"
// //               checked={pickup}
// //               onChange={() => setPickup(!pickup)}
// //             />
// //             Airport Pickup (+₹800)
// //           </label>
// //         </div>

// //         <div className="summary">
// //           <p>Price / night: ₹{hotel.price}</p>
// //           <p>Nights: {nights}</p>
// //           <p>Extras: ₹{extras}</p>
// //           <h3>Total: ₹{totalPrice}</h3>
// //         </div>

// //         <button className="confirm-btn">
// //           Confirm Booking
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }




// <div className="hotel-page">
//   <h1 className="hotel-title">{hotel.name}</h1>
//   <p className="hotel-city">{hotel.city}</p>
//   <p className="hotel-desc">{hotel.description}</p>

//   <div className="booking-card">
//     <h2>Book Your Stay</h2>

//     <div className="form-grid">
//       <div>
//         <label>Check-in</label>
//         <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
//       </div>

//       <div>
//         <label>Check-out</label>
//         <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
//       </div>

//       <div>
//         <label>Room Type</label>
//         <select value={roomType} onChange={e => setRoomType(e.target.value)}>
//           <option>Standard</option>
//           <option>Deluxe</option>
//           <option>Suite</option>
//         </select>
//       </div>

//       <div>
//         <label>AC / Non-AC</label>
//         <select value={acType} onChange={e => setAcType(e.target.value)}>
//           <option>AC</option>
//           <option>Non-AC</option>
//         </select>
//       </div>

//       <div>
//         <label>Adults</label>
//         <input type="number" min="1" value={adults} onChange={e => setAdults(+e.target.value)} />
//       </div>

//       <div>
//         <label>Children</label>
//         <input type="number" min="0" value={children} onChange={e => setChildren(+e.target.value)} />
//       </div>
//     </div>

//     <div className="extras">
//       <label><input type="checkbox" checked={breakfast} onChange={() => setBreakfast(!breakfast)} /> Breakfast (+₹500)</label>
//       <label><input type="checkbox" checked={pickup} onChange={() => setPickup(!pickup)} /> Airport Pickup (+₹800)</label>
//     </div>

//     <div className="price-box">
//       <div>
//         <p>₹{hotel.price} × {nights} night</p>
//         <p>Extras: ₹{extras}</p>
//       </div>
//       <h2>₹{totalPrice}</h2>
//     </div>

//     <button className="confirm-btn">Confirm Booking</button>
//   </div>
// </div>



import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import hotels from "../data/hotelsData";
import "./HotelDetails.css";

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* ================= HOTEL ================= */
  const hotel = hotels.find((h) => h.id === Number(id));

  /* ================= STATES ================= */
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Standard");
  const [acType, setAcType] = useState("AC");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [breakfast, setBreakfast] = useState(true);
  const [pickup, setPickup] = useState(false);

  /* ================= CALCULATIONS ================= */
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff =
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 1;
  }, [checkIn, checkOut]);

  const extras = useMemo(() => {
    let total = 0;
    if (breakfast) total += 500;
    if (pickup) total += 800;
    return total;
  }, [breakfast, pickup]);

  const totalPrice = hotel
    ? hotel.price * nights + extras
    : 0;

  /* ================= SAFETY ================= */
  if (!hotel) {
    return <h2 style={{ padding: 30 }}>Hotel not found</h2>;
  }

  /* ================= UI ================= */
  return (
    <div className="hotel-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img src={hotel.image} alt={hotel.name} className="hotel-img" />

      <h1 className="hotel-title">{hotel.name}</h1>
      <p className="hotel-city">{hotel.city}</p>
      <p className="hotel-desc">{hotel.description}</p>

      <div className="booking-card">
        <h2>Book Your Stay</h2>

        <div className="form-grid">
          <div>
            <label>Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div>
            <label>Check-out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <div>
            <label>Room Type</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Suite</option>
            </select>
          </div>

          <div>
            <label>AC / Non-AC</label>
            <select
              value={acType}
              onChange={(e) => setAcType(e.target.value)}
            >
              <option>AC</option>
              <option>Non-AC</option>
            </select>
          </div>

          <div>
            <label>Adults</label>
            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Children</label>
            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="extras">
          <label>
            <input
              type="checkbox"
              checked={breakfast}
              onChange={() => setBreakfast(!breakfast)}
            />
            Breakfast (+₹500)
          </label>

          <label>
            <input
              type="checkbox"
              checked={pickup}
              onChange={() => setPickup(!pickup)}
            />
            Airport Pickup (+₹800)
          </label>
        </div>

        <div className="price-box">
          <div>
            <p>₹{hotel.price} × {nights} night</p>
            <p>Extras: ₹{extras}</p>
          </div>
          <h2>₹{totalPrice}</h2>
        </div>

        <button className="confirm-btn">
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
