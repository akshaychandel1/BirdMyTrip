
// import OfferCard from "./OfferCard";

// export default function OffersGrid({ activeTab, offersData }) {
//   const filteredOffers =
//     activeTab === "all"
//       ? offersData
//       : offersData.filter(
//           (offer) => offer.category === activeTab
//         );

//   return (
//     <div className="offers-container">
//       {filteredOffers.map((offer) => (
//         <OfferCard key={offer.id} offer={offer} />
//       ))}
//     </div>
//   );
// }










// import OfferCard from "./OfferCard";

// export default function OffersGrid({ activeTab, offersData }) {
//   const filteredOffers =
//     activeTab === "all"
//       ? offersData
//       : offersData.filter((offer) => offer.category === activeTab);

//   return (
//     <section className="offers-grid">
//       {filteredOffers.map((offer) => (
//         <OfferCard key={offer.id} offer={offer} />
//       ))}
//     </section>
//   );
// }



















// OffersGrid.js (updated)
import OfferCard from "./OfferCard";

export default function OffersGrid({ activeTab, offersData }) {
  const filteredOffers =
    activeTab === "all"
      ? offersData
      : offersData.filter((offer) => offer.category === activeTab);

  return (
    <div className="offers-grid">
      {filteredOffers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}