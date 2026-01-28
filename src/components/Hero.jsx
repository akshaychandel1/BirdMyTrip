// // import React, { useState } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import "./Hero.css";

// // import ExploreMoreBar from "./ExploreMoreBar";



// // import {
// //   Plane,
// //   Hotel,
// //   Home,
// //   Briefcase,
// //   Bus,
// //   CarTaxiFront,
// //   Train,
// //   IdCard,
// //   Ship,
// //   ArrowLeftRight,
// // } from "lucide-react";

// // /* ================= CONFIG ================= */
// // const BASE_PRICE = 4500;

// // const FARE_MULTIPLIER = {
// //   Regular: 1,
// //   Student: 0.9,
// //   "Armed Forces": 0.85,
// //   "Senior Citizen": 0.85,
// //   "Doctor & Nurses": 0.85,
// // };

// // const CITIES = [
// //   { name: "Delhi", code: "DEL" },
// //   { name: "Mumbai", code: "BOM" },
// //   { name: "Bangalore", code: "BLR" },
// //   { name: "Chennai", code: "MAA" },
// //   { name: "Kolkata", code: "CCU" },
// // ];

// // export default function Hero() {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [fromCity, setFromCity] = useState("Delhi (DEL)");
// //   const [toCity, setToCity] = useState("Mumbai (BOM)");
// //   const [departureDate, setDepartureDate] = useState("2026-01-07");
// //   const [selectedFare, setSelectedFare] = useState("Regular");
// //   const [flexiFly, setFlexiFly] = useState(false);

// //   const swapCities = () => {
// //     setFromCity(toCity);
// //     setToCity(fromCity);
// //   };

// //   const finalPrice = Math.round(
// //     BASE_PRICE * FARE_MULTIPLIER[selectedFare] + (flexiFly ? 999 : 0)
// //   );

// //   const getActive = (path) =>
// //     location.pathname === path ? "nav-item active" : "nav-item";

// //   return (
// //     <>
// //       {/* ================= HERO SECTION ================= */}
// //       <div className="mmt-hero-wrapper">
// //         <div className="mmt-main-container">

// //           {/* ================= TOP ICON NAV (LUCIDE) ================= */}
// //           <div className="mmt-nav-bar">
// //             <div className={getActive("/flights")} onClick={() => navigate("/flights")}>
// //               <Plane />
// //               <span>Flights</span>
// //             </div>

// //             <div className={getActive("/hotels")} onClick={() => navigate("/hotels")}>
// //               <Hotel />
// //               <span>Hotels</span>
// //             </div>

// //             <div className="nav-item">
// //               <Home />
// //               <span>Villas</span>
// //             </div>

// //             {/* <div className="nav-item"> */}
// //             <div className={getActive("/holiday")} onClick={() => navigate("/holiday")}>
// //               <Briefcase />
// //               <span>Holidays</span>
// //             </div>

// //             <div className={getActive("/train")} onClick={() => navigate("/train")}>
// //               <Train />
// //               <span>Trains</span>
// //             </div>

// //             <div className={getActive("/bus")} onClick={() => navigate("/bus")}>
// //               <Bus />
// //               <span>Buses</span>
// //             </div>

// //             <div className={getActive("/cab")} onClick={() => navigate("/cab")}>
// //               <CarTaxiFront />
// //               <span>Cabs</span>
// //             </div>

// //             {/* <div className="nav-item"> */}
// //             <div className={getActive("/visa")} onClick={() => navigate("/visa")}>
// //               <IdCard />
// //               <span>Visa</span>
// //             </div>

// //             {/* <div className="nav-item"> */}
// //             <div className={getActive("/cruise")} onClick={() => navigate("/cruise")}>
// //               <Ship />
// //               <span>Cruise</span>
// //             </div>
// //           </div>

// //           {/* ================= SEARCH CARD ================= */}
// //           <div className="mmt-card">

// //             {/* INPUT GRID */}
// //             <div className="input-grid">
// //               <div className="box">
// //                 <label>From</label>
// //                 <input
// //                   value={fromCity}
// //                   onChange={(e) => setFromCity(e.target.value)}
// //                   list="fromCities"
// //                 />
// //                 <datalist id="fromCities">
// //                   {CITIES.map((c) => (
// //                     <option key={c.code} value={`${c.name} (${c.code})`} />
// //                   ))}
// //                 </datalist>
// //                 <p>Departure City</p>
// //               </div>

// //               <div className="box">
// //                 <label>To</label>
// //                 <input
// //                   value={toCity}
// //                   onChange={(e) => setToCity(e.target.value)}
// //                   list="toCities"
// //                 />
// //                 <datalist id="toCities">
// //                   {CITIES.map((c) => (
// //                     <option key={c.code} value={`${c.name} (${c.code})`} />
// //                   ))}
// //                 </datalist>
// //                 <p>Destination City</p>
// //               </div>

// //               <div className="box">
// //                 <label>Departure</label>
// //                 <input
// //                   type="date"
// //                   value={departureDate}
// //                   onChange={(e) => setDepartureDate(e.target.value)}
// //                 />
// //               </div>

// //               <div className="box no-border">
// //                 <label>Travellers & Class</label>
// //                 <div className="val">1 Traveller</div>
// //                 <p>Economy</p>
// //               </div>
// //             </div>

// //             {/* SWAP */}
// //             <div className="swap-btn" onClick={swapCities}>
// //               <ArrowLeftRight />
// //             </div>

// //             {/* SPECIAL FARES */}
// //             <div className="special-fares-section">
// //               <div className="fare-title">SPECIAL FARES</div>
// //               <div className="fare-list">
// //                 {Object.keys(FARE_MULTIPLIER).map((fare) => (
// //                   <div
// //                     key={fare}
// //                     className={`fare-box ${selectedFare === fare ? "active" : ""}`}
// //                     onClick={() => setSelectedFare(fare)}
// //                   >
// //                     <div className="f-main">{fare}</div>
// //                     <div className="f-sub">Up to ₹600 off</div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* FLEXIFLY */}
// //             <div className="flexifly-bar">
// //               <label className="flexi-left">
// //                 <input
// //                   type="checkbox"
// //                   checked={flexiFly}
// //                   onChange={() => setFlexiFly(!flexiFly)}
// //                 />
// //                 <strong>Add FlexiFly</strong>
// //                 <span>100% refund or zero date change</span>
// //               </label>
// //               <span className="flexi-price">₹999</span>
// //             </div>

// //             {/* PRICE */}
// //             <div className="price-bar">
// //               <span>Total Price</span>
// //               <strong>₹{finalPrice}</strong>
// //             </div>



// //             {/* SEARCH */}
// //             <button
// //               className="main-search-btn"
// //               onClick={() =>
// //                 navigate("/flights", {
// //                   state: {
// //                     fromCity,
// //                     toCity,
// //                     departureDate,
// //                     selectedFare,
// //                     finalPrice,
// //                   },
// //                 })
// //               }
// //             >
// //               SEARCH
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ================= NEXT SECTION ================= */}
// //       <ExploreMoreBar />
// //     </>
// //   );}




// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Hero.css";

// import {
//   Plane,
//   Hotel,
//   Home,
//   Briefcase,
//   Bus,
//   CarTaxiFront,
//   Train,
//   IdCard,
//   Ship,
//   ArrowLeftRight,
// } from "lucide-react";

// /* ================= CONFIG ================= */
// const BASE_PRICE = 4500;

// const FARE_MULTIPLIER = {
//   Regular: 1,
//   Student: 0.9,
//   "Armed Forces": 0.85,
//   "Senior Citizen": 0.85,
//   "Doctor & Nurses": 0.85,
// };

// const CITIES = [
//   { name: "Delhi", code: "DEL" },
//   { name: "Mumbai", code: "BOM" },
//   { name: "Bangalore", code: "BLR" },
//   { name: "Chennai", code: "MAA" },
//   { name: "Kolkata", code: "CCU" },
// ];

// export default function Hero() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [fromCity, setFromCity] = useState("Delhi (DEL)");
//   const [toCity, setToCity] = useState("Mumbai (BOM)");
//   const [departureDate, setDepartureDate] = useState("2026-01-07");
//   const [selectedFare, setSelectedFare] = useState("Regular");
//   const [flexiFly, setFlexiFly] = useState(false);

//   const swapCities = () => {
//     setFromCity(toCity);
//     setToCity(fromCity);
//   };

//   const finalPrice = Math.round(
//     BASE_PRICE * FARE_MULTIPLIER[selectedFare] + (flexiFly ? 999 : 0)
//   );

//   const getActive = (path) =>
//     location.pathname === path ? "nav-item active" : "nav-item";

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <div className="mmt-hero-wrapper">
//         <div className="mmt-main-container">

//           {/* ================= TOP NAV ================= */}
//           <div className="mmt-nav-bar">
//             <div className={getActive("/flights")} onClick={() => navigate("/flights")}>
//               <Plane />
//               <span>Flights</span>
//             </div>

//             <div className={getActive("/hotels")} onClick={() => navigate("/hotels")}>
//               <Hotel />
//               <span>Hotels</span>
//             </div>

//             <div className="nav-item">
//               <Home />
//               <span>Villas</span>
//             </div>

//             <div className={getActive("/holiday")} onClick={() => navigate("/holiday")}>
//               <Briefcase />
//               <span>Holidays</span>
//             </div>

//             <div className={getActive("/train")} onClick={() => navigate("/train")}>
//               <Train />
//               <span>Trains</span>
//             </div>

//             <div className={getActive("/bus")} onClick={() => navigate("/bus")}>
//               <Bus />
//               <span>Buses</span>
//             </div>

//             <div className={getActive("/cab")} onClick={() => navigate("/cab")}>
//               <CarTaxiFront />
//               <span>Cabs</span>
//             </div>

//             <div className={getActive("/visa")} onClick={() => navigate("/visa")}>
//               <IdCard />
//               <span>Visa</span>
//             </div>

//             <div className={getActive("/cruise")} onClick={() => navigate("/cruise")}>
//               <Ship />
//               <span>Cruise</span>
//             </div>
//           </div>

//           {/* ================= SEARCH CARD ================= */}
//           <div className="mmt-card">

//             <div className="input-grid">
//               <div className="box">
//                 <label>From</label>
//                 <input
//                   value={fromCity}
//                   onChange={(e) => setFromCity(e.target.value)}
//                   list="fromCities"
//                 />
//                 <datalist id="fromCities">
//                   {CITIES.map((c) => (
//                     <option key={c.code} value={`${c.name} (${c.code})`} />
//                   ))}
//                 </datalist>
//                 <p>Departure City</p>
//               </div>

//               <div className="box">
//                 <label>To</label>
//                 <input
//                   value={toCity}
//                   onChange={(e) => setToCity(e.target.value)}
//                   list="toCities"
//                 />
//                 <datalist id="toCities">
//                   {CITIES.map((c) => (
//                     <option key={c.code} value={`${c.name} (${c.code})`} />
//                   ))}
//                 </datalist>
//                 <p>Destination City</p>
//               </div>

//               <div className="box">
//                 <label>Departure</label>
//                 <input
//                   type="date"
//                   value={departureDate}
//                   onChange={(e) => setDepartureDate(e.target.value)}
//                 />
//               </div>

//               <div className="box no-border">
//                 <label>Travellers & Class</label>
//                 <div className="val">1 Traveller</div>
//                 <p>Economy</p>
//               </div>
//             </div>

//             <div className="swap-btn" onClick={swapCities}>
//               <ArrowLeftRight />
//             </div>

//             <div className="special-fares-section">
//               <div className="fare-title">SPECIAL FARES</div>
//               <div className="fare-list">
//                 {Object.keys(FARE_MULTIPLIER).map((fare) => (
//                   <div
//                     key={fare}
//                     className={`fare-box ${selectedFare === fare ? "active" : ""}`}
//                     onClick={() => setSelectedFare(fare)}
//                   >
//                     <div className="f-main">{fare}</div>
//                     <div className="f-sub">Up to ₹600 off</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flexifly-bar">
//               <label className="flexi-left">
//                 <input
//                   type="checkbox"
//                   checked={flexiFly}
//                   onChange={() => setFlexiFly(!flexiFly)}
//                 />
//                 <strong>Add FlexiFly</strong>
//                 <span>100% refund or zero date change</span>
//               </label>
//               <span className="flexi-price">₹999</span>
//             </div>

//             <div className="price-bar">
//               <span>Total Price</span>
//               <strong>₹{finalPrice}</strong>
//             </div>

//             <button
//               className="main-search-btn"
//               onClick={() =>
//                 navigate("/flights", {
//                   state: {
//                     fromCity,
//                     toCity,
//                     departureDate,
//                     selectedFare,
//                     finalPrice,
//                   },
//                 })
//               }
//             >
//               SEARCH
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


































// // Hero.jsx
// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Hero.css";

// import {
//   Plane,
//   Hotel,
//   Home,
//   Briefcase,
//   Bus,
//   CarTaxiFront,
//   Train,
//   IdCard,
//   Ship,
//   ArrowLeftRight,
//   Users,
//   ChevronDown,
// } from "lucide-react";

// /* ================= CONFIG ================= */
// const BASE_PRICE = 4500;

// const FARE_MULTIPLIER = {
//   Regular: 1,
//   Student: 0.9,
//   "Armed Forces": 0.85,
//   "Senior Citizen": 0.85,
//   "Doctor & Nurses": 0.85,
// };

// const CITIES = [
//   { name: "Delhi", code: "DEL" },
//   { name: "Mumbai", code: "BOM" },
//   { name: "Bangalore", code: "BLR" },
//   { name: "Chennai", code: "MAA" },
//   { name: "Kolkata", code: "CCU" },
// ];

// export default function Hero() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [fromCity, setFromCity] = useState("Delhi (DEL)");
//   const [toCity, setToCity] = useState("Mumbai (BOM)");
//   const [departureDate, setDepartureDate] = useState("2026-01-07");
//   const [selectedFare, setSelectedFare] = useState("Regular");
//   const [flexiFly, setFlexiFly] = useState(false);
//   const [showTravelerMenu, setShowTravelerMenu] = useState(false);
//   const [travelers, setTravelers] = useState(1);
//   const [travelClass, setTravelClass] = useState("Economy");

//   const swapCities = () => {
//     setFromCity(toCity);
//     setToCity(fromCity);
//   };

//   const finalPrice = Math.round(
//     BASE_PRICE * FARE_MULTIPLIER[selectedFare] * travelers + (flexiFly ? 999 : 0)
//   );

//   const getActive = (path) =>
//     location.pathname === path ? "nav-item active" : "nav-item";

//   const handleTravelerChange = (value) => {
//     const newValue = travelers + value;
//     if (newValue >= 1 && newValue <= 9) {
//       setTravelers(newValue);
//     }
//   };

//   const handleSearch = () => {
//     navigate("/flights", {
//       state: {
//         fromCity,
//         toCity,
//         departureDate,
//         selectedFare,
//         travelers,
//         travelClass,
//         finalPrice,
//       },
//     });
//   };

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <div className="mmt-hero-wrapper">
//         <div className="mmt-main-container">

//           {/* ================= TOP NAV ================= */}
//           <div className="mmt-nav-bar">
//             <div className={getActive("/flights")} onClick={() => navigate("/flights")}>
//               <Plane className="nav-icon" />
//               <span className="nav-label">Flights</span>
//             </div>

//             <div className={getActive("/hotels")} onClick={() => navigate("/hotels")}>
//               <Hotel className="nav-icon" />
//               <span className="nav-label">Hotels</span>
//             </div>

//             <div className="nav-item">
//               <Home className="nav-icon" />
//               <span className="nav-label">Villas</span>
//             </div>

//             <div className={getActive("/holiday")} onClick={() => navigate("/holiday")}>
//               <Briefcase className="nav-icon" />
//               <span className="nav-label">Holidays</span>
//             </div>

//             <div className={getActive("/train")} onClick={() => navigate("/train")}>
//               <Train className="nav-icon" />
//               <span className="nav-label">Trains</span>
//             </div>

//             <div className={getActive("/bus")} onClick={() => navigate("/bus")}>
//               <Bus className="nav-icon" />
//               <span className="nav-label">Buses</span>
//             </div>

//             <div className={getActive("/cab")} onClick={() => navigate("/cab")}>
//               <CarTaxiFront className="nav-icon" />
//               <span className="nav-label">Cabs</span>
//             </div>

//             <div className={getActive("/visa")} onClick={() => navigate("/visa")}>
//               <IdCard className="nav-icon" />
//               <span className="nav-label">Visa</span>
//             </div>

//             <div className={getActive("/cruise")} onClick={() => navigate("/cruise")}>
//               <Ship className="nav-icon" />
//               <span className="nav-label">Cruise</span>
//             </div>
//           </div>

//           {/* ================= SEARCH CARD ================= */}
//           <div className="mmt-card">

//             <div className="input-grid">
//               <div className="box">
//                 <label className="box-label">From</label>
//                 <input
//                   value={fromCity}
//                   onChange={(e) => setFromCity(e.target.value)}
//                   list="fromCities"
//                   className="box-input"
//                   placeholder="Select city"
//                 />
//                 <datalist id="fromCities">
//                   {CITIES.map((c) => (
//                     <option key={c.code} value={`${c.name} (${c.code})`} />
//                   ))}
//                 </datalist>
//                 <p className="box-hint">Departure City</p>
//               </div>

//               <div className="box">
//                 <label className="box-label">To</label>
//                 <input
//                   value={toCity}
//                   onChange={(e) => setToCity(e.target.value)}
//                   list="toCities"
//                   className="box-input"
//                   placeholder="Select city"
//                 />
//                 <datalist id="toCities">
//                   {CITIES.map((c) => (
//                     <option key={c.code} value={`${c.name} (${c.code})`} />
//                   ))}
//                 </datalist>
//                 <p className="box-hint">Destination City</p>
//               </div>

//               <div className="box">
//                 <label className="box-label">Departure</label>
//                 <input
//                   type="date"
//                   value={departureDate}
//                   onChange={(e) => setDepartureDate(e.target.value)}
//                   className="box-input date-input"
//                 />
//               </div>

//               <div className="box traveler-box" onClick={() => setShowTravelerMenu(!showTravelerMenu)}>
//                 <label className="box-label">Travellers & Class</label>
//                 <div className="traveler-display">
//                   <Users size={16} />
//                   <span className="traveler-count">{travelers} Traveller</span>
//                   <ChevronDown size={16} className="dropdown-icon" />
//                 </div>
//                 <p className="box-hint">{travelClass}</p>
                
//                 {showTravelerMenu && (
//                   <div className="traveler-menu">
//                     <div className="traveler-option">
//                       <span>Travellers</span>
//                       <div className="traveler-controls">
//                         <button onClick={() => handleTravelerChange(-1)} className="control-btn">-</button>
//                         <span>{travelers}</span>
//                         <button onClick={() => handleTravelerChange(1)} className="control-btn">+</button>
//                       </div>
//                     </div>
//                     <div className="class-options">
//                       {["Economy", "Premium Economy", "Business", "First"].map((cls) => (
//                         <div 
//                           key={cls} 
//                           className={`class-option ${travelClass === cls ? 'active' : ''}`}
//                           onClick={() => setTravelClass(cls)}
//                         >
//                           {cls}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="swap-btn" onClick={swapCities} aria-label="Swap cities">
//               <ArrowLeftRight size={18} />
//             </div>

//             <div className="special-fares-section">
//               <div className="fare-title">SPECIAL FARES</div>
//               <div className="fare-list">
//                 {Object.keys(FARE_MULTIPLIER).map((fare) => (
//                   <div
//                     key={fare}
//                     className={`fare-box ${selectedFare === fare ? "active" : ""}`}
//                     onClick={() => setSelectedFare(fare)}
//                   >
//                     <div className="f-main">{fare}</div>
//                     <div className="f-sub">Up to ₹600 off</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flexifly-bar">
//               <label className="flexi-left">
//                 <input
//                   type="checkbox"
//                   checked={flexiFly}
//                   onChange={() => setFlexiFly(!flexiFly)}
//                   className="flexi-checkbox"
//                 />
//                 <strong className="flexi-title">Add FlexiFly</strong>
//                 <span className="flexi-desc">100% refund or zero date change</span>
//               </label>
//               <span className="flexi-price">₹999</span>
//             </div>

//             <div className="price-bar">
//               <span className="price-label">Total Price</span>
//               <strong className="price-value">₹{finalPrice}</strong>
//             </div>

//             <button
//               className="main-search-btn"
//               onClick={handleSearch}
//             >
//               SEARCH
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


























// Hero.js - Updated with Flight Options Bar
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Hero.css";

import {
  Plane,
  Hotel,
  Home,
  Briefcase,
  Bus,
  CarTaxiFront,
  Train,
  IdCard,
  Ship,
  ArrowLeftRight,
  Users,
  ChevronDown,
  Calendar,
  MapPin,
} from "lucide-react";

/* ================= CONFIG ================= */
const BASE_PRICE = 4500;

const FARE_MULTIPLIER = {
  Regular: 1,
  Student: 0.9,
  "Armed Forces": 0.85,
  "Senior Citizen": 0.85,
  "Doctor & Nurses": 0.85,
};

const CITIES = [
  { name: "Delhi", code: "DEL" },
  { name: "Mumbai", code: "BOM" },
  { name: "Bangalore", code: "BLR" },
  { name: "Chennai", code: "MAA" },
  { name: "Kolkata", code: "CCU" },
];

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const [fromCity, setFromCity] = useState("Delhi (DEL)");
  const [toCity, setToCity] = useState("Mumbai (BOM)");
  const [departureDate, setDepartureDate] = useState("2026-01-07");
  const [tripType, setTripType] = useState("Round Trip");
  const [selectedFare, setSelectedFare] = useState("Regular");
  const [flexiFly, setFlexiFly] = useState(false);
  const [showTravelerMenu, setShowTravelerMenu] = useState(false);
  const [travelers, setTravelers] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");

  const swapCities = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  const finalPrice = Math.round(
    BASE_PRICE * FARE_MULTIPLIER[selectedFare] * travelers + (flexiFly ? 999 : 0)
  );

  const getActive = (path) =>
    location.pathname === path ? "nav-item active" : "nav-item";

  const handleTravelerChange = (value) => {
    const newValue = travelers + value;
    if (newValue >= 1 && newValue <= 9) {
      setTravelers(newValue);
    }
  };

  const handleSearch = () => {
    navigate("/flights", {
      state: {
        fromCity,
        toCity,
        departureDate,
        selectedFare,
        travelers,
        travelClass,
        finalPrice,
      },
    });
  };

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  return (
    <>
      {/* Main Hero Section */}
      <div className="hero-compact-wrapper">
        {/* ================= TOP NAV ================= */}
        <div className="hero-compact-nav">
          {[
            { icon: Plane, path: "/flights", label: "Flights" },
            { icon: Hotel, path: "/hotels", label: "Hotels" },
            { icon: Home, label: "Villas" },
            { icon: Briefcase, path: "/holiday", label: "Holidays" },
            { icon: Train, path: "/train", label: "Trains" },
            { icon: Bus, path: "/bus", label: "Buses" },
            { icon: CarTaxiFront, path: "/cab", label: "Cabs" },
            { icon: IdCard, path: "/visa", label: "Visa" },
            { icon: Ship, path: "/cruise", label: "Cruise" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={item.path ? getActive(item.path) : "nav-item"}
              onClick={() => item.path && navigate(item.path)}
            >
              <item.icon className="nav-icon" size={20} />
              <span className="nav-label">{item.label}</span>
            </div>
          ))}
        </div>

        

        {/* ================= COMPACT SEARCH CARD ================= */}
        <div className="hero-compact-card">
          {/* City Inputs Row */}
          <div className="compact-input-row">
            <div className="city-input-box">
              <div className="input-header">
                <MapPin size={14} />
                <label>From</label>
              </div>
              <input
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                list="fromCities"
                className="city-input"
                placeholder="Delhi (DEL)"
              />
            </div>

            <button className="swap-btn-compact" onClick={swapCities}>
              <ArrowLeftRight size={16} />
            </button>

            <div className="city-input-box">
              <div className="input-header">
                <MapPin size={14} />
                <label>To</label>
              </div>
              <input
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                list="toCities"
                className="city-input"
                placeholder="Mumbai (BOM)"
              />
            </div>
          </div>

          <datalist id="fromCities">
            {CITIES.map((c) => (
              <option key={c.code} value={`${c.name} (${c.code})`} />
            ))}
          </datalist>
          <datalist id="toCities">
            {CITIES.map((c) => (
              <option key={c.code} value={`${c.name} (${c.code})`} />
            ))}
          </datalist>

          {/* Date & Traveler Row */}
          <div className="compact-secondary-row">
            <div className="date-box">
              <div className="input-header">
                <Calendar size={14} />
                <label>Departure</label>
              </div>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="date-input-compact"
                min={today}
              />
            </div>

            <div className="traveler-box-compact" onClick={() => setShowTravelerMenu(!showTravelerMenu)}>
              <div className="input-header">
                <Users size={14} />
                <label>Travellers & Class</label>
              </div>
              <div className="traveler-display-compact">
                <span className="traveler-count">{travelers} {travelers === 1 ? 'Traveller' : 'Travellers'}</span>
                <span className="traveler-class">• {travelClass}</span>
                <ChevronDown size={14} className={`dropdown-icon ${showTravelerMenu ? 'rotate' : ''}`} />
              </div>
            </div>
          </div>

          {/* Traveler Menu */}
          {showTravelerMenu && (
            <div className="compact-traveler-menu">
              <div className="traveler-control-compact">
                <span>Travellers</span>
                <div className="counter">
                  <button onClick={() => handleTravelerChange(-1)} disabled={travelers <= 1}>-</button>
                  <span>{travelers}</span>
                  <button onClick={() => handleTravelerChange(1)} disabled={travelers >= 9}>+</button>
                </div>
              </div>
              <div className="class-grid">
                {["Economy", "Premium", "Business", "First"].map((cls) => (
                  <button
                    key={cls}
                    className={`class-btn ${travelClass === cls ? 'active' : ''}`}
                    onClick={() => setTravelClass(cls)}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Special Fares */}
          <div className="compact-fares-section">
            <h4 className="fare-title-compact">SPECIAL FARES</h4>
            <div className="fare-grid">
              {Object.keys(FARE_MULTIPLIER).map((fare) => (
                <button
                  key={fare}
                  className={`fare-btn ${selectedFare === fare ? 'active' : ''}`}
                  onClick={() => setSelectedFare(fare)}
                >
                  <span className="fare-name">{fare}</span>
                  <span className="fare-discount">Save ₹{Math.round(BASE_PRICE * (1 - FARE_MULTIPLIER[fare]))}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FlexiFly & Price */}
          <div className="compact-action-row">
            <div className="flexifly-compact">
              <label className="flexi-label">
                <input
                  type="checkbox"
                  checked={flexiFly}
                  onChange={() => setFlexiFly(!flexiFly)}
                  className="flexi-check"
                />
                <div className="flexi-text">
                  <strong>Add FlexiFly</strong>
                  <span>100% refund • No change fees</span>
                </div>
              </label>
              <span className="flexi-price-compact">+₹999</span>
            </div>

            <div className="price-display-compact">
              <div className="price-info">
                <span>Total Price</span>
                <div className="price-tag">₹{finalPrice}</div>
              </div>
              <button className="search-btn-compact" onClick={handleSearch}>
                SEARCH
              </button>
            </div>
          </div>
        </div>

       
      </div>

    </>
  );
}