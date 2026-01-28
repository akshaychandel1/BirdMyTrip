// import "./CruiseSection.css";

// import c1 from "../../assets/cruise/c1.jpg";
// import c2 from "../../assets/cruise/c2.jpg";
// import c3 from "../../assets/cruise/c3.jpg";

// export default function CruiseSection() {
//   return (
//     <div className="special-container cruise-container">
//       <div className="tour-section">
//         <h2>Luxury Cruise Holidays</h2>
//         <p>Sail in style with world-class cruise experiences</p>

//         <div className="tour-grid">
//           <div className="tour-card cruise-card">
//             <img src={c1} alt="Dubai Marina Cruise" />
//             <div className="tour-overlay">
//               <h3>Dubai Marina Luxury Cruise</h3>
//             </div>
//           </div>

//           <div className="tour-card cruise-card">
//             <img src={c2} alt="Mediterranean Cruise" />
//             <div className="tour-overlay">
//               <h3>Mediterranean Cruise Voyage</h3>
//             </div>
//           </div>

//           <div className="tour-card cruise-card">
//             <img src={c3} alt="Caribbean Cruise" />
//             <div className="tour-overlay">
//               <h3>Caribbean Island Cruise</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import "./CruiseSection.css";
import { useLocation } from "react-router-dom";

import c1 from "../../assets/cruise/c1.jpg";
import c2 from "../../assets/cruise/c2.jpg";
import c3 from "../../assets/cruise/c3.jpg";

export default function CruiseSection() {
  const location = useLocation();

  // ❌ Home / Hero page par cruise section hide
  if (location.pathname === "/" || location.pathname === "/home") {
    return null;
  }

  return (
    <div className="special-container cruise-container">
      <div className="tour-section">
        <h2>Luxury Cruise Holidays</h2>
        <p>Sail in style with world-class cruise experiences</p>

        <div className="tour-grid">
          <div className="tour-card cruise-card">
            <img src={c1} alt="Dubai Marina Cruise" />
            <div className="tour-overlay">
              <h3>Dubai Marina Luxury Cruise</h3>
            </div>
          </div>

          <div className="tour-card cruise-card">
            <img src={c2} alt="Mediterranean Cruise" />
            <div className="tour-overlay">
              <h3>Mediterranean Cruise Voyage</h3>
            </div>
          </div>

          <div className="tour-card cruise-card">
            <img src={c3} alt="Caribbean Cruise" />
            <div className="tour-overlay">
              <h3>Caribbean Island Cruise</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
