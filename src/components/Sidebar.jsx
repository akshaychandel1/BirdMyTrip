
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import "./Sidebar.css";

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

//       {/* TOP BAR (ONLY HAMBURGER) */}
//       <div className="sidebar-top">
//         <button
//           className="hamburger-btn"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle sidebar"
//         >
//           <FaBars />
//         </button>

//         {/* Optional: Home link text instead of logo (can remove if not needed) */}
//         {/* <Link to="/" className="sidebar-home">
//           Home
//         </Link> */}
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

// /* ICONS */
// import {
//   FaHotel, FaPlane, FaBus, FaTrain, FaTaxi, FaSuitcase,
//   FaMapMarkedAlt, FaGift, FaUserFriends, FaInfoCircle,
// } from "react-icons/fa";

// export default function Sidebar({ open }) {
//   return (
//     <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
//       <div className="menu-container">
        
//         {/* BOOK */}
//         <div className="menu-section">
//           <p className="section-label">BOOK</p>
//           <ul>
//             <li><Link to="/hotels"><FaHotel className="s-icon" /><span>Hotels</span></Link></li>
//             <li><Link to="/flights"><FaPlane className="s-icon" /><span>Flights</span></Link></li>
//             <li><Link to="/bus"><FaBus className="s-icon" /><span>Bus</span></Link></li>
//             <li><Link to="/train"><FaTrain className="s-icon" /><span>Train</span></Link></li>
//             <li><Link to="/cab"><FaTaxi className="s-icon" /><span>Cab</span></Link></li>
//             <li><Link to="/holiday"><FaSuitcase className="s-icon" /><span>Holiday</span></Link></li>
//           </ul>
//         </div>

//         {/* TOOLS */}
//         <div className="menu-section">
//           <p className="section-label">TOOLS</p>
//           <ul>
//             <li><Link to="/trip-planner"><FaMapMarkedAlt className="s-icon" /><span>Trip Planner</span></Link></li>
//             <li><Link to="/flight-status"><FaPlane className="s-icon" /><span>Flight Status</span></Link></li>
//             <li><Link to="/pnr"><FaInfoCircle className="s-icon" /><span>PNR Status</span></Link></li>
//           </ul>
//         </div>

//         {/* MORE */}
//         <div className="menu-section">
//           <p className="section-label">MORE</p>
//           <ul>
//             <li><Link to="/gift"><FaGift className="s-icon" /><span>Gift Card</span></Link></li>
//             <li><Link to="/invite"><FaUserFriends className="s-icon" /><span>Invite & Earn</span></Link></li>
//           </ul>
//         </div>

//       </div>
//     </aside>
//   );
// }

















































// // import React from "react";
// // import { Link, NavLink } from "react-router-dom";
// // import "./Sidebar.css";

// // /* ICONS */
// // import {
// //   FaHotel,
// //   FaPlane,
// //   FaBus,
// //   FaTrain,
// //   FaTaxi,
// //   FaSuitcase,
// //   FaMapMarkedAlt,
// //   FaGift,
// //   FaUserFriends,
// //   FaInfoCircle,
// //   FaHome,
// //   FaBuilding,
// //   FaTicketAlt,
// //   FaPassport,
// //   FaGlassCheers,
// // } from "react-icons/fa";
// // import { FaSailboat } from "react-icons/fa6";

// // export default function Sidebar({ open }) {
// //   return (
// //     <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
// //       <div className="menu-container">
        
// //         {/* NEW USER EXCLUSIVE SECTION (TICKET STYLE) */}
// //         {open && (
// //           <div className="sidebar-exclusive-wrapper">
// //              <p className="section-label">New user exclusive</p>
// //              <div className="sidebar-coupon-ticket">
// //                 <div className="ticket-main-part">
// //                    <div className="ticket-info">
// //                       <span className="t-discount">10% off</span>
// //                       <span className="t-desc">Hotels & Homes <FaInfoCircle size={10} color="#ccc"/></span>
// //                    </div>
// //                    <div className="ticket-icon-part">
// //                       <FaHotel className="t-pink-icon" />
// //                    </div>
// //                    {/* Notch Cuts */}
// //                    <div className="notch notch-top"></div>
// //                    <div className="notch notch-bottom"></div>
// //                 </div>
// //                 <button className="sidebar-claim-btn">Claim All</button>
// //              </div>
// //           </div>
// //         )}

// //         {/* BOOK SECTION */}
// //         <div className="menu-section">
// //           <p className="section-label">BOOK</p>
// //           <ul>
// //             <li><Link to="/hotels"><FaHotel className="s-icon" /><span>Hotels</span></Link></li>
// //             <li><Link to="/homestay"><FaHome className="s-icon" /><span>Homestay & Villas</span></Link></li>
// //             <li><Link to="/hotels&Flights"><FaBuilding className="s-icon" /><span>Hotels & Flights</span></Link></li>
// //             <li><Link to="/flights"><FaPlane className="s-icon" /><span>Flights</span></Link></li>
// //             <li><Link to="/bus"><FaBus className="s-icon" /><span>Bus</span></Link></li>
// //             <li><Link to="/train"><FaTrain className="s-icon" /><span>Train</span></Link></li>
// //             <li><Link to="/cab"><FaTaxi className="s-icon" /><span>Cab</span></Link></li>
// //             <li><Link to="/cruise"><FaSailboat className="s-icon" /><span>Cruise</span></Link></li>
// //             <li><Link to="/holiday"><FaSuitcase className="s-icon" /><span>Holiday</span></Link></li>
// //           </ul>
// //         </div>

// //         {/* EXPLORE SECTION (Added based on your request) */}
// //         <div className="menu-section">
// //           <p className="section-label">EXPLORE</p>
// //           <ul>
// //             <li>
// //               <NavLink to="/tours" className="nav-item-link">
// //                 <FaTicketAlt className="s-icon" /><span>Tours & Attractions</span>
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/visa" className="nav-item-link">
// //                 <FaPassport className="s-icon" /><span>Visa</span>
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/night-club" className="nav-item-link">
// //                 <FaGlassCheers className="s-icon" /><span>Night Club</span>
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/cruise" className="nav-item-link">
// //                 <FaSailboat className="s-icon" /><span>Cruise</span>
// //               </NavLink>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* TOOLS */}
// //         <div className="menu-section">
// //           <p className="section-label">TOOLS</p>
// //           <ul>
// //             <li><Link to="/trip-planner"><FaMapMarkedAlt className="s-icon" /><span>Trip Planner</span></Link></li>
// //             <li><Link to="/flight-status"><FaPlane className="s-icon" /><span>Flight Status</span></Link></li>
// //             <li><Link to="/pnr"><FaInfoCircle className="s-icon" /><span>PNR Status</span></Link></li>
// //           </ul>
// //         </div>

// //         {/* MORE */}
// //         <div className="menu-section">
// //           <p className="section-label">MORE</p>
// //           <ul>
// //             <li><Link to="/gift"><FaGift className="s-icon" /><span>Gift Card</span></Link></li>
// //             <li><Link to="/invite"><FaUserFriends className="s-icon" /><span>Invite & Earn</span></Link></li>
// //           </ul>
// //         </div>

// //       </div>
// //     </aside>
// //   );
// // }

































// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { X, Globe, ChevronUp, HelpCircle, Smartphone } from "lucide-react"; // Extra icons
// import "./Sidebar.css";

// /* ICONS */
// import {
//   FaHotel, FaPlane, FaBus, FaTrain, FaTaxi, FaSuitcase, FaMapMarkedAlt,
//   FaGift, FaUserFriends, FaInfoCircle, FaHome, FaBuilding, FaTicketAlt,
//   FaPassport, FaGlassCheers, FaCar, FaShip
// } from "react-icons/fa";
// import { FaSailboat } from "react-icons/fa6";

// export default function Sidebar({ open, setOpen }) {
//   return (
//     <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
      
//       {/* --- MOBILE ONLY HEADER --- */}
//       <div className="mobile-only-header">
//         <div className="mobile-nav-top">
//           <span className="mobile-brand">Trip.com</span>
//           <X className="mobile-close" onClick={() => setOpen(false)} />
//         </div>

//         <div className="mobile-login-box">
//           <p className="login-promo">Access savings just for you – in only one step!</p>
//           <div className="login-perks">
//             <span>🏷️ Extraordinary Savings</span>
//             <span>🪙 Rewards for booking</span>
//           </div>
//           <div className="login-buttons">
//             <button className="m-btn-outline">Search Bookings</button>
//             <button className="m-btn-primary">Sign In/Register</button>
//           </div>
//         </div>
//       </div>

//       <div className="menu-container">
        
//         {/* --- MOBILE SETTINGS SECTION --- */}
//         <div className="mobile-settings menu-section no-border">
//           <p className="section-label">Settings</p>
//           <ul>
//             <li className="m-setting-row"><img src="https://flagcdn.com/in.svg" width="20" alt="IN"/> <span>English (India)</span></li>
//             <li className="m-setting-row"><span className="m-currency">₹</span> <span>INR</span></li>
//           </ul>
//         </div>

//         {/* --- TRAVEL OPTIONS (AS PER SCREENSHOT) --- */}
//         <div className="menu-section">
//           <p className="section-label">Travel Options</p>
//           <ul>
//             <li><Link to="/hotels"><FaHotel className="s-icon" /><span>Hotels & Homes</span></Link></li>
//             <li><Link to="/flights"><FaPlane className="s-icon" /><span>Flights</span></Link></li>
//             <li><Link to="/car-rentals"><FaCar className="s-icon" /><span>Car Rentals</span></Link></li>
//             <li><Link to="/airport-transfers"><FaTaxi className="s-icon" /><span>Airport Transfers</span></Link></li>
//             <li><Link to="/tours"><FaTicketAlt className="s-icon" /><span>Attractions & Tours</span></Link></li>
//             <li><Link to="/cruise"><FaShip className="s-icon" /><span>Cruises</span></Link></li>
//             <li><Link to="/travel-guides"><FaMapMarkedAlt className="s-icon" /><span>Travel Guides</span></Link></li>
//           </ul>
//           <div className="show-less-btn">Show Less <ChevronUp size={14} /></div>
//         </div>

//         {/* --- MORE SECTION --- */}
//         <div className="menu-section">
//           <p className="section-label">More</p>
//           <ul>
//             <li><Link to="/gift"><div className="reward-coin">T</div><span>Trip.com Rewards</span></Link></li>
//             {/* Mobile Only Extra Links from Screenshot */}
//             <li className="mobile-extra"><Link to="/help"><HelpCircle size={18} className="s-icon" /><span>Help</span></Link></li>
//             <li className="mobile-extra"><Link to="/app"><Smartphone size={18} className="s-icon" /><span>Download the App</span></Link></li>
//           </ul>
//         </div>

//       </div>
//     </aside>
//   );
// }




















































// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { X, ChevronUp, HelpCircle, Smartphone } from "lucide-react";
// import "./Sidebar.css";

// /* ICONS */
// import {
//   FaHotel, FaPlane, FaBus, FaTrain, FaTaxi, FaSuitcase, FaMapMarkedAlt,
//   FaGift, FaUserFriends, FaInfoCircle, FaHome, FaBuilding, FaTicketAlt,
//   FaPassport, FaGlassCheers, FaCar, FaShip
// } from "react-icons/fa";
// import { FaSailboat } from "react-icons/fa6";

// export default function Sidebar({ open, setOpen }) {
//   return (
//     <>
//       {/* Mobile Backdrop */}
//       {open && window.innerWidth <= 768 && (
//         <div className="sidebar-backdrop" onClick={() => setOpen(false)}></div>
//       )}
      
//       <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
        
//         {/* --- MOBILE ONLY HEADER --- */}
//         <div className="mobile-only-header">
//           <div className="mobile-nav-top">
//             <span className="mobile-brand">Trip.com</span>
//             <X className="mobile-close" onClick={() => setOpen(false)} />
//           </div>

//           <div className="mobile-login-box">
//             <p className="login-promo">Access savings just for you – in only one step!</p>
//             <div className="login-perks">
//               <span>🏷️ Extraordinary Savings</span>
//               <span>🪙 Rewards for booking</span>
//             </div>
//             <div className="login-buttons">
//               <button className="m-btn-outline">Search Bookings</button>
//               <button className="m-btn-primary">Sign In/Register</button>
//             </div>
//           </div>
//         </div>

//         <div className="menu-container">
          
//           {/* --- DESKTOP: NEW USER EXCLUSIVE SECTION (TICKET STYLE) --- */}
//           <div className="desktop-only">
//             <div className="sidebar-exclusive-wrapper">
//               <p className="section-label">New user exclusive</p>
//               <div className="sidebar-coupon-ticket">
//                 <div className="ticket-main-part">
//                   <div className="ticket-info">
//                     <span className="t-discount">10% off</span>
//                     <span className="t-desc">Hotels & Homes <FaInfoCircle size={10} color="#ccc"/></span>
//                   </div>
//                   <div className="ticket-icon-part">
//                     <FaHotel className="t-pink-icon" />
//                   </div>
//                   {/* Notch Cuts */}
//                   <div className="notch notch-top"></div>
//                   <div className="notch notch-bottom"></div>
//                 </div>
//                 <button className="sidebar-claim-btn">Claim All</button>
//               </div>
//             </div>
//           </div>

//           {/* --- DESKTOP: BOOK SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">BOOK</p>
//             <ul>
//               <li><Link to="/hotels"><FaHotel className="s-icon" /><span>Hotels</span></Link></li>
//               <li><Link to="/homestay"><FaHome className="s-icon" /><span>Homestay & Villas</span></Link></li>
//               <li><Link to="/hotels&Flights"><FaBuilding className="s-icon" /><span>Hotels & Flights</span></Link></li>
//               <li><Link to="/flights"><FaPlane className="s-icon" /><span>Flights</span></Link></li>
//               <li><Link to="/bus"><FaBus className="s-icon" /><span>Bus</span></Link></li>
//               <li><Link to="/train"><FaTrain className="s-icon" /><span>Train</span></Link></li>
//               <li><Link to="/cab"><FaTaxi className="s-icon" /><span>Cab</span></Link></li>
//               <li><Link to="/cruise"><FaSailboat className="s-icon" /><span>Cruise</span></Link></li>
//               <li><Link to="/holiday"><FaSuitcase className="s-icon" /><span>Holiday</span></Link></li>
//             </ul>
//           </div>

//           {/* --- DESKTOP: EXPLORE SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">EXPLORE</p>
//             <ul>
//               <li>
//                 <NavLink to="/tours" className="nav-item-link">
//                   <FaTicketAlt className="s-icon" /><span>Tours & Attractions</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/visa" className="nav-item-link">
//                   <FaPassport className="s-icon" /><span>Visa</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/night-club" className="nav-item-link">
//                   <FaGlassCheers className="s-icon" /><span>Night Club</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/cruise" className="nav-item-link">
//                   <FaSailboat className="s-icon" /><span>Cruise</span>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           {/* --- DESKTOP: TOOLS SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">TOOLS</p>
//             <ul>
//               <li><Link to="/trip-planner"><FaMapMarkedAlt className="s-icon" /><span>Trip Planner</span></Link></li>
//               <li><Link to="/flight-status"><FaPlane className="s-icon" /><span>Flight Status</span></Link></li>
//               <li><Link to="/pnr"><FaInfoCircle className="s-icon" /><span>PNR Status</span></Link></li>
//             </ul>
//           </div>

//           {/* --- DESKTOP: MORE SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">MORE</p>
//             <ul>
//               <li><Link to="/gift"><FaGift className="s-icon" /><span>Gift Card</span></Link></li>
//               <li><Link to="/invite"><FaUserFriends className="s-icon" /><span>Invite & Earn</span></Link></li>
//             </ul>
//           </div>

//           {/* --- MOBILE SETTINGS SECTION --- */}
//           <div className="mobile-settings menu-section no-border">
//             <p className="section-label">Settings</p>
//             <ul>
//               <li className="m-setting-row">
//                 <img src="https://flagcdn.com/in.svg" width="20" alt="IN" /> 
//                 <span>English (India)</span>
//               </li>
//               <li className="m-setting-row">
//                 <span className="m-currency">₹</span> 
//                 <span>INR</span>
//               </li>
//             </ul>
//           </div>

//           {/* --- MOBILE: TRAVEL OPTIONS (AS PER SCREENSHOT) --- */}
//           <div className="menu-section">
//             <p className="section-label">Travel Options</p>
//             <ul>
//               <li><Link to="/hotels" onClick={() => window.innerWidth <= 768 && setOpen(false)}><FaHotel className="s-icon" /><span>Hotels & Homes</span></Link></li>
//               <li><Link to="/flights" onClick={() => window.innerWidth <= 768 && setOpen(false)}><FaPlane className="s-icon" /><span>Flights</span></Link></li>
//               <li><Link to="/car-rentals" onClick={() => window.innerWidth <= 768 && setOpen(false)}><FaCar className="s-icon" /><span>Car Rentals</span></Link></li>
//               <li><Link to="/airport-transfers" onClick={() => window.innerWidth <= 768 && setOpen(false)}><FaTaxi className="s-icon" /><span>Airport Transfers</span></Link></li>
//               <li><Link to="/tours" onClick={() => window.innerWidth <= 768 && setOpen(false)}><FaTicketAlt className="s-icon" /><span>Attractions & Tours</span></Link></li>
//               <li><Link to="/cruise" onClick={() => window.innerWidth <= 768 && setOpen(false)}><FaShip className="s-icon" /><span>Cruises</span></Link></li>
//               <li><Link to="/travel-guides" onClick={() => window.innerWidth <= 768 && setOpen(false)}><FaMapMarkedAlt className="s-icon" /><span>Travel Guides</span></Link></li>
//             </ul>
//             <div className="show-less-btn">Show Less <ChevronUp size={14} /></div>
//           </div>

//           {/* --- MOBILE: MORE SECTION --- */}
//           <div className="menu-section">
//             <p className="section-label">More</p>
//             <ul>
//               <li><Link to="/gift" onClick={() => window.innerWidth <= 768 && setOpen(false)}><div className="reward-coin">T</div><span>Trip.com Rewards</span></Link></li>
//               {/* Mobile Only Extra Links from Screenshot */}
//               <li className="mobile-extra"><Link to="/help" onClick={() => window.innerWidth <= 768 && setOpen(false)}><HelpCircle size={18} className="s-icon" /><span>Help</span></Link></li>
//               <li className="mobile-extra"><Link to="/app" onClick={() => window.innerWidth <= 768 && setOpen(false)}><Smartphone size={18} className="s-icon" /><span>Download the App</span></Link></li>
//             </ul>
//           </div>

//         </div>
//       </aside>
//     </>
//   );
// }













































// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { X, ChevronUp, HelpCircle, Smartphone, Globe, Info } from "lucide-react";
// import "./Sidebar.css";

// /* ICONS */
// import {
//   FaHotel, FaPlane, FaCar, FaTaxi, FaTicketAlt,
//   FaShip, FaMapMarkedAlt, FaInfoCircle, FaQuestionCircle,
//   FaMobileAlt, FaGift, FaUserFriends, FaBus, FaTrain,
//   FaSuitcase, FaHome, FaBuilding, FaPassport, FaGlassCheers
// } from "react-icons/fa";

// export default function Sidebar({ open, setOpen }) {
//   return (
//     <>
//       {/* Mobile Backdrop */}
//       {open && (
//         <div className="sidebar-backdrop" onClick={() => setOpen(false)}></div>
//       )}
      
//       <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
        
//         {/* --- DESKTOP: NEW USER EXCLUSIVE SECTION (TICKET STYLE) --- */}
       

//         {/* --- MOBILE ONLY HEADER --- */}
//         <div className="mobile-only-header">
//           <div className="mobile-nav-top">
//             <span className="mobile-brand">Trip.com</span>
//             <X className="mobile-close" onClick={() => setOpen(false)} />
//           </div>

//           <div className="mobile-login-box">
//             <p className="login-promo">Access savings just for you – in only one step!</p>
//             <div className="login-perks">
//               <span><FaInfoCircle className="perk-icon" /> Extraordinary Savings</span>
//               <span><FaGift className="perk-icon" /> Rewards for booking</span>
//             </div>
//             <div className="login-buttons">
//               <button className="m-btn-outline">Search Bookings</button>
//               <button className="m-btn-primary">Sign In/Register</button>
//             </div>
//           </div>
//         </div>

//         <div className="menu-container">
          
//           {/* --- DESKTOP: BOOK SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">BOOK</p>
//             <ul>
//               <li><Link to="/hotels"><FaHotel className="s-icon" /><span>Hotels</span></Link></li>
//               <li><Link to="/homestay"><FaHome className="s-icon" /><span>Homestay & Villas</span></Link></li>
//               <li><Link to="/hotels&Flights"><FaBuilding className="s-icon" /><span>Hotels & Flights</span></Link></li>
//               <li><Link to="/flights"><FaPlane className="s-icon" /><span>Flights</span></Link></li>
//               <li><Link to="/bus"><FaBus className="s-icon" /><span>Bus</span></Link></li>
//               <li><Link to="/train"><FaTrain className="s-icon" /><span>Train</span></Link></li>
//               <li><Link to="/cab"><FaTaxi className="s-icon" /><span>Cab</span></Link></li>
//               <li><Link to="/cruise"><FaShip className="s-icon" /><span>Cruise</span></Link></li>
//               <li><Link to="/holiday"><FaSuitcase className="s-icon" /><span>Holiday</span></Link></li>
//             </ul>
//           </div>

//           {/* --- DESKTOP: EXPLORE SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">EXPLORE</p>
//             <ul>
//               <li>
//                 <NavLink to="/tours" className="nav-item-link">
//                   <FaTicketAlt className="s-icon" /><span>Tours & Attractions</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/visa" className="nav-item-link">
//                   <FaPassport className="s-icon" /><span>Visa</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/night-club" className="nav-item-link">
//                   <FaGlassCheers className="s-icon" /><span>Night Club</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/cruise" className="nav-item-link">
//                   <FaShip className="s-icon" /><span>Cruise</span></NavLink>
//               </li>
//             </ul>
//           </div>

//           {/* --- DESKTOP: TOOLS SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">TOOLS</p>
//             <ul>
//               <li><Link to="/trip-planner"><FaMapMarkedAlt className="s-icon" /><span>Trip Planner</span></Link></li>
//               <li><Link to="/flight-status"><FaPlane className="s-icon" /><span>Flight Status</span></Link></li>
//               <li><Link to="/pnr"><FaInfoCircle className="s-icon" /><span>PNR Status</span></Link></li>
//             </ul>
//           </div>

//           {/* --- DESKTOP: MORE SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">MORE</p>
//             <ul>
//               <li><Link to="/gift"><FaGift className="s-icon" /><span>Gift Card</span></Link></li>
//               <li><Link to="/invite"><FaUserFriends className="s-icon" /><span>Invite & Earn</span></Link></li>
//             </ul>
//           </div>

//           {/* --- MOBILE SETTINGS SECTION --- */}
//           <div className="mobile-only menu-section no-border">
//             <p className="section-label">Settings</p>
//             <ul>
//               <li className="m-setting-row">
//                 <Globe className="setting-icon" /> 
//                 <span>English (India)</span>
//               </li>
//               <li className="m-setting-row">
//                 <span className="m-currency">₹</span> 
//                 <span>INR</span>
//               </li>
//             </ul>
//           </div>

//           {/* --- MOBILE: TRAVEL OPTIONS --- */}
//           <div className="mobile-only menu-section">
//             <p className="section-label">Travel Options</p>
//             <ul>
//               <li><Link to="/hotels" onClick={() => setOpen(false)}><FaHotel className="s-icon" /><span>Hotels & Homes</span></Link></li>
//               <li><Link to="/flights" onClick={() => setOpen(false)}><FaPlane className="s-icon" /><span>Flights</span></Link></li>
//               <li><Link to="/car-rentals" onClick={() => setOpen(false)}><FaCar className="s-icon" /><span>Car Rentals</span></Link></li>
//               <li><Link to="/airport-transfers" onClick={() => setOpen(false)}><FaTaxi className="s-icon" /><span>Airport Transfers</span></Link></li>
//               <li><Link to="/tours" onClick={() => setOpen(false)}><FaTicketAlt className="s-icon" /><span>Attractions & Tours</span></Link></li>
//               <li><Link to="/cruise" onClick={() => setOpen(false)}><FaShip className="s-icon" /><span>Cruises</span></Link></li>
//               <li><Link to="/travel-guides" onClick={() => setOpen(false)}><FaMapMarkedAlt className="s-icon" /><span>Travel Guides</span></Link></li>
//             </ul>
//             <div className="show-less-btn">
//               <span>Show Less</span> 
//               <ChevronUp size={14} />
//             </div>
//           </div>

//           {/* --- MOBILE: MORE SECTION --- */}
//           <div className="mobile-only menu-section">
//             <p className="section-label">More</p>
//             <ul>
//               <li className="rewards-item">
//                 <Link to="/rewards" onClick={() => setOpen(false)}>
//                   <div className="reward-coin">T</div>
//                   <span>Trip.com Rewards</span>
//                 </Link>
//               </li>
//               <li><Link to="/help" onClick={() => setOpen(false)}><HelpCircle className="s-icon" /><span>Help</span></Link></li>
//               <li><Link to="/app" onClick={() => setOpen(false)}><Smartphone className="s-icon" /><span>Download the App</span></Link></li>
//             </ul>
//           </div>

//         </div>
//       </aside>
//     </>
//   );
// }






































// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { X, ChevronUp, HelpCircle, Smartphone, Globe, Info } from "lucide-react";
// import "./Sidebar.css";

// /* ICONS */
// import {
//   FaHotel, FaPlane, FaCar, FaTaxi, FaTicketAlt,
//   FaShip, FaMapMarkedAlt, FaInfoCircle, FaGift,
//   FaUserFriends, FaBus, FaTrain, FaSuitcase,
//   FaHome, FaBuilding, FaPassport, FaGlassCheers
// } from "react-icons/fa";

// export default function Sidebar({ open, setOpen }) {
//   return (
//     <>
//       {/* Mobile Backdrop */}
//       {open && (
//         <div className="sidebar-backdrop" onClick={() => setOpen(false)}></div>
//       )}
      
//       <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
        
//         {/* --- DESKTOP: NEW USER EXCLUSIVE SECTION (TICKET STYLE) --- */}
    

//         {/* --- MOBILE ONLY HEADER --- */}
//         <div className="mobile-only-header">
//           <div className="mobile-nav-top">
//             <span className="mobile-brand">Trip.com</span>
//             <X className="mobile-close" onClick={() => setOpen(false)} />
//           </div>

//           <div className="mobile-login-box">
//             <p className="login-promo">Access savings just for you – in only one step!</p>
//             <div className="login-perks">
//               <span><FaInfoCircle className="perk-icon" /> Extraordinary Savings</span>
//               <span><FaGift className="perk-icon" /> Rewards for booking</span>
//             </div>
//             <div className="login-buttons">
//               <button className="m-btn-outline">Search Bookings</button>
//               <button className="m-btn-primary">Sign In/Register</button>
//             </div>
//           </div>
//         </div>

//         <div className="menu-container">
          
//           {/* --- DESKTOP: BOOK SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">BOOK</p>
//             <ul>
//               <li><Link to="/hotels"><FaHotel className="s-icon" /><span>Hotels</span></Link></li>
//               <li><Link to="/homestay"><FaHome className="s-icon" /><span>Homestay & Villas</span></Link></li>
//               <li><Link to="/hotels&Flights"><FaBuilding className="s-icon" /><span>Hotels & Flights</span></Link></li>
//               <li><Link to="/flights"><FaPlane className="s-icon" /><span>Flights</span></Link></li>
//               <li><Link to="/bus"><FaBus className="s-icon" /><span>Bus</span></Link></li>
//               <li><Link to="/train"><FaTrain className="s-icon" /><span>Train</span></Link></li>
//               <li><Link to="/cab"><FaTaxi className="s-icon" /><span>Cab</span></Link></li>
//               <li><Link to="/cruise"><FaShip className="s-icon" /><span>Cruise</span></Link></li>
//               <li><Link to="/holiday"><FaSuitcase className="s-icon" /><span>Holiday</span></Link></li>
//             </ul>
//           </div>

//           {/* --- DESKTOP: EXPLORE SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">EXPLORE</p>
//             <ul>
//               <li>
//                 <NavLink to="/tours" className="nav-item-link">
//                   <FaTicketAlt className="s-icon" /><span>Tours & Attractions</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/visa" className="nav-item-link">
//                   <FaPassport className="s-icon" /><span>Visa</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/night-club" className="nav-item-link">
//                   <FaGlassCheers className="s-icon" /><span>Night Club</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/cruise" className="nav-item-link">
//                   <FaShip className="s-icon" /><span>Cruise</span></NavLink>
//               </li>
//             </ul>
//           </div>

//           {/* --- DESKTOP: TOOLS SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">TOOLS</p>
//             <ul>
//               <li><Link to="/trip-planner"><FaMapMarkedAlt className="s-icon" /><span>Trip Planner</span></Link></li>
//               <li><Link to="/flight-status"><FaPlane className="s-icon" /><span>Flight Status</span></Link></li>
//               <li><Link to="/pnr"><FaInfoCircle className="s-icon" /><span>PNR Status</span></Link></li>
//             </ul>
//           </div>

//           {/* --- DESKTOP: MORE SECTION --- */}
//           <div className="desktop-only menu-section">
//             <p className="section-label">MORE</p>
//             <ul>
//               <li><Link to="/gift"><FaGift className="s-icon" /><span>Gift Card</span></Link></li>
//               <li><Link to="/invite"><FaUserFriends className="s-icon" /><span>Invite & Earn</span></Link></li>
//             </ul>
//           </div>

//           {/* --- MOBILE SETTINGS SECTION --- */}
//           <div className="mobile-only menu-section no-border">
//             <p className="section-label">Settings</p>
//             <ul>
//               <li className="m-setting-row">
//                 <Globe className="setting-icon" /> 
//                 <span>English (India)</span>
//               </li>
//               <li className="m-setting-row">
//                 <span className="m-currency">₹</span> 
//                 <span>INR</span>
//               </li>
//             </ul>
//           </div>

//           {/* --- MOBILE: TRAVEL OPTIONS --- */}
//           <div className="mobile-only menu-section">
//             <p className="section-label">Travel Options</p>
//             <ul>
//               <li><Link to="/hotels" onClick={() => setOpen(false)}><FaHotel className="s-icon" /><span>Hotels & Homes</span></Link></li>
//               <li><Link to="/flights" onClick={() => setOpen(false)}><FaPlane className="s-icon" /><span>Flights</span></Link></li>
//               <li><Link to="/car-rentals" onClick={() => setOpen(false)}><FaCar className="s-icon" /><span>Car Rentals</span></Link></li>
//               <li><Link to="/airport-transfers" onClick={() => setOpen(false)}><FaTaxi className="s-icon" /><span>Airport Transfers</span></Link></li>
//               <li><Link to="/tours" onClick={() => setOpen(false)}><FaTicketAlt className="s-icon" /><span>Attractions & Tours</span></Link></li>
//               <li><Link to="/cruise" onClick={() => setOpen(false)}><FaShip className="s-icon" /><span>Cruises</span></Link></li>
//               <li><Link to="/travel-guides" onClick={() => setOpen(false)}><FaMapMarkedAlt className="s-icon" /><span>Travel Guides</span></Link></li>
//             </ul>
//             <div className="show-less-btn">
//               <span>Show Less</span> 
//               <ChevronUp size={14} />
//             </div>
//           </div>

//           {/* --- MOBILE: MORE SECTION --- */}
//           <div className="mobile-only menu-section">
//             <p className="section-label">More</p>
//             <ul>
//               <li className="rewards-item">
//                 <Link to="/rewards" onClick={() => setOpen(false)}>
//                   <div className="reward-coin">T</div>
//                   <span>Trip.com Rewards</span>
//                 </Link>
//               </li>
//               <li><Link to="/help" onClick={() => setOpen(false)}><HelpCircle className="s-icon" /><span>Help</span></Link></li>
//               <li><Link to="/app" onClick={() => setOpen(false)}><Smartphone className="s-icon" /><span>Download the App</span></Link></li>
//             </ul>
//           </div>

//         </div>
//       </aside>
//     </>
//   );
// }






































import React from "react";
import { Link, NavLink } from "react-router-dom";
import { X, ChevronUp, HelpCircle, Smartphone, Globe } from "lucide-react";
import "./Sidebar.css";

/* ICONS */
import {
  FaHotel, FaPlane, FaCar, FaTaxi, FaTicketAlt,
  FaShip, FaMapMarkedAlt, FaInfoCircle, FaGift,
  FaUserFriends, FaBus, FaTrain, FaSuitcase,
  FaHome, FaBuilding, FaPassport, FaGlassCheers
} from "react-icons/fa";

export default function Sidebar({ open, setOpen }) {
  // मोबाइल पर sidebar close करने का function
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  };

  return (  
    <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
      {/* --- MOBILE ONLY HEADER --- */}
      <div className="mobile-only-header">
        <div className="mobile-nav-top">
          <span className="mobile-brand">Trip.com</span>
          <X className="mobile-close" onClick={() => setOpen(false)} />
        </div>

        <div className="mobile-login-box">
          <p className="login-promo">Access savings just for you – in only one step!</p>
          <div className="login-perks">
            <span><FaInfoCircle className="perk-icon" /> Extraordinary Savings</span>
            <span><FaGift className="perk-icon" /> Rewards for booking</span>
          </div>
          <div className="login-buttons">
            <button className="m-btn-outline" onClick={handleLinkClick}>Search Bookings</button>
            <button className="m-btn-primary" onClick={handleLinkClick}>Sign In/Register</button>
          </div>
        </div>
      </div>

      <div className="menu-container">
        {/* --- DESKTOP: BOOK SECTION --- */}
        <div className="desktop-only menu-section">
          <p className="section-label">BOOK</p>
          <ul>
            <li><Link to="/hotels" onClick={handleLinkClick}><FaHotel className="s-icon" /><span>Hotels</span></Link></li>
            <li><Link to="/homestay" onClick={handleLinkClick}><FaHome className="s-icon" /><span>Homestay & Villas</span></Link></li>
            <li><Link to="/hotels&Flights" onClick={handleLinkClick}><FaBuilding className="s-icon" /><span>Hotels & Flights</span></Link></li>
            <li><Link to="/flights" onClick={handleLinkClick}><FaPlane className="s-icon" /><span>Flights</span></Link></li>
            <li><Link to="/bus" onClick={handleLinkClick}><FaBus className="s-icon" /><span>Bus</span></Link></li>
            <li><Link to="/train" onClick={handleLinkClick}><FaTrain className="s-icon" /><span>Train</span></Link></li>
            <li><Link to="/cab" onClick={handleLinkClick}><FaTaxi className="s-icon" /><span>Cab</span></Link></li>
            <li><Link to="/cruise" onClick={handleLinkClick}><FaShip className="s-icon" /><span>Cruise</span></Link></li>
            <li><Link to="/holiday" onClick={handleLinkClick}><FaSuitcase className="s-icon" /><span>Holiday</span></Link></li>
          </ul>
        </div>

        {/* --- DESKTOP: EXPLORE SECTION --- */}
        <div className="desktop-only menu-section">
          <p className="section-label">EXPLORE</p>
          <ul>
            <li>
              <NavLink to="/tours" className="nav-item-link" onClick={handleLinkClick}>
                <FaTicketAlt className="s-icon" /><span>Tours & Attractions</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/visa" className="nav-item-link" onClick={handleLinkClick}>
                <FaPassport className="s-icon" /><span>Visa</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/night-club" className="nav-item-link" onClick={handleLinkClick}>
                <FaGlassCheers className="s-icon" /><span>Night Club</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cruise" className="nav-item-link" onClick={handleLinkClick}>
                <FaShip className="s-icon" /><span>Cruise</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* --- DESKTOP: TOOLS SECTION --- */}
        <div className="desktop-only menu-section">
          <p className="section-label">TOOLS</p>
          <ul>
            <li><Link to="/trip-planner" onClick={handleLinkClick}><FaMapMarkedAlt className="s-icon" /><span>Trip Planner</span></Link></li>
            <li><Link to="/flight-status" onClick={handleLinkClick}><FaPlane className="s-icon" /><span>Flight Status</span></Link></li>
            <li><Link to="/pnr" onClick={handleLinkClick}><FaInfoCircle className="s-icon" /><span>PNR Status</span></Link></li>
          </ul>
        </div>

        {/* --- DESKTOP: MORE SECTION --- */}
        <div className="desktop-only menu-section">
          <p className="section-label">MORE</p>
          <ul>
            <li><Link to="/gift" onClick={handleLinkClick}><FaGift className="s-icon" /><span>Gift Card</span></Link></li>
            <li><Link to="/invite" onClick={handleLinkClick}><FaUserFriends className="s-icon" /><span>Invite & Earn</span></Link></li>
          </ul>
        </div>

        {/* --- MOBILE SETTINGS SECTION --- */}
        <div className="mobile-only menu-section no-border">
          <p className="section-label">Settings</p>
          <ul>
            <li className="m-setting-row">
              <Globe className="setting-icon" /> 
              <span>English (India)</span>
            </li>
            <li className="m-setting-row">
              <span className="m-currency">₹</span> 
              <span>INR</span>
            </li>
          </ul>
        </div>

        {/* --- MOBILE: TRAVEL OPTIONS --- */}
        <div className="mobile-only menu-section">
          <p className="section-label">Travel Options</p>
          <ul>
            <li><Link to="/hotels" onClick={handleLinkClick}><FaHotel className="s-icon" /><span>Hotels & Homes</span></Link></li>
            <li><Link to="/flights" onClick={handleLinkClick}><FaPlane className="s-icon" /><span>Flights</span></Link></li>
            <li><Link to="/car-rentals" onClick={handleLinkClick}><FaCar className="s-icon" /><span>Car Rentals</span></Link></li>
            <li><Link to="/airport-transfers" onClick={handleLinkClick}><FaTaxi className="s-icon" /><span>Airport Transfers</span></Link></li>
            <li><Link to="/tours" onClick={handleLinkClick}><FaTicketAlt className="s-icon" /><span>Attractions & Tours</span></Link></li>
            <li><Link to="/cruise" onClick={handleLinkClick}><FaShip className="s-icon" /><span>Cruises</span></Link></li>
            <li><Link to="/travel-guides" onClick={handleLinkClick}><FaMapMarkedAlt className="s-icon" /><span>Travel Guides</span></Link></li>
          </ul>
          <div className="show-less-btn" onClick={handleLinkClick}>
            <span>Show Less</span> 
            <ChevronUp size={14} />
          </div>
        </div>

        {/* --- MOBILE: MORE SECTION --- */}
        <div className="mobile-only menu-section">
          <p className="section-label">More</p>
          <ul>
            <li className="rewards-item">
              <Link to="/rewards" onClick={handleLinkClick}>
                <div className="reward-coin">T</div>
                <span>Trip.com Rewards</span>
              </Link>
            </li>
            <li><Link to="/help" onClick={handleLinkClick}><HelpCircle className="s-icon" /><span>Help</span></Link></li>
            <li><Link to="/app" onClick={handleLinkClick}><Smartphone className="s-icon" /><span>Download the App</span></Link></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}