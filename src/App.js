
// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// /* ================= COMMON COMPONENTS ================= */
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";

// /* ================= HOME SECTIONS ================= */
// import OffersSection from "./components/offers/OffersSection";
// import AirlinePartners from "./components/AirlinePartners";
// import MegaLinksSection from "./components/MegaLinksSection";
// import InfoSection from "./components/InfoSection";

// /* ================= VISA PAGE (FROM PAGES FOLDER) ================= */
// import VisaSection from "./pages/visa/VisaSection";

// /* ================= AUTH ================= */
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// /* ================= HOTELS ================= */
// import Hotels from "./pages/Hotels";
// import HotelDetails from "./pages/HotelDetails";
// import BookHotel from "./pages/BookHotel";

// /* ================= FLIGHTS ================= */
// import Flights from "./pages/Flights";
// import FlightDetails from "./pages/FlightDetails";
// import BookFlight from "./pages/BookFlight";

// /* ================= BUS ================= */
// import Bus from "./pages/Bus";
// import BusDetails from "./pages/BusDetails";
// import BookBus from "./pages/BookBus";

// /* ================= TRAIN ================= */
// import Train from "./pages/Train";
// import TrainDetails from "./pages/TrainDetails";
// import BookTrain from "./pages/BookTrain";

// /* ================= CAB ================= */
// import Cab from "./pages/Cab";
// import CabDetails from "./pages/CabDetails";

// /* ================= HOLIDAY ================= */
// import Holiday from "./pages/Holiday";

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="app">
//       {/* SIDEBAR */}
//       <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

//       {/* MAIN CONTENT */}
//       <div className={`main ${sidebarOpen ? "shifted" : ""}`}>
//         <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

//         <Routes>
//           {/* ================= HOME ================= */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <OffersSection />
//                 <AirlinePartners />
//                 <MegaLinksSection />
//                 <InfoSection />
//               </>
//             }
//           />

//           {/* ================= VISA PAGE ================= */}
//           <Route path="/visa" element={<VisaSection />} />

//           {/* ================= AUTH ================= */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           {/* ================= HOTELS ================= */}
//           <Route path="/hotels" element={<Hotels />} />
//           <Route path="/hotel/:id" element={<HotelDetails />} />
//           <Route path="/book-hotel/:id" element={<BookHotel />} />

//           {/* ================= FLIGHTS ================= */}
//           <Route path="/flights" element={<Flights />} />
//           <Route path="/flight/:id" element={<FlightDetails />} />
//           <Route path="/book-flight/:id" element={<BookFlight />} />

//           {/* ================= BUS ================= */}
//           <Route path="/bus" element={<Bus />} />
//           <Route path="/bus/:id" element={<BusDetails />} />
//           <Route path="/book-bus/:id" element={<BookBus />} />

//           {/* ================= TRAIN ================= */}
//           <Route path="/train" element={<Train />} />
//           <Route path="/train/:id" element={<TrainDetails />} />
//           <Route path="/book-train/:id" element={<BookTrain />} />

//           {/* ================= CAB ================= */}
//           <Route path="/cab" element={<Cab />} />
//           <Route path="/cab/:id" element={<CabDetails />} />

//           {/* ================= HOLIDAY ================= */}
//           <Route path="/holiday" element={<Holiday />} />
//         </Routes>

//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/* ================= COMMON COMPONENTS ================= */
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

/* ================= HOME SECTIONS ================= */
import OffersSection from "./components/offers/OffersSection";
import AirlinePartners from "./components/AirlinePartners";
import MegaLinksSection from "./components/MegaLinksSection";
import InfoSection from "./components/InfoSection";

/* ================= PAGES ================= */
import VisaSection from "./pages/visa/VisaSection";
import ToursAttractions from "./pages/ToursAttractions";

/* ================= AUTH ================= */
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* ================= HOTELS ================= */
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import BookHotel from "./pages/BookHotel";

/* ================= FLIGHTS ================= */
import Flights from "./pages/Flights";
import FlightDetails from "./pages/FlightDetails";
import BookFlight from "./pages/BookFlight";

/* ================= BUS ================= */
import Bus from "./pages/Bus";
import BusDetails from "./pages/BusDetails";
import BookBus from "./pages/BookBus";

/* ================= TRAIN ================= */
import Train from "./pages/Train";
import TrainDetails from "./pages/TrainDetails";
import BookTrain from "./pages/BookTrain";

/* ================= CAB ================= */
import Cab from "./pages/Cab";
import CabDetails from "./pages/CabDetails";

/* ================= HOLIDAY ================= */
import Holiday from "./pages/Holiday";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      {/* SIDEBAR */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* MAIN CONTENT */}
      <div className={`main ${sidebarOpen ? "shifted" : ""}`}>
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <Routes>
          {/* ================= HOME ================= */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <OffersSection />
                <AirlinePartners />
                <MegaLinksSection />
                <InfoSection />
              </>
            }
          />

          {/* ================= TOURS & ATTRACTIONS ================= */}
          <Route path="/tours" element={<ToursAttractions />} />

          {/* ================= VISA ================= */}
          <Route path="/visa" element={<VisaSection />} />

          {/* ================= AUTH ================= */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ================= HOTELS ================= */}
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/book-hotel/:id" element={<BookHotel />} />

          {/* ================= FLIGHTS ================= */}
          <Route path="/flights" element={<Flights />} />
          <Route path="/flight/:id" element={<FlightDetails />} />
          <Route path="/book-flight/:id" element={<BookFlight />} />

          {/* ================= BUS ================= */}
          <Route path="/bus" element={<Bus />} />
          <Route path="/bus/:id" element={<BusDetails />} />
          <Route path="/book-bus/:id" element={<BookBus />} />

          {/* ================= TRAIN ================= */}
          <Route path="/train" element={<Train />} />
          <Route path="/train/:id" element={<TrainDetails />} />
          <Route path="/book-train/:id" element={<BookTrain />} />

          {/* ================= CAB ================= */}
          <Route path="/cab" element={<Cab />} />
          <Route path="/cab/:id" element={<CabDetails />} />

          {/* ================= HOLIDAY ================= */}
          <Route path="/holiday" element={<Holiday />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
