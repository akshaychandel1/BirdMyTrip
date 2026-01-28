// import React from "react";
// import { Compass, Map, CreditCard, Users, Gift } from "lucide-react";
// import "./ExploreMoreBar.css";

// export default function ExploreMoreBar() {
//   return (
//     <div className="explore-wrapper">
//       <div className="explore-bar">

//         {/* Where2Go */}
//         <div className="explore-item">
//           <span className="icon">
//             <Compass size={20} color="#008cff" />
//           </span>
//           <div>
//             <b>Where2Go</b>
//           </div>
//         </div>

//         {/* How2Go */}
//         <div className="explore-item">
//           <span className="icon">
//             <Map size={20} color="#008cff" />
//           </span>
//           <div>
//             <b>
//               How2Go <span className="new">new</span>
//             </b>
//             <p>Find routes to anywhere</p>
//           </div>
//         </div>

//         {/* Credit Card */}
//         <div className="explore-item">
//           <span className="icon">
//             <CreditCard size={20} color="#008cff" />
//           </span>
//           <div>
//             <b>ICICI Credit Card</b>
//             <p>Get rewards & big benefits</p>
//           </div>
//         </div>

//         {/* MICE */}
//         <div className="explore-item">
//           <span className="icon">
//             <Users size={20} color="#008cff" />
//           </span>
//           <div>
//             <b>MICE</b>
//             <p>Offsites, Events & Meetings</p>
//           </div>
//         </div>

//         {/* Gift Cards */}
//         <div className="explore-item">
//           <span className="icon">
//             <Gift size={20} color="#008cff" />
//           </span>
//           <div>
//             <b>Gift Cards</b>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }































import React from "react";
import { Compass, Map, CreditCard, Users, Gift } from "lucide-react";
import "./ExploreMoreBar.css";

export default function ExploreMoreBar() {
  return (
    <div className="explore-wrapper">
      <div className="explore-bar">

        {/* Where2Go */}
        <div className="explore-item">
          <span className="icon">
            <Compass size={20} color="#008cff" />
          </span>
          <div>
            <b>Where2Go</b>
          </div>
        </div>

        {/* How2Go */}
        <div className="explore-item">
          <span className="icon">
            <Map size={20} color="#008cff" />
          </span>
          <div>
            <b>
              How2Go <span className="new">new</span>
            </b>
            <p>Find routes to anywhere</p>
          </div>
        </div>

        {/* Credit Card */}
        <div className="explore-item">
          <span className="icon">
            <CreditCard size={20} color="#008cff" />
          </span>
          <div>
            <b>Credit Cards</b>
            <p>Get rewards & big benefits</p>
          </div>
        </div>

        {/* MICE */}
        <div className="explore-item">
          <span className="icon">
            <Users size={20} color="#008cff" />
          </span>
          <div>
            <b>MICE</b>
            <p>Events & Meetings</p>
          </div>
        </div>

        {/* Gift Cards */}
        <div className="explore-item">
          <span className="icon">
            <Gift size={20} color="#008cff" />
          </span>
          <div>
            <b>Gift Cards</b>
          </div>
        </div>

      </div>
    </div>
  );
}