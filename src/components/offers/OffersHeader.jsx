// export default function OffersHeader() {
//   return (
//     <div className="offers-header">
//       <h2>Offers</h2>

//       <div className="offers-tabs">
//         <span className="active">All Offers</span>
//         <span>Bank Offers</span>
//         <span>Flights</span>
//         <span>Hotels</span>
//         <span>Holidays</span>
//         <span>Trains</span>
//         <span>Cabs</span>
//         <span>Bus</span>
//         <span>Forex</span>
//       </div>

//       <span className="view-all">VIEW ALL →</span>
//     </div>
//   );
// }


// import { NavLink } from "react-router-dom";
// import "./Offers.css";

// export default function OffersHeader() {
//   return (
//     <div className="offers-header">
//       <h2>Offers</h2>

//       <div className="offers-tabs">
//         <NavLink to="/offers/all" className="offer-tab">
//           All Offers
//         </NavLink>
//         <NavLink to="/offers/bank" className="offer-tab">
//           Bank Offers
//         </NavLink>
//         <NavLink to="/offers/flights" className="offer-tab">
//           Flights
//         </NavLink>
//         <NavLink to="/offers/hotels" className="offer-tab">
//           Hotels
//         </NavLink>
//         <NavLink to="/offers/holidays" className="offer-tab">
//           Holidays
//         </NavLink>
//         <NavLink to="/offers/trains" className="offer-tab">
//           Trains
//         </NavLink>
//       </div>

//       <NavLink to="/offers/all" className="view-all">
//         VIEW ALL →
//       </NavLink>
//     </div>
//   );
// }


// import "./Offers.css";

// export default function OffersHeader() {
//   return (
//     <div className="mmt-offers-header">
//       <div className="left">
//         <h2>Offers</h2>

//         <div className="tabs">
//           <span className="active">All Offers</span>
//           <span>Bank Offers</span>
//           <span>Flights</span>
//           <span>Hotels</span>
//           <span>Holidays</span>
//           <span>Trains</span>
//           <span>Cabs</span>
//           <span>Bus</span>
//           <span>Forex</span>
//           <span className="more">MORE ▾</span>
//         </div>
//       </div>

//       <div className="right">
//         <span className="view-all">VIEW ALL →</span>
//         <div className="arrows">
//           <span>‹</span>
//           <span>›</span>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function OffersHeader() {
  return (
    <div className="mmt-header">
      <div className="header-left">
        <h2>Offers</h2>

        <div className="tabs">
          <span className="active">All Offers</span>
          <span>Bank Offers</span>
          <span>Flights</span>
          <span>Hotels</span>
          <span>Holidays</span>
          <span>Trains</span>
          <span>Cabs</span>
          <span>Bus</span>
          <span>Forex</span>
        </div>
      </div>

      <div className="header-right">
        <span className="view-all">VIEW ALL →</span>
      </div>
    </div>
  );
}

