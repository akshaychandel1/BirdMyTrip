// import "./ToursAttractions.css";
// import { toursData } from "../data/toursData";

// export default function ToursAttractions() {
//   return (
//     <div className="tours-wrapper">

//       {toursData.map((section, index) => (
//         <div className="tour-section" key={index}>

//           <div className="tour-header">
//             <h2>{section.title}</h2>
//             <p>{section.subtitle}</p>
//           </div>

//           <div className="tour-grid">
//             {section.items.map((item, i) => (
//               <div className="tour-card" key={i}>
//                 <img src={item.image} alt={item.name} />

//                 <div className="tour-overlay">
//                   <h3>{item.name}</h3>
//                   <button>View Details</button>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       ))}

//     </div>
//   );
// }




// import "./ToursAttractions.css";
// import { toursData } from "../data/toursData";

// export default function ToursAttractions() {
//   return (
//     <div className="tours-wrapper">
//       {toursData.map((section, index) => (
//         <div className="tour-section" key={index}>
//           <div className="tour-header">
//             <h2>{section.title}</h2>
//             <p>{section.subtitle}</p>
//           </div>

//           <div className="tour-grid">
//             {section.items.map((item, i) => (
//               <div
//                 className="tour-card"
//                 key={i}
//                 onClick={() => alert(`Clicked on ${item.name}`)}
//               >
//                 <img src={item.image} alt={item.name} />

//                 <div className="tour-overlay">
//                   <h3>{item.name}</h3>
//                   <span>Explore →</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



// import "./ToursAttractions.css";
// import { toursData } from "../data/toursData";

// export default function ToursAttractions() {
//   return (
//     <div className="tours-wrapper">

//       {/* BAS YE EK DIV NEW HAI */}
//       <div className="main-container">
//         {toursData.map((section, index) => (
//           <div className="tour-section" key={index}>
//             <h2>{section.title}</h2>
//             <p>{section.subtitle}</p>

//             <div className="tour-grid">
//               {section.items.map((item, i) => (
//                 <div className="tour-card" key={i}>
//                   <img src={item.image} alt={item.name} />
//                   <div className="tour-overlay">
//                     <h3>{item.name}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* END */}

//     </div>
//   );
// }





import "./ToursAttractions.css";
import { toursData } from "../data/toursData";

export default function ToursAttractions() {
  return (
    <div className="tours-wrapper">
      {toursData.map((section, index) => {
        // ✅ ONLY International Tours ko wrap karo
        if (section.title === "International Tours") {
          return (
            <div className="international-container" key={index}>
              <div className="tour-section">
                <h2>{section.title}</h2>
                <p>{section.subtitle}</p>

                <div className="tour-grid">
                  {section.items.map((item, i) => (
                    <div className="tour-card" key={i}>
                      <img src={item.image} alt={item.name} />
                      <div className="tour-overlay">
                        <h3>{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        // ❌ Baaki sections normal rahenge
        return (
          <div className="tour-section" key={index}>
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>

            <div className="tour-grid">
              {section.items.map((item, i) => (
                <div className="tour-card" key={i}>
                  <img src={item.image} alt={item.name} />
                  <div className="tour-overlay">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
