import React, { useState, useRef, useEffect } from 'react';
import { 
  Filter, Star, Check, Clock, MapPin, Zap, Infinity, Shield, 
  Users, Calendar, Car, Search, ChevronLeft, ChevronRight,
  Settings, Globe, User, Tag, X, ThumbsUp, Info, Fuel, Gauge, Briefcase,
  Sparkles, BadgePercent, Navigation
} from 'lucide-react';

const Cab = () => {
  // --- STATE MANAGEMENT ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [sortOption, setSortOption] = useState('recommended');
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [searchMode, setSearchMode] = useState('quick'); // 'quick' or 'rental'
  
  // Quick search states
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  
  // Rental search states
  const [rentalPickupDate, setRentalPickupDate] = useState('');
  const [rentalDropoffDate, setRentalDropoffDate] = useState('');
  const [rentalLocation, setRentalLocation] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const carouselRef = useRef(null);

  // Initialize dates
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // Set default rental dates
    if (!rentalPickupDate) {
      const pickupDateStr = today.toISOString().split('T')[0];
      const dropoffDateStr = tomorrow.toISOString().split('T')[0];
      setRentalPickupDate(pickupDateStr);
      setRentalDropoffDate(dropoffDateStr);
    }
  }, []);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // --- MOCK DATA ---
  const miniCars = [
    { id: 101, name: "Mitsubishi Xpander", type: "SUV", price: "5,700", image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=200&h=120&fit=crop" },
    { id: 102, name: "Honda City", type: "Small Car", price: "3,790", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=200&h=120&fit=crop" },
    { id: 103, name: "Toyota Vios", type: "Medium Car", price: "3,950", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=120&fit=crop" },
    { id: 104, name: "Fortuner", type: "Premium SUV", price: "7,500", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=200&h=120&fit=crop" },
    { id: 105, name: "Innova Crysta", type: "Van", price: "6,200", image: "https://images.unsplash.com/photo-1626847037657-fd34d2ca3b18?w=200&h=120&fit=crop" },
    { id: 106, name: "Swift Dzire", type: "Economy", price: "3,100", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=200&h=120&fit=crop" },
  ];

  const allCars = [
    {
      id: 1,
      name: "VW Jetta or Similar",
      category: "Standard car",
      badge: "AVIS",
      seats: 5,
      bags: 2,
      transmission: "Automatic",
      fuel: "Petrol",
      supplier: "AVIS",
      rating: 4.1,
      reviewCount: 461,
      tags: ["Near the airport, free shuttle bus", "Instant confirmation", "Open 24 hours", "Full to Full"],
      mileage: "Unlimited mileage",
      originalPrice: 10500,
      price: 8495,
      total: searchMode === 'quick' ? 8495 : 25484,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop",
      quickPrice: 8495
    },
    {
      id: 2,
      name: "SUV or Similar",
      category: "SUV",
      badge: "AVIS",
      seats: 5,
      bags: 3,
      transmission: "Automatic",
      fuel: "Petrol",
      supplier: "AVIS",
      rating: 4.1,
      reviewCount: 461,
      tags: ["Near the airport, free shuttle bus", "Instant confirmation", "Time-limited Free Cancellation", "Includes Additional Liability Insurance", "Full to Full"],
      mileage: "Unlimited mileage",
      originalPrice: 12500,
      price: 10680,
      total: searchMode === 'quick' ? 10680 : 32040,
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=250&fit=crop",
      quickPrice: 10680
    },
    {
      id: 3,
      name: "Electric Vehicle",
      category: "EV",
      badge: "AVIS",
      seats: 5,
      bags: 2,
      transmission: "Automatic",
      fuel: "Electric",
      supplier: "AVIS",
      rating: 4.1,
      reviewCount: 461,
      tags: ["Near the airport, free shuttle bus", "Instant confirmation", "Free Cancellation", "Open 24 hours", "Full to Full"],
      mileage: "Unlimited mileage",
      originalPrice: 9500,
      price: 8514,
      total: searchMode === 'quick' ? 8514 : 25542,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=250&fit=crop",
      quickPrice: 8514
    },
    {
      id: 4,
      name: "Pickup Truck",
      category: "Pickup",
      badge: "AVIS",
      seats: 5,
      bags: 4,
      transmission: "Automatic",
      fuel: "Petrol",
      supplier: "AVIS",
      rating: 4.1,
      reviewCount: 461,
      tags: ["Near the airport, free shuttle bus", "Instant confirmation", "Free Cancellation", "Open 24 hours", "Full to Full"],
      mileage: "Unlimited mileage",
      originalPrice: 13000,
      price: 12355,
      total: searchMode === 'quick' ? 12355 : 37065,
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=250&fit=crop",
      quickPrice: 12355
    }
  ];

  const suppliers = ["European Car Rent", "Economy Rent A Car", "Avia Star River", "Fat Uncle Car Rental", "Fox", "Seats"];
  const seatOptions = ["4-5 seats", "6-7 seats", "8+ seats"];
  const promoCodes = [
    { code: "PROMO8", discount: "8% Off", value: "8.00" },
    { code: "SAVE10", discount: "₹10.00 Off", value: "10.00" },
    { code: "TRIP15", discount: "₹15.00 Off", value: "15.00" },
    { code: "BIG30", discount: "₹30.00 Off", value: "30.00" }
  ];

  // --- LOGIC ---

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredCars = allCars
    .filter(car => {
      const query = searchQuery.toLowerCase();
      const searchMatch = 
        car.name.toLowerCase().includes(query) || 
        car.category.toLowerCase().includes(query) ||
        car.supplier.toLowerCase().includes(query);

      const supplierMatch = selectedSuppliers.length === 0 || selectedSuppliers.includes(car.supplier);
      const seatsMatch = selectedSeats.length === 0 || selectedSeats.includes(`${car.seats} seats`);
      
      return searchMatch && supplierMatch && seatsMatch;
    })
    .sort((a, b) => {
      if (sortOption === 'price_asc') return a.price - b.price;
      if (sortOption === 'price_desc') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0;
    });

  const toggleSupplier = (supplier) => {
    setSelectedSuppliers(prev => 
      prev.includes(supplier) ? prev.filter(s => s !== supplier) : [...prev, supplier]
    );
  };

  const toggleSeat = (seat) => {
    setSelectedSeats(prev => 
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleQuickSearch = () => {
    if (pickupLocation && dropoffLocation) {
      alert(`Searching for cab from ${pickupLocation} to ${dropoffLocation}`);
    } else {
      alert('Please enter both pickup and dropoff locations');
    }
  };

  const handleRentalSearch = () => {
    if (rentalLocation && rentalPickupDate && rentalDropoffDate) {
      alert(`Searching for rental at ${rentalLocation} from ${formatDate(rentalPickupDate)} to ${formatDate(rentalDropoffDate)}`);
    } else {
      alert('Please fill all rental details');
    }
  };

  // Calculate days difference for rental
  const calculateDays = () => {
    if (rentalPickupDate && rentalDropoffDate) {
      const start = new Date(rentalPickupDate);
      const end = new Date(rentalDropoffDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays || 1;
    }
    return 1;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* --- HEADER --- */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 py-3">
            <div className="flex flex-col lg:flex-row items-center gap-4">
               

                {/* Search Mode Toggle */}
                <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                    <button 
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${searchMode === 'quick' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                        onClick={() => setSearchMode('quick')}
                    >
                        Quick Cab
                    </button>
                    <button 
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${searchMode === 'rental' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                        onClick={() => setSearchMode('rental')}
                    >
                        Car Rental
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* --- SEARCH SECTION --- */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 py-4">
          
          {searchMode === 'quick' ? (
            /* --- QUICK SEARCH MODE --- */
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900">Book a cab instantly</h2>
              
              <div className="flex flex-col md:flex-row gap-3">
                {/* Pickup Location */}
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Pickup Location</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-3 hover:border-blue-500 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <input 
                      type="text" 
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="Enter pickup location"
                      className="flex-1 outline-none text-gray-900 placeholder-gray-400"
                    />
                    {pickupLocation && (
                      <button onClick={() => setPickupLocation('')} className="text-gray-400 hover:text-gray-600">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Dropoff Location */}
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Dropoff Location</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-3 hover:border-blue-500 transition-colors">
                    <Navigation className="w-5 h-5 text-green-500" />
                    <input 
                      type="text" 
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      placeholder="Enter dropoff location"
                      className="flex-1 outline-none text-gray-900 placeholder-gray-400"
                    />
                    {dropoffLocation && (
                      <button onClick={() => setDropoffLocation('')} className="text-gray-400 hover:text-gray-600">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button 
                    onClick={handleQuickSearch}
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                  >
                    <Search className="w-5 h-5" />
                    Search Cab
                  </button>
                </div>
              </div>

              {/* Top Picks Section */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900">Top Picks for Today</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {formatDate(new Date().toISOString().split('T')[0])}
                  </div>
                </div>

                {/* Top Picks Carousel */}
                <div className="relative">
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {miniCars.slice(0, 4).map(car => (
                      <div key={car.id} className="min-w-[200px] border border-gray-200 rounded-xl p-4 hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all bg-white">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{car.type}</span>
                          <Sparkles className="w-4 h-4 text-yellow-500" />
                        </div>
                        <img src={car.image} className="w-full h-28 object-contain mb-4" alt={car.name} />
                        <p className="font-bold text-gray-900 mb-1">{car.name}</p>
                        <p className="text-sm text-gray-600 mb-2">Available now</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-900">₹{car.price}</span>
                          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                            Book →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* --- RENTAL SEARCH MODE --- */
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900">Rent a car for your trip</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                {/* Location */}
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Pickup Location</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-3 hover:border-blue-500 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <input 
                      type="text" 
                      value={rentalLocation}
                      onChange={(e) => setRentalLocation(e.target.value)}
                      placeholder="City, airport or area"
                      className="flex-1 outline-none text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Pickup Date */}
                <div className="relative">
                  <label className="block text-xs text-gray-500 mb-1">Pickup Date & Time</label>
                  <div 
                    className="flex items-center gap-2 border border-gray-300 rounded-lg p-3 hover:border-blue-500 transition-colors cursor-pointer"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                  >
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <div className="flex-1">
                      <div className="text-gray-900 font-medium">{formatDate(rentalPickupDate)}</div>
                      <div className="text-xs text-gray-500">10:00 AM</div>
                    </div>
                  </div>

                  {/* Simple Date Picker */}
                  {showDatePicker && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-bold text-gray-900">Select Dates</h4>
                        <button onClick={() => setShowDatePicker(false)} className="text-gray-400 hover:text-gray-600">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Pickup Date</label>
                          <input 
                            type="date" 
                            value={rentalPickupDate}
                            onChange={(e) => setRentalPickupDate(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Return Date</label>
                          <input 
                            type="date" 
                            value={rentalDropoffDate}
                            onChange={(e) => setRentalDropoffDate(e.target.value)}
                            min={rentalPickupDate}
                            className="w-full border border-gray-300 rounded p-2"
                          />
                        </div>
                        <button 
                          onClick={() => setShowDatePicker(false)}
                          className="w-full bg-blue-600 text-white py-2 rounded font-medium"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Return Date */}
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Return Date & Time</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-3 hover:border-blue-500 transition-colors">
                    <Calendar className="w-5 h-5 text-green-500" />
                    <div className="flex-1">
                      <div className="text-gray-900 font-medium">{formatDate(rentalDropoffDate)}</div>
                      <div className="text-xs text-gray-500">10:00 AM</div>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button 
                    onClick={handleRentalSearch}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Search className="w-5 h-5" />
                    Search
                  </button>
                </div>
              </div>

              {/* Additional Options */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Different drop-off location
                </label>
                <div className="flex items-center gap-4">
                  <span>Driver's Age: <b>30-65</b></span>
                  <span>Rental Duration: <b>{calculateDays()} days</b></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-[1280px] mx-auto px-4 py-6">
        <div className="flex gap-6">
          
          {/* --- LEFT SIDEBAR (FILTERS) --- */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="space-y-6 sticky top-24">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-gray-900">Filters</h3>
                <button 
                  onClick={() => {setSelectedSuppliers([]); setSelectedSeats([]); setSearchQuery('');}}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                    Clear all
                </button>
              </div>

              {/* Supplier Filter */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="font-bold text-sm mb-4 text-gray-900">Supplier</h4>
                {suppliers.map((s, idx) => (
                  <label key={s} className="flex items-center justify-between gap-2 mb-3 cursor-pointer group">
                    <div className="flex items-center gap-3">
                        <input 
                            type="checkbox" 
                            className="h-4 w-4 border-gray-300 rounded text-blue-600"
                            checked={selectedSuppliers.includes(s)}
                            onChange={() => toggleSupplier(s)}
                        />
                        <span className="text-sm text-gray-700 group-hover:text-blue-600">{s}</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* Seats Filter */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="font-bold text-sm mb-4 text-gray-900">Seats</h4>
                {seatOptions.map(seat => (
                   <label key={seat} className="flex items-center gap-3 cursor-pointer mb-3 group">
                   <input 
                        type="checkbox" 
                        className="h-4 w-4 border-gray-300 rounded text-blue-600" 
                        checked={selectedSeats.includes(seat)}
                        onChange={() => toggleSeat(seat)}
                   />
                   <span className="text-sm text-gray-700 group-hover:text-blue-600">{seat}</span>
                 </label>
                ))}
              </div>

              {/* Energy Source & Drivetrain */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="font-bold text-sm mb-4 text-gray-900">Energy Source & Drivetrain</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded border border-blue-100">
                    <span className="text-sm font-medium text-gray-700">Budget</span>
                  </div>
                  <div className="flex items-center justify-between p-2">
                    <span className="text-sm text-gray-700">Global chain</span>
                  </div>
                  <div className="flex items-center justify-between p-2">
                    <span className="text-sm text-gray-700">Good</span>
                    <span className="text-xs text-gray-500">461 review(s)</span>
                  </div>
                </div>
              </div>

              {/* Promo Codes */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="font-bold text-sm mb-4 text-gray-900 flex items-center gap-2">
                  <BadgePercent className="w-4 h-4" /> Promo codes
                </h4>
                <div className="space-y-2">
                  {promoCodes.map((promo, index) => (
                    <div 
                      key={promo.code}
                      className={`p-3 rounded border cursor-pointer transition-all ${selectedPromo === promo.code ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                      onClick={() => setSelectedPromo(promo.code)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">{promo.discount}</span>
                        <span className="text-xs text-gray-500">Promo code</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="flex-1 min-w-0">
            
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button className="w-full bg-white border border-gray-300 rounded-lg p-3 flex items-center justify-center gap-2 font-medium text-gray-700">
                <Filter className="w-5 h-5" />
                Show Filters
              </button>
            </div>

            {/* Top Picks Carousel (for Rental Mode) */}
            {searchMode === 'rental' && (
              <div className="mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                        <Sparkles className="w-4 h-4" /> Recommended
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => scroll('left')} className="p-2 border rounded-full hover:bg-gray-50 text-gray-500">
                        <ChevronLeft className="w-5 h-5"/>
                      </button>
                      <button onClick={() => scroll('right')} className="p-2 border rounded-full hover:bg-gray-50 text-gray-500">
                        <ChevronRight className="w-5 h-5"/>
                      </button>
                    </div>
                  </div>
                  
                  <div 
                    ref={carouselRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {miniCars.map(car => (
                      <div key={car.id} className="min-w-[180px] border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:shadow-md cursor-pointer transition bg-white">
                        <img src={car.image} className="w-full h-24 object-contain mb-3" alt={car.name} />
                        <p className="text-sm font-bold text-gray-900 mb-1">{car.name}</p>
                        <p className="text-xs text-gray-500 mb-2">{car.type}</p>
                        <p className="text-sm font-bold text-gray-900">From ₹{car.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SORTING BAR */}
            <div className="bg-blue-900 text-white rounded-t-lg p-4 flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex flex-wrap gap-4">
                <button 
                  className={`font-bold text-sm ${sortOption === 'recommended' ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300'}`}
                  onClick={() => setSortOption('recommended')}
                >
                  Recommended
                </button>
                <button 
                  className={`font-bold text-sm ${sortOption === 'price_asc' ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300'}`}
                  onClick={() => setSortOption('price_asc')}
                >
                  Price
                </button>
                <button 
                  className={`font-bold text-sm ${sortOption === 'rating' ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300'}`}
                  onClick={() => setSortOption('rating')}
                >
                  Rating
                </button>
              </div>
              <span className="text-sm text-gray-300">{filteredCars.length} cars found</span>
            </div>

            {/* CAR LISTINGS */}
            <div className="space-y-3 mt-0">
              {filteredCars.map(car => (
                <div key={car.id} className="bg-white rounded-b-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition duration-200 flex flex-col lg:flex-row">
                  
                  {/* LEFT: Image & Basic Specs */}
                  <div className="w-full lg:w-[300px] p-4 flex flex-col justify-between bg-gray-50">
                    <div className="flex-1 flex items-center justify-center p-4">
                      <img src={car.image} className="w-full h-40 object-contain" alt={car.name} />
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-sm text-gray-600">{car.category}</p>
                      <p className="text-lg font-bold text-gray-900">{car.name}</p>
                      <div className="grid grid-cols-4 gap-2 mt-3 text-xs text-gray-500">
                        <div className="flex flex-col items-center">
                          <Users className="w-4 h-4 mb-1" /> <span>{car.seats}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Briefcase className="w-4 h-4 mb-1" /> <span>{car.bags}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Gauge className="w-4 h-4 mb-1" /> <span>{car.transmission}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Fuel className="w-4 h-4 mb-1" /> <span>{car.fuel}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE: Info & Features */}
                  <div className="flex-1 p-6 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-between">
                    <div>
                      {/* Supplier & Rating */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-sm font-bold text-gray-900">{car.supplier}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-bold text-blue-600">{car.rating}/5</span>
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        </div>
                        <span className="text-sm text-gray-500">{car.reviewCount} reviews</span>
                      </div>
                      
                      {/* Features List */}
                      <div className="space-y-2 mb-4">
                        {car.tags.map((tag, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> 
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price in main section */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-gray-500">From</span>
                          <span className="text-2xl font-bold text-gray-900">₹{car.price.toLocaleString()}</span>
                          {searchMode === 'rental' && (
                            <span className="text-sm text-gray-500">/day</span>
                          )}
                        </div>
                        {searchMode === 'rental' && (
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-gray-500">Total</span>
                            <span className="text-lg font-bold text-gray-900">₹{car.total.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: CTA & Price Summary */}
                  <div className="w-full lg:w-[200px] bg-blue-50 p-6 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-l border-gray-100">
                    <div className="text-center w-full">
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-1">Total</div>
                        <div className="text-2xl font-bold text-gray-900">₹{car.total.toLocaleString()}</div>
                      </div>
                      
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md">
                        Book Now
                      </button>
                      
                      <div className="mt-4 space-y-1">
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-green-500" />
                          <span>Free cancellation</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-green-500" />
                          <span>Pay at counter</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredCars.length === 0 && (
                <div className="p-12 text-center bg-white rounded-lg shadow-sm">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-800">No cars found</h3>
                  <p className="text-gray-500 text-sm mb-4">Try adjusting your search or filters.</p>
                  <button 
                    onClick={() => {setSelectedSuppliers([]); setSelectedSeats([]); setSearchQuery('');}}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            {/* ADDITIONAL CATEGORIES (Only for Rental Mode) */}
            {searchMode === 'rental' && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Other categories you may like</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">SUV</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">From</span>
                        <span className="text-lg font-bold text-gray-900">₹10,680.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">From</span>
                        <span className="text-lg font-bold text-gray-900">₹12,125.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">From</span>
                        <span className="text-lg font-bold text-gray-900">₹12,335.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Pickup</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">From</span>
                        <span className="text-lg font-bold text-gray-900">₹12,355.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">From</span>
                        <span className="text-lg font-bold text-gray-900">₹12,455.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">From</span>
                        <span className="text-lg font-bold text-gray-900">₹12,555.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">EV</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">From</span>
                        <span className="text-lg font-bold text-gray-900">₹8,914.00 /day</span>
                      </div>
                      <div className="text-sm text-gray-600">Total ₹26,740.00</div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-600">From</span>
                        <span className="text-lg font-bold text-gray-900">₹8,514.00 /day</span>
                      </div>
                      <div className="text-sm text-gray-600">Total ₹26,540.00</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SHOW MORE BUTTON */}
            {filteredCars.length > 0 && (
              <div className="mt-6 flex justify-center pb-10">
                <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition flex items-center gap-2">
                  Show more results <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Tailwind Custom Styles for Hide Scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 768px) {
          .sticky {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};

export default Cab;