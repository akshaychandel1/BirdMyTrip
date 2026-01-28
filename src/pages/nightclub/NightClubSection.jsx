// import "./NightClubSection.css";

// import nc1 from "../../assets/nightclub/nc1.jpg";
// import nc2 from "../../assets/nightclub/nc2.jpg";
// import nc3 from "../../assets/nightclub/nc3.jpg";

// export default function NightClubSection() {
//   return (
//     <div className="special-container nightclub-container">
//       <div className="tour-section">
//         <h2>Night Clubs & Party Life</h2>
//         <p>Premium nightlife experiences with a luxury vibe</p>

//         <div className="tour-grid">
//           <div className="tour-card nightclub-card">
//             <img src={nc1} alt="Dubai Night Club" />
//             <div className="tour-overlay">
//               <h3>Dubai Night Club</h3>
//             </div>
//           </div>

//           <div className="tour-card nightclub-card">
//             <img src={nc2} alt="Goa Beach Party" />
//             <div className="tour-overlay">
//               <h3>Goa Beach Night Party</h3>
//             </div>
//           </div>

//           <div className="tour-card nightclub-card">
//             <img src={nc3} alt="Bangkok Rooftop Club" />
//             <div className="tour-overlay">
//               <h3>Bangkok Rooftop Club</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import "./NightClubSection.css";
import { useLocation } from "react-router-dom";

import nc1 from "../../assets/nightclub/nc1.jpg";
import nc2 from "../../assets/nightclub/nc2.jpg";
import nc3 from "../../assets/nightclub/nc3.jpg";

export default function NightClubSection() {
  const location = useLocation();

  // ❌ Home / Hero page par nightclub section hide
  if (location.pathname === "/" || location.pathname === "/home") {
    return null;
  }

  return (
    <div className="special-container nightclub-container">
      <div className="tour-section">
        <h2>Night Clubs & Party Life</h2>
        <p>Premium nightlife experiences with a luxury vibe</p>

        <div className="tour-grid">
          <div className="tour-card nightclub-card">
            <img src={nc1} alt="Dubai Night Club" />
            <div className="tour-overlay">
              <h3>Dubai Night Club</h3>
            </div>
          </div>

          <div className="tour-card nightclub-card">
            <img src={nc2} alt="Goa Beach Party" />
            <div className="tour-overlay">
              <h3>Goa Beach Night Party</h3>
            </div>
          </div>

          <div className="tour-card nightclub-card">
            <img src={nc3} alt="Bangkok Rooftop Club" />
            <div className="tour-overlay">
              <h3>Bangkok Rooftop Club</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
