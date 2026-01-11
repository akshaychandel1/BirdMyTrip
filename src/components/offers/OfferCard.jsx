// export default function OfferCard({ item }) {
//   return (
//     <div className="offer-card">
//       <img src={item.img} alt={item.title} />

//       <div className="offer-content">
//         <span className="offer-category">{item.category}</span>
//         <h3>{item.title}</h3>
//         <p>{item.desc}</p>

//         {item.code && (
//           <div className="offer-code">
//             Code: <b>{item.code}</b>
//           </div>
//         )}

//         <button>{item.btn}</button>
//       </div>
//     </div>
//   );
// }


// export default function OfferCard({ offer }) {
//   return (
//     <div className="offer-card">
//       <img src={offer.image} alt={offer.title} />

//       <div className="offer-content">
//         <span className="offer-category">
//           {offer.category.toUpperCase()}
//         </span>

//         <h3>{offer.title}</h3>
//         <p>{offer.description}</p>

//         {offer.code && (
//           <div className="offer-code">
//             Code: <strong>{offer.code}</strong>
//           </div>
//         )}

//         <button>{offer.cta}</button>
//       </div>
//     </div>
//   );
// }



// import "./Offers.css";

// export default function OfferCard({ offer }) {
//   return (
//     <div className="offer-card">
//       <div className="offer-image">
//         <img src={offer.image} alt="offer" />
//       </div>

//       <div className="offer-content">
//         <div className="offer-top">
//           <span className="offer-category">{offer.category}</span>
//           <span className="offer-tnc">T&C'S APPLY</span>
//         </div>

//         <h3 className="offer-title">{offer.title}</h3>

//         <p className="offer-desc">{offer.desc}</p>

//         {offer.code && (
//           <p className="offer-code">Code: {offer.code}</p>
//         )}

//         <span className="offer-cta">
//           {offer.cta || "BOOK NOW"}
//         </span>
//       </div>
//     </div>
//   );
// }


// import "./Offers.css";

// export default function OfferCard({ offer }) {
//   return (
//     <div className="mmt-card">
//       <img src={offer.image} alt="" />

//       <div className="content">
//         <div className="top">
//           <span className="category">{offer.category}</span>
//           <span className="tnc">T&C'S APPLY</span>
//         </div>

//         <h3>{offer.title}</h3>

//         <p className="desc">{offer.desc}</p>

//         {offer.code && <p className="code">Code: {offer.code}</p>}

//         <span className="cta">{offer.cta}</span>
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function OfferCard({ offer }) {
  return (
    <div className="mmt-card">
      <img src={offer.image} alt="offer" />

      <div className="card-content">
        <div className="card-top">
          <span>{offer.category}</span>
          <span>T&C'S APPLY</span>
        </div>

        <h3>{offer.title}</h3>

        <p className="desc">{offer.desc}</p>

        {offer.code && <p className="code">Code: {offer.code}</p>}

        {/* 🔗 PAGE LINK */}
        <Link to={offer.link} className="cta">
          {offer.cta}
        </Link>
      </div>
    </div>
  );
}
