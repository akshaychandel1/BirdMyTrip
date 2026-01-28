
// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";

// /* LOGO IMAGE */
// import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       {/* ================= TOP NAVBAR ================= */}
//       <header className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
        
//         {/* LOGO */}
//         <NavLink to="/" className="nav-logo" onClick={closeMenu}>
//           <img src={logo} alt="Bird My Trip Logo" />
//         </NavLink>

//         {/* LEFT MENU (DESKTOP) */}
//         <div className="nav-left">
//           <NavLink to="/tours" className="nav-btn">
//             Tours & Attractions
//           </NavLink>
//           <NavLink to="/visa" className="nav-btn">
//             Visa
//           </NavLink>
//           <NavLink to="/night-club" className="nav-btn">
//             Night Club
//           </NavLink>
//           <NavLink to="/cruise" className="nav-btn">
//             Cruise
//           </NavLink>
//         </div>

//         {/* RIGHT MENU (DESKTOP) */}
//         <div className="nav-right">
          
//           {/* ✅ FIXED: NOW CLICKABLE */}
//           <NavLink
//             to="/list-your-property"
//             className="outline-btn"
//             onClick={closeMenu}
//           >
//             List Your Property
//           </NavLink>

//           <NavLink to="/login" className="text-link">
//             Sign in
//           </NavLink>

//           <NavLink to="/signup" className="primary-btn">
//             Register
//           </NavLink>
//         </div>

//         {/* HAMBURGER ICON (MOBILE) */}
//         <div className="hamburger" onClick={toggleMenu}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </header>

//       {/* OVERLAY */}
//       <div
//         className={`menu-overlay ${menuOpen ? "active" : ""}`}
//         onClick={closeMenu}
//       />

//       {/* ================= MOBILE MENU ================= */}
//       <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
//         <NavLink to="/tours" onClick={closeMenu}>
//           Tours & Attractions
//         </NavLink>
//         <NavLink to="/visa" onClick={closeMenu}>
//           Visa
//         </NavLink>
//         <NavLink to="/night-club" onClick={closeMenu}>
//           Night Club
//         </NavLink>
//         <NavLink to="/cruise" onClick={closeMenu}>
//           Cruise
//         </NavLink>

//         {/* ✅ MOBILE ALSO FIXED */}
//         <NavLink
//           to="/list-your-property"
//           className="outline-btn"
//           onClick={closeMenu}
//         >
//           List Your Property
//         </NavLink>

//         <NavLink to="/login" onClick={closeMenu}>
//           Sign in
//         </NavLink>
//         <NavLink to="/signup" onClick={closeMenu}>
//           Register
//         </NavLink>
//       </div>
//     </>
//   );
// }
























// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaUserCircle } from "react-icons/fa";
// import "./Navbar.css";

// /* LOGO IMAGE */
// import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

// export default function Navbar({ toggleSidebar }) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="nav-container">
        
//         {/* LEFT SECTION: Hamburger + Logo */}
//         <div className="nav-left-group">
//           <button className="sidebar-toggle" onClick={toggleSidebar}>
//             <FaBars />
//           </button>
//           <NavLink to="/" className="nav-logo">
//             <img src={logo} alt="Bird My Trip Logo" className="w-16" />
//           </NavLink>
//         </div>


//         {/* RIGHT SECTION: Actions */}
//         <div className="nav-right-group">
//           <NavLink to="/list-your-property" className="property-btn">
//             List Your Property
//           </NavLink>

//           <div className="auth-box">
//             <NavLink to="/login" className="login-btn">
//               <FaUserCircle className="user-icon" />
//               <div className="login-text">
//                 <span>Login or</span>
//                 <strong>Create Account</strong>
//               </div>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }









import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

/* LOGO IMAGE */
import logo from "../assets/WhatsApp Image 2026-01-03 at 1.17.08 PM.jpeg";

export default function Navbar({ toggleSidebar, sidebarOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        
        {/* LEFT SECTION: Hamburger + Logo */}
        <div className="nav-left-group">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <NavLink to="/" className="nav-logo">
            <img src={logo} alt="Bird My Trip Logo" className="w-16" />
          </NavLink>
        </div>

        {/* RIGHT SECTION: Actions */}
        <div className="nav-right-group">
          <NavLink to="/list-your-property" className="property-btn">
            List Your Property
          </NavLink>

          <div className="auth-box">
            <NavLink to="/login" className="login-btn">
              <FaUserCircle className="user-icon" />
              <div className="login-text">
                <span>Login or</span>
                <strong>Create Account</strong>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}