// export default function VisaCard({ data }) {
//   return (
//     <div className="visa-card">
//       <div className="visa-top">
//         <span className="flag">{data.flag}</span>
//         <span className="visa-type">{data.type}</span>
//       </div>

//       <h3>{data.country}</h3>

//       <p className="visa-time">{data.time}</p>

//       <ul>
//         {data.points.map((p, i) => (
//           <li key={i}>{p}</li>
//         ))}
//       </ul>

//       <div className="visa-price">
//         <strong>{data.price}</strong> per adult  
//         <span> + {data.fee} service fees</span>
//         <span className="arrow">›</span>
//       </div>

//       <div className="voucher">
//         ₹ Get ₹250 MMT Tours & Attractions Voucher
//       </div>
//     </div>
//   );
// }



import "./Visa.css";

export default function VisaCard({ icon, title, desc, points }) {
  return (
    <div className="visa-card">
      <div className="visa-icon">{icon}</div>
      <h3 className="visa-card-title">{title}</h3>
      <p className="visa-card-desc">{desc}</p>

      <ul className="visa-points">
        {points.map((p, i) => (
          <li key={i}>✔ {p}</li>
        ))}
      </ul>
    </div>
  );
}
