
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import flights from "../data/flightsData";
// import "./Flights.css";

// export default function Flights() {
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   const filteredFlights = state
//     ? flights.filter(
//         (f) =>
//           f.from.toLowerCase().includes(state.fromCity.split(" ")[0].toLowerCase()) &&
//           f.to.toLowerCase().includes(state.toCity.split(" ")[0].toLowerCase())
//       )
//     : flights;

//   return (
//     <div className="flights-page">

//       {/* SEARCH SUMMARY */}
//       {state && (
//         <div className="search-summary">
//           <strong>{state.fromCity}</strong> → <strong>{state.toCity}</strong> | 
//           Date: {state.departureDate} | 
//           Fare: {state.selectedFare} | 
//           Est. ₹{state.finalPrice}
//         </div>
//       )}

//       <h2 className="flights-title">Available Flights</h2>

//       {/* FLIGHT LIST */}
//       <div className="flight-list">
//         {filteredFlights.map((flight) => (
//           <div className="flight-row" key={flight.id}>

//             {/* LEFT: AIRLINE */}
//             <div className="airline">
//               <img src={flight.image} alt={flight.airline} />
//               <span>{flight.airline}</span>
//             </div>

//             {/* CENTER: INFO */}
//             <div className="flight-info">
//               <div className="time">{flight.time}</div>
//               <div className="route">
//                 {flight.from} → {flight.to}
//               </div>
//               <div className="type">{flight.type}</div>
//             </div>

//             {/* RIGHT: PRICE */}
//             <div className="price">₹{flight.price}</div>

//             {/* ACTION */}
//             <button
//               className="book-btn"
//               onClick={() => navigate(`/flight/${flight.id}`)}
//             >
//               View & Book
//             </button>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









import React from 'react';

const FlightSearchPage = () => {
  const flightData = [
    {
      id: 1,
      airline: "Air India Express",
      code: "I5 744",
      logo: "AI",
      logoColor: "#e7e7e7",
      textColor: "#fff",
      departure: "19:05",
      arrival: "21:55",
      duration: "02 h 50 m",
      from: "Bengaluru",
      to: "New Delhi",
      price: "₹ 6,945",
      rating: "4.3/5",
      offer: "Get ₹ 500 OFF using MMTOFFER. T&C Apply.",
      offerColor: "#fff7ed",
      offerTextColor: "#f58220",
      badge: "Cheapest",
      badgeColor: "#008cff"
    },
    {
      id: 2,
      airline: "IndiGo",
      code: "6E 2131",
      logo: "6E",
      logoColor: "#004184",
      textColor: "#fff",
      departure: "22:05",
      arrival: "01:00",
      duration: "02 h 55 m",
      from: "Bengaluru",
      to: "New Delhi",
      price: "₹ 7,045",
      rating: "4.5/5",
      offer: "Free Meal + Priority Check-in",
      offerColor: "#e8f5e9",
      offerTextColor: "#2e7d32",
      badge: "Popular",
      badgeColor: "#ff6b6b"
    },
    {
      id: 3,
      airline: "Vistara",
      code: "UK 856",
      logo: "UK",
      logoColor: "#7b1fa2",
      textColor: "#fff",
      departure: "15:30",
      arrival: "18:10",
      duration: "02 h 40 m",
      from: "Bengaluru",
      to: "New Delhi",
      price: "₹ 9,875",
      rating: "4.7/5",
      offer: "Premium Economy Available",
      offerColor: "#f3e5f5",
      offerTextColor: "#7b1fa2",
      badge: "Best Rated",
      badgeColor: "#ff9800"
    },
    {
      id: 4,
      airline: "SpiceJet",
      code: "SG 423",
      logo: "SG",
      logoColor: "#d32f2f",
      textColor: "#fff",
      departure: "07:15",
      arrival: "09:50",
      duration: "02 h 35 m",
      from: "Bengaluru",
      to: "New Delhi",
      price: "₹ 6,250",
      rating: "4.0/5",
      offer: "No Cancellation Charges",
      offerColor: "#ffebee",
      offerTextColor: "#d32f2f",
      badge: "Early Bird",
      badgeColor: "#51b96a"
    },
    {
      id: 5,
      airline: "AirAsia",
      code: "I5 789",
      logo: "AK",
      logoColor: "#f44336",
      textColor: "#fff",
      departure: "13:45",
      arrival: "16:20",
      duration: "02 h 35 m",
      from: "Bengaluru",
      to: "New Delhi",
      price: "₹ 5,899",
      rating: "4.2/5",
      offer: "Extra 10kg Baggage Free",
      offerColor: "#ffecb3",
      offerTextColor: "#ff8f00",
      badge: "Value Deal",
      badgeColor: "#9c27b0"
    },
    {
      id: 6,
      airline: "Air India",
      code: "AI 806",
      logo: "AI",
      logoColor: "#004080",
      textColor: "#fff",
      departure: "10:20",
      arrival: "13:00",
      duration: "02 h 40 m",
      from: "Bengaluru",
      to: "New Delhi",
      price: "₹ 8,450",
      rating: "4.1/5",
      offer: "Business Class Upgrade at ₹ 3,000",
      offerColor: "#e3f2fd",
      offerTextColor: "#1976d2",
      badge: "Comfort",
      badgeColor: "#004080"
    }
  ];

  const filters = [
    { label: "Non Stop", price: "₹ 6,945", checked: true, count: 12 },
    { label: "Refundable Fares", price: "₹ 8,745", checked: false, count: 8 },
    { label: "IndiGo", price: "₹ 7,045", checked: false, count: 6 },
    { label: "Air India", price: "₹ 8,450", checked: false, count: 4 },
    { label: "Morning Flights", price: "₹ 6,250", checked: false, count: 5 },
    { label: "Evening Flights", price: "₹ 7,045", checked: true, count: 7 }
  ];

  const airlineFilters = [
    { name: "IndiGo", color: "#004184" },
    { name: "Air India", color: "#004080" },
    { name: "Vistara", color: "#7b1fa2" },
    { name: "SpiceJet", color: "#d32f2f" },
    { name: "AirAsia", color: "#f44336" }
  ];

  const tabs = [
    { name: "CHEAPEST", count: 6, active: true },
    { name: "NON STOP FIRST", count: 12, active: false },
    { name: "YOU MAY PREFER", count: 8, active: false }
  ];

  return (
    <div style={styles.container}>
      {/* Top Header */}
      <header style={styles.header}>
        {/* <div style={styles.navContent}>
          <h1 style={styles.logo}>make<span style={styles.logoSpan}>my</span>trip</h1>
          <div style={styles.searchSummary}>
            <div style={styles.searchRoute}>
              <span style={styles.city}>Bengaluru (BLR)</span>
              <span style={styles.arrow}>→</span>
              <span style={styles.city}>New Delhi (DEL)</span>
            </div>
            <div style={styles.searchDate}>Wed, 28 Jan 2026 • 1 Adult • Economy</div>
          </div>
          <button style={styles.modifyBtn}>MODIFY SEARCH</button>
        </div> */}
      </header>

      {/* Main Content */}
      <div style={styles.mainLayout}>
        {/* Sidebar Filters */}
        <aside style={styles.sidebar}>
          <div style={styles.filterHeader}>
            <h3 style={styles.sidebarTitle}>FILTERS</h3>
            <button style={styles.clearBtn}>CLEAR ALL</button>
          </div>
          
          {/* Popular Filters */}
          <div style={styles.filterSection}>
            <h4 style={styles.filterSectionTitle}>Popular Filters</h4>
            {filters.map((filter, index) => (
              <div key={index} style={styles.filterGroup}>
                <label style={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    defaultChecked={filter.checked} 
                    style={styles.checkbox}
                  />
                  <div style={styles.checkboxCustom}></div>
                  <span>{filter.label}</span>
                </label>
                <div style={styles.filterMeta}>
                  <span style={styles.priceTag}>{filter.price}</span>
                  <span style={styles.countTag}>({filter.count})</span>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.sectionDivider} />

          {/* Airlines */}
          <div style={styles.filterSection}>
            <h4 style={styles.filterSectionTitle}>Airlines</h4>
            <div style={styles.airlineGrid}>
              {airlineFilters.map((airline, index) => (
                <div key={index} style={styles.airlineChip}>
                  <div 
                    style={{
                      ...styles.airlineChipLogo,
                      backgroundColor: airline.color
                    }}
                  >
                    {airline.name.charAt(0)}
                  </div>
                  <span style={styles.airlineChipName}>{airline.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.sectionDivider} />

          {/* Departure Time */}
          <div style={styles.filterSection}>
            <h4 style={styles.filterSectionTitle}>Departure From Bengaluru</h4>
            <div style={styles.timeGrid}>
              <div style={styles.timeBox}>
                <div style={styles.timeRange}>Before 6 AM</div>
                <div style={styles.timePrice}>₹ 6,250+</div>
              </div>
              <div style={styles.timeBoxActive}>
                <div style={styles.timeRange}>6 AM - 12 PM</div>
                <div style={styles.timePrice}>₹ 7,045+</div>
              </div>
              <div style={styles.timeBox}>
                <div style={styles.timeRange}>12 PM - 6 PM</div>
                <div style={styles.timePrice}>₹ 8,450+</div>
              </div>
              <div style={styles.timeBox}>
                <div style={styles.timeRange}>After 6 PM</div>
                <div style={styles.timePrice}>₹ 6,945+</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Flight Listings */}
        <section style={styles.content}>
          {/* Header with tabs */}
          <div style={styles.contentHeader}>
            <h2 style={styles.pageTitle}>
              Flights from Bengaluru to New Delhi
              <span style={styles.resultCount}> (12 flights found)</span>
            </h2>
            
            {/* Tabs */}
            <div style={styles.tabsRow}>
              {tabs.map((tab, index) => (
                <div 
                  key={index} 
                  style={{
                    ...styles.tab,
                    ...(tab.active ? styles.activeTab : {})
                  }}
                >
                  <div>{tab.name}</div>
                  <div style={styles.tabCount}>{tab.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Flight Cards */}
          <div style={styles.flightsContainer}>
            {flightData.map((flight) => (
              <div key={flight.id} style={styles.card}>
                {/* Badge */}
                {flight.badge && (
                  <div 
                    style={{
                      ...styles.badge,
                      backgroundColor: flight.badgeColor
                    }}
                  >
                    {flight.badge}
                  </div>
                )}

                <div style={styles.cardMain}>
                  {/* Airline Info */}
                  <div style={styles.airlineInfo}>
                    <div 
                      style={{
                        ...styles.airlineLogo,
                        backgroundColor: flight.logoColor,
                        color: flight.textColor
                      }}
                    >
                      {flight.logo}
                    </div>
                    <div style={styles.airlineDetails}>
                      <div style={styles.airlineName}>{flight.airline}</div>
                      <div style={styles.flightCode}>{flight.code}</div>
                      <div style={styles.rating}>
                        ★ {flight.rating} 
                        <span style={styles.ratingText}> (Good)</span>
                      </div>
                    </div>
                  </div>

                  {/* Timing Info */}
                  <div style={styles.timingInfo}>
                    <div style={styles.timeSlot}>
                      <div style={styles.time}>{flight.departure}</div>
                      <div style={styles.city}>{flight.from}</div>
                      <div style={styles.terminal}>Terminal 1</div>
                    </div>
                    
                    <div style={styles.duration}>
                      <div style={styles.durationText}>{flight.duration}</div>
                      <div style={styles.lineContainer}>
                        <div style={styles.lineDots}></div>
                        <div style={styles.line}></div>
                        <div style={styles.lineDots}></div>
                      </div>
                      <div style={styles.stopInfo}>Non Stop</div>
                    </div>
                    
                    <div style={styles.timeSlot}>
                      <div style={styles.time}>{flight.arrival}</div>
                      <div style={styles.city}>{flight.to}</div>
                      <div style={styles.terminal}>Terminal 3</div>
                    </div>
                  </div>

                  {/* Price Info */}
                  <div style={styles.priceInfo}>
                    <div style={styles.priceContainer}>
                      <div style={styles.priceLabel}>Starting from</div>
                      <div style={styles.price}>{flight.price}</div>
                      <div style={styles.pricePerPerson}>per adult</div>
                    </div>
                    <button style={styles.viewBtn}>VIEW PRICES</button>
                    <div style={styles.fareInfo}>All fares are round-trip</div>
                  </div>
                </div>

                {/* Offer Footer */}
                {flight.offer && (
                  <div 
                    style={{
                      ...styles.cardFooter,
                      backgroundColor: flight.offerColor
                    }}
                  >
                    <span style={{color: flight.offerTextColor, fontWeight: 'bold'}}>✓</span>
                    <span style={{marginLeft: '8px', color: flight.offerTextColor}}>
                      {flight.offer}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div style={styles.loadMoreContainer}>
            <button style={styles.loadMoreBtn}>
              Show 6 more flights
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1a1a1a',
    lineHeight: 1.5
  },
  
  header: {
    // backgroundColor: '#ffffff',
    padding: '16px 0',
    // boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    marginBottom: '24px'
  },
  
  navContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: '0 24px',
    gap: '24px'
  },
  
  logo: {
    fontSize: '28px',
    color: '#008cff',
    margin: 0,
    fontWeight: 800,
    letterSpacing: '-0.5px',
    whiteSpace: 'nowrap'
  },
  
  logoSpan: {
    color: '#ff6b6b'
  },
  
  searchSummary: {
    flex: 1,
    textAlign: 'center'
  },
  
  searchRoute: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '4px'
  },
  
  city: {
    padding: '0 8px'
  },
  
  arrow: {
    color: '#008cff',
    margin: '0 12px'
  },
  
  searchDate: {
    fontSize: '14px',
    color: '#666',
    fontWeight: 500
  },
  
  modifyBtn: {
    backgroundColor: 'transparent',
    color: '#008cff',
    border: '1px solid #008cff',
    padding: '10px 24px',
    borderRadius: '24px',
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    
    ':hover': {
      backgroundColor: '#f0f9ff'
    }
  },
  
  mainLayout: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    gap: '24px',
    // padding: '0 24px'
  },
  
  sidebar: {
    width: '320px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '16px',
    alignSelf: 'flex-start',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    position: 'sticky',
    top: '20px'
  },
  
  filterHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  
  sidebarTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: 0
  },
  
  clearBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#666',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '4px 8px',
    fontWeight: 500,
    
    ':hover': {
      color: '#008cff'
    }
  },
  
  filterSection: {
    marginBottom: '24px'
  },
  
  filterSectionTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#555',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  
  filterGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    padding: '8px 0'
  },
  
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    fontSize: '15px',
    color: '#333',
    flex: 1
  },
  
  checkbox: {
    display: 'none'
  },
  
  checkboxCustom: {
    width: '18px',
    height: '18px',
    border: '2px solid #ccc',
    borderRadius: '4px',
    position: 'relative',
    transition: 'all 0.2s'
  },
  
  filterMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  
  priceTag: {
    color: '#555',
    fontSize: '14px',
    fontWeight: 500
  },
  
  countTag: {
    color: '#999',
    fontSize: '13px'
  },
  
  airlineGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px'
  },
  
  airlineChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 12px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    
    ':hover': {
      borderColor: '#008cff',
      backgroundColor: '#f8fbff'
    }
  },
  
  airlineChipLogo: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '12px'
  },
  
  airlineChipName: {
    fontSize: '13px',
    fontWeight: 500
  },
  
  sectionDivider: {
    height: '1px',
    backgroundColor: '#eee',
    margin: '24px 0'
  },
  
  timeGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px'
  },
  
  timeBox: {
    border: '1px solid #e0e0e0',
    padding: '16px 12px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'center',
    
    ':hover': {
      borderColor: '#008cff',
      backgroundColor: '#f8fbff'
    }
  },
  
  timeBoxActive: {
    border: '2px solid #008cff',
    padding: '16px 12px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#e8f4ff',
    textAlign: 'center'
  },
  
  timeRange: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1a1a1a',
    marginBottom: '4px'
  },
  
  timePrice: {
    fontSize: '12px',
    color: '#666',
    fontWeight: 500
  },
  
  content: {
    flex: 1
  },
  
  contentHeader: {
    marginBottom: '24px'
  },
  
  pageTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#1a1a1a',
    fontWeight: 700
  },
  
  resultCount: {
    fontSize: '18px',
    fontWeight: 400,
    color: '#666'
  },
  
  tabsRow: {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    overflow: 'hidden'
  },
  
  tab: {
    flex: 1,
    padding: '20px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#666',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.2s',
    borderRight: '1px solid #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    
    ':hover': {
      backgroundColor: '#f8f9fa'
    }
  },
  
  activeTab: {
    color: '#008cff',
    fontWeight: 700,
    backgroundColor: '#f0f9ff',
    position: 'relative'
  },
  
  tabCount: {
    fontSize: '12px',
    backgroundColor: '#e0e0e0',
    color: '#666',
    padding: '2px 8px',
    borderRadius: '10px',
    fontWeight: 500
  },
  
  flightsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    transition: 'all 0.3s',
    position: 'relative',
    
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
    }
  },
  
  badge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 700,
    zIndex: 1
  },
  
  cardMain: {
    display: 'flex',
    padding: '28px 24px',
    alignItems: 'center',
    position: 'relative'
  },
  
  airlineInfo: {
    width: '25%',
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  },
  
  airlineLogo: {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  
  airlineDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  
  airlineName: {
    fontWeight: 700,
    fontSize: '16px',
    color: '#1a1a1a',
    marginBottom: '2px'
  },
  
  flightCode: {
    fontSize: '13px',
    color: '#888',
    marginBottom: '4px'
  },
  
  rating: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#ff9800'
  },
  
  ratingText: {
    color: '#666',
    fontWeight: 400
  },
  
  timingInfo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 20px'
  },
  
  timeSlot: {
    textAlign: 'center',
    minWidth: '120px'
  },
  
  time: {
    fontSize: '24px',
    fontWeight: 800,
    color: '#1a1a1a',
    marginBottom: '6px'
  },
  
  city: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#333',
    marginBottom: '2px'
  },
  
  terminal: {
    fontSize: '12px',
    color: '#888'
  },
  
  duration: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '180px'
  },
  
  durationText: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#555',
    marginBottom: '8px'
  },
  
  lineContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '8px 0'
  },
  
  line: {
    flex: 1,
    height: '3px',
    backgroundColor: '#51b96a',
    borderRadius: '2px'
  },
  
  lineDots: {
    width: '8px',
    height: '8px',
    backgroundColor: '#51b96a',
    borderRadius: '50%'
  },
  
  stopInfo: {
    fontSize: '13px',
    color: '#51b96a',
    fontWeight: 600,
    marginTop: '8px'
  },
  
  priceInfo: {
    width: '25%',
    textAlign: 'right'
  },
  
  priceContainer: {
    marginBottom: '16px'
  },
  
  priceLabel: {
    fontSize: '12px',
    color: '#888',
    marginBottom: '4px'
  },
  
  price: {
    fontSize: '28px',
    fontWeight: 800,
    color: '#1a1a1a',
    marginBottom: '2px'
  },
  
  pricePerPerson: {
    fontSize: '12px',
    color: '#888'
  },
  
  viewBtn: {
    backgroundColor: '#008cff',
    color: '#fff',
    border: 'none',
    padding: '14px 32px',
    borderRadius: '30px',
    fontWeight: 700,
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    width: '100%',
    
    ':hover': {
      backgroundColor: '#0073d6',
      transform: 'scale(1.02)'
    }
  },
  
  fareInfo: {
    fontSize: '11px',
    color: '#888',
    marginTop: '8px'
  },
  
  cardFooter: {
    padding: '14px 24px',
    fontSize: '13px',
    fontWeight: 500,
    borderTop: '1px solid rgba(0,0,0,0.06)'
  },
  
  loadMoreContainer: {
    textAlign: 'center',
    marginTop: '32px'
  },
  
  loadMoreBtn: {
    backgroundColor: '#fff',
    color: '#008cff',
    border: '2px solid #008cff',
    padding: '14px 40px',
    borderRadius: '30px',
    fontWeight: 700,
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    
    ':hover': {
      backgroundColor: '#f0f9ff',
      transform: 'scale(1.02)'
    }
  }
};

export default FlightSearchPage;