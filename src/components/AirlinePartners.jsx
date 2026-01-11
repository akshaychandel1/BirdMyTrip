// import "./AirlinePartners.css";
// import { useNavigate } from "react-router-dom";

// export default function AirlinePartners() {
//   const navigate = useNavigate();

//   const airlines = [
//     {
//       name: "AirAsia",
//       img: "https://images.unsplash.com/photo-1604480133435-25b86862d276",
//       route: "/flights?airline=airasia",
//     },
//     {
//       name: "Etihad Airways",
//       img: "https://images.unsplash.com/photo-1589758438368-0ad531db3366",
//       route: "/flights?airline=etihad",
//     },
//     {
//       name: "Malaysia Airlines",
//       img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//       route: "/flights?airline=malaysia",
//     },
//   ];

//   return (
//     <section className="airline-section">
//       <h2>Experience Flying with our Airline Partners</h2>

//       <div className="airline-grid">
//         {airlines.map((airline, index) => (
//           <div
//             key={index}
//             className="airline-card"
//             style={{ backgroundImage: `url(${airline.img})` }}
//             onClick={() => navigate(airline.route)}
//           >
//             <div className="airline-overlay">
//               <span>{airline.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import "./AirlinePartners.css";
import { useNavigate } from "react-router-dom";

// ✅ CORRECT PATH (assets/flights)
import flight1 from "../assets/flights/flight1.jpg";
import flight2 from "../assets/flights/flight2.jpg";
import flight3 from "../assets/flights/flight3.jpg";

export default function AirlinePartners() {
  const navigate = useNavigate();

  const airlines = [
    { name: "AirAsia", img: flight1, route: "/flights" },
    { name: "Etihad Airways", img: flight2, route: "/flights" },
    { name: "Malaysia Airlines", img: flight3, route: "/flights" },
  ];

  return (
    <section className="airline-section">
      <div className="airline-container">
        <h2>Experience Flying with our Airline Partners</h2>

        <div className="airline-grid">
          {airlines.map((a, i) => (
            <div
              key={i}
              className="airline-card"
              style={{ backgroundImage: `url(${a.img})` }}
              onClick={() => navigate(a.route)}
            >
              <div className="airline-overlay">
                <span>{a.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
