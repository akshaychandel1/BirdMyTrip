import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, MapPin, Star, Award, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

const TripBest = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  // --- MOCK DATA ---
  const popularDestinations = [
    { id: 1, name: "Florence", image: "https://images.unsplash.com/photo-1529307474898-e854236b67eb?w=600&h=400&fit=crop" },
    { id: 2, name: "Los Angeles", image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&h=400&fit=crop" },
    { id: 3, name: "Rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop" },
    { id: 4, name: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop" },
    { id: 5, name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?w=600&h=400&fit=crop" },
    { id: 6, name: "Kyoto", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop" },
    { id: 7, name: "Phuket", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&h=400&fit=crop" },
    { id: 8, name: "Barcelona", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop" }
  ];

  const categories = [
    {
      title: "Trip.Best Stays",
      items: [
        { name: "Luxury Hotels", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop" },
        { name: "Family Hotels", image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?w=600&h=350&fit=crop" },
        { name: "Scenic Hotels", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=350&fit=crop" },
        { name: "Cultural Hotels", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=350&fit=crop" }
      ]
    },
    {
      title: "Trip.Best Things to Do",
      items: [
        { name: "Best Things to Do", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=350&fit=crop" },
        { name: "Family-friendly Attractions", image: "https://images.unsplash.com/photo-1502086223501-681a981c2522?w=600&h=350&fit=crop" },
        { name: "Spring Outings", image: "https://images.unsplash.com/photo-1490750967868-58cb75069faf?w=600&h=350&fit=crop" },
        { name: "Cool Water Escapes", image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc452e?w=600&h=350&fit=crop" }
      ]
    }
  ];

  const tabs = ["Popular", "Asia", "Europe", "North America", "Oceania", "Africa", "South America"];

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans text-[#0F294D]">
      
      {/* --- HEADER --- */}
      <header className="bg-[#0F294D] text-white">
        <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">Trip.com</div>
            <div className="flex items-center gap-6 text-sm font-medium">
                <span className="opacity-80 hover:opacity-100 cursor-pointer">App</span>
                <span className="opacity-80 hover:opacity-100 cursor-pointer">Help</span>
                <span className="opacity-80 hover:opacity-100 cursor-pointer">Trips</span>
                <button className="bg-white text-blue-900 px-4 py-1.5 rounded hover:bg-gray-100 transition">Sign in / Register</button>
            </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <div className="relative h-[300px] w-full bg-gradient-to-r from-blue-900 to-blue-600 flex flex-col items-center justify-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1565619624098-e7d9d0b8f72c?w=1600&h=600&fit=crop" alt="Hero" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center mt-[-40px]">
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="text-yellow-400 text-6xl">🌿</div> {/* Placeholder for Laurel Wreath */}
                <h1 className="text-5xl font-bold text-white tracking-wide">Trip.Best</h1>
                <div className="text-yellow-400 text-6xl transform scale-x-[-1]">🌿</div>
            </div>
        </div>

        {/* Search Bar */}
        <div className="absolute -bottom-7 w-full max-w-[800px] px-4 z-20">
            <div className="bg-white rounded-lg shadow-lg p-2 flex items-center h-14">
                <Search className="w-5 h-5 text-gray-400 ml-3" />
                <input 
                    type="text" 
                    placeholder="Enter a destination" 
                    className="flex-1 px-4 outline-none text-gray-700 placeholder-gray-400 h-full"
                />
            </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-[1200px] mx-auto px-4 pt-16 pb-12">
        
        {/* SECTION 1: POPULAR DESTINATIONS */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">Popular Destinations</h2>
            
            {/* Tabs */}
            <div className="flex justify-center gap-8 mb-6 border-b border-gray-100 pb-2 overflow-x-auto">
                {tabs.map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 text-sm font-bold transition-colors whitespace-nowrap ${
                            activeTab === tab 
                            ? 'text-[#006CE4] border-b-2 border-[#006CE4]' 
                            : 'text-gray-500 hover:text-gray-800'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {popularDestinations.map(dest => (
                    <div key={dest.id} className="relative group cursor-pointer overflow-hidden rounded-lg h-[180px]">
                        <img 
                            src={dest.image} 
                            alt={dest.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                            {dest.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* SECTION 2: 2026 GLOBAL 100 */}
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-3">2026 GLOBAL 100</h2>
                <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed">
                    The 2026 Trip.Best list officially launched on November 7, 2025. Based on genuine customer reviews, year-round sales popularity, consistent quality assurance, and distinctive themes. It features global rankings spanning hotels, attractions, nightlife experiences, restaurants, and destinations worldwide.
                </p>
                <div className="flex justify-center gap-4 mt-4 text-sm font-medium text-blue-600">
                    <span className="cursor-pointer hover:underline">Global</span>
                    <span className="cursor-pointer hover:underline text-gray-500">Europe</span>
                    <span className="cursor-pointer hover:underline text-gray-500">Americas</span>
                    <span className="cursor-pointer hover:underline text-gray-500">Asia</span>
                </div>
            </div>

            {/* Reusable Category Sections */}
            {categories.map((cat, index) => (
                <div key={index} className="mb-10">
                    <h3 className="font-bold text-lg mb-4 text-gray-800">{cat.title}</h3>
                    <div className="relative group/slider">
                        
                        {/* Fake Slider Arrows */}
                        <button className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 opacity-0 group-hover/slider:opacity-100 transition">
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 opacity-0 group-hover/slider:opacity-100 transition">
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {cat.items.map((item, idx) => (
                                <div key={idx} className="relative rounded-lg overflow-hidden h-[140px] cursor-pointer group">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover transition duration-300 group-hover:scale-105" 
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                                    <div className="absolute bottom-3 left-3 font-bold text-white text-md shadow-sm">
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Nightlife (Single Example Layout) */}
             <div className="mb-10">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Trip.Best Nightlife</h3>
                <div className="w-full md:w-1/4 relative rounded-lg overflow-hidden h-[140px] cursor-pointer">
                    <img 
                        src="https://images.unsplash.com/photo-1514525253440-b393452e3383?w=600&h=350&fit=crop" 
                        className="w-full h-full object-cover" 
                        alt="Nightlife"
                    />
                     <div className="absolute bottom-3 left-3 font-bold text-white text-md">
                        Night Attractions
                    </div>
                </div>
             </div>

             {/* Restaurants */}
             <div className="mb-10">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Trip.Best Restaurants</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="relative rounded-lg overflow-hidden h-[140px] cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=350&fit=crop" className="w-full h-full object-cover" alt="Must-visit" />
                        <div className="absolute bottom-3 left-3 font-bold text-white text-md">Must-visit Restaurants</div>
                     </div>
                     <div className="relative rounded-lg overflow-hidden h-[140px] cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=350&fit=crop" className="w-full h-full object-cover" alt="Fine Dining" />
                        <div className="absolute bottom-3 left-3 font-bold text-white text-md">Fine Dining</div>
                     </div>
                </div>
             </div>

        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-white pt-10 pb-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
                <h4 className="font-bold text-gray-900 mb-4">Contact us</h4>
                <ul className="space-y-2 text-xs text-gray-600">
                    <li className="hover:text-blue-600 cursor-pointer">Customer Support</li>
                    <li className="hover:text-blue-600 cursor-pointer">Service Guarantee</li>
                    <li className="hover:text-blue-600 cursor-pointer">Website Feedback</li>
                </ul>
                <div className="flex gap-3 mt-4 text-gray-400">
                    <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-600"/>
                    <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400"/>
                    <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-600"/>
                </div>
            </div>
            <div>
                <h4 className="font-bold text-gray-900 mb-4">About</h4>
                <ul className="space-y-2 text-xs text-gray-600">
                    <li className="hover:text-blue-600 cursor-pointer">About Trip.com</li>
                    <li className="hover:text-blue-600 cursor-pointer">News</li>
                    <li className="hover:text-blue-600 cursor-pointer">Careers</li>
                    <li className="hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
                    <li className="hover:text-blue-600 cursor-pointer">Privacy Statement</li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-gray-900 mb-4">Other Services</h4>
                <ul className="space-y-2 text-xs text-gray-600">
                    <li className="hover:text-blue-600 cursor-pointer">Investor Relations</li>
                    <li className="hover:text-blue-600 cursor-pointer">Trip.com Rewards</li>
                    <li className="hover:text-blue-600 cursor-pointer">Affiliate Program</li>
                    <li className="hover:text-blue-600 cursor-pointer">List My Hotel</li>
                </ul>
            </div>
             <div>
                 <h4 className="font-bold text-gray-900 mb-4">Payment Methods</h4>
                 <div className="flex flex-wrap gap-2">
                     {/* Mock Card Icons */}
                     <div className="w-8 h-5 bg-gray-100 border rounded"></div>
                     <div className="w-8 h-5 bg-gray-100 border rounded"></div>
                     <div className="w-8 h-5 bg-gray-100 border rounded"></div>
                     <div className="w-8 h-5 bg-gray-100 border rounded"></div>
                 </div>
            </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 text-center border-t border-gray-100 pt-6">
            <p className="text-[10px] text-gray-500">Copyright © 2026 Trip.com Travel Singapore Pte. Ltd. All rights reserved.</p>
            <p className="text-[10px] text-gray-500">Site Operator: Trip.com Travel Singapore Pte. Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default TripBest;