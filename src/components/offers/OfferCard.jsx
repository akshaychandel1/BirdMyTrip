
// // import { useNavigate } from "react-router-dom";

// // const OfferCard = ({ offer }) => {
// //   const navigate = useNavigate();

// //   const goToNextPage = () => {
// //     navigate(`/offer/${offer.id}`);
// //   };

// //   return (
// //     <div className="offer-card">
// //       {/* Card click disabled */}
// //       <img src={offer.image} alt={offer.title} />

// //       <div className="offer-content">
// //         <span className="category">{offer.category}</span>
// //         <h3>{offer.title}</h3>
// //         <p>{offer.description}</p>
// //         <p className="code">Code: {offer.code}</p>

// //         {/* ONLY BUTTONS CLICKABLE */}
// //         <div className="offer-actions">
// //           <button className="btn primary" onClick={goToNextPage}>
// //             BOOK NOW
// //           </button>

// //           <button className="btn outline" onClick={goToNextPage}>
// //             VIEW DETAILS
// //           </button>

// //           {/* <button className="btn text" onClick={goToNextPage}>
// //             APPLY NOW
// //           </button> */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OfferCard;




























// import { useNavigate } from "react-router-dom";

// const OfferCard = ({ offer }) => {
//   const navigate = useNavigate();

//   const goToDetails = () => navigate(`/offer/${offer.id}`);

//   return (
//     <article className="offer-card glass-card">
//       {/* Image – keep clickable off, the whole card is inert */}
//       <img
//         src={offer.image}
//         alt={offer.title}
//         className="offer-image"
//         loading="lazy"
//       />

//       <div className="card-body">
//         {/* top line – category & coupon code */}
//         <div className="card-top">
//           <span className="category">{offer.category}</span>
//           <span className="code">Code: {offer.code}</span>
//         </div>

//         {/* main copy */}
//         <h3 className="title">{offer.title}</h3>
//         <p className="desc">{offer.description}</p>

//         {/* actions – only the buttons are interactive */}
//         <div className="offer-actions">
//           <button className="btn primary" onClick={goToDetails}>
//             Book now
//           </button>
//           <button className="btn outline" onClick={goToDetails}>
//             View details
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default OfferCard;





































// OfferCard.js (updated with new design)
import { useNavigate } from "react-router-dom";

const OfferCard = ({ offer }) => {
  const navigate = useNavigate();

  const goToDetails = () => navigate(`/offer/${offer.id}`);

  return (
    <article className="offer-card" onClick={goToDetails}>
      {/* Image with hover effect */}
      <div className="image-container" style={{ overflow: 'hidden' }}>
        <img
          src={offer.image}
          alt={offer.title}
          className="offer-image"
          loading="lazy"
        />
      </div>

      <div className="card-body">
        {/* Category and code */}
        <div className="card-top">
          <span className="category">{offer.category}</span>
          <span className="code">Code: {offer.code}</span>
        </div>

        {/* Title and description */}
        <h3 className="title">{offer.title}</h3>
        <p className="desc">{offer.description}</p>

        {/* Action buttons */}
        <div className="offer-actions">
          <button 
            className="btn primary" 
            onClick={(e) => {
              e.stopPropagation();
              goToDetails();
            }}
          >
            Book now
          </button>
          <button 
            className="btn outline" 
            onClick={(e) => {
              e.stopPropagation();
              goToDetails();
            }}
          >
            View details
          </button>
        </div>
      </div>
    </article>
  );
};

export default OfferCard;