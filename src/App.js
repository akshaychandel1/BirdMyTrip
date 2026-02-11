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
// import Train from "./pages/BookTrain.jsx";
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
// import FlightHotel from "./pages/FlightHotels.jsx";
// // import HomeStay from "./components/HomeStay.jsx";
// import HotelAndHomeStay from "./components/HotelAndHomeStay.jsx";
// import HotelAndHomeStayDetail from "./components/HotelAndHomeStayDetail.jsx";
// import HotelDetail from "./pages/HotelDetail.jsx";
// import CruiseBooking from "./pages/cruise/CruiseBooking.jsx";
// import PaymentPage from "./pages/PaymentPage.jsx";
// import SeatSelectionPage from "./pages/SeatSelectionPage.js";
// import UserDashboard from "./components/UserDashboard.jsx";


// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect mobile screen
//   useEffect(() => {
//     const checkMobile = () => {
//       const mobile = window.innerWidth <= 768;
//       setIsMobile(mobile);
      
//       // Desktop पर sidebar default open रखें
//       if (!mobile && !sidebarOpen) {
//         setSidebarOpen(true);
//       }
      
//       // Mobile पर sidebar default close रखें
//       if (mobile && sidebarOpen) {
//         setSidebarOpen(false);
//       }
//     };
    
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
    
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const toggleSidebar = () => {
//     console.log("Toggling sidebar - Mobile:", isMobile, "Current:", sidebarOpen);
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Handle backdrop click
//   const handleBackdropClick = () => {
//     console.log("Backdrop clicked");
//     if (sidebarOpen && isMobile) {
//       setSidebarOpen(false);
//     }
//   };

//   // Prevent body scroll when sidebar is open on mobile
//   useEffect(() => {
//     if (isMobile && sidebarOpen) {
//       document.body.style.overflow = "hidden";
//       document.body.classList.add("sidebar-open");
//     } else {
//       document.body.style.overflow = "auto";
//       document.body.classList.remove("sidebar-open");
//     }
    
//     return () => {
//       document.body.style.overflow = "auto";
//       document.body.classList.remove("sidebar-open");
//     };
//   }, [sidebarOpen, isMobile]);

//   // Handle link clicks on mobile
//   const handleLinkClick = () => {
//     if (isMobile) {
//       setSidebarOpen(false);
//     }
//   };

//   return (
//     <div className={`app-wrapper ${sidebarOpen && isMobile ? 'sidebar-open' : ''}`}>
//       <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
//       {/* Mobile Backdrop - Only show on mobile when sidebar is open */}
//       {sidebarOpen && isMobile && (
//         <div 
//           className="sidebar-backdrop" 
//           onClick={handleBackdropClick}
//           aria-hidden="true"
//         />
//       )}
      
//       <div className="content-layout md:mt-[80px]">
//         {/* Sidebar Component */}
//         <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        
//         {/* Main Content */}
//         <main 
//           className={`main-body ${sidebarOpen ? 'sidebar-open' : ''}`}
//           onClick={(e) => {
//             // Mobile पर main content click से sidebar close
//             if (isMobile && sidebarOpen && e.target === e.currentTarget) {
//               setSidebarOpen(false);
//             }
//           }}
//         >
//           <div className="page-content">
//             <Routes>
//               <Route path="/" element={
//                 <>
//                   <Hero />
//                   <ExploreMoreBar />
//                   <NewUserExclusive />
//                   <BannerCarousel />
//                   <PlacesCarousel />
//                   {/* <OffersSection /> */}
//                   <VisaSection />
//                   {/* <CruiseSection /> */}
//                   <NightClubSection />
//                   <AirlinePartners />
//                   <InfoSection />
//                   <MegaLinksSection />
//                 </>
//               } />
//               <Route path="/visa" element={<VisaSection />} />
//               <Route path="/cruise" element={<CruiseSection />} />
//               <Route path="/night-club" element={<NightClubSection />} />
//               <Route path="/hotels&Flights" element={<FlightHotel/>} />
//               <Route path="/tours" element={<ToursAttractions />} />
//               <Route path="/flight-status" element={<FlightStatusPage />} />
//               <Route path="/hotels" element={<Hotels />} />
//               <Route path="/flights" element={<Flights />} />
//               <Route path="/train" element={<Train />} />
//               <Route path="/holiday" element={<Holiday />} />
//               <Route path="/trip-planner" element={<TripPlanner />} />
//               <Route path="/gift" element={<GiftCard />} />
//               <Route path="/invite" element={<InviteEarn />} />
//               <Route path="/list-your-property" element={<ListProperty />} />
//               <Route path="/pnr" element={<PNRStatus />} />
//               <Route path="/bus" element={<Bus />} />
//               <Route path="/bus/:id" element={<BookBus />} />
//               <Route path="/cab" element={<Cab />} />
//               <Route path="/cab/:id" element={<CabDetails />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/homestay" element={<HotelAndHomeStay />} />
//               <Route path="/property/:id" element={<HotelAndHomeStayDetail />} />
//                <Route path="/hotel/:id" element={<HotelDetail />} />
//                 <Route path="/cruise/:id" element={<CruiseBooking />} />
//               <Route path="/select-seats" element={<SeatSelectionPage />} />
//           <Route path="/payment" element={<PaymentPage />} />
//           <Route path="/user-dashboard" element={<UserDashboard />} />
//             </Routes>
//             <Footer />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }



































import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // BrowserRouter hata diya
import "./App.css";
import ScrollToTop from "./pages/ScrollToTop.js";

/* COMMON */
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES - All your existing imports */
import Hero from "./components/Hero";
import ExploreMoreBar from "./components/ExploreMoreBar";
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
import Train from "./pages/BookTrain.jsx";
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
import FlightHotel from "./pages/FlightHotels.jsx";
import HotelAndHomeStay from "./components/HotelAndHomeStay.jsx";
import HotelAndHomeStayDetail from "./components/HotelAndHomeStayDetail.jsx";
import HotelDetail from "./pages/HotelDetail.jsx";
import CruiseBooking from "./pages/cruise/CruiseBooking.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import SeatSelectionPage from "./pages/SeatSelectionPage.js";
import UserDashboard from "./components/UserDashboard.jsx";

/* CONTEXT */
import { AuthProvider } from "./contexts/AuthContext";
import BookingConfirmation from "./pages/BookingConfirmation.js";
import PackageDetails from "./pages/PackageDetails.js";
import TrendingPackageDetails from "./pages/TrendingPackageDetails.js";

function App() {
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
    setSidebarOpen(!sidebarOpen);
  };

  // Handle backdrop click
  const handleBackdropClick = () => {
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

  return (
    <AuthProvider>
      <ScrollToTop />
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
        
        <div className="content-layout md:mt-[80px]">
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
                    <VisaSection />
                    <NightClubSection />
                    <AirlinePartners />
                    <InfoSection />
                    <MegaLinksSection />
                  </>
                } />
                <Route path="/visa" element={<VisaSection />} />
                <Route path="/cruise" element={<CruiseSection />} />
                <Route path="/night-club" element={<NightClubSection />} />
                <Route path="/hotels&Flights" element={<FlightHotel/>} />
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
                <Route path="/homestay" element={<HotelAndHomeStay />} />
                <Route path="/property/:id" element={<HotelAndHomeStayDetail />} />
                <Route path="/hotel/:id" element={<HotelDetail />} />
                <Route path="/cruise/:id" element={<CruiseBooking />} />
                <Route path="/select-seats" element={<SeatSelectionPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                <Route path="/package-details" element={<PackageDetails />} />
                <Route path="/trending-package-details" element={<TrendingPackageDetails />} />
              </Routes>
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;