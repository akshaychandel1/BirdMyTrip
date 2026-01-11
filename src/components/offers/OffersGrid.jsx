// import offersData from "../../data/offersData";
// import OfferCard from "./OfferCard";

// export default function OffersGrid() {
//   return (
//     <div className="offers-grid">
//       {offersData.map((item) => (
//         <OfferCard key={item.id} item={item} />
//       ))}
//     </div>
//   );
// }


// import offersData from "../../data/offersData";
// import OfferCard from "./OfferCard";

// export default function OffersGrid({ category }) {
//   const filteredData =
//     category === "all"
//       ? offersData
//       : offersData.filter((item) => item.category === category);

//   return (
//     <div className="offers-grid">
//       {filteredData.map((offer) => (
//         <OfferCard key={offer.id} offer={offer} />
//       ))}
//     </div>
//   );
// }


// import OfferCard from "./OfferCard";
// import "./Offers.css";

// const offers = [
//   {
//     category: "DOM HOTELS",
//     title: "Handpicked Stays for Friends & Family Trips",
//     desc: "Grab up to 40% OFF + FREE stay for kids.",
//     image:
//       "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg7.jpg",
//     cta: "BOOK NOW",
//   },
//   {
//     category: "INTL FLIGHTS",
//     title: "UNLOCK BIG SAVINGS ON YOUR NEXT TRIP",
//     desc: "with up to 15% Instant discount on flights.",
//     image:
//       "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg8.jpg",
//     code: "MMTAUDC",
//     cta: "VIEW DETAILS",
//   },
// ];

// export default function OffersGrid() {
//   return (
//     <div className="offers-grid">
//       {offers.map((offer, index) => (
//         <OfferCard key={index} offer={offer} />
//       ))}
//     </div>
//   );
// }


// import OfferCard from "./OfferCard";
// import "./Offers.css";

// const offers = [
//   {
//     category: "DOM HOTELS",
//     title: "Handpicked Stays for Friends & Family Trips",
//     desc: "Grab up to 40% OFF* + FREE* stay for kids on your stay.",
//     image:
//       "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg1.jpg",
//     cta: "BOOK NOW",
//   },
//   {
//     category: "INTL FLIGHTS",
//     title: "UNLOCK BIG SAVINGS ON YOUR NEXT TRIP",
//     desc: "with up to 15% Instant discount on flights.",
//     image:
//       "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg2.jpg",
//     code: "MMTAUDC",
//     cta: "VIEW DETAILS",
//   },
// ];

// export default function OffersGrid() {
//   return (
//     <div className="mmt-grid">
//       {offers.map((o, i) => (
//         <OfferCard key={i} offer={o} />
//       ))}
//     </div>
//   );
// }


// import OfferCard from "./OfferCard";

// const offers = [
//   {
//     category: "DOM HOTELS",
//     title: "Handpicked Stays for Friends & Family Trips",
//     desc: "Grab up to 40% OFF + FREE stay for kids.",
//     image:
//       "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg1.jpg",
//     cta: "BOOK NOW",
//   },
//   {
//     category: "INTL FLIGHTS",
//     title: "UNLOCK BIG SAVINGS ON YOUR NEXT TRIP",
//     desc: "with up to 15% Instant discount on flights.",
//     image:
//       "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg2.jpg",
//     code: "MMTAUDC",
//     cta: "VIEW DETAILS",
//   },
// ];

// export default function OffersGrid() {
//   return (
//     <div className="mmt-grid">
//       {offers.map((offer, index) => (
//         <OfferCard key={index} offer={offer} />
//       ))}
//     </div>
//   );
// }



// import OfferCard from "./OfferCard";

// const offers = [
//   {
//     category: "DOM HOTELS",
//     title: "Handpicked Stays for Friends & Family Trips",
//     desc: "Up to 40% OFF + FREE stay for kids.",
//     image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg1.jpg",
//     cta: "BOOK NOW",
//   },
//   {
//     category: "INTL FLIGHTS",
//     title: "Unlock Big Savings on Your Next Trip",
//     desc: "Up to 15% instant discount on flights.",
//     image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg2.jpg",
//     code: "MMTAUDC",
//     cta: "VIEW DETAILS",
//   },
//   {
//     category: "BUS",
//     title: "The Great Bus Fest is Live",
//     desc: "Flat 15% OFF on bus tickets.",
//     image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg3.jpg",
//     cta: "BOOK NOW",
//   },
//   {
//     category: "HOTELS",
//     title: "Enjoy Memorable Stays at Taj",
//     desc: "Flat 15% savings on stays.",
//     image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg4.jpg",
//     cta: "BOOK NOW",
//   },
//   {
//     category: "HOLIDAYS",
//     title: "Massive Price Drop on Packages",
//     desc: "Use code MOSTWANTED.",
//     image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg5.jpg",
//     code: "MOSTWANTED",
//     cta: "BOOK NOW",
//   },
//   {
//     category: "CABS",
//     title: "Up to 20% OFF on Airport Cabs",
//     desc: "Safe & affordable rides.",
//     image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg6.jpg",
//     cta: "BOOK NOW",
//   },
//   {
//     category: "TRAINS",
//     title: "Zero Convenience Fee on Trains",
//     desc: "Book now & save more.",
//     image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg7.jpg",
//     cta: "BOOK NOW",
//   },
//   {
//     category: "FOREX",
//     title: "Best Forex Rates Guaranteed",
//     desc: "Order online & save.",
//     image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg8.jpg",
//     cta: "VIEW DETAILS",
//   },
//   {
//     category: "BANK OFFERS",
//     title: "Extra Savings with Bank Cards",
//     desc: "No cost EMI available.",
//     image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg9.jpg",
//     cta: "VIEW DETAILS",
//   },
// ];

// export default function OffersGrid() {
//   return (
//     <div className="offers-container">
//       {offers.map((offer, index) => (
//         <OfferCard key={index} offer={offer} />
//       ))}
//     </div>
//   );
// }


import OfferCard from "./OfferCard";

const offers = [
  {
    category: "DOM HOTELS",
    title: "Handpicked Stays for Friends & Family Trips",
    desc: "Up to 40% OFF + FREE stay for kids.",
    image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg1.jpg",
    cta: "BOOK NOW",
    link: "/hotels",
  },
  {
    category: "INTL FLIGHTS",
    title: "Unlock Big Savings on Your Next Trip",
    desc: "Up to 15% instant discount on flights.",
    image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg2.jpg",
    code: "MMTAUDC",
    cta: "VIEW DETAILS",
    link: "/flights",
  },
  {
    category: "BUS",
    title: "The Great Bus Fest is Live",
    desc: "Flat 15% OFF on bus tickets.",
    image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg3.jpg",
    cta: "BOOK NOW",
    link: "/bus",
  },
  {
    category: "HOTELS",
    title: "Enjoy Memorable Stays at Taj",
    desc: "Flat 15% savings on stays.",
    image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg4.jpg",
    cta: "BOOK NOW",
    link: "/hotels",
  },
  {
    category: "HOLIDAYS",
    title: "Massive Price Drop on Packages",
    desc: "Use code MOSTWANTED.",
    image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg5.jpg",
    code: "MOSTWANTED",
    cta: "BOOK NOW",
    link: "/holidays",
  },
  {
    category: "CABS",
    title: "Up to 20% OFF on Airport Cabs",
    desc: "Safe & affordable rides.",
    image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg6.jpg",
    cta: "BOOK NOW",
    link: "/cabs",
  },
  {
    category: "TRAINS",
    title: "Zero Convenience Fee on Trains",
    desc: "Book now & save more.",
    image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg7.jpg",
    cta: "BOOK NOW",
    link: "/trains",
  },
  {
    category: "FOREX",
    title: "Best Forex Rates Guaranteed",
    desc: "Order online & save.",
    image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg8.jpg",
    cta: "VIEW DETAILS",
    link: "/forex",
  },
  {
    category: "BANK OFFERS",
    title: "Extra Savings with Bank Cards",
    desc: "No cost EMI available.",
    image: "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg9.jpg",
    cta: "VIEW DETAILS",
    link: "/bank-offers",
  },
];

export default function OffersGrid() {
  return (
    <div className="offers-container">
      {offers.map((offer, index) => (
        <OfferCard key={index} offer={offer} />
      ))}
    </div>
  );
}
