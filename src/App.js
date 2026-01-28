// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// /* COMMON */
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// /* HOME */
// import Hero from "./components/Hero";
// import ExploreMoreBar from "./components/ExploreMoreBar";
// import OffersSection from "./components/offers/OffersSection";
// import AirlinePartners from "./components/AirlinePartners";
// import InfoSection from "./components/InfoSection";
// import MegaLinksSection from "./components/MegaLinksSection";

// /* VISA / CRUISE / NIGHTCLUB */
// import VisaSection from "./pages/visa/VisaSection";
// import CruiseSection from "./pages/cruise/CruiseSection";
// import NightClubSection from "./pages/nightclub/NightClubSection";

// /* TOURS */
// import ToursAttractions from "./pages/ToursAttractions";

// /* FLIGHT STATUS */
// import FlightStatusPage from "./pages/flightStatus/FlightStatusPage";

// /* PAGES */
// import Hotels from "./pages/Hotels";
// import Flights from "./pages/Flights";
// import Train from "./pages/Train";
// import Holiday from "./pages/Holiday";
// import GiftCard from "./pages/GiftCard";
// import TripPlanner from "./pages/TripPlanner";
// import InviteEarn from "./pages/InviteEarn";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// /* BUS */
// import Bus from "./pages/Bus";
// import BookBus from "./pages/BookBus";

// /* CAB */
// import Cab from "./pages/Cab";
// import CabDetails from "./pages/CabDetails";

// /* LIST YOUR PROPERTY */
// import ListProperty from "./pages/ListProperty";

// /* ✅ PNR STATUS (ADDED ONLY) */
// import PNRStatus from "./pages/PNRStatus";

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="app">
//       <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

//       <div className={`main ${sidebarOpen ? "shifted" : ""}`}>
//         <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

//         <Routes>
//           {/* HOME */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <ExploreMoreBar />
//                 <OffersSection />

//                 <VisaSection />
//                 <CruiseSection />
//                 <NightClubSection />

//                 <AirlinePartners />
//                 <InfoSection />
//                 <MegaLinksSection />
//               </>
//             }
//           />

//           {/* VISA / CRUISE / NIGHTCLUB */}
//           <Route path="/visa" element={<VisaSection />} />
//           <Route path="/cruise" element={<CruiseSection />} />
//           <Route path="/night-club" element={<NightClubSection />} />

//           {/* TOURS */}
//           <Route path="/tours" element={<ToursAttractions />} />

//           {/* FLIGHT STATUS */}
//           <Route path="/flight-status" element={<FlightStatusPage />} />

//           {/* OTHER PAGES */}
//           <Route path="/hotels" element={<Hotels />} />
//           <Route path="/flights" element={<Flights />} />
//           <Route path="/train" element={<Train />} />
//           <Route path="/holiday" element={<Holiday />} />

//           <Route path="/trip-planner" element={<TripPlanner />} />
//           <Route path="/gift" element={<GiftCard />} />
//           <Route path="/invite" element={<InviteEarn />} />

//           {/* LIST YOUR PROPERTY */}
//           <Route path="/list-your-property" element={<ListProperty />} />

//           {/* ✅ PNR STATUS */}
//           <Route path="/pnr" element={<PNRStatus />} />

//           {/* BUS */}
//           <Route path="/bus" element={<Bus />} />
//           <Route path="/bus/:id" element={<BookBus />} />

//           {/* CAB */}
//           <Route path="/cab" element={<Cab />} />
//           <Route path="/cab/:id" element={<CabDetails />} />

//           {/* AUTH */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>

//         <Footer />
//       </div>
//     </div>
//   );
// }




















// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// /* COMMON */
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// /* PAGES */
// import Hero from "./components/Hero";
// import ExploreMoreBar from "./components/ExploreMoreBar";
// import OffersSection from "./components/offers/OffersSection";
// import AirlinePartners from "./components/AirlinePartners";
// import InfoSection from "./components/InfoSection";
// import MegaLinksSection from "./components/MegaLinksSection";
// import VisaSection from "./pages/visa/VisaSection";
// import CruiseSection from "./pages/cruise/CruiseSection";
// import NightClubSection from "./pages/nightclub/NightClubSection";
// import ToursAttractions from "./pages/ToursAttractions";
// import FlightStatusPage from "./pages/flightStatus/FlightStatusPage";
// import Hotels from "./pages/Hotels";
// import Flights from "./pages/Flights";
// import Train from "./pages/Train";
// import Holiday from "./pages/Holiday";
// import GiftCard from "./pages/GiftCard";
// import TripPlanner from "./pages/TripPlanner";
// import InviteEarn from "./pages/InviteEarn";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Bus from "./pages/Bus";
// import BookBus from "./pages/BookBus";
// import Cab from "./pages/Cab";
// import CabDetails from "./pages/CabDetails";
// import ListProperty from "./pages/ListProperty";
// import PNRStatus from "./pages/PNRStatus";

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="app-wrapper">
//       <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
//       <div className="content-layout">
//         <Sidebar open={sidebarOpen} />
        
//         <main className={`main-body ${sidebarOpen ? "sidebar-open" : "sidebar-collapsed"}`}>
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <Hero />
//                 <ExploreMoreBar />
//                 <OffersSection />
//                 <VisaSection />
//                 <CruiseSection />
//                 <NightClubSection />
//                 <AirlinePartners />
//                 <InfoSection />
//                 <MegaLinksSection />
//               </>
//             } />
//             <Route path="/visa" element={<VisaSection />} />
//             <Route path="/cruise" element={<CruiseSection />} />
//             <Route path="/night-club" element={<NightClubSection />} />
//             <Route path="/tours" element={<ToursAttractions />} />
//             <Route path="/flight-status" element={<FlightStatusPage />} />
//             <Route path="/hotels" element={<Hotels />} />
//             <Route path="/flights" element={<Flights />} />
//             <Route path="/train" element={<Train />} />
//             <Route path="/holiday" element={<Holiday />} />
//             <Route path="/trip-planner" element={<TripPlanner />} />
//             <Route path="/gift" element={<GiftCard />} />
//             <Route path="/invite" element={<InviteEarn />} />
//             <Route path="/list-your-property" element={<ListProperty />} />
//             <Route path="/pnr" element={<PNRStatus />} />
//             <Route path="/bus" element={<Bus />} />
//             <Route path="/bus/:id" element={<BookBus />} />
//             <Route path="/cab" element={<Cab />} />
//             <Route path="/cab/:id" element={<CabDetails />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//           <Footer />
//         </main>
//       </div>
//     </div>
//   );
// }





























































// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// /* COMMON */
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// /* PAGES */
// import Hero from "./components/Hero";
// import ExploreMoreBar from "./components/ExploreMoreBar";
// import OffersSection from "./components/offers/OffersSection";
// import AirlinePartners from "./components/AirlinePartners";
// import InfoSection from "./components/InfoSection";
// import MegaLinksSection from "./components/MegaLinksSection";
// import VisaSection from "./pages/visa/VisaSection";
// import CruiseSection from "./pages/cruise/CruiseSection";
// import NightClubSection from "./pages/nightclub/NightClubSection";
// import ToursAttractions from "./pages/ToursAttractions";
// import FlightStatusPage from "./pages/flightStatus/FlightStatusPage";
// import Hotels from "./pages/Hotels";
// import Flights from "./pages/Flights";
// import Train from "./pages/Train";
// import Holiday from "./pages/Holiday";
// import GiftCard from "./pages/GiftCard";
// import TripPlanner from "./pages/TripPlanner";
// import InviteEarn from "./pages/InviteEarn";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Bus from "./pages/Bus";
// import BookBus from "./pages/BookBus";
// import Cab from "./pages/Cab";
// import CabDetails from "./pages/CabDetails";
// import ListProperty from "./pages/ListProperty";
// import PNRStatus from "./pages/PNRStatus";
// import NewUserExclusive from "./components/NewUserExclusive";
// import BannerCarousel from "./components/BannerCarousel.jsx";
// import PlacesCarousel from "./components/PlacesCarousel.jsx";
// import HotelCard from "./components/HotelCard.jsx";
// // import HotelList from "./components/HotelList.jsx";

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect mobile screen
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
    
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
    
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     if (isMobile) {
//       setSidebarOpen(false);
//     }
//   };

//   // Handle backdrop click
//   const handleBackdropClick = () => {
//     if (sidebarOpen && isMobile) {
//       setSidebarOpen(false);
//     }
//   };

//   return (
//     <div className="app-wrapper">
//       <Navbar toggleSidebar={toggleSidebar} />
      
//       {/* Mobile Backdrop */}
//       {sidebarOpen && isMobile && (
//         <div 
//           className="sidebar-backdrop" 
//           onClick={handleBackdropClick}
//         />
//       )}
      
//       <div className="content-layout">
//         <Sidebar open={sidebarOpen} />
        
//         <main 
//           className={`main-body ${sidebarOpen ? "sidebar-open" : "sidebar-collapsed"}`}
//           onClick={isMobile && sidebarOpen ? handleBackdropClick : undefined}
//         >
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <Hero />
//                 <ExploreMoreBar />
//                 <NewUserExclusive />
//                 <BannerCarousel />
//                 <PlacesCarousel />
//                 {/* <HotelCard/> */}
//                 <OffersSection />
//                 <VisaSection />
//                 <CruiseSection />
//                 <NightClubSection />
//                 <AirlinePartners />
//                 <InfoSection />
//                 <MegaLinksSection />
//               </>
//             } />
//             <Route path="/visa" element={<VisaSection />} />
//             <Route path="/cruise" element={<CruiseSection />} />
//             <Route path="/night-club" element={<NightClubSection />} />
//             <Route path="/tours" element={<ToursAttractions />} />
//             <Route path="/flight-status" element={<FlightStatusPage />} />
//             <Route path="/hotels" element={<Hotels />} />
//             <Route path="/flights" element={<Flights />} />
//             <Route path="/train" element={<Train />} />
//             <Route path="/holiday" element={<Holiday />} />
//             <Route path="/trip-planner" element={<TripPlanner />} />
//             <Route path="/gift" element={<GiftCard />} />
//             <Route path="/invite" element={<InviteEarn />} />
//             <Route path="/list-your-property" element={<ListProperty />} />
//             <Route path="/pnr" element={<PNRStatus />} />
//             <Route path="/bus" element={<Bus />} />
//             <Route path="/bus/:id" element={<BookBus />} />
//             <Route path="/cab" element={<Cab />} />
//             <Route path="/cab/:id" element={<CabDetails />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//           <Footer />
//         </main>
//       </div>
//     </div>
//   );
// }





















// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// /* COMMON */
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// /* PAGES */
// import Hero from "./components/Hero";
// import ExploreMoreBar from "./components/ExploreMoreBar";
// import OffersSection from "./components/offers/OffersSection";
// import AirlinePartners from "./components/AirlinePartners";
// import InfoSection from "./components/InfoSection";
// import MegaLinksSection from "./components/MegaLinksSection";
// import VisaSection from "./pages/visa/VisaSection";
// import CruiseSection from "./pages/cruise/CruiseSection";
// import NightClubSection from "./pages/nightclub/NightClubSection";
// import ToursAttractions from "./pages/ToursAttractions";
// import FlightStatusPage from "./pages/flightStatus/FlightStatusPage";
// import Hotels from "./pages/Hotels";
// import Flights from "./pages/Flights";
// import Train from "./pages/Train";
// import Holiday from "./pages/Holiday";
// import GiftCard from "./pages/GiftCard";
// import TripPlanner from "./pages/TripPlanner";
// import InviteEarn from "./pages/InviteEarn";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Bus from "./pages/Bus";
// import BookBus from "./pages/BookBus";
// import Cab from "./pages/Cab";
// import CabDetails from "./pages/CabDetails";
// import ListProperty from "./pages/ListProperty";
// import PNRStatus from "./pages/PNRStatus";
// import NewUserExclusive from "./components/NewUserExclusive";
// import BannerCarousel from "./components/BannerCarousel.jsx";
// import PlacesCarousel from "./components/PlacesCarousel.jsx";

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     console.log("Toggle clicked, current state:", sidebarOpen);
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Simple App.jsx - बाकी logic Sidebar component में है
//   return (
//     <div className="app-wrapper">
//       <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
//       <div className="content-layout">
//         {/* Sidebar Component */}
//         <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        
//         {/* Main Content */}
//         <main className={`main-body ${sidebarOpen ? 'sidebar-open' : ''}`}>
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <Hero />
//                 <ExploreMoreBar />
//                 <NewUserExclusive />
//                 <BannerCarousel />
//                 <PlacesCarousel />
//                 <OffersSection />
//                 <VisaSection />
//                 <CruiseSection />
//                 <NightClubSection />
//                 <AirlinePartners />
//                 <InfoSection />
//                 <MegaLinksSection />
//               </>
//             } />
//             <Route path="/visa" element={<VisaSection />} />
//             <Route path="/cruise" element={<CruiseSection />} />
//             <Route path="/night-club" element={<NightClubSection />} />
//             <Route path="/tours" element={<ToursAttractions />} />
//             <Route path="/flight-status" element={<FlightStatusPage />} />
//             <Route path="/hotels" element={<Hotels />} />
//             <Route path="/flights" element={<Flights />} />
//             <Route path="/train" element={<Train />} />
//             <Route path="/holiday" element={<Holiday />} />
//             <Route path="/trip-planner" element={<TripPlanner />} />
//             <Route path="/gift" element={<GiftCard />} />
//             <Route path="/invite" element={<InviteEarn />} />
//             <Route path="/list-your-property" element={<ListProperty />} />
//             <Route path="/pnr" element={<PNRStatus />} />
//             <Route path="/bus" element={<Bus />} />
//             <Route path="/bus/:id" element={<BookBus />} />
//             <Route path="/cab" element={<Cab />} />
//             <Route path="/cab/:id" element={<CabDetails />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//           <Footer />
//         </main>
//       </div>
//     </div>
//   );
// }





































import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/* COMMON */
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES */
import Hero from "./components/Hero";
import ExploreMoreBar from "./components/ExploreMoreBar";
import OffersSection from "./components/offers/OffersSection";
import AirlinePartners from "./components/AirlinePartners";
import InfoSection from "./components/InfoSection";
import MegaLinksSection from "./components/MegaLinksSection";
import VisaSection from "./pages/visa/VisaSection";
import CruiseSection from "./pages/cruise/CruiseSection";
import NightClubSection from "./pages/nightclub/NightClubSection";
import ToursAttractions from "./pages/ToursAttractions";
import FlightStatusPage from "./pages/flightStatus/FlightStatusPage";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Train from "./pages/Train";
import Holiday from "./pages/Holiday";
import GiftCard from "./pages/GiftCard";
import TripPlanner from "./pages/TripPlanner";
import InviteEarn from "./pages/InviteEarn";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Bus from "./pages/Bus";
import BookBus from "./pages/BookBus";
import Cab from "./pages/Cab";
import CabDetails from "./pages/CabDetails";
import ListProperty from "./pages/ListProperty";
import PNRStatus from "./pages/PNRStatus";
import NewUserExclusive from "./components/NewUserExclusive";
import BannerCarousel from "./components/BannerCarousel.jsx";
import PlacesCarousel from "./components/PlacesCarousel.jsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Desktop पर sidebar default open रखें
      if (!mobile && !sidebarOpen) {
        setSidebarOpen(true);
      }
      
      // Mobile पर sidebar default close रखें
      if (mobile && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => {
    console.log("Toggling sidebar - Mobile:", isMobile, "Current:", sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  // Handle backdrop click
  const handleBackdropClick = () => {
    console.log("Backdrop clicked");
    if (sidebarOpen && isMobile) {
      setSidebarOpen(false);
    }
  };

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && sidebarOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("sidebar-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("sidebar-open");
    }
    
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("sidebar-open");
    };
  }, [sidebarOpen, isMobile]);

  // Handle link clicks on mobile
  const handleLinkClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className={`app-wrapper ${sidebarOpen && isMobile ? 'sidebar-open' : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      {/* Mobile Backdrop - Only show on mobile when sidebar is open */}
      {sidebarOpen && isMobile && (
        <div 
          className="sidebar-backdrop" 
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}
      
      <div className="content-layout">
        {/* Sidebar Component */}
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        
        {/* Main Content */}
        <main 
          className={`main-body ${sidebarOpen ? 'sidebar-open' : ''}`}
          onClick={(e) => {
            // Mobile पर main content click से sidebar close
            if (isMobile && sidebarOpen && e.target === e.currentTarget) {
              setSidebarOpen(false);
            }
          }}
        >
          <div className="page-content">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <ExploreMoreBar />
                  <NewUserExclusive />
                  <BannerCarousel />
                  <PlacesCarousel />
                  <OffersSection />
                  <VisaSection />
                  <CruiseSection />
                  <NightClubSection />
                  <AirlinePartners />
                  <InfoSection />
                  <MegaLinksSection />
                </>
              } />
              <Route path="/visa" element={<VisaSection />} />
              <Route path="/cruise" element={<CruiseSection />} />
              <Route path="/night-club" element={<NightClubSection />} />
              <Route path="/tours" element={<ToursAttractions />} />
              <Route path="/flight-status" element={<FlightStatusPage />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/train" element={<Train />} />
              <Route path="/holiday" element={<Holiday />} />
              <Route path="/trip-planner" element={<TripPlanner />} />
              <Route path="/gift" element={<GiftCard />} />
              <Route path="/invite" element={<InviteEarn />} />
              <Route path="/list-your-property" element={<ListProperty />} />
              <Route path="/pnr" element={<PNRStatus />} />
              <Route path="/bus" element={<Bus />} />
              <Route path="/bus/:id" element={<BookBus />} />
              <Route path="/cab" element={<Cab />} />
              <Route path="/cab/:id" element={<CabDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}