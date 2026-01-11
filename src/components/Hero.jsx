
// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Hero.css";

// import ExploreMoreBar from "./ExploreMoreBar";

// import {
//   FaPlane,
//   FaHotel,
//   FaHome,
//   FaSuitcase,
//   FaBus,
//   FaTaxi,
//   FaTrain,
//   FaIdCard,
//   FaShip,
//   FaExchangeAlt,
// } from "react-icons/fa";

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

//           {/* TOP NAV */}
//           <div className="mmt-nav-bar">
//             <div className={getActive("/flights")} onClick={() => navigate("/flights")}><FaPlane /><span>Flights</span></div>
//             <div className={getActive("/hotels")} onClick={() => navigate("/hotels")}><FaHotel /><span>Hotels</span></div>
//             <div className="nav-item"><FaHome /><span>Villas</span></div>
//             <div className="nav-item"><FaSuitcase /><span>Holidays</span></div>
//             <div className={getActive("/train")} onClick={() => navigate("/train")}><FaTrain /><span>Trains</span></div>
//             <div className={getActive("/bus")} onClick={() => navigate("/bus")}><FaBus /><span>Buses</span></div>
//             <div className={getActive("/cab")} onClick={() => navigate("/cab")}><FaTaxi /><span>Cabs</span></div>
//             <div className="nav-item"><FaIdCard /><span>Visa</span></div>
//             <div className="nav-item"><FaShip /><span>Cruise</span></div>
//           </div>

//           {/* SEARCH CARD */}
//           <div className="mmt-card">

//             {/* INPUT GRID */}
//             <div className="input-grid">
//               <div className="box">
//                 <label>From</label>
//                 <input value={fromCity} onChange={(e) => setFromCity(e.target.value)} list="fromCities" />
//                 <datalist id="fromCities">
//                   {CITIES.map((c) => (
//                     <option key={c.code} value={`${c.name} (${c.code})`} />
//                   ))}
//                 </datalist>
//                 <p>Departure City</p>
//               </div>

//               <div className="box">
//                 <label>To</label>
//                 <input value={toCity} onChange={(e) => setToCity(e.target.value)} list="toCities" />
//                 <datalist id="toCities">
//                   {CITIES.map((c) => (
//                     <option key={c.code} value={`${c.name} (${c.code})`} />
//                   ))}
//                 </datalist>
//                 <p>Destination City</p>
//               </div>

//               <div className="box">
//                 <label>Departure</label>
//                 <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
//               </div>

//               <div className="box no-border">
//                 <label>Travellers & Class</label>
//                 <div className="val">1 Traveller</div>
//                 <p>Economy</p>
//               </div>
//             </div>

//             {/* SWAP */}
//             <div className="swap-btn" onClick={swapCities}>
//               <FaExchangeAlt />
//             </div>

//             {/* SPECIAL FARES */}
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

//             {/* FLEXIFLY */}
//             <div className="flexifly-bar">
//               <label className="flexi-left">
//                 <input type="checkbox" checked={flexiFly} onChange={() => setFlexiFly(!flexiFly)} />
//                 <strong>Add FlexiFly</strong>
//                 <span>100% refund or zero date change</span>
//               </label>
//               <span className="flexi-price">₹999</span>
//             </div>

//             {/* TOTAL PRICE */}
//             <div className="price-bar">
//               <span>Total Price</span>
//               <strong>₹{finalPrice}</strong>
//             </div>

//             {/* SEARCH BUTTON */}
//             <button
//               className="main-search-btn"
//               onClick={() =>
//                 navigate("/flights", {
//                   state: { fromCity, toCity, departureDate, selectedFare, finalPrice },
//                 })
//               }
//             >
//               SEARCH
//             </button>

//           </div>
//         </div>
//       </div>

//       {/* ================= NEXT SECTION (NOT HERO) ================= */}
//       <ExploreMoreBar />
//     </>
//   );
// }

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Hero.css";

import ExploreMoreBar from "./ExploreMoreBar";

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
  const [selectedFare, setSelectedFare] = useState("Regular");
  const [flexiFly, setFlexiFly] = useState(false);

  const swapCities = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  const finalPrice = Math.round(
    BASE_PRICE * FARE_MULTIPLIER[selectedFare] + (flexiFly ? 999 : 0)
  );

  const getActive = (path) =>
    location.pathname === path ? "nav-item active" : "nav-item";

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="mmt-hero-wrapper">
        <div className="mmt-main-container">

          {/* ================= TOP ICON NAV (LUCIDE) ================= */}
          <div className="mmt-nav-bar">
            <div className={getActive("/flights")} onClick={() => navigate("/flights")}>
              <Plane />
              <span>Flights</span>
            </div>

            <div className={getActive("/hotels")} onClick={() => navigate("/hotels")}>
              <Hotel />
              <span>Hotels</span>
            </div>

            <div className="nav-item">
              <Home />
              <span>Villas</span>
            </div>

            <div className="nav-item">
              <Briefcase />
              <span>Holidays</span>
            </div>

            <div className={getActive("/train")} onClick={() => navigate("/train")}>
              <Train />
              <span>Trains</span>
            </div>

            <div className={getActive("/bus")} onClick={() => navigate("/bus")}>
              <Bus />
              <span>Buses</span>
            </div>

            <div className={getActive("/cab")} onClick={() => navigate("/cab")}>
              <CarTaxiFront />
              <span>Cabs</span>
            </div>

            <div className="nav-item">
              <IdCard />
              <span>Visa</span>
            </div>

            <div className="nav-item">
              <Ship />
              <span>Cruise</span>
            </div>
          </div>

          {/* ================= SEARCH CARD ================= */}
          <div className="mmt-card">

            {/* INPUT GRID */}
            <div className="input-grid">
              <div className="box">
                <label>From</label>
                <input
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  list="fromCities"
                />
                <datalist id="fromCities">
                  {CITIES.map((c) => (
                    <option key={c.code} value={`${c.name} (${c.code})`} />
                  ))}
                </datalist>
                <p>Departure City</p>
              </div>

              <div className="box">
                <label>To</label>
                <input
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  list="toCities"
                />
                <datalist id="toCities">
                  {CITIES.map((c) => (
                    <option key={c.code} value={`${c.name} (${c.code})`} />
                  ))}
                </datalist>
                <p>Destination City</p>
              </div>

              <div className="box">
                <label>Departure</label>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>

              <div className="box no-border">
                <label>Travellers & Class</label>
                <div className="val">1 Traveller</div>
                <p>Economy</p>
              </div>
            </div>

            {/* SWAP */}
            <div className="swap-btn" onClick={swapCities}>
              <ArrowLeftRight />
            </div>

            {/* SPECIAL FARES */}
            <div className="special-fares-section">
              <div className="fare-title">SPECIAL FARES</div>
              <div className="fare-list">
                {Object.keys(FARE_MULTIPLIER).map((fare) => (
                  <div
                    key={fare}
                    className={`fare-box ${selectedFare === fare ? "active" : ""}`}
                    onClick={() => setSelectedFare(fare)}
                  >
                    <div className="f-main">{fare}</div>
                    <div className="f-sub">Up to ₹600 off</div>
                  </div>
                ))}
              </div>
            </div>

            {/* FLEXIFLY */}
            <div className="flexifly-bar">
              <label className="flexi-left">
                <input
                  type="checkbox"
                  checked={flexiFly}
                  onChange={() => setFlexiFly(!flexiFly)}
                />
                <strong>Add FlexiFly</strong>
                <span>100% refund or zero date change</span>
              </label>
              <span className="flexi-price">₹999</span>
            </div>

            {/* PRICE */}
            <div className="price-bar">
              <span>Total Price</span>
              <strong>₹{finalPrice}</strong>
            </div>

            {/* SEARCH */}
            <button
              className="main-search-btn"
              onClick={() =>
                navigate("/flights", {
                  state: {
                    fromCity,
                    toCity,
                    departureDate,
                    selectedFare,
                    finalPrice,
                  },
                })
              }
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* ================= NEXT SECTION ================= */}
      <ExploreMoreBar />
    </>
  );
}
