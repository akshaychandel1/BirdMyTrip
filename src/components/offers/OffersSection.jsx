
// import OffersHeader from "./OffersHeader";
// import OffersGrid from "./OffersGrid";
// import "./Offers.css";

// export default function OffersSection() {
//   return (
//     <section className="mmt-offers">
//       {/* 🔥 WHITE BOX LIKE MMT */}
//       <div className="mmt-offers-box">
//         <OffersHeader />
//         <OffersGrid />
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";
// import OffersHeader from "./OffersHeader";
// import OffersGrid from "./OffersGrid";
// import offersData from "../../data/offersData"; // ✅ FIXED
// import "./Offers.css";

// export default function OffersSection() {
//   const [activeTab, setActiveTab] = useState("all");

//   return (
//     <section className="mmt-offers">
//       <div className="mmt-offers-box">
//         <OffersHeader activeTab={activeTab} setActiveTab={setActiveTab} />
//         <OffersGrid activeTab={activeTab} offersData={offersData} />
//       </div>
//     </section>
//   );
// }












import { useState } from "react";
import OffersHeader from "./OffersHeader";
import OffersGrid from "./OffersGrid";
import offersData from "../../data/offersData";
import "./Offers.css";

export default function OffersSection() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="offers-section">
      <div className="offers-wrapper">
        <OffersHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <OffersGrid activeTab={activeTab} offersData={offersData} />
      </div>
    </section>
  );
}
