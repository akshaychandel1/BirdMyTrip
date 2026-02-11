// // // import React, { useState } from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import "./Hero.css";

// // // import ExploreMoreBar from "./ExploreMoreBar";



// // // import {
// // //   Plane,
// // //   Hotel,
// // //   Home,
// // //   Briefcase,
// // //   Bus,
// // //   CarTaxiFront,
// // //   Train,
// // //   IdCard,
// // //   Ship,
// // //   ArrowLeftRight,
// // // } from "lucide-react";

// // // /* ================= CONFIG ================= */
// // // const BASE_PRICE = 4500;

// // // const FARE_MULTIPLIER = {
// // //   Regular: 1,
// // //   Student: 0.9,
// // //   "Armed Forces": 0.85,
// // //   "Senior Citizen": 0.85,
// // //   "Doctor & Nurses": 0.85,
// // // };

// // // const CITIES = [
// // //   { name: "Delhi", code: "DEL" },
// // //   { name: "Mumbai", code: "BOM" },
// // //   { name: "Bangalore", code: "BLR" },
// // //   { name: "Chennai", code: "MAA" },
// // //   { name: "Kolkata", code: "CCU" },
// // // ];

// // // export default function Hero() {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const [fromCity, setFromCity] = useState("Delhi (DEL)");
// // //   const [toCity, setToCity] = useState("Mumbai (BOM)");
// // //   const [departureDate, setDepartureDate] = useState("2026-01-07");
// // //   const [selectedFare, setSelectedFare] = useState("Regular");
// // //   const [flexiFly, setFlexiFly] = useState(false);

// // //   const swapCities = () => {
// // //     setFromCity(toCity);
// // //     setToCity(fromCity);
// // //   };

// // //   const finalPrice = Math.round(
// // //     BASE_PRICE * FARE_MULTIPLIER[selectedFare] + (flexiFly ? 999 : 0)
// // //   );

// // //   const getActive = (path) =>
// // //     location.pathname === path ? "nav-item active" : "nav-item";

// // //   return (
// // //     <>
// // //       {/* ================= HERO SECTION ================= */}
// // //       <div className="mmt-hero-wrapper">
// // //         <div className="mmt-main-container">

// // //           {/* ================= TOP ICON NAV (LUCIDE) ================= */}
// // //           <div className="mmt-nav-bar">
// // //             <div className={getActive("/flights")} onClick={() => navigate("/flights")}>
// // //               <Plane />
// // //               <span>Flights</span>
// // //             </div>

// // //             <div className={getActive("/hotels")} onClick={() => navigate("/hotels")}>
// // //               <Hotel />
// // //               <span>Hotels</span>
// // //             </div>

// // //             <div className="nav-item">
// // //               <Home />
// // //               <span>Villas</span>
// // //             </div>

// // //             {/* <div className="nav-item"> */}
// // //             <div className={getActive("/holiday")} onClick={() => navigate("/holiday")}>
// // //               <Briefcase />
// // //               <span>Holidays</span>
// // //             </div>

// // //             <div className={getActive("/train")} onClick={() => navigate("/train")}>
// // //               <Train />
// // //               <span>Trains</span>
// // //             </div>

// // //             <div className={getActive("/bus")} onClick={() => navigate("/bus")}>
// // //               <Bus />
// // //               <span>Buses</span>
// // //             </div>

// // //             <div className={getActive("/cab")} onClick={() => navigate("/cab")}>
// // //               <CarTaxiFront />
// // //               <span>Cabs</span>
// // //             </div>

// // //             {/* <div className="nav-item"> */}
// // //             <div className={getActive("/visa")} onClick={() => navigate("/visa")}>
// // //               <IdCard />
// // //               <span>Visa</span>
// // //             </div>

// // //             {/* <div className="nav-item"> */}
// // //             <div className={getActive("/cruise")} onClick={() => navigate("/cruise")}>
// // //               <Ship />
// // //               <span>Cruise</span>
// // //             </div>
// // //           </div>

// // //           {/* ================= SEARCH CARD ================= */}
// // //           <div className="mmt-card">

// // //             {/* INPUT GRID */}
// // //             <div className="input-grid">
// // //               <div className="box">
// // //                 <label>From</label>
// // //                 <input
// // //                   value={fromCity}
// // //                   onChange={(e) => setFromCity(e.target.value)}
// // //                   list="fromCities"
// // //                 />
// // //                 <datalist id="fromCities">
// // //                   {CITIES.map((c) => (
// // //                     <option key={c.code} value={`${c.name} (${c.code})`} />
// // //                   ))}
// // //                 </datalist>
// // //                 <p>Departure City</p>
// // //               </div>

// // //               <div className="box">
// // //                 <label>To</label>
// // //                 <input
// // //                   value={toCity}
// // //                   onChange={(e) => setToCity(e.target.value)}
// // //                   list="toCities"
// // //                 />
// // //                 <datalist id="toCities">
// // //                   {CITIES.map((c) => (
// // //                     <option key={c.code} value={`${c.name} (${c.code})`} />
// // //                   ))}
// // //                 </datalist>
// // //                 <p>Destination City</p>
// // //               </div>

// // //               <div className="box">
// // //                 <label>Departure</label>
// // //                 <input
// // //                   type="date"
// // //                   value={departureDate}
// // //                   onChange={(e) => setDepartureDate(e.target.value)}
// // //                 />
// // //               </div>

// // //               <div className="box no-border">
// // //                 <label>Travellers & Class</label>
// // //                 <div className="val">1 Traveller</div>
// // //                 <p>Economy</p>
// // //               </div>
// // //             </div>

// // //             {/* SWAP */}
// // //             <div className="swap-btn" onClick={swapCities}>
// // //               <ArrowLeftRight />
// // //             </div>

// // //             {/* SPECIAL FARES */}
// // //             <div className="special-fares-section">
// // //               <div className="fare-title">SPECIAL FARES</div>
// // //               <div className="fare-list">
// // //                 {Object.keys(FARE_MULTIPLIER).map((fare) => (
// // //                   <div
// // //                     key={fare}
// // //                     className={`fare-box ${selectedFare === fare ? "active" : ""}`}
// // //                     onClick={() => setSelectedFare(fare)}
// // //                   >
// // //                     <div className="f-main">{fare}</div>
// // //                     <div className="f-sub">Up to ₹600 off</div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* FLEXIFLY */}
// // //             <div className="flexifly-bar">
// // //               <label className="flexi-left">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={flexiFly}
// // //                   onChange={() => setFlexiFly(!flexiFly)}
// // //                 />
// // //                 <strong>Add FlexiFly</strong>
// // //                 <span>100% refund or zero date change</span>
// // //               </label>
// // //               <span className="flexi-price">₹999</span>
// // //             </div>

// // //             {/* PRICE */}
// // //             <div className="price-bar">
// // //               <span>Total Price</span>
// // //               <strong>₹{finalPrice}</strong>
// // //             </div>



// // //             {/* SEARCH */}
// // //             <button
// // //               className="main-search-btn"
// // //               onClick={() =>
// // //                 navigate("/flights", {
// // //                   state: {
// // //                     fromCity,
// // //                     toCity,
// // //                     departureDate,
// // //                     selectedFare,
// // //                     finalPrice,
// // //                   },
// // //                 })
// // //               }
// // //             >
// // //               SEARCH
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ================= NEXT SECTION ================= */}
// // //       <ExploreMoreBar />
// // //     </>
// // //   );}




// // import React, { useState } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import "./Hero.css";

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

// //           {/* ================= TOP NAV ================= */}
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

// //             <div className={getActive("/visa")} onClick={() => navigate("/visa")}>
// //               <IdCard />
// //               <span>Visa</span>
// //             </div>

// //             <div className={getActive("/cruise")} onClick={() => navigate("/cruise")}>
// //               <Ship />
// //               <span>Cruise</span>
// //             </div>
// //           </div>

// //           {/* ================= SEARCH CARD ================= */}
// //           <div className="mmt-card">

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

// //             <div className="swap-btn" onClick={swapCities}>
// //               <ArrowLeftRight />
// //             </div>

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

// //             <div className="price-bar">
// //               <span>Total Price</span>
// //               <strong>₹{finalPrice}</strong>
// //             </div>

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
// //     </>
// //   );
// // }


































// // // Hero.jsx
// // import React, { useState } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import "./Hero.css";

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
// //   Users,
// //   ChevronDown,
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
// //   const [showTravelerMenu, setShowTravelerMenu] = useState(false);
// //   const [travelers, setTravelers] = useState(1);
// //   const [travelClass, setTravelClass] = useState("Economy");

// //   const swapCities = () => {
// //     setFromCity(toCity);
// //     setToCity(fromCity);
// //   };

// //   const finalPrice = Math.round(
// //     BASE_PRICE * FARE_MULTIPLIER[selectedFare] * travelers + (flexiFly ? 999 : 0)
// //   );

// //   const getActive = (path) =>
// //     location.pathname === path ? "nav-item active" : "nav-item";

// //   const handleTravelerChange = (value) => {
// //     const newValue = travelers + value;
// //     if (newValue >= 1 && newValue <= 9) {
// //       setTravelers(newValue);
// //     }
// //   };

// //   const handleSearch = () => {
// //     navigate("/flights", {
// //       state: {
// //         fromCity,
// //         toCity,
// //         departureDate,
// //         selectedFare,
// //         travelers,
// //         travelClass,
// //         finalPrice,
// //       },
// //     });
// //   };

// //   return (
// //     <>
// //       {/* ================= HERO SECTION ================= */}
// //       <div className="mmt-hero-wrapper">
// //         <div className="mmt-main-container">

// //           {/* ================= TOP NAV ================= */}
// //           <div className="mmt-nav-bar">
// //             <div className={getActive("/flights")} onClick={() => navigate("/flights")}>
// //               <Plane className="nav-icon" />
// //               <span className="nav-label">Flights</span>
// //             </div>

// //             <div className={getActive("/hotels")} onClick={() => navigate("/hotels")}>
// //               <Hotel className="nav-icon" />
// //               <span className="nav-label">Hotels</span>
// //             </div>

// //             <div className="nav-item">
// //               <Home className="nav-icon" />
// //               <span className="nav-label">Villas</span>
// //             </div>

// //             <div className={getActive("/holiday")} onClick={() => navigate("/holiday")}>
// //               <Briefcase className="nav-icon" />
// //               <span className="nav-label">Holidays</span>
// //             </div>

// //             <div className={getActive("/train")} onClick={() => navigate("/train")}>
// //               <Train className="nav-icon" />
// //               <span className="nav-label">Trains</span>
// //             </div>

// //             <div className={getActive("/bus")} onClick={() => navigate("/bus")}>
// //               <Bus className="nav-icon" />
// //               <span className="nav-label">Buses</span>
// //             </div>

// //             <div className={getActive("/cab")} onClick={() => navigate("/cab")}>
// //               <CarTaxiFront className="nav-icon" />
// //               <span className="nav-label">Cabs</span>
// //             </div>

// //             <div className={getActive("/visa")} onClick={() => navigate("/visa")}>
// //               <IdCard className="nav-icon" />
// //               <span className="nav-label">Visa</span>
// //             </div>

// //             <div className={getActive("/cruise")} onClick={() => navigate("/cruise")}>
// //               <Ship className="nav-icon" />
// //               <span className="nav-label">Cruise</span>
// //             </div>
// //           </div>

// //           {/* ================= SEARCH CARD ================= */}
// //           <div className="mmt-card">

// //             <div className="input-grid">
// //               <div className="box">
// //                 <label className="box-label">From</label>
// //                 <input
// //                   value={fromCity}
// //                   onChange={(e) => setFromCity(e.target.value)}
// //                   list="fromCities"
// //                   className="box-input"
// //                   placeholder="Select city"
// //                 />
// //                 <datalist id="fromCities">
// //                   {CITIES.map((c) => (
// //                     <option key={c.code} value={`${c.name} (${c.code})`} />
// //                   ))}
// //                 </datalist>
// //                 <p className="box-hint">Departure City</p>
// //               </div>

// //               <div className="box">
// //                 <label className="box-label">To</label>
// //                 <input
// //                   value={toCity}
// //                   onChange={(e) => setToCity(e.target.value)}
// //                   list="toCities"
// //                   className="box-input"
// //                   placeholder="Select city"
// //                 />
// //                 <datalist id="toCities">
// //                   {CITIES.map((c) => (
// //                     <option key={c.code} value={`${c.name} (${c.code})`} />
// //                   ))}
// //                 </datalist>
// //                 <p className="box-hint">Destination City</p>
// //               </div>

// //               <div className="box">
// //                 <label className="box-label">Departure</label>
// //                 <input
// //                   type="date"
// //                   value={departureDate}
// //                   onChange={(e) => setDepartureDate(e.target.value)}
// //                   className="box-input date-input"
// //                 />
// //               </div>

// //               <div className="box traveler-box" onClick={() => setShowTravelerMenu(!showTravelerMenu)}>
// //                 <label className="box-label">Travellers & Class</label>
// //                 <div className="traveler-display">
// //                   <Users size={16} />
// //                   <span className="traveler-count">{travelers} Traveller</span>
// //                   <ChevronDown size={16} className="dropdown-icon" />
// //                 </div>
// //                 <p className="box-hint">{travelClass}</p>
                
// //                 {showTravelerMenu && (
// //                   <div className="traveler-menu">
// //                     <div className="traveler-option">
// //                       <span>Travellers</span>
// //                       <div className="traveler-controls">
// //                         <button onClick={() => handleTravelerChange(-1)} className="control-btn">-</button>
// //                         <span>{travelers}</span>
// //                         <button onClick={() => handleTravelerChange(1)} className="control-btn">+</button>
// //                       </div>
// //                     </div>
// //                     <div className="class-options">
// //                       {["Economy", "Premium Economy", "Business", "First"].map((cls) => (
// //                         <div 
// //                           key={cls} 
// //                           className={`class-option ${travelClass === cls ? 'active' : ''}`}
// //                           onClick={() => setTravelClass(cls)}
// //                         >
// //                           {cls}
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>

// //             <div className="swap-btn" onClick={swapCities} aria-label="Swap cities">
// //               <ArrowLeftRight size={18} />
// //             </div>

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

// //             <div className="flexifly-bar">
// //               <label className="flexi-left">
// //                 <input
// //                   type="checkbox"
// //                   checked={flexiFly}
// //                   onChange={() => setFlexiFly(!flexiFly)}
// //                   className="flexi-checkbox"
// //                 />
// //                 <strong className="flexi-title">Add FlexiFly</strong>
// //                 <span className="flexi-desc">100% refund or zero date change</span>
// //               </label>
// //               <span className="flexi-price">₹999</span>
// //             </div>

// //             <div className="price-bar">
// //               <span className="price-label">Total Price</span>
// //               <strong className="price-value">₹{finalPrice}</strong>
// //             </div>

// //             <button
// //               className="main-search-btn"
// //               onClick={handleSearch}
// //             >
// //               SEARCH
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }


























// // Hero.js - Updated with Flight Options Bar
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
//   Calendar,
//   MapPin,
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
//   const [tripType, setTripType] = useState("Round Trip");
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

//   const today = new Date().toISOString().split('T')[0];
//   const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

//   return (
//     <>
//       {/* Main Hero Section */}
//       <div className="hero-compact-wrapper">
//         {/* ================= TOP NAV ================= */}
//         <div className="hero-compact-nav">
//           {[
//             { icon: Plane, path: "/flights", label: "Flights" },
//             { icon: Hotel, path: "/hotels", label: "Hotels" },
//             { icon: Home, label: "Villas" },
//             { icon: Briefcase, path: "/holiday", label: "Holidays" },
//             { icon: Train, path: "/train", label: "Trains" },
//             { icon: Bus, path: "/bus", label: "Buses" },
//             { icon: CarTaxiFront, path: "/cab", label: "Cabs" },
//             { icon: IdCard, path: "/visa", label: "Visa" },
//             { icon: Ship, path: "/cruise", label: "Cruise" },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className={item.path ? getActive(item.path) : "nav-item"}
//               onClick={() => item.path && navigate(item.path)}
//             >
//               <item.icon className="nav-icon" size={20} />
//               <span className="nav-label">{item.label}</span>
//             </div>
//           ))}
//         </div>

        

//         {/* ================= COMPACT SEARCH CARD ================= */}
//         <div className="hero-compact-card">
//           {/* City Inputs Row */}
//           <div className="compact-input-row">
//             <div className="city-input-box">
//               <div className="input-header">
//                 <MapPin size={14} />
//                 <label>From</label>
//               </div>
//               <input
//                 value={fromCity}
//                 onChange={(e) => setFromCity(e.target.value)}
//                 list="fromCities"
//                 className="city-input"
//                 placeholder="Delhi (DEL)"
//               />
//             </div>

//             <button className="swap-btn-compact" onClick={swapCities}>
//               <ArrowLeftRight size={16} />
//             </button>

//             <div className="city-input-box">
//               <div className="input-header">
//                 <MapPin size={14} />
//                 <label>To</label>
//               </div>
//               <input
//                 value={toCity}
//                 onChange={(e) => setToCity(e.target.value)}
//                 list="toCities"
//                 className="city-input"
//                 placeholder="Mumbai (BOM)"
//               />
//             </div>
//           </div>

//           <datalist id="fromCities">
//             {CITIES.map((c) => (
//               <option key={c.code} value={`${c.name} (${c.code})`} />
//             ))}
//           </datalist>
//           <datalist id="toCities">
//             {CITIES.map((c) => (
//               <option key={c.code} value={`${c.name} (${c.code})`} />
//             ))}
//           </datalist>

//           {/* Date & Traveler Row */}
//           <div className="compact-secondary-row">
//             <div className="date-box">
//               <div className="input-header">
//                 <Calendar size={14} />
//                 <label>Departure</label>
//               </div>
//               <input
//                 type="date"
//                 value={departureDate}
//                 onChange={(e) => setDepartureDate(e.target.value)}
//                 className="date-input-compact"
//                 min={today}
//               />
//             </div>

//             <div className="traveler-box-compact" onClick={() => setShowTravelerMenu(!showTravelerMenu)}>
//               <div className="input-header">
//                 <Users size={14} />
//                 <label>Travellers & Class</label>
//               </div>
//               <div className="traveler-display-compact">
//                 <span className="traveler-count">{travelers} {travelers === 1 ? 'Traveller' : 'Travellers'}</span>
//                 <span className="traveler-class">• {travelClass}</span>
//                 <ChevronDown size={14} className={`dropdown-icon ${showTravelerMenu ? 'rotate' : ''}`} />
//               </div>
//             </div>
//           </div>

//           {/* Traveler Menu */}
//           {showTravelerMenu && (
//             <div className="compact-traveler-menu">
//               <div className="traveler-control-compact">
//                 <span>Travellers</span>
//                 <div className="counter">
//                   <button onClick={() => handleTravelerChange(-1)} disabled={travelers <= 1}>-</button>
//                   <span>{travelers}</span>
//                   <button onClick={() => handleTravelerChange(1)} disabled={travelers >= 9}>+</button>
//                 </div>
//               </div>
//               <div className="class-grid">
//                 {["Economy", "Premium", "Business", "First"].map((cls) => (
//                   <button
//                     key={cls}
//                     className={`class-btn ${travelClass === cls ? 'active' : ''}`}
//                     onClick={() => setTravelClass(cls)}
//                   >
//                     {cls}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Special Fares */}
//           <div className="compact-fares-section">
//             <h4 className="fare-title-compact">SPECIAL FARES</h4>
//             <div className="fare-grid">
//               {Object.keys(FARE_MULTIPLIER).map((fare) => (
//                 <button
//                   key={fare}
//                   className={`fare-btn ${selectedFare === fare ? 'active' : ''}`}
//                   onClick={() => setSelectedFare(fare)}
//                 >
//                   <span className="fare-name">{fare}</span>
//                   <span className="fare-discount">Save ₹{Math.round(BASE_PRICE * (1 - FARE_MULTIPLIER[fare]))}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* FlexiFly & Price */}
//           <div className="compact-action-row">
//             <div className="flexifly-compact">
//               <label className="flexi-label">
//                 <input
//                   type="checkbox"
//                   checked={flexiFly}
//                   onChange={() => setFlexiFly(!flexiFly)}
//                   className="flexi-check"
//                 />
//                 <div className="flexi-text">
//                   <strong>Add FlexiFly</strong>
//                   <span>100% refund • No change fees</span>
//                 </div>
//               </label>
//               <span className="flexi-price-compact">+₹999</span>
//             </div>

//             <div className="price-display-compact">
//               <div className="price-info">
//                 <span>Total Price</span>
//                 <div className="price-tag">₹{finalPrice}</div>
//               </div>
//               <button className="search-btn-compact" onClick={handleSearch}>
//                 SEARCH
//               </button>
//             </div>
//           </div>
//         </div>

       
//       </div>

//     </>
//   );
// }


































// // Hero.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Plane,
//   Hotel,
//   Home,
//   Briefcase,
//   Train,
//   CarTaxiFront,
//   MapPin,
//   Calendar,
//   Users,
//   ChevronDown,
//   ArrowLeftRight,
//   Search,
//   Car,
// } from "lucide-react";
// import "./Hero.css";

// export default function Hero() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("hotels");
//   const [showTravelerMenu, setShowTravelerMenu] = useState(false);

//   // Hotels State
//   const [hotelsData, setHotelsData] = useState({
//     destination: "",
//     checkIn: "Tue, Feb 10",
//     checkOut: "Wed, Feb 11",
//     rooms: 1,
//     adults: 2,
//     children: 0,
//   });

//   // Flights State
//   const [flightsData, setFlightsData] = useState({
//     tripType: "return",
//     from: "Amritsar",
//     fromAirport: "All airports",
//     to: "Mumbai",
//     toAirport: "All airports",
//     departure: "Wed, Feb 18",
//     returnDate: "Mon, Feb 23",
//     travelers: 1,
//     class: "Economy",
//     directOnly: false,
//   });

//   // Flight + Hotel State
//   const [flightHotelData, setFlightHotelData] = useState({
//     from: "Vancouver",
//     to: "Las Vegas",
//     departure: "Wed, Feb 11",
//     return: "Sat, Feb 14",
//     checkIn: "Wed, Feb 11",
//     checkOut: "Sat, Feb 14",
//     rooms: 1,
//     adults: 2,
//     class: "Economy",
//   });

//   // Trains State
//   const [trainsData, setTrainsData] = useState({
//     from: "",
//     to: "",
//     departureTime: "Tue, Feb 10",
//     departureHour: "09:10",
//     returnTime: "",
//     passengers: 1,
//     ageGroup: "30-59",
//     cards: 0,
//   });

//   // Cars State
//   const [carsData, setCarsData] = useState({
//     pickup: "Suvarnabhumi Airport (BKK)",
//     dropoff: "",
//     pickupDate: "Thu, Feb 12",
//     dropoffDate: "Sun, Feb 15",
//     differentLocation: false,
//     licenseCountry: "India",
//     age: "30-60",
//   });

//   // Attractions State
//   const [attractionQuery, setAttractionQuery] = useState("");

//   const tabs = [
//     { id: "hotels", label: "Hotels & Homes", icon: Hotel },
//     { id: "flights", label: "Flights", icon: Plane },
//     { id: "flight-hotel", label: "Flight + Hotel", icon: Briefcase },
//     { id: "trains", label: "Trains", icon: Train },
//     { id: "cars", label: "Cars", icon: CarTaxiFront },
//     { id: "attractions", label: "Attractions & Tours", icon: MapPin },
//   ];

//   const handleSearch = (data) => {
//     navigate(`/${activeTab}`, { state: data });
//   };

//   // Hotels Tab
//   const renderHotelsTab = () => (
//     <div className="space-y-4">
//       {/* Destination Input */}
//       <div className="space-y-2">
//         <h3 className="text-sm font-medium text-gray-600">Destination/Hotel Name</h3>
//         <div className="relative">
//           <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//           <input
//             type="text"
//             value={hotelsData.destination}
//             onChange={(e) => setHotelsData({...hotelsData, destination: e.target.value})}
//             placeholder="City, airport, region, landmark or hotel name"
//             className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           />
//         </div>
//       </div>

//       {/* Check-in Check-out */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <h3 className="text-sm font-medium text-gray-600">Check-in</h3>
//           <div className="relative">
//             <input
//               type="text"
//               value={hotelsData.checkIn}
//               readOnly
//               className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm cursor-pointer hover:border-gray-400"
//             />
//           </div>
//         </div>
        
//         <div className="space-y-2">
//           <h3 className="text-sm font-medium text-gray-600">Check-out</h3>
//           <div className="relative">
//             <input
//               type="text"
//               value={hotelsData.checkOut}
//               readOnly
//               className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm cursor-pointer hover:border-gray-400"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Rooms and Guests */}
//       <div className="space-y-2">
//         <h3 className="text-sm font-medium text-gray-600">Rooms and Guests</h3>
//         <div className="relative">
//           <select
//             value={`${hotelsData.rooms} room, ${hotelsData.adults} adults, ${hotelsData.children} children`}
//             onChange={(e) => {
//               const value = e.target.value;
//               const parts = value.split(', ');
//               const rooms = parseInt(parts[0]);
//               const adults = parseInt(parts[1]);
//               const children = parseInt(parts[2]);
//               setHotelsData({...hotelsData, rooms, adults, children});
//             }}
//             className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm appearance-none cursor-pointer"
//           >
//             <option value="1 room, 2 adults, 0 children">1 room, 2 adults, 0 children</option>
//             <option value="1 room, 1 adult, 0 children">1 room, 1 adult, 0 children</option>
//             <option value="1 room, 2 adults, 1 child">1 room, 2 adults, 1 child</option>
//             <option value="2 rooms, 4 adults, 0 children">2 rooms, 4 adults, 0 children</option>
//           </select>
//           <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
//         </div>
//       </div>

//       <button
//         onClick={() => handleSearch({type: "hotels", ...hotelsData})}
//         className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm flex items-center justify-center gap-2"
//       >
//         <Search size={16} />
//         Search
//       </button>
//     </div>
//   );

//   // Flights Tab
//   const renderFlightsTab = () => (
//     <div className="space-y-4">
//       {/* Trip Type Selection */}
//       <div className="flex gap-2">
//         {["Return", "One-way", "Multi-city", "Direct"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setFlightsData({...flightsData, tripType: type.toLowerCase()})}
//             className={`px-3 py-1.5 rounded text-xs font-medium ${flightsData.tripType === type.toLowerCase() ? 'bg-blue-100 text-blue-600 border border-blue-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* From/To with Airport Checkboxes */}
//       <div className="space-y-3">
//         <div className="flex items-center gap-2">
//           <div className="flex-1 space-y-1">
//             <div className="text-sm font-medium text-gray-600">Amritsar</div>
//             <div className="flex items-center gap-1">
//               <input
//                 type="checkbox"
//                 id="fromAllAirports"
//                 checked={flightsData.fromAirport === "All airports"}
//                 onChange={(e) => setFlightsData({...flightsData, fromAirport: e.target.checked ? "All airports" : ""})}
//                 className="h-3 w-3"
//               />
//               <label htmlFor="fromAllAirports" className="text-xs text-gray-500">All airports</label>
//             </div>
//           </div>
          
//           <button
//             onClick={() => {
//               const temp = flightsData.from;
//               setFlightsData({
//                 ...flightsData,
//                 from: flightsData.to,
//                 to: temp
//               });
//             }}
//             className="p-1.5 hover:bg-gray-100 rounded-full"
//           >
//             <ArrowLeftRight size={14} className="text-gray-500" />
//           </button>
          
//           <div className="flex-1 space-y-1">
//             <div className="text-sm font-medium text-gray-600">Mumbai</div>
//             <div className="flex items-center gap-1">
//               <input
//                 type="checkbox"
//                 id="toAllAirports"
//                 checked={flightsData.toAirport === "All airports"}
//                 onChange={(e) => setFlightsData({...flightsData, toAirport: e.target.checked ? "All airports" : ""})}
//                 className="h-3 w-3"
//               />
//               <label htmlFor="toAllAirports" className="text-xs text-gray-500">All airports</label>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dates */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-1">
//           <div className="text-xs text-gray-500">Departure</div>
//           <div className="text-sm font-medium">{flightsData.departure}</div>
//         </div>
        
//         <div className="space-y-1">
//           <div className="text-xs text-gray-500">Return</div>
//           <div className="text-sm font-medium">{flightsData.returnDate}</div>
//         </div>
//       </div>

//       {/* Travelers & Class */}
//       <div className="space-y-1">
//         <div 
//           className="relative cursor-pointer border border-gray-300 rounded-lg px-3 py-2 hover:border-gray-400"
//           onClick={() => setShowTravelerMenu(!showTravelerMenu)}
//         >
//           <div className="text-sm font-medium">{flightsData.travelers} adult · {flightsData.class}</div>
          
//           {showTravelerMenu && (
//             <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-3 left-0">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm">Travellers</span>
//                 <div className="flex items-center gap-2">
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       if (flightsData.travelers > 1) {
//                         setFlightsData({...flightsData, travelers: flightsData.travelers - 1});
//                       }
//                     }}
//                     className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-sm"
//                   >
//                     -
//                   </button>
//                   <span className="text-sm">{flightsData.travelers}</span>
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setFlightsData({...flightsData, travelers: flightsData.travelers + 1});
//                     }}
//                     className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-sm"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-1">
//                 {["Economy", "Premium", "Business", "First"].map((cls) => (
//                   <button
//                     key={cls}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setFlightsData({...flightsData, class: cls});
//                     }}
//                     className={`py-1.5 rounded text-xs ${flightsData.class === cls ? 'bg-blue-100 text-blue-600 border border-blue-200' : 'bg-gray-100 text-gray-600'}`}
//                   >
//                     {cls}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <button
//         onClick={() => handleSearch({type: "flights", ...flightsData})}
//         className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition text-sm flex items-center justify-center gap-2"
//       >
//         <Plane size={16} />
//         Search Flights
//       </button>
//     </div>
//   );

//   // Flight + Hotel Tab
//   const renderFlightHotelTab = () => (
//     <div className="space-y-4">
//       {/* From/To */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-1">
//           <div className="text-sm font-medium text-gray-600">From</div>
//           <div className="text-base font-semibold">{flightHotelData.from}</div>
//         </div>
        
//         <div className="space-y-1">
//           <div className="text-sm font-medium text-gray-600">To</div>
//           <div className="text-base font-semibold">{flightHotelData.to}</div>
//         </div>
//       </div>

//       {/* Dates Section */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-1">
//           <div className="text-sm font-medium text-gray-600">Depart</div>
//           <div className="text-base font-semibold">{flightHotelData.departure}</div>
//         </div>
        
//         <div className="space-y-1">
//           <div className="text-sm font-medium text-gray-600">Return</div>
//           <div className="text-base font-semibold">{flightHotelData.return}</div>
//         </div>
//       </div>

//       {/* Hotel Check-in/Check-out */}
//       <div className="space-y-1">
//         <div className="text-sm font-medium text-gray-600">Check-in</div>
//         <div className="flex items-center gap-2">
//           <div className="text-base font-semibold">{flightHotelData.checkIn}</div>
//           <div className="text-sm text-gray-500">3 nights</div>
//           <div className="text-base font-semibold">{flightHotelData.checkOut}</div>
//         </div>
//       </div>

//       {/* Rooms & Guests */}
//       <div className="space-y-1">
//         <div className="text-sm font-medium text-gray-600">Rooms & Guests</div>
//         <div className="relative">
//           <select
//             value={`${flightHotelData.rooms} room, ${flightHotelData.adults} adults`}
//             onChange={(e) => {
//               const value = e.target.value;
//               const parts = value.split(', ');
//               const rooms = parseInt(parts[0]);
//               const adults = parseInt(parts[1]);
//               setFlightHotelData({...flightHotelData, rooms, adults});
//             }}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm appearance-none cursor-pointer"
//           >
//             <option value="1 room, 2 adults">2 adults | 1 room</option>
//             <option value="1 room, 1 adult">1 adult | 1 room</option>
//             <option value="2 rooms, 4 adults">4 adults | 2 rooms</option>
//           </select>
//           <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
//         </div>
//       </div>

//       <button
//         onClick={() => handleSearch({type: "flight-hotel", ...flightHotelData})}
//         className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition text-sm flex items-center justify-center gap-2"
//       >
//         <Briefcase size={16} />
//         Search Flight + Hotel
//       </button>
//     </div>
//   );

//   // Trains Tab
//   const renderTrainsTab = () => (
//     <div className="space-y-4">
//       {/* From/To Stations */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-1">
//           <div className="text-sm font-medium text-gray-600">From</div>
//           <input
//             type="text"
//             value={trainsData.from}
//             onChange={(e) => setTrainsData({...trainsData, from: e.target.value})}
//             placeholder="Departure Station"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           />
//         </div>
        
//         <div className="space-y-1">
//           <div className="text-sm font-medium text-gray-600">To</div>
//           <input
//             type="text"
//             value={trainsData.to}
//             onChange={(e) => setTrainsData({...trainsData, to: e.target.value})}
//             placeholder="Arrival Station"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           />
//         </div>
//       </div>

//       {/* Departure Time */}
//       <div className="space-y-1">
//         <div className="text-sm font-medium text-gray-600">Departure time</div>
//         <div className="flex items-center gap-2">
//           <div className="flex-1 text-sm font-medium">{trainsData.departureTime}</div>
//           <div className="flex-1 text-sm font-medium">{trainsData.departureHour}</div>
//         </div>
//       </div>

//       {/* Return Time */}
//       <div className="space-y-1">
//         <div className="flex justify-between items-center">
//           <div className="text-sm font-medium text-gray-600">Return time</div>
//           <button className="text-blue-600 text-xs font-medium hover:text-blue-700">Add return trip</button>
//         </div>
//         <div className="text-sm text-gray-400">No return added</div>
//       </div>

//       {/* Passenger Info */}
//       <div className="space-y-1">
//         <div className="text-sm font-medium text-gray-600">Passenger Details</div>
//         <div className="relative">
//           <select
//             value={`${trainsData.passengers} passenger (aged ${trainsData.ageGroup}) · ${trainsData.cards} cards`}
//             onChange={(e) => {
//               const value = e.target.value;
//               const passengerMatch = value.match(/(\d+) passenger/);
//               const ageMatch = value.match(/aged (\d+-\d+)/);
//               const cardsMatch = value.match(/(\d+) cards/);
              
//               if (passengerMatch && ageMatch && cardsMatch) {
//                 setTrainsData({
//                   ...trainsData,
//                   passengers: parseInt(passengerMatch[1]),
//                   ageGroup: ageMatch[1],
//                   cards: parseInt(cardsMatch[1])
//                 });
//               }
//             }}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm appearance-none cursor-pointer"
//           >
//             <option value="1 passenger (aged 30-59) · 0 cards">1 passenger (aged 30-59) · 0 cards</option>
//             <option value="2 passengers (aged 30-59) · 0 cards">2 passengers (aged 30-59) · 0 cards</option>
//             <option value="1 passenger (aged 30-59) · 1 card">1 passenger (aged 30-59) · 1 card</option>
//           </select>
//           <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
//         </div>
//       </div>

//       <div className="flex gap-3">
//         <button className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition text-sm">
//           Explore hotels
//         </button>
//         <button
//           onClick={() => handleSearch({type: "trains", ...trainsData})}
//           className="flex-1 bg-orange-500 text-white py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition text-sm flex items-center justify-center gap-2"
//         >
//           <Train size={16} />
//           Search Trains
//         </button>
//       </div>
//     </div>
//   );

//   // Cars Tab
//   const renderCarsTab = () => (
//     <div className="space-y-4">
//       {/* Pick-up Location */}
//       <div className="space-y-1">
//         <div className="text-sm font-medium text-gray-600">Pick-up location</div>
//         <div className="relative">
//           <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//           <input
//             type="text"
//             value={carsData.pickup}
//             onChange={(e) => setCarsData({...carsData, pickup: e.target.value})}
//             className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           />
//         </div>
//       </div>

//       {/* Different Location Checkbox */}
//       <div className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           id="differentLocation"
//           checked={carsData.differentLocation}
//           onChange={(e) => setCarsData({...carsData, differentLocation: e.target.checked})}
//           className="h-4 w-4"
//         />
//         <label htmlFor="differentLocation" className="text-sm text-gray-700">
//           Drop off at a different location
//         </label>
//       </div>

//       {/* Pick-up/Drop-off Dates */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-1">
//           <div className="text-sm font-medium text-gray-600">Pick-up date</div>
//           <div className="text-base font-semibold">{carsData.pickupDate}</div>
//         </div>
        
//         <div className="space-y-1">
//           <div className="text-sm font-medium text-gray-600">Drop-off date</div>
//           <div className="text-base font-semibold">{carsData.dropoffDate}</div>
//         </div>
//       </div>

//       {/* License Country & Age */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-1">
//           <div className="text-sm font-medium text-gray-600">Driving licence issuing country/region</div>
//           <select
//             value={carsData.licenseCountry}
//             onChange={(e) => setCarsData({...carsData, licenseCountry: e.target.value})}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm cursor-pointer"
//           >
//             <option value="India">India</option>
//             <option value="USA">USA</option>
//             <option value="UK">UK</option>
//             <option value="Australia">Australia</option>
//           </select>
//         </div>
        
//         <div className="space-y-1">
//           <div className="text-sm font-medium text-gray-600">Age</div>
//           <div className="text-base font-semibold">{carsData.age}</div>
//         </div>
//       </div>

//       <button
//         onClick={() => handleSearch({type: "cars", ...carsData})}
//         className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition text-sm flex items-center justify-center gap-2"
//       >
//         <Car size={16} />
//         Search Cars
//       </button>
//     </div>
//   );

//   // Attractions Tab
//   const renderAttractionsTab = () => (
//     <div className="space-y-4">
//       <div className="space-y-1">
//         <div className="text-sm font-medium text-gray-600">City or region</div>
//         <div className="relative">
//           <input
//             type="text"
//             value={attractionQuery}
//             onChange={(e) => setAttractionQuery(e.target.value)}
//             placeholder="Search destinations, attractions, and experiences"
//             className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           />
//         </div>
//       </div>

//       <button
//         onClick={() => handleSearch({type: "attractions", query: attractionQuery})}
//         className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition text-sm flex items-center justify-center gap-2"
//       >
//         <Search size={16} />
//         Search
//       </button>
//     </div>
//   );

//   // Render active tab
//   const renderActiveTab = () => {
//     switch (activeTab) {
//       case "hotels":
//         return renderHotelsTab();
//       case "flights":
//         return renderFlightsTab();
//       case "flight-hotel":
//         return renderFlightHotelTab();
//       case "trains":
//         return renderTrainsTab();
//       case "cars":
//         return renderCarsTab();
//       case "attractions":
//         return renderAttractionsTab();
//       default:
//         return renderHotelsTab();
//     }
//   };

//   return (
//     <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 md:p-6 bg-gradient-to-b from-blue-50 to-white">
//       {/* Background with reduced height */}
//       <div className="absolute top-0 left-0 right-0 h-[60vh] z-0 overflow-hidden">
//         <img
//           src="https://dimg04.tripcdn.com/images/05E3f12000lo6txgqF88C.webp"
//           alt="Travel Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 w-full max-w-4xl mt-12">
//         {/* Tab Navigation - Simplified styling */}
//         <div className="flex flex-wrap gap-1 md:gap-2 justify-center mb-6">
//           {tabs.map((tab) => {
//             const Icon = tab.icon;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`
//                   flex items-center gap-1.5 px-3 py-2 rounded-md transition-all duration-200 text-xs md:text-sm
//                   ${activeTab === tab.id 
//                     ? "bg-white text-blue-600 shadow-md font-semibold" 
//                     : "bg-white/90 text-gray-600 hover:bg-white hover:text-blue-500 font-medium"
//                   }
//                   hover:shadow-sm min-w-[100px] md:min-w-[120px] justify-center
//                 `}
//               >
//                 <Icon size={16} />
//                 <span className="whitespace-nowrap">
//                   {tab.label}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Search Card - Compact design */}
//         <div className="bg-white rounded-xl shadow-xl p-5 md:p-6">
//           {renderActiveTab()}
//         </div>
//       </div>
//     </div>
//   );
// }















import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Bed, Plane, Hotel, Car, MapPin, 
  Search, ChevronDown, ArrowLeftRight, Info,
  Calendar, Users, Building, Navigation,
  Clock, X, Check, Plus, Minus, Ship,
  Bus, Umbrella, Palmtree
} from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Hotels');
  
  // States for different tabs
  const [hotelsData, setHotelsData] = useState({
    destination: '',
    checkIn: 'Tue, Feb 18',
    checkOut: 'Wed, Feb 19',
    rooms: 1,
    adults: 2,
    children: 0,
  });

  const [flightsData, setFlightsData] = useState({
    tripType: 'return',
    from: 'Delhi',
    to: 'Mumbai',
    departure: 'Wed, Feb 19',
    returnDate: 'Mon, Feb 24',
    travelers: 1,
    class: 'Economy',
  });

  const [flightHotelData, setFlightHotelData] = useState({
    from: 'Delhi',
    to: 'Goa',
    departure: 'Wed, Feb 19',
    return: 'Sat, Feb 22',
    rooms: 1,
    adults: 2,
  });

  const [busData, setBusData] = useState({
    from: '',
    to: '',
    departureDate: 'Tue, Feb 18',
    passengers: 1,
  });

  const [cabData, setCabData] = useState({
    pickup: 'Delhi Airport (DEL)',
    dropoff: 'Same as pickup',
    pickupDate: 'Thu, Feb 20',
    dropoffDate: 'Sun, Feb 23',
    differentLocation: false,
    licenseCountry: 'India',
    age: '30-60',
  });

  const [cruiseData, setCruiseData] = useState({
    destination: '',
    departurePort: 'Mumbai',
    departureDate: 'Wed, Feb 19',
    returnDate: 'Sat, Feb 22',
    rooms: 1,
    adults: 2,
    children: 0,
  });

  const [tourData, setTourData] = useState({
    destination: '',
    checkIn: 'Wed, Feb 19',
    checkOut: 'Sat, Feb 22',
    rooms: 1,
    adults: 2,
    children: 0,
  });

  const [holidayData, setHolidayData] = useState({
    from: 'Delhi',
    to: 'Goa',
    departure: 'Wed, Feb 19',
    return: 'Sat, Feb 22',
    rooms: 1,
    adults: 2,
    children: 0,
  });

  // Modal states
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showGuestsModal, setShowGuestsModal] = useState(false);
  const [showClassModal, setShowClassModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);
  const [showPassengerModal, setShowPassengerModal] = useState(false);
  const [showPortModal, setShowPortModal] = useState(false);
  
  // Current modal type
  const [modalType, setModalType] = useState('');
  const [currentDateSelection, setCurrentDateSelection] = useState('checkin');

  // Refs to track input values without re-renders
  const hotelsDestinationRef = useRef('');
  const flightsFromRef = useRef('Delhi');
  const flightsToRef = useRef('Mumbai');
  const flightHotelFromRef = useRef('Delhi');
  const flightHotelToRef = useRef('Goa');
  const busFromRef = useRef('');
  const busToRef = useRef('');
  const cabPickupRef = useRef('Delhi Airport (DEL)');
  const cruiseDestinationRef = useRef('');
  const tourDestinationRef = useRef('');
  const holidayFromRef = useRef('Delhi');
  const holidayToRef = useRef('Goa');

  const tabs = [
    { id: 'hotels', name: 'Hotels', icon: <Bed size={18} /> },
    { id: 'hotels-homes', name: 'Hotels & Homes', icon: <Building size={18} /> },
    { id: 'flights', name: 'Flights', icon: <Plane size={18} /> },
    { id: 'flight-hotel', name: 'Flights & Hotel', icon: <Hotel size={18} /> },
    { id: 'bus', name: 'Bus', icon: <Bus size={18} /> },
    { id: 'cab', name: 'Cab', icon: <Car size={18} /> },
    { id: 'cruise', name: 'Cruise', icon: <Ship size={18} /> },
    { id: 'tour', name: 'Tour', icon: <Umbrella size={18} /> },
    { id: 'holiday', name: 'Holiday', icon: <Palmtree size={18} /> },
  ];

  // Data for suggestions
  const popularDestinations = [
    { name: 'Mumbai', type: 'city', country: 'India', code: 'BOM' },
    { name: 'Delhi', type: 'city', country: 'India', code: 'DEL' },
    { name: 'Bangalore', type: 'city', country: 'India', code: 'BLR' },
    { name: 'Goa', type: 'city', country: 'India', code: 'GOI' },
    { name: 'Kolkata', type: 'city', country: 'India', code: 'CCU' },
    { name: 'Chennai', type: 'city', country: 'India', code: 'MAA' },
    { name: 'Hyderabad', type: 'city', country: 'India', code: 'HYD' },
    { name: 'Jaipur', type: 'city', country: 'India', code: 'JAI' },
    { name: 'Dubai', type: 'city', country: 'UAE', code: 'DXB' },
    { name: 'Singapore', type: 'city', country: 'Singapore', code: 'SIN' },
    { name: 'Bangkok', type: 'city', country: 'Thailand', code: 'BKK' },
    { name: 'Paris', type: 'city', country: 'France', code: 'CDG' },
    { name: 'London', type: 'city', country: 'UK', code: 'LHR' },
  ];

  const busStations = [
    'Delhi ISBT Kashmiri Gate',
    'Mumbai Central Bus Station',
    'Bangalore Kempegowda Bus Station',
    'Chennai Koyambedu',
    'Kolkata Esplanade',
    'Hyderabad MGBS',
    'Jaipur Sindhi Camp',
    'Goa Panaji Bus Stand',
  ];

  const cruisePorts = [
    'Mumbai Port',
    'Goa Port',
    'Chennai Port',
    'Kochi Port',
    'Singapore Cruise Centre',
    'Dubai Cruise Terminal',
    'Bangkok Port',
    'Phuket Cruise Port',
  ];

  const tourDestinations = [
    'Goa Beach Tour',
    'Rajasthan Heritage',
    'Kerala Backwaters',
    'Himachal Adventure',
    'Uttarakhand Pilgrimage',
    'Andaman Islands',
    'Ladakh Expedition',
    'Golden Triangle',
  ];

  const timesList = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', 
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];

  // Date functions
  const getFutureDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      formatted: `${daysOfWeek[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`,
      date: date
    };
  };

  const datesList = Array.from({ length: 30 }, (_, i) => getFutureDate(i + 1));

  // Search handler - Now gets values from refs
  const handleSearch = () => {
    let data;
    let navigatePath = '';
    
    switch(activeTab) {
      case 'Hotels':
        setHotelsData(prev => ({...prev, destination: hotelsDestinationRef.current}));
        data = { 
          type: 'hotels', 
          ...hotelsData,
          destination: hotelsDestinationRef.current
        };
        navigatePath = '/hotels';
        break;
      case 'Hotels & Homes':
        setHotelsData(prev => ({...prev, destination: hotelsDestinationRef.current}));
        data = { 
          type: 'hotels-homes', 
          ...hotelsData,
          destination: hotelsDestinationRef.current
        };
        navigatePath = '/homestay';
        break;
      case 'Flights':
        setFlightsData(prev => ({...prev, from: flightsFromRef.current, to: flightsToRef.current}));
        data = { 
          type: 'flights', 
          ...flightsData,
          from: flightsFromRef.current,
          to: flightsToRef.current
        };
        navigatePath = '/flights';
        break;
      case 'Flights & Hotel':
        setFlightHotelData(prev => ({...prev, from: flightHotelFromRef.current, to: flightHotelToRef.current}));
        data = { 
          type: 'flight-hotel', 
          ...flightHotelData,
          from: flightHotelFromRef.current,
          to: flightHotelToRef.current
        };
        navigatePath = '/hotels&Flights';
        break;
      case 'Bus':
        setBusData(prev => ({...prev, from: busFromRef.current, to: busToRef.current}));
        data = { 
          type: 'bus', 
          ...busData,
          from: busFromRef.current,
          to: busToRef.current
        };
        navigatePath = '/bus';
        break;
      case 'Cab':
        setCabData(prev => ({...prev, pickup: cabPickupRef.current}));
        data = { 
          type: 'cab', 
          ...cabData,
          pickup: cabPickupRef.current
        };
        navigatePath = '/cab';
        break;
      case 'Cruise':
        setCruiseData(prev => ({...prev, destination: cruiseDestinationRef.current}));
        data = { 
          type: 'cruise', 
          ...cruiseData,
          destination: cruiseDestinationRef.current
        };
        navigatePath = '/cruise';
        break;
      case 'Tour':
        setTourData(prev => ({...prev, destination: tourDestinationRef.current}));
        data = { 
          type: 'tour', 
          ...tourData,
          destination: tourDestinationRef.current
        };
        navigatePath = '/tours';
        break;
      case 'Holiday':
        setHolidayData(prev => ({...prev, from: holidayFromRef.current, to: holidayToRef.current}));
        data = { 
          type: 'holiday', 
          ...holidayData,
          from: holidayFromRef.current,
          to: holidayToRef.current
        };
        navigatePath = '/holiday';
        break;
    }
    
    navigate(navigatePath, { state: data });
  };

  // Calendar Modal Component
  const CalendarModal = () => {
    const [tempStartDate, setTempStartDate] = useState(null);
    const [tempEndDate, setTempEndDate] = useState(null);
    const [isSelectingEndDate, setIsSelectingEndDate] = useState(false);

    const handleDateSelect = (date) => {
      if (!isSelectingEndDate) {
        setTempStartDate(date.formatted);
        setIsSelectingEndDate(true);
        setTempEndDate(null);
      } else {
        setTempEndDate(date.formatted);
        setIsSelectingEndDate(false);
      }
    };

    const handleApply = () => {
      if (modalType.includes('hotels') || modalType.includes('hotels-homes')) {
        if (tempStartDate && tempEndDate) {
          setHotelsData({
            ...hotelsData,
            checkIn: tempStartDate,
            checkOut: tempEndDate
          });
        }
      } else if (modalType.includes('flights')) {
        if (currentDateSelection === 'departure' && tempStartDate) {
          setFlightsData({...flightsData, departure: tempStartDate});
        } else if (currentDateSelection === 'return' && tempEndDate) {
          setFlightsData({...flightsData, returnDate: tempEndDate});
        }
      } else if (modalType.includes('flight-hotel')) {
        if (currentDateSelection === 'departure' && tempStartDate) {
          setFlightHotelData({...flightHotelData, departure: tempStartDate});
        } else if (currentDateSelection === 'return' && tempEndDate) {
          setFlightHotelData({...flightHotelData, return: tempEndDate});
        }
      } else if (modalType.includes('bus') && tempStartDate) {
        setBusData({...busData, departureDate: tempStartDate});
      } else if (modalType.includes('cab')) {
        if (currentDateSelection === 'pickup' && tempStartDate) {
          setCabData({...cabData, pickupDate: tempStartDate});
        } else if (currentDateSelection === 'dropoff' && tempEndDate) {
          setCabData({...cabData, dropoffDate: tempEndDate});
        }
      } else if (modalType.includes('cruise')) {
        if (tempStartDate && tempEndDate) {
          setCruiseData({
            ...cruiseData,
            departureDate: tempStartDate,
            returnDate: tempEndDate
          });
        }
      } else if (modalType.includes('tour')) {
        if (tempStartDate && tempEndDate) {
          setTourData({
            ...tourData,
            checkIn: tempStartDate,
            checkOut: tempEndDate
          });
        }
      } else if (modalType.includes('holiday')) {
        if (tempStartDate && tempEndDate) {
          setHolidayData({
            ...holidayData,
            departure: tempStartDate,
            return: tempEndDate
          });
        }
      }
      
      setShowCalendarModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {modalType.includes('hotels') ? 'Select Dates' : 
                 modalType.includes('departure') ? 'Select Departure Date' : 
                 modalType.includes('return') ? 'Select Return Date' :
                 modalType.includes('pickup') ? 'Select Pick-up Date' :
                 'Select Date'}
              </h2>
              <button 
                onClick={() => setShowCalendarModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            {modalType.includes('hotels') && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  {isSelectingEndDate 
                    ? 'Now select check-out date' 
                    : 'Select check-in date'}
                </p>
              </div>
            )}
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-3">
              {datesList.map((dateObj, idx) => {
                const date = dateObj.formatted;
                const isSelectedStart = tempStartDate === date;
                const isSelectedEnd = tempEndDate === date;
                const isInRange = tempStartDate && tempEndDate && 
                  datesList.findIndex(d => d.formatted === tempStartDate) <= idx &&
                  datesList.findIndex(d => d.formatted === tempEndDate) >= idx;

                return (
                  <button
                    key={idx}
                    onClick={() => handleDateSelect(dateObj)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelectedStart 
                        ? 'border-blue-500 bg-blue-100' 
                        : isSelectedEnd
                        ? 'border-green-500 bg-green-100'
                        : isInRange
                        ? 'border-blue-200 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gray-900">{date}</div>
                        <div className="text-sm text-gray-500 mt-1">
                          {idx === 0 ? 'Tomorrow' : idx === 1 ? 'Day after tomorrow' : `In ${idx + 1} days`}
                        </div>
                      </div>
                      {(isSelectedStart || isSelectedEnd) && (
                        <Check size={20} className={isSelectedStart ? "text-blue-600" : "text-green-600"} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              {tempStartDate && (
                <div className="text-sm">
                  <span className="font-medium text-gray-700">Start:</span>
                  <span className="font-bold text-blue-600 ml-2">{tempStartDate}</span>
                </div>
              )}
              {tempEndDate && (
                <div className="text-sm">
                  <span className="font-medium text-gray-700">End:</span>
                  <span className="font-bold text-green-600 ml-2">{tempEndDate}</span>
                </div>
              )}
            </div>
            <button
              onClick={handleApply}
              disabled={modalType.includes('hotels') && (!tempStartDate || !tempEndDate)}
              className={`w-full py-3 rounded-xl font-bold transition ${
                modalType.includes('hotels') && (!tempStartDate || !tempEndDate)
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {modalType.includes('hotels') 
                ? (tempStartDate && tempEndDate ? `Select ${tempStartDate} - ${tempEndDate}` : 'Select Dates')
                : 'Done'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Guests Modal Component
  const GuestsModal = () => {
    const [tempGuests, setTempGuests] = useState({
      rooms: hotelsData.rooms,
      adults: hotelsData.adults,
      children: hotelsData.children,
    });

    const handleApply = () => {
      if (modalType === 'hotels-guests' || modalType === 'hotels-homes-guests') {
        setHotelsData({...hotelsData, ...tempGuests});
      } else if (modalType === 'flight-hotel-guests') {
        setFlightHotelData({...flightHotelData, ...tempGuests});
      } else if (modalType === 'cruise-guests') {
        setCruiseData({...cruiseData, ...tempGuests});
      } else if (modalType === 'tour-guests') {
        setTourData({...tourData, ...tempGuests});
      } else if (modalType === 'holiday-guests') {
        setHolidayData({...holidayData, ...tempGuests});
      }
      setShowGuestsModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Rooms & Guests</h2>
              <button 
                onClick={() => setShowGuestsModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-6">
              {/* Rooms */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Rooms</div>
                  <div className="text-sm text-gray-500">Maximum 9 rooms</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => tempGuests.rooms > 1 && setTempGuests({...tempGuests, rooms: tempGuests.rooms - 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.rooms > 1 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-10 text-center">{tempGuests.rooms}</span>
                  <button
                    onClick={() => tempGuests.rooms < 9 && setTempGuests({...tempGuests, rooms: tempGuests.rooms + 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.rooms < 9 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Adults</div>
                  <div className="text-sm text-gray-500">Age 18+</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => tempGuests.adults > 1 && setTempGuests({...tempGuests, adults: tempGuests.adults - 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.adults > 1 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-10 text-center">{tempGuests.adults}</span>
                  <button
                    onClick={() => tempGuests.adults < 30 && setTempGuests({...tempGuests, adults: tempGuests.adults + 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.adults < 30 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Children</div>
                  <div className="text-sm text-gray-500">Age 0-17</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => tempGuests.children > 0 && setTempGuests({...tempGuests, children: tempGuests.children - 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.children > 0 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-10 text-center">{tempGuests.children}</span>
                  <button
                    onClick={() => tempGuests.children < 10 && setTempGuests({...tempGuests, children: tempGuests.children + 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.children < 10 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={handleApply}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Apply ({tempGuests.rooms} room, {tempGuests.adults} adults, {tempGuests.children} children)
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Class Modal Component
  const ClassModal = () => {
    const [tempClass, setTempClass] = useState(flightsData.class);
    const [tempTravelers, setTempTravelers] = useState(flightsData.travelers);

    const handleApply = () => {
      setFlightsData({...flightsData, class: tempClass, travelers: tempTravelers});
      setShowClassModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Travelers & Class</h2>
              <button 
                onClick={() => setShowClassModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-6">
              {/* Travelers */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Travelers</div>
                  <div className="text-sm text-gray-500">Maximum 9 passengers</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => tempTravelers > 1 && setTempTravelers(tempTravelers - 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempTravelers > 1 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-10 text-center">{tempTravelers}</span>
                  <button
                    onClick={() => tempTravelers < 9 && setTempTravelers(tempTravelers + 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempTravelers < 9 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Class */}
              <div>
                <div className="font-bold text-gray-900 mb-3">Class</div>
                <div className="grid grid-cols-2 gap-3">
                  {['Economy', 'Premium', 'Business', 'First'].map(cls => (
                    <button
                      key={cls}
                      onClick={() => setTempClass(cls)}
                      className={`py-3 rounded-xl font-medium transition-all ${
                        tempClass === cls
                          ? 'bg-blue-600 text-white border-2 border-blue-700 shadow-sm'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={handleApply}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Apply ({tempTravelers} traveler{tempTravelers !== 1 ? 's' : ''}, {tempClass})
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Passenger Modal Component for Bus
  const BusPassengerModal = () => {
    const [tempPassengers, setTempPassengers] = useState(busData.passengers);

    const handleApply = () => {
      setBusData({...busData, passengers: tempPassengers});
      setShowPassengerModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Passengers</h2>
              <button 
                onClick={() => setShowPassengerModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900">Passengers</div>
                <div className="text-sm text-gray-500">Maximum 6 passengers</div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => tempPassengers > 1 && setTempPassengers(tempPassengers - 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    tempPassengers > 1 
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                      : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <Minus size={18} />
                </button>
                <span className="text-2xl font-bold text-gray-900 w-10 text-center">{tempPassengers}</span>
                <button
                  onClick={() => tempPassengers < 6 && setTempPassengers(tempPassengers + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    tempPassengers < 6 
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                      : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={handleApply}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Apply ({tempPassengers} passenger{tempPassengers !== 1 ? 's' : ''})
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Port Modal Component for Cruise
  const PortModal = () => {
    const [tempPort, setTempPort] = useState(cruiseData.departurePort);

    const handleApply = () => {
      setCruiseData({...cruiseData, departurePort: tempPort});
      setShowPortModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Select Departure Port</h2>
              <button 
                onClick={() => setShowPortModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-2">
              {cruisePorts.map((port, idx) => (
                <button
                  key={idx}
                  onClick={() => setTempPort(port)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    tempPort === port
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div>
                    <div className="font-bold text-gray-900">{port}</div>
                  </div>
                  {tempPort === port && <Check size={20} className="text-blue-600" />}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={handleApply}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Select Port
            </button>
          </div>
        </div>
      </div>
    );
  };

  // SIMPLE Input Component - Using uncontrolled inputs with defaultValue
  const SimpleInput = ({ 
    label, 
    defaultValue, 
    onChangeRef, // Now we pass ref to update
    placeholder, 
    className = "",
    icon: Icon,
    type = "text",
    readOnly = false,
    list,
    name
  }) => {
    const inputRef = useRef(null);

    const handleInput = () => {
      if (inputRef.current && onChangeRef) {
        onChangeRef.current = inputRef.current.value;
      }
    };

    return (
      <div className={`relative ${className}`}>
        <div className={`flex flex-col px-4 py-2 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all ${readOnly ? 'bg-gray-50' : 'bg-white'}`}>
          <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">{label}</label>
          <div className="flex items-center">
            {Icon && <Icon size={16} className="text-gray-400 mr-2" />}
            <input 
              ref={inputRef}
              type={type}
              defaultValue={defaultValue}
              onInput={handleInput}
              placeholder={placeholder}
              readOnly={readOnly}
              className="text-[#1a2b48] font-bold text-[15px] outline-none bg-transparent w-full placeholder:font-normal placeholder:text-gray-400"
              list={list}
              name={name}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    );
  };

  // Hotels Tab
  const renderHotelsTab = (isHomes = false) => {
    const tabName = isHomes ? 'Hotels & Homes' : 'Hotels';
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        {/* Destination */}
        <div className="relative flex-1 lg:flex-[1.5] mb-2 lg:mb-0">
          <SimpleInput 
            label="Destination/Hotel Name" 
            defaultValue={hotelsData.destination}
            onChangeRef={hotelsDestinationRef}
            placeholder="City, airport, landmark..."
            icon={MapPin}
            list="destination-suggestions"
            name="destination"
          />
          <datalist id="destination-suggestions">
            {popularDestinations.map((item, idx) => (
              <option key={idx} value={item.name}>
                {item.name} ({item.country})
              </option>
            ))}
          </datalist>
        </div>

        {/* Check-in/Check-out */}
        <div className="flex flex-1 border border-gray-300 rounded-lg items-center mb-2 lg:mb-0">
          <div 
            className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-l-lg"
            onClick={() => {
              setModalType(isHomes ? 'hotels-homes-dates' : 'hotels-dates');
              setCurrentDateSelection('checkin');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">CHECK-IN</label>
            <p className="font-bold text-[15px] text-[#1a2b48]">{hotelsData.checkIn}</p>
          </div>
          
          <div className="text-[10px] text-gray-600 px-2 py-1 border border-gray-200 rounded-full bg-white z-10 font-medium">
            {hotelsData.checkOut ? `${Math.ceil((new Date(hotelsData.checkOut) - new Date(hotelsData.checkIn)) / (1000 * 60 * 60 * 24))} night` : '1 night'}
          </div>
          
          <div 
            className="flex-1 px-4 py-2 text-right border-l border-gray-100 cursor-pointer hover:bg-gray-50 rounded-r-lg"
            onClick={() => {
              setModalType(isHomes ? 'hotels-homes-dates' : 'hotels-dates');
              setCurrentDateSelection('checkout');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">CHECK-OUT</label>
            <p className="font-bold text-[15px] text-[#1a2b48]">{hotelsData.checkOut}</p>
          </div>
        </div>

        {/* Rooms and Guests */}
        <div className="flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
            onClick={() => {
              setModalType(isHomes ? 'hotels-homes-guests' : 'hotels-guests');
              setShowGuestsModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Rooms and Guests
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {hotelsData.rooms} room, {hotelsData.adults} adults, {hotelsData.children} children
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={20} /> SEARCH
        </button>
      </div>
    );
  };

  // Flights Tab
  const renderFlightsTab = () => {
    return (
      <div className="space-y-4">
        {/* Trip Type */}
        <div className="flex flex-wrap gap-4 lg:gap-6 text-sm font-medium mb-2">
          {['Return', 'One-way', 'Multi-city'].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer select-none">
              <input 
                type="radio" 
                name="trip" 
                checked={flightsData.tripType === type.toLowerCase()}
                onChange={() => setFlightsData({...flightsData, tripType: type.toLowerCase()})}
                className="w-4 h-4 cursor-pointer"
              /> 
              <span className="cursor-pointer">{type}</span>
            </label>
          ))}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          {/* From/To with Swap */}
          <div className="flex flex-col lg:flex-row flex-1 gap-1 w-full">
            <div className="relative flex-1 mb-2 lg:mb-0">
              <SimpleInput 
                label="From" 
                defaultValue={flightsData.from}
                onChangeRef={flightsFromRef}
                placeholder="City or airport"
                icon={Navigation}
                list="from-suggestions"
                name="from"
              />
              <datalist id="from-suggestions">
                {popularDestinations.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.name} ({item.code})
                  </option>
                ))}
              </datalist>
            </div>
            
            <div className="flex items-center justify-center lg:justify-normal lg:-mx-4 z-10 mb-2 lg:mb-0">
              <button
                onClick={() => {
                  const temp = flightsFromRef.current;
                  flightsFromRef.current = flightsToRef.current;
                  flightsToRef.current = temp;
                  // Force re-render by updating state
                  setFlightsData(prev => ({
                    ...prev,
                    from: flightsFromRef.current,
                    to: flightsToRef.current
                  }));
                }}
                className="p-2 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition hover:scale-105"
                aria-label="Swap locations"
              >
                <ArrowLeftRight size={16} className="text-blue-500" />
              </button>
            </div>
            
            <div className="relative flex-1">
              <SimpleInput 
                label="To" 
                defaultValue={flightsData.to}
                onChangeRef={flightsToRef}
                placeholder="City or airport"
                icon={Navigation}
                list="to-suggestions"
                name="to"
              />
              <datalist id="to-suggestions">
                {popularDestinations.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.name} ({item.code})
                  </option>
                ))}
              </datalist>
            </div>
          </div>
          
          {/* Dates */}
          <div className="relative flex-1 w-full lg:w-auto mb-2 lg:mb-0">
            <div 
              className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
              onClick={() => {
                setModalType('flights-dates');
                setCurrentDateSelection('departure');
                setShowCalendarModal(true);
              }}
            >
              <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
                Departure - Return
              </label>
              <div className="flex items-center justify-between">
                <span className="text-[#1a2b48] font-bold text-[15px]">
                  {flightsData.departure} — {flightsData.returnDate}
                </span>
                <Calendar size={14} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Travelers & Class */}
          <div className="relative flex-1 lg:flex-[0.7] w-full lg:w-auto mb-2 lg:mb-0">
            <div 
              className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
              onClick={() => setShowClassModal(true)}
            >
              <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
                Passengers
              </label>
              <div className="flex items-center justify-between">
                <span className="text-[#1a2b48] font-bold text-[15px]">
                  {flightsData.travelers} adult · {flightsData.class}
                </span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition whitespace-nowrap w-full lg:w-auto"
          >
            SEARCH
          </button>
        </div>
      </div>
    );
  };

  // Flight + Hotel Tab
  const renderFlightHotelTab = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        {/* From/To with Swap */}
        <div className="flex flex-col lg:flex-row flex-[1.5] gap-1 w-full mb-2 lg:mb-0">
          <div className="relative flex-1">
            <SimpleInput 
              label="From" 
              defaultValue={flightHotelData.from}
              onChangeRef={flightHotelFromRef}
              placeholder="City or airport"
              icon={Navigation}
              list="flight-from-suggestions"
              name="flight-from"
            />
            <datalist id="flight-from-suggestions">
              {popularDestinations.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name} ({item.code})
                </option>
              ))}
            </datalist>
          </div>
          
          <div className="flex items-center justify-center lg:justify-normal lg:-mx-4 z-10 my-2 lg:my-0">
            <button
              onClick={() => {
                const temp = flightHotelFromRef.current;
                flightHotelFromRef.current = flightHotelToRef.current;
                flightHotelToRef.current = temp;
                setFlightHotelData(prev => ({
                  ...prev,
                  from: flightHotelFromRef.current,
                  to: flightHotelToRef.current
                }));
              }}
              className="p-2 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition hover:scale-105"
              aria-label="Swap locations"
            >
              <ArrowLeftRight size={16} className="text-blue-500" />
            </button>
          </div>
          
          <div className="relative flex-1">
            <SimpleInput 
              label="To" 
              defaultValue={flightHotelData.to}
              onChangeRef={flightHotelToRef}
              placeholder="City or airport"
              icon={Navigation}
              list="flight-to-suggestions"
              name="flight-to"
            />
            <datalist id="flight-to-suggestions">
              {popularDestinations.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name} ({item.code})
                </option>
              ))}
            </datalist>
          </div>
        </div>
        
        {/* Dates */}
        <div className="relative flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
            onClick={() => {
              setModalType('flight-hotel-dates');
              setCurrentDateSelection('departure');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Depart - Return
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {flightHotelData.departure} — {flightHotelData.return}
              </span>
              <Calendar size={14} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Rooms & Guests */}
        <div className="relative flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
            onClick={() => {
              setModalType('flight-hotel-guests');
              setShowGuestsModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Rooms & Guests
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {flightHotelData.rooms} room, {flightHotelData.adults} adults
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={20}/> Search
        </button>
      </div>
    );
  };

  // Bus Tab
  const renderBusTab = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-center">
        {/* From/To with Swap */}
        <div className="flex flex-col lg:flex-row flex-[2] gap-1 w-full mb-2 lg:mb-0">
          <div className="relative flex-1">
            <SimpleInput 
              label="From" 
              defaultValue={busData.from}
              onChangeRef={busFromRef}
              placeholder="Departure Bus Station"
              icon={Bus}
              list="bus-from-suggestions"
              name="bus-from"
            />
            <datalist id="bus-from-suggestions">
              {busStations.map((station, idx) => (
                <option key={idx} value={station} />
              ))}
            </datalist>
          </div>
          
          <div className="flex items-center justify-center lg:justify-normal lg:-mx-3 z-10 my-2 lg:my-0">
            <button
              onClick={() => {
                const temp = busFromRef.current;
                busFromRef.current = busToRef.current;
                busToRef.current = temp;
                setBusData(prev => ({
                  ...prev,
                  from: busFromRef.current,
                  to: busToRef.current
                }));
              }}
              className="p-1.5 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition hover:scale-105"
              aria-label="Swap stations"
            >
              <ArrowLeftRight size={14} className="text-blue-400" />
            </button>
          </div>
          
          <div className="relative flex-1">
            <SimpleInput 
              label="To" 
              defaultValue={busData.to}
              onChangeRef={busToRef}
              placeholder="Arrival Bus Station"
              icon={Bus}
              list="bus-to-suggestions"
              name="bus-to"
            />
            <datalist id="bus-to-suggestions">
              {busStations.map((station, idx) => (
                <option key={idx} value={station} />
              ))}
            </datalist>
          </div>
        </div>
        
        {/* Departure Date */}
        <div className="flex flex-1 border border-gray-300 rounded-lg hover:border-gray-400 transition-all w-full lg:w-auto mb-2 lg:mb-0">
          <div 
            className="relative flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-lg"
            onClick={() => {
              setModalType('bus-date');
              setCurrentDateSelection('departure');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">DEPARTURE DATE</label>
            <div className="flex items-center justify-between">
              <p className="font-bold text-[#1a2b48]">{busData.departureDate}</p>
              <Calendar size={14} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Passengers */}
        <div className="flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
            onClick={() => {
              setModalType('bus-passengers');
              setShowPassengerModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Passengers
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {busData.passengers} passenger{busData.passengers !== 1 ? 's' : ''}
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap w-full lg:w-auto"
        >
          <Search size={20}/> Search
        </button>
      </div>
    );
  };

  // Cab Tab
  const renderCabTab = () => {
    return (
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
          {/* Pickup Location */}
          <div className="relative flex-1 lg:flex-[1.5] mb-2 lg:mb-0">
            <SimpleInput 
              label="Pick-up location" 
              defaultValue={cabData.pickup}
              onChangeRef={cabPickupRef}
              placeholder="Airport, city, or address"
              icon={MapPin}
              list="pickup-suggestions"
              name="pickup"
            />
            <datalist id="pickup-suggestions">
              {popularDestinations.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name} ({item.code})
                </option>
              ))}
            </datalist>
          </div>
          
          {/* Dates */}
          <div className="flex flex-1 border border-gray-300 rounded-lg hover:border-gray-400 transition-all mb-2 lg:mb-0">
            <div 
              className="flex-1 px-4 py-2 border-r border-gray-100 cursor-pointer hover:bg-gray-50 rounded-l-lg"
              onClick={() => {
                setModalType('cab-pickup');
                setCurrentDateSelection('pickup');
                setShowCalendarModal(true);
              }}
            >
              <label className="text-[11px] text-gray-500 font-medium uppercase">PICK-UP DATE</label>
              <p className="font-bold text-[15px] text-[#1a2b48]">{cabData.pickupDate}</p>
            </div>
            <div 
              className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-r-lg"
              onClick={() => {
                setModalType('cab-dropoff');
                setCurrentDateSelection('dropoff');
                setShowCalendarModal(true);
              }}
            >
              <label className="text-[11px] text-gray-500 font-medium uppercase">DROP-OFF DATE</label>
              <p className="font-bold text-[15px] text-[#1a2b48]">{cabData.dropoffDate}</p>
            </div>
          </div>
          
          {/* License Country */}
          <div className="flex-1 mb-2 lg:mb-0">
            <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all bg-white">
              <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
                Driving licence country
              </label>
              <select
                value={cabData.licenseCountry}
                onChange={(e) => setCabData({...cabData, licenseCountry: e.target.value})}
                className="text-[#1a2b48] font-bold text-[15px] outline-none bg-transparent w-full cursor-pointer"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Search size={20}/> Search
          </button>
        </div>
        
        {/* Options */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
            <input
              type="checkbox"
              id="differentLocation"
              checked={cabData.differentLocation}
              onChange={(e) => setCabData({...cabData, differentLocation: e.target.checked})}
              className="h-4 w-4 cursor-pointer"
            />
            Drop off at a different location
          </label>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Age:</span>
            <span className="font-bold text-[#1a2b48]">{cabData.age}</span>
          </div>
        </div>
      </div>
    );
  };

  // Cruise Tab
  const renderCruiseTab = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        {/* Destination */}
        <div className="relative flex-1 lg:flex-[1.5] mb-2 lg:mb-0">
          <SimpleInput 
            label="Cruise Destination" 
            defaultValue={cruiseData.destination}
            onChangeRef={cruiseDestinationRef}
            placeholder="Enter cruise destination"
            icon={Ship}
            list="cruise-destinations"
            name="cruise-destination"
          />
          <datalist id="cruise-destinations">
            {cruisePorts.map((port, idx) => (
              <option key={idx} value={port} />
            ))}
          </datalist>
        </div>

        {/* Departure Port */}
        <div className="flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
            onClick={() => setShowPortModal(true)}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Departure Port
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {cruiseData.departurePort}
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="flex flex-1 border border-gray-300 rounded-lg items-center mb-2 lg:mb-0">
          <div 
            className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-l-lg"
            onClick={() => {
              setModalType('cruise-dates');
              setCurrentDateSelection('departure');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">DEPARTURE</label>
            <p className="font-bold text-[15px] text-[#1a2b48]">{cruiseData.departureDate}</p>
          </div>
          
          <div 
            className="flex-1 px-4 py-2 text-right border-l border-gray-100 cursor-pointer hover:bg-gray-50 rounded-r-lg"
            onClick={() => {
              setModalType('cruise-dates');
              setCurrentDateSelection('return');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">RETURN</label>
            <p className="font-bold text-[15px] text-[#1a2b48]">{cruiseData.returnDate}</p>
          </div>
        </div>

        {/* Rooms and Guests */}
        <div className="flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
            onClick={() => {
              setModalType('cruise-guests');
              setShowGuestsModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Cabins & Guests
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {cruiseData.rooms} cabin, {cruiseData.adults} adults, {cruiseData.children} children
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={20} /> SEARCH
        </button>
      </div>
    );
  };

  // Tour Tab
  const renderTourTab = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        {/* Destination */}
        <div className="relative flex-1 lg:flex-[1.5] mb-2 lg:mb-0">
          <SimpleInput 
            label="Tour Destination" 
            defaultValue={tourData.destination}
            onChangeRef={tourDestinationRef}
            placeholder="Enter tour destination"
            icon={Umbrella}
            list="tour-destinations"
            name="tour-destination"
          />
          <datalist id="tour-destinations">
            {tourDestinations.map((tour, idx) => (
              <option key={idx} value={tour} />
            ))}
          </datalist>
        </div>

        {/* Check-in/Check-out */}
        <div className="flex flex-1 border border-gray-300 rounded-lg items-center mb-2 lg:mb-0">
          <div 
            className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-l-lg"
            onClick={() => {
              setModalType('tour-dates');
              setCurrentDateSelection('checkin');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">START DATE</label>
            <p className="font-bold text-[15px] text-[#1a2b48]">{tourData.checkIn}</p>
          </div>
          
          <div 
            className="flex-1 px-4 py-2 text-right border-l border-gray-100 cursor-pointer hover:bg-gray-50 rounded-r-lg"
            onClick={() => {
              setModalType('tour-dates');
              setCurrentDateSelection('checkout');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">END DATE</label>
            <p className="font-bold text-[15px] text-[#1a2b48]">{tourData.checkOut}</p>
          </div>
        </div>

        {/* Guests */}
        <div className="flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
            onClick={() => {
              setModalType('tour-guests');
              setShowGuestsModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Guests
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {tourData.adults} adults, {tourData.children} children
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={20} /> SEARCH
        </button>
      </div>
    );
  };

  // Holiday Tab
  const renderHolidayTab = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        {/* From/To with Swap */}
        <div className="flex flex-col lg:flex-row flex-[1.5] gap-1 w-full mb-2 lg:mb-0">
          <div className="relative flex-1">
            <SimpleInput 
              label="From" 
              defaultValue={holidayData.from}
              onChangeRef={holidayFromRef}
              placeholder="Departure city"
              icon={Navigation}
              list="holiday-from-suggestions"
              name="holiday-from"
            />
            <datalist id="holiday-from-suggestions">
              {popularDestinations.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name} ({item.code})
                </option>
              ))}
            </datalist>
          </div>
          
          <div className="flex items-center justify-center lg:justify-normal lg:-mx-4 z-10 my-2 lg:my-0">
            <button
              onClick={() => {
                const temp = holidayFromRef.current;
                holidayFromRef.current = holidayToRef.current;
                holidayToRef.current = temp;
                setHolidayData(prev => ({
                  ...prev,
                  from: holidayFromRef.current,
                  to: holidayToRef.current
                }));
              }}
              className="p-2 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition hover:scale-105"
              aria-label="Swap locations"
            >
              <ArrowLeftRight size={16} className="text-blue-500" />
            </button>
          </div>
          
          <div className="relative flex-1">
            <SimpleInput 
              label="To" 
              defaultValue={holidayData.to}
              onChangeRef={holidayToRef}
              placeholder="Destination"
              icon={Palmtree}
              list="holiday-to-suggestions"
              name="holiday-to"
            />
            <datalist id="holiday-to-suggestions">
              {popularDestinations.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name} ({item.country})
                </option>
              ))}
            </datalist>
          </div>
        </div>
        
        {/* Dates */}
        <div className="relative flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
            onClick={() => {
              setModalType('holiday-dates');
              setCurrentDateSelection('departure');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Depart - Return
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {holidayData.departure} — {holidayData.return}
              </span>
              <Calendar size={14} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Rooms & Guests */}
        <div className="relative flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
            onClick={() => {
              setModalType('holiday-guests');
              setShowGuestsModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Rooms & Guests
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {holidayData.rooms} room, {holidayData.adults} adults, {holidayData.children} children
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={20}/> Search
        </button>
      </div>
    );
  };

  return (
    <div className="w-full min-h-[500px] bg-blue-900 bg-cover bg-center flex flex-col items-center pt-16 px-4" 
         style={{ backgroundImage: "url('https://dimg04.tripcdn.com/images/05E3f12000lo6txgqF88C.webp')" }}>
      
      {/* Tab Navigation */}
      <div className="bg-[#0a1121]/80 backdrop-blur-md p-1 rounded-full flex flex-wrap justify-center items-center mb-0 border border-white/10 max-w-6xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.name);
              // Close all modals when switching tabs
              setShowCalendarModal(false);
              setShowGuestsModal(false);
              setShowClassModal(false);
              setShowTimeModal(false);
              setShowCityModal(false);
              setShowPassengerModal(false);
              setShowPortModal(false);
            }}
            className={`flex items-center gap-2 px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-[12px] lg:text-[14px] font-bold transition-all my-1 mx-1 ${
              activeTab === tab.name ? 'bg-white text-blue-900 shadow-md' : 'text-white hover:bg-white/10'
            }`}
          >
            {tab.icon} <span className="hidden sm:inline">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Main Search Container */}
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl p-4 lg:p-6 relative mt-4">
        {activeTab === 'Hotels' && renderHotelsTab(false)}
        {activeTab === 'Hotels & Homes' && renderHotelsTab(true)}
        {activeTab === 'Flights' && renderFlightsTab()}
        {activeTab === 'Flights & Hotel' && renderFlightHotelTab()}
        {activeTab === 'Bus' && renderBusTab()}
        {activeTab === 'Cab' && renderCabTab()}
        {activeTab === 'Cruise' && renderCruiseTab()}
        {activeTab === 'Tour' && renderTourTab()}
        {activeTab === 'Holiday' && renderHolidayTab()}
      </div>

      {/* Modals */}
      {showCalendarModal && <CalendarModal />}
      {showGuestsModal && <GuestsModal />}
      {showClassModal && <ClassModal />}
      {showPassengerModal && modalType === 'bus-passengers' && <BusPassengerModal />}
      {showPortModal && <PortModal />}
    </div>
  );
};

export default Hero;