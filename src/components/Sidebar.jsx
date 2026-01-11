// import "./Sidebar.css";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <h2 className="logo">BirdMyTrip</h2>

//       <ul>
//         <li>Hotels</li>
//         <li>Flights</li>
//         <li>Flight + Hotel</li>
//         <li>Bus</li>
//         <li>Train (CS)</li>
//         <li>Cab</li>
//         <li>Holiday Packages</li>
//         <li>Trip Planner</li>
//         <li>Travel Inspiration</li>
//         <li>Map</li>
//         <li>Flight Status</li>
//         <li>PNR Status</li>
//         <li>Gift Card</li>
//         <li>Invite & Earn</li>
//       </ul>
//     </div>
//   );
// }


//  import React from "react";
// import "./Sidebar.css";
// import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

// import {
//   FaHotel,
//   FaPlane,
//   FaBus,
//   FaTrain,
//   FaTaxi,
//   FaSuitcase,
//   FaMapMarkedAlt,
//   FaGift,
//   FaUserFriends,
//   FaInfoCircle,
// } from "react-icons/fa";

// export default function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <h2 className="logo">Bird<span>MyTrip</span></h2>

//       <div className="menu-section">
//         <p className="section-title">BOOK</p>

//         <ul>
//           <li><FaHotel /> Hotels</li>
//           <li><FaPlane /> Flights</li>
//           <li><FaPlane /> Flight + Hotel</li>
//           <li><FaBus /> Bus</li>
//           <li><FaTrain /> Train (CS)</li>
//           <li><FaTaxi /> Cab</li>
//           <li><FaSuitcase /> Holiday Packages</li>
//         </ul>
//       </div>

//       <div className="menu-section">
//         <p className="section-title">TOOLS</p>

//         <ul>
//           <li><FaMapMarkedAlt /> Trip Planner</li>
//           <li><FaInfoCircle /> Travel Inspiration</li>
//           <li><FaMapMarkedAlt /> Map</li>
//           <li><FaPlane /> Flight Status</li>
//           <li><FaInfoCircle /> PNR Status</li>
//         </ul>
//       </div>

//       <div className="menu-section">
//         <p className="section-title">MORE</p>

//         <ul>
//           <li><FaGift /> Gift Card</li>
//           <li><FaUserFriends /> Invite & Earn</li>
//         </ul>
//       </div>
//     </aside>
//   );
// }



// import React from "react";
// import "./Sidebar.css";
// import { Link } from "react-router-dom";

// /* example */
// <li>
//   <Link to="/hotels">Hotels</Link>
// </li>

// <li>
//   <Link to="/flights">Flights</Link>
// </li>

// <li>
//   <Link to="/bus">Bus</Link>
// </li>

// <li>
//   <Link to="/train">Train (CS)</Link>
// </li>

// <li>
//   <Link to="/cab">Cab</Link>
// </li>

// <li>
//   <Link to="/holiday">Holiday Packages</Link>
// </li>


// /* ✅ EXACT IMAGE NAME – NO CHANGE */
// import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

// /* Icons */
// import {
//   FaHotel,
//   FaPlane,
//   FaBus,
//   FaTrain,
//   FaTaxi,
//   FaSuitcase,
//   FaMapMarkedAlt,
//   FaGift,
//   FaUserFriends,
//   FaInfoCircle,
// } from "react-icons/fa";

// export default function Sidebar() {
//   return (
//     <aside className="sidebar">

//       {/* LOGO */}
//       <div className="logo-box">
//         <img src={logo} alt="Bird My Trip Logo" />
//       </div>

//       {/* BOOK */}
//       <div className="menu-section">
//         <p className="section-title">BOOK</p>
//         <ul>
//           <li><FaHotel /> Hotels</li>
//           <li><FaPlane /> Flights</li>
//           <li><FaPlane /> Flight + Hotel</li>
//           <li><FaBus /> Bus</li>
//           <li><FaTrain /> Train (CS)</li>
//           <li><FaTaxi /> Cab</li>
//           <li><FaSuitcase /> Holiday Packages</li>
//         </ul>
//       </div>

//       {/* TOOLS */}
//       <div className="menu-section">
//         <p className="section-title">TOOLS</p>
//         <ul>
//           <li><FaMapMarkedAlt /> Trip Planner</li>
//           <li><FaInfoCircle /> Travel Inspiration</li>
//           <li><FaMapMarkedAlt /> Map</li>
//           <li><FaPlane /> Flight Status</li>
//           <li><FaInfoCircle /> PNR Status</li>
//         </ul>
//       </div>

//       {/* MORE */}
//       <div className="menu-section">
//         <p className="section-title">MORE</p>
//         <ul>
//           <li><FaGift /> Gift Card</li>
//           <li><FaUserFriends /> Invite & Earn</li>
//         </ul>
//       </div>

//     </aside>
//   );
// }


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// /* LOGO (same name, no change) */
// import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

// /* ICONS */
// import {
//   FaHotel,
//   FaPlane,
//   FaBus,
//   FaTrain,
//   FaTaxi,
//   FaSuitcase,
//   FaMapMarkedAlt,
//   FaGift,
//   FaUserFriends,
//   FaInfoCircle,
// } from "react-icons/fa";

// export default function Sidebar() {
//   return (
//     <aside className="sidebar">

//       {/* LOGO */}
//       <div className="logo-box">
//         <img src={logo} alt="Bird My Trip Logo" />
//       </div>

//       {/* BOOK */}
//       <div className="menu-section">
//         <p className="section-title">BOOK</p>
//         <ul>
//           <li>
//             <Link to="/hotels"><FaHotel /> Hotels</Link>
//           </li>
//           <li>
//             <Link to="/flights"><FaPlane /> Flights</Link>
//           </li>
//           <li>
//             <Link to="/flights"><FaPlane /> Flight + Hotel</Link>
//           </li>
//           <li>
//             <Link to="/bus"><FaBus /> Bus</Link>
//           </li>
//           <li>
//             <Link to="/train"><FaTrain /> Train (CS)</Link>
//           </li>
//           <li>
//             <Link to="/cab"><FaTaxi /> Cab</Link>
//           </li>
//           <li>
//             <Link to="/holiday"><FaSuitcase /> Holiday Packages</Link>
//           </li>
//         </ul>
//       </div>

//       {/* TOOLS */}
//       <div className="menu-section">
//         <p className="section-title">TOOLS</p>
//         <ul>
//           <li>
//             <Link to="/trip-planner"><FaMapMarkedAlt /> Trip Planner</Link>
//           </li>
//           <li>
//             <Link to="/inspiration"><FaInfoCircle /> Travel Inspiration</Link>
//           </li>
//           <li>
//             <Link to="/map"><FaMapMarkedAlt /> Map</Link>
//           </li>
//           <li>
//             <Link to="/flight-status"><FaPlane /> Flight Status</Link>
//           </li>
//           <li>
//             <Link to="/pnr-status"><FaInfoCircle /> PNR Status</Link>
//           </li>
//         </ul>
//       </div>

//       {/* MORE */}
//       <div className="menu-section">
//         <p className="section-title">MORE</p>
//         <ul>
//           <li>
//             <Link to="/gift-card"><FaGift /> Gift Card</Link>
//           </li>
//           <li>
//             <Link to="/invite"><FaUserFriends /> Invite & Earn</Link>
//           </li>
//         </ul>
//       </div>

//     </aside>
//   );
// }


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// /* LOGO */
// import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

// /* ICONS */
// import {
//   FaHotel,
//   FaPlane,
//   FaBus,
//   FaTrain,
//   FaTaxi,
//   FaSuitcase,
//   FaMapMarkedAlt,
//   FaGift,
//   FaUserFriends,
//   FaInfoCircle,
// } from "react-icons/fa";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <aside className={`sidebar ${open ? "open" : "collapsed"}`}>

//       {/* LOGO */}
//       <div className="logo-box" onClick={() => setOpen(!open)}>
//         <img src={logo} alt="Bird My Trip Logo" />
//       </div>

//       <div className="menu">

//         {/* BOOK */}
//         <div className="menu-section">
//           <p className="section-title">BOOK</p>
//           <ul>
//             <li><Link to="/hotels"><FaHotel /> <span>Hotels</span></Link></li>
//             <li><Link to="/flights"><FaPlane /> <span>Flights</span></Link></li>
//             <li><Link to="/bus"><FaBus /> <span>Bus</span></Link></li>
//             <li><Link to="/train"><FaTrain /> <span>Train</span></Link></li>
//             <li><Link to="/cab"><FaTaxi /> <span>Cab</span></Link></li>
//             <li><Link to="/holiday"><FaSuitcase /> <span>Holiday</span></Link></li>
//           </ul>
//         </div>

//         {/* TOOLS */}
//         <div className="menu-section">
//           <p className="section-title">TOOLS</p>
//           <ul>
//             <li><Link to="/trip-planner"><FaMapMarkedAlt /> <span>Trip Planner</span></Link></li>
//             <li><Link to="/flight-status"><FaPlane /> <span>Flight Status</span></Link></li>
//             <li><Link to="/pnr"><FaInfoCircle /> <span>PNR Status</span></Link></li>
//           </ul>
//         </div>

//         {/* MORE */}
//         <div className="menu-section">
//           <p className="section-title">MORE</p>
//           <ul>
//             <li><Link to="/gift"><FaGift /> <span>Gift Card</span></Link></li>
//             <li><Link to="/invite"><FaUserFriends /> <span>Invite & Earn</span></Link></li>
//           </ul>
//         </div>

//       </div>
//     </aside>
//   );
// }


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// /* LOGO */
// import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

// /* ICONS */
// import {
//   FaHotel,
//   FaPlane,
//   FaBus,
//   FaTrain,
//   FaTaxi,
//   FaSuitcase,
//   FaMapMarkedAlt,
//   FaGift,
//   FaUserFriends,
//   FaInfoCircle,
// } from "react-icons/fa";

// export default function Sidebar({ open, setOpen }) {
//   return (
//     <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
//       {/* LOGO */}
//       <div className="logo-box" onClick={() => setOpen(!open)}>
//         <img src={logo} alt="Bird My Trip Logo" />
//       </div>

//       <div className="menu">
//         {/* BOOK */}
//         <div className="menu-section">
//           <p className="section-title">BOOK</p>
//           <ul>
//             <li><Link to="/hotels"><FaHotel /><span>Hotels</span></Link></li>
//             <li><Link to="/flights"><FaPlane /><span>Flights</span></Link></li>
//             <li><Link to="/bus"><FaBus /><span>Bus</span></Link></li>
//             <li><Link to="/train"><FaTrain /><span>Train</span></Link></li>
//             <li><Link to="/cab"><FaTaxi /><span>Cab</span></Link></li>
//             <li><Link to="/holiday"><FaSuitcase /><span>Holiday</span></Link></li>
//           </ul>
//         </div>

//         {/* TOOLS */}
//         <div className="menu-section">
//           <p className="section-title">TOOLS</p>
//           <ul>
//             <li><Link to="/trip-planner"><FaMapMarkedAlt /><span>Trip Planner</span></Link></li>
//             <li><Link to="/flight-status"><FaPlane /><span>Flight Status</span></Link></li>
//             <li><Link to="/pnr"><FaInfoCircle /><span>PNR Status</span></Link></li>
//           </ul>
//         </div>

//         {/* MORE */}
//         <div className="menu-section">
//           <p className="section-title">MORE</p>
//           <ul>
//             <li><Link to="/gift"><FaGift /><span>Gift Card</span></Link></li>
//             <li><Link to="/invite"><FaUserFriends /><span>Invite & Earn</span></Link></li>
//           </ul>
//         </div>
//       </div>
//     </aside>
//   );
// }


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// /* LOGO */
// import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

// /* ICONS */
// import {
//   FaHotel,
//   FaPlane,
//   FaBus,
//   FaTrain,
//   FaTaxi,
//   FaSuitcase,
//   FaMapMarkedAlt,
//   FaGift,
//   FaUserFriends,
//   FaInfoCircle,
// } from "react-icons/fa";

// export default function Sidebar({ open, setOpen }) {
//   return (
//     <aside className={`sidebar ${open ? "open" : "collapsed"}`}>

//       {/* LOGO → HOME + TOGGLE */}
//       <Link
//         to="/"
//         className="logo-box"
//         onClick={() => setOpen(!open)}
//       >
//         <img src={logo} alt="Bird My Trip Logo" />
//       </Link>

//       <div className="menu">

//         {/* BOOK */}
//         <div className="menu-section">
//           <p className="section-title">BOOK</p>
//           <ul>
//             <li><Link to="/hotels"><FaHotel /><span>Hotels</span></Link></li>
//             <li><Link to="/flights"><FaPlane /><span>Flights</span></Link></li>
//             <li><Link to="/bus"><FaBus /><span>Bus</span></Link></li>
//             <li><Link to="/train"><FaTrain /><span>Train</span></Link></li>
//             <li><Link to="/cab"><FaTaxi /><span>Cab</span></Link></li>
//             <li><Link to="/holiday"><FaSuitcase /><span>Holiday</span></Link></li>
//           </ul>
//         </div>

//         {/* TOOLS */}
//         <div className="menu-section">
//           <p className="section-title">TOOLS</p>
//           <ul>
//             <li><Link to="/trip-planner"><FaMapMarkedAlt /><span>Trip Planner</span></Link></li>
//             <li><Link to="/flight-status"><FaPlane /><span>Flight Status</span></Link></li>
//             <li><Link to="/pnr"><FaInfoCircle /><span>PNR Status</span></Link></li>
//           </ul>
//         </div>

//         {/* MORE */}
//         <div className="menu-section">
//           <p className="section-title">MORE</p>
//           <ul>
//             <li><Link to="/gift"><FaGift /><span>Gift Card</span></Link></li>
//             <li><Link to="/invite"><FaUserFriends /><span>Invite & Earn</span></Link></li>
//           </ul>
//         </div>

//       </div>
//     </aside>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Sidebar.css";

/* ICONS */
import {
  FaHotel,
  FaPlane,
  FaBus,
  FaTrain,
  FaTaxi,
  FaSuitcase,
  FaMapMarkedAlt,
  FaGift,
  FaUserFriends,
  FaInfoCircle,
} from "react-icons/fa";

export default function Sidebar({ open, setOpen }) {
  return (
    <aside className={`sidebar ${open ? "open" : "collapsed"}`}>

      {/* TOP BAR (ONLY HAMBURGER) */}
      <div className="sidebar-top">
        <button
          className="hamburger-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle sidebar"
        >
          <FaBars />
        </button>

        {/* Optional: Home link text instead of logo (can remove if not needed) */}
        {/* <Link to="/" className="sidebar-home">
          Home
        </Link> */}
      </div>

      <div className="menu">

        {/* BOOK */}
        <div className="menu-section">
          <p className="section-title">BOOK</p>
          <ul>
            <li><Link to="/hotels"><FaHotel /><span>Hotels</span></Link></li>
            <li><Link to="/flights"><FaPlane /><span>Flights</span></Link></li>
            <li><Link to="/bus"><FaBus /><span>Bus</span></Link></li>
            <li><Link to="/train"><FaTrain /><span>Train</span></Link></li>
            <li><Link to="/cab"><FaTaxi /><span>Cab</span></Link></li>
            <li><Link to="/holiday"><FaSuitcase /><span>Holiday</span></Link></li>
          </ul>
        </div>

        {/* TOOLS */}
        <div className="menu-section">
          <p className="section-title">TOOLS</p>
          <ul>
            <li><Link to="/trip-planner"><FaMapMarkedAlt /><span>Trip Planner</span></Link></li>
            <li><Link to="/flight-status"><FaPlane /><span>Flight Status</span></Link></li>
            <li><Link to="/pnr"><FaInfoCircle /><span>PNR Status</span></Link></li>
          </ul>
        </div>

        {/* MORE */}
        <div className="menu-section">
          <p className="section-title">MORE</p>
          <ul>
            <li><Link to="/gift"><FaGift /><span>Gift Card</span></Link></li>
            <li><Link to="/invite"><FaUserFriends /><span>Invite & Earn</span></Link></li>
          </ul>
        </div>

      </div>
    </aside>
  );
}
