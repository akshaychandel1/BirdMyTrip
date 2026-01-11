
// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// /* LOGO IMAGE */
// import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
//       {/* LOGO */}
//       <NavLink to="/" className="nav-logo">
//         <img src={logo} alt="Bird My Trip Logo" />
//       </NavLink>

//       {/* LEFT MENU */}
//       <div className="nav-left">
//         <NavLink to="/tours" className="nav-btn">
//           Tours & Attractions
//         </NavLink>

//         {/* ✅ VISA – ab /visa page open hoga */}
//         <NavLink to="/visa" className="nav-btn">
//           Visa
//         </NavLink>

//         <NavLink to="/night-club" className="nav-btn">
//           Night Club
//         </NavLink>

//         <NavLink to="/cruise" className="nav-btn">
//           Cruise
//         </NavLink>
//       </div>

//       {/* RIGHT MENU */}
//       <div className="nav-right">
//         <button className="outline-btn">List Your Property</button>

//         <NavLink to="/login" className="text-link">
//           Sign in
//         </NavLink>

//         <NavLink to="/signup" className="primary-btn">
//           Register
//         </NavLink>
//       </div>
//     </header>
//   );
// }




// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// /* LOGO IMAGE */
// import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

// /* MEGA MENU COMPONENT */
// import ToursAttractions from "../pages/ToursAttractions";


// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [showMega, setShowMega] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
//       {/* LOGO */}
//       <NavLink to="/" className="nav-logo">
//         <img src={logo} alt="Bird My Trip Logo" />
//       </NavLink>

//       {/* LEFT MENU */}
//       <div className="nav-left">

//         {/* 🔥 TOURS & ATTRACTIONS MEGA MENU */}
//         <div
//           className="nav-btn mega-trigger"
//           onMouseEnter={() => setShowMega(true)}
//           onMouseLeave={() => setShowMega(false)}
//         >
//           Tours & Attractions

//           {showMega && (
//             <div className="mega-menu">
//               <ToursAttractions />
//             </div>
//           )}
//         </div>

//         <NavLink to="/visa" className="nav-btn">
//           Visa
//         </NavLink>

//         <NavLink to="/night-club" className="nav-btn">
//           Night Club
//         </NavLink>

//         <NavLink to="/cruise" className="nav-btn">
//           Cruise
//         </NavLink>
//       </div>

//       {/* RIGHT MENU */}
//       <div className="nav-right">
//         <button className="outline-btn">List Your Property</button>

//         <NavLink to="/login" className="text-link">
//           Sign in
//         </NavLink>

//         <NavLink to="/signup" className="primary-btn">
//           Register
//         </NavLink>
//       </div>
//     </header>
//   );
// }




import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

/* LOGO IMAGE */
import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
      {/* LOGO */}
      <NavLink to="/" className="nav-logo">
        <img src={logo} alt="Bird My Trip Logo" />
      </NavLink>

      {/* LEFT MENU */}
      <div className="nav-left">
        <NavLink to="/tours" className="nav-btn">
          Tours & Attractions
        </NavLink>

        <NavLink to="/visa" className="nav-btn">
          Visa
        </NavLink>

        <NavLink to="/night-club" className="nav-btn">
          Night Club
        </NavLink>

        <NavLink to="/cruise" className="nav-btn">
          Cruise
        </NavLink>
      </div>

      {/* RIGHT MENU */}
      <div className="nav-right">
        <button className="outline-btn">List Your Property</button>

        <NavLink to="/login" className="text-link">
          Sign in
        </NavLink>

        <NavLink to="/signup" className="primary-btn">
          Register
        </NavLink>
      </div>
    </header>
  );
}
