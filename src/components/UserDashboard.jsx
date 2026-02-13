import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, User, Briefcase, Shield, CreditCard, 
  MapPin, Plane, ChevronRight, Search, Settings,
  Calendar, TrendingDown, Globe, Smartphone, Mail,
  Lock, Eye, EyeOff, X, FileText, Headphones,
  Download, Clock, Star, CheckCircle, AlertCircle,
  BarChart3, Award, Gift, Users, HelpCircle, LogOut
} from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';

// Mock data for the dashboard
const mockFlights = [
  { id: 1, from: 'DEL', to: 'BOM', airline: 'IndiGo', date: '15 Mar 2026', price: '₹4,567', status: 'Upcoming', bookingId: 'BK20260315', passengers: 2 },
  { id: 2, from: 'BLR', to: 'DEL', airline: 'Air India', date: '22 Feb 2026', price: '₹6,899', status: 'Completed', bookingId: 'BK20260222', passengers: 1 },
  { id: 3, from: 'MAA', to: 'CCU', airline: 'SpiceJet', date: '10 Apr 2026', price: '₹3,245', status: 'Upcoming', bookingId: 'BK20260410', passengers: 3 },
  { id: 4, from: 'HYD', to: 'GOI', airline: 'Vistara', date: '05 Jan 2026', price: '₹5,432', status: 'Completed', bookingId: 'BK20260105', passengers: 2 },
];

const mockPriceAlerts = [
  { id: 1, route: 'DEL → BOM', targetPrice: '₹4,000', currentPrice: '₹4,567', active: true, created: '2 days ago' },
  { id: 2, route: 'BLR → GOI', targetPrice: '₹3,500', currentPrice: '₹4,200', active: true, created: '1 week ago' },
  { id: 3, route: 'MAA → DEL', targetPrice: '₹5,000', currentPrice: '₹4,800', active: false, created: '3 weeks ago' },
];

const mockDevices = [
  { id: 1, name: 'iPhone 14 Pro', os: 'iOS 17.2', location: 'New Delhi', lastActive: 'Now' },
  { id: 2, name: 'MacBook Pro', os: 'macOS 14.1', location: 'Mumbai', lastActive: '2 hours ago' },
  { id: 3, name: 'Samsung Galaxy S23', os: 'Android 14', location: 'Bangalore', lastActive: '1 day ago' },
];

const mockTransactions = [
  { id: 1, type: 'Flight Booking', amount: '₹4,567', date: '15 Feb 2026', status: 'Completed' },
  { id: 2, type: 'Coin Purchase', amount: '₹999', date: '10 Feb 2026', status: 'Completed' },
  { id: 3, type: 'Refund', amount: '₹2,500', date: '05 Feb 2026', status: 'Processing' },
];

const UserDashboard = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [userData, setUserData] = useState({
    name: user?.name || 'Akshay Kumar',
    email: user?.email || 'akshaykumar200221@gmail.com',
    phone: '+91 98765 43210',
    verified: true,
    memberSince: 'Feb 2026',
    nationality: 'Indian',
    coins: 1250,
    tier: 'Premium',
    alerts: 2,
    bookings: 4
  });

  const [editMode, setEditMode] = useState(false);
  const [tempUserData, setTempUserData] = useState({});
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'Logged in', device: 'iPhone 14 Pro', time: 'Just now' },
    { id: 2, action: 'Created price alert', details: 'DEL → BOM', time: '2 days ago' },
    { id: 3, action: 'Booked flight', details: 'BLR → DEL', time: '1 week ago' },
  ]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navigationItems = [
    { id: 'Dashboard', icon: BarChart3, color: 'text-blue-600' },
    { id: 'Bookings', icon: Briefcase, color: 'text-blue-600' },
    { id: 'Price Alerts', icon: Bell, color: 'text-blue-600' },
    { id: 'Profile', icon: User, color: 'text-blue-600' },
    { id: 'Security', icon: Shield, color: 'text-blue-600' },
    { id: 'Settings', icon: Settings, color: 'text-blue-600' },
  ];

  useEffect(() => {
    setTempUserData({ ...userData });
  }, [editMode]);

  const handleEdit = () => setEditMode(true);
  const handleSave = () => {
    setUserData(tempUserData);
    setEditMode(false);
  };
  const handleCancel = () => {
    setEditMode(false);
    setTempUserData({ ...userData });
  };
  const handleInputChange = (field, value) => {
    setTempUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleDeleteAlert = (id) => {
    console.log('Delete alert:', id);
  };

  const handleDownloadInvoice = (bookingId) => {
    console.log('Download invoice for:', bookingId);
    alert(`Downloading invoice for ${bookingId}`);
  };

  const toggle2FA = () => setIs2FAEnabled(!is2FAEnabled);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, {userData.name}! 👋</h1>
                  <p className="text-blue-100 mt-2">Here's what's happening with your account today</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-3">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-sm">Member Since</span>
                    <div className="font-semibold">{userData.memberSince}</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-sm">Tier</span>
                    <div className="font-semibold flex items-center gap-1">
                      <Award size={16} />
                      {userData.tier}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Travel Coins</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-2">🪙 {userData.coins.toLocaleString()}</h3>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Gift className="text-blue-600" size={24} />
                  </div>
                </div>
                <button className="text-blue-600 text-sm font-semibold mt-4 hover:underline">
                  Redeem Now →
                </button>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Active Bookings</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-2">{mockFlights.filter(f => f.status === 'Upcoming').length}</h3>
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-green-600" size={24} />
                  </div>
                </div>
                <button className="text-blue-600 text-sm font-semibold mt-4 hover:underline">
                  View All →
                </button>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Price Alerts</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-2">{mockPriceAlerts.filter(a => a.active).length}</h3>
                  </div>
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Bell className="text-orange-600" size={24} />
                  </div>
                </div>
                <button className="text-blue-600 text-sm font-semibold mt-4 hover:underline">
                  Manage →
                </button>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Savings</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-2">₹2,150</h3>
                  </div>
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    <TrendingDown className="text-purple-600" size={24} />
                  </div>
                </div>
                <p className="text-green-600 text-xs font-semibold mt-2">+12.5% from last month</p>
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-4 border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <Plane className="text-blue-600" size={20} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Book Flight</span>
                  </button>
                  <button className="p-4 border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <Bell className="text-blue-600" size={20} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Set Alert</span>
                  </button>
                  <button className="p-4 border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <Download className="text-blue-600" size={20} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Export Data</span>
                  </button>
                  <button className="p-4 border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <Headphones className="text-blue-600" size={20} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Support</span>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
                  <button className="text-blue-600 text-sm font-semibold hover:underline">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Clock className="text-blue-600" size={14} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{activity.action}</p>
                          <p className="text-gray-500 text-sm">{activity.details}</p>
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'Bookings':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Flight Bookings</h2>
                  <p className="text-gray-500 text-sm mt-1">All your flight reservations in one place</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Plane size={18} />
                  New Booking
                </button>
              </div>
              
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">Flight</th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">Date</th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">Passengers</th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">Price</th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockFlights.map((flight) => (
                        <tr key={flight.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-gray-800">{flight.from} → {flight.to}</div>
                              <div className="text-gray-500 text-sm">{flight.airline} • {flight.bookingId}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={14} className="text-gray-400" />
                              {flight.date}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-1">
                              <Users size={14} className="text-gray-400" />
                              {flight.passengers} Passenger{flight.passengers > 1 ? 's' : ''}
                            </div>
                          </td>
                          <td className="py-4 px-4 font-bold text-gray-800">{flight.price}</td>
                          <td className="py-4 px-4">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                              flight.status === 'Upcoming' 
                                ? 'bg-blue-100 text-blue-600'
                                : 'bg-green-100 text-green-600'
                            }`}>
                              {flight.status === 'Upcoming' ? 'Upcoming' : 'Completed'}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => handleDownloadInvoice(flight.bookingId)}
                                className="text-blue-600 hover:text-blue-800 p-2"
                                title="Download Invoice"
                              >
                                <Download size={16} />
                              </button>
                              <button className="text-gray-600 hover:text-gray-800 p-2" title="View Details">
                                <Eye size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {mockFlights.length === 0 && (
                  <div className="text-center py-12">
                    <div className="bg-blue-50 p-6 rounded-full inline-flex mb-4">
                      <Plane className="text-blue-400" size={48} />
                    </div>
                    <h4 className="text-gray-800 font-semibold text-lg">No bookings yet!</h4>
                    <p className="text-gray-500 mt-2 max-w-md mx-auto">
                      Start planning your next trip. Book your first flight and get 500 bonus coins!
                    </p>
                    <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md">
                      Search Flights
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Transaction History</h2>
              <div className="space-y-3">
                {mockTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        transaction.type === 'Flight Booking' ? 'bg-blue-100' :
                        transaction.type === 'Coin Purchase' ? 'bg-green-100' :
                        'bg-yellow-100'
                      }`}>
                        <CreditCard className={
                          transaction.type === 'Flight Booking' ? 'text-blue-600' :
                          transaction.type === 'Coin Purchase' ? 'text-green-600' :
                          'text-yellow-600'
                        } size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{transaction.type}</p>
                        <p className="text-gray-500 text-sm">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold ${
                        transaction.type === 'Refund' ? 'text-green-600' : 'text-gray-800'
                      }`}>
                        {transaction.type === 'Refund' ? '+' : ''}{transaction.amount}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        transaction.status === 'Completed' ? 'bg-green-100 text-green-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'Price Alerts':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Price Alerts</h2>
                  <p className="text-gray-500 text-sm mt-1">Get notified when flight prices drop</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  + Create Alert
                </button>
              </div>

              <div className="space-y-4">
                {mockPriceAlerts.map((alert) => (
                  <div key={alert.id} className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Bell className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{alert.route}</h4>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="text-sm">
                              <span className="text-gray-500">Target: </span>
                              <span className="font-medium text-gray-800">{alert.targetPrice}</span>
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Current: </span>
                              <span className="font-medium text-gray-800">{alert.currentPrice}</span>
                            </div>
                            <div className="text-sm text-gray-500">
                              Created {alert.created}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${alert.active ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
                          <span className={`text-sm ${alert.active ? 'text-green-600' : 'text-gray-500'}`}>
                            {alert.active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        <button 
                          onClick={() => handleDeleteAlert(alert.id)}
                          className="text-gray-400 hover:text-red-500 p-1"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 border-2 border-dashed border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 rounded-xl py-4 font-medium transition-colors flex items-center justify-center gap-2">
                + Add New Price Alert
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-gray-600 text-sm font-medium">Total Alerts</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">{mockPriceAlerts.length}</h3>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-gray-600 text-sm font-medium">Active Alerts</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">{mockPriceAlerts.filter(a => a.active).length}</h3>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-gray-600 text-sm font-medium">Average Savings</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">₹1,245</h3>
              </div>
            </div>
          </div>
        );

      case 'Profile':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Information */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Profile Information</h2>
                    <p className="text-gray-500 text-sm mt-1">Update your personal details</p>
                  </div>
                  {editMode ? (
                    <div className="flex gap-2">
                      <button 
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                      >
                        Save Changes
                      </button>
                      <button 
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={handleEdit}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      {editMode ? (
                        <input
                          type="text"
                          value={tempUserData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          placeholder="Enter your full name"
                        />
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="font-medium text-gray-800">{userData.name}</div>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-gray-800">{userData.email}</div>
                          <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                            <CheckCircle size={14} />
                            Verified
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      {editMode ? (
                        <input
                          type="tel"
                          value={tempUserData.phone || ''}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          placeholder="+91 98765 43210"
                        />
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="font-medium text-gray-800">{userData.phone || 'Not provided'}</div>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                      {editMode ? (
                        <select
                          value={tempUserData.nationality}
                          onChange={(e) => handleInputChange('nationality', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        >
                          <option value="">Select Nationality</option>
                          <option value="Indian">Indian</option>
                          <option value="American">American</option>
                          <option value="British">British</option>
                          <option value="Canadian">Canadian</option>
                          <option value="Australian">Australian</option>
                        </select>
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-2">
                          <Globe size={16} className="text-gray-400" />
                          <span className="font-medium text-gray-800">{userData.nationality || 'Not specified'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-800 mb-4">Account Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Member Since</span>
                    <span className="font-medium">{userData.memberSince}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Account Tier</span>
                    <span className="font-medium text-blue-600 flex items-center gap-1">
                      <Award size={14} />
                      {userData.tier}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Travel Coins</span>
                    <span className="font-medium">🪙 {userData.coins.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Email Verified</span>
                    <span className="text-green-600 font-semibold">Yes</span>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our 24/7 support team is ready to assist you with any questions.
                </p>
                <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        );

      case 'Security':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Security Settings</h2>
              
              <div className="space-y-4">
                {/* Password */}
                <div className="p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Password</h4>
                      <p className="text-gray-500 text-sm">Last changed 2 months ago</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Change Password
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value="••••••••••••"
                      readOnly
                      className="w-full p-3 bg-gray-50 rounded-lg pr-12 font-mono"
                    />
                    <button 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* 2FA */}
                <div className="p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">Two-Factor Authentication</h4>
                      <p className="text-gray-500 text-sm">Add an extra layer of security to your account</p>
                    </div>
                    <button 
                      onClick={toggle2FA}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        is2FAEnabled ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span 
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          is2FAEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  {is2FAEnabled && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-blue-700 text-sm">
                        ✅ 2FA is now enabled. You'll need to verify login attempts with your authenticator app.
                      </p>
                    </div>
                  )}
                </div>

                {/* Active Sessions */}
                <div className="p-4 border border-gray-200 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Active Sessions</h4>
                      <p className="text-gray-500 text-sm">Devices where you're currently logged in</p>
                    </div>
                    <button className="text-blue-600 font-medium hover:underline text-sm">
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {mockDevices.map((device) => (
                      <div key={device.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                            <Smartphone className="text-gray-600" size={18} />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{device.name}</p>
                            <p className="text-gray-500 text-sm">{device.os} • {device.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">{device.lastActive}</div>
                          {device.id === 1 && (
                            <div className="text-xs text-green-600 font-medium mt-1">Current Session</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Security Tips */}
            <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-3">Security Tips</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" />
                  Use a strong, unique password
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" />
                  Enable two-factor authentication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" />
                  Regularly review active sessions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" />
                  Keep your recovery email updated
                </li>
              </ul>
            </div>
          </div>
        );

      case 'Settings':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Bell className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Notifications</h4>
                        <p className="text-gray-500 text-sm">Manage email and push notifications</p>
                      </div>
                    </div>
                    <button className="text-blue-600 font-medium hover:underline">
                      Configure →
                    </button>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Globe className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Language & Region</h4>
                        <p className="text-gray-500 text-sm">Set your preferred language</p>
                      </div>
                    </div>
                    <button className="text-blue-600 font-medium hover:underline">
                      Change →
                    </button>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Download className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Data & Privacy</h4>
                        <p className="text-gray-500 text-sm">Download your data or delete account</p>
                      </div>
                    </div>
                    <button className="text-blue-600 font-medium hover:underline">
                      Manage →
                    </button>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <HelpCircle className="text-orange-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Help & Support</h4>
                        <p className="text-gray-500 text-sm">FAQs and contact information</p>
                      </div>
                    </div>
                    <button className="text-blue-600 font-medium hover:underline">
                      Get Help →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-50 md:hidden">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </div>
          </button>
          <h1 className="text-lg font-semibold text-gray-800">{activeTab}</h1>
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-2 border-blue-200 font-semibold"
            >
              {getInitials(userData.name)}
            </button>
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                {notifications}
              </span>
            )}
            
            {/* Mobile Profile Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="font-medium text-gray-800">{userData.name}</p>
                  <p className="text-sm text-gray-500 truncate">{userData.email}</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('Profile');
                    setShowProfileMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                >
                  <User size={16} />
                  Profile
                </button>
                <button
                  onClick={() => {
                    setActiveTab('Settings');
                    setShowProfileMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                >
                  <Settings size={16} />
                  Settings
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Sidebar */}
        {showMobileMenu && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setShowMobileMenu(false)}
            ></div>
            <div className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                    {getInitials(userData.name)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{userData.name}</div>
                    <div className="text-sm text-gray-500">{userData.email}</div>
                  </div>
                </div>
              </div>
              <nav className="mt-4 px-4 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setShowMobileMenu(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.id 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.id}</span>
                    {activeTab === item.id && (
                      <ChevronRight size={16} className="ml-auto" />
                    )}
                  </button>
                ))}
                
                {/* Mobile Logout Button */}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-red-600 hover:bg-red-50 mt-4 border-t border-gray-200 pt-4"
                >
                  <LogOut size={20} />
                  <span className="font-medium">Logout</span>
                </button>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed h-screen">
          <div className="p-6 border-b border-gray-200">
            <div className="text-xl font-bold text-blue-600">USER DASHBOARD</div>
          </div>
          
          <nav className="mt-4 px-4 space-y-1 flex-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                  activeTab === item.id 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.id}</span>
                {activeTab === item.id && (
                  <ChevronRight size={16} className="ml-auto" />
                )}
              </button>
            ))}
          </nav>
          

        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64">
          {/* Desktop Header */}
          <header className="bg-white border-b border-gray-200 p-6 sticky top-0 z-10 hidden md:flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{activeTab}</h1>
              <p className="text-gray-500 text-sm mt-1">
                Manage your travel preferences and account settings
              </p>
            </div>
            <div className="flex items-center gap-4">
              
              {/* Desktop Profile Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-2 border-white shadow-sm font-bold text-lg hover:border-blue-300 transition-colors"
                >
                  {getInitials(userData.name)}
                </button>
                
                {showProfileMenu && (
                  <div className="absolute right-0 top-14 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-medium text-gray-800">{userData.name}</p>
                      <p className="text-sm text-gray-500 truncate">{userData.email}</p>
                      <p className="text-xs text-blue-600 mt-1">Member since {userData.memberSince}</p>
                    </div>
                    <button
                      onClick={() => {
                        setActiveTab('Profile');
                        setShowProfileMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <User size={16} />
                      My Profile
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('Settings');
                        setShowProfileMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Settings size={16} />
                      Account Settings
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('Security');
                        setShowProfileMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Shield size={16} />
                      Security
                    </button>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;