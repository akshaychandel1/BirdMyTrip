import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  HelpCircle,
  Shield,
  Users,
  Briefcase,
  FileText,
  BookOpen,
  Home,
  Plane,
  Bus,
  Car,
  Package,
  Train,
  Ship,
  Heart,
  ShieldCheck,
  MessageCircle,
  XCircle,
  Newspaper
} from "lucide-react";
import logo from "../assets/logo-tr.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-800 mt-20 border-t border-gray-200 rounded-t-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              
               <Link to="/">
                <img 
                  src={logo} 
                  alt="BirdMyTrip Logo" 
                  className="w-56 h-auto rounded-lg object-cover hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted travel partner for hotels, flights, holiday packages, 
              cabs and more. Experience seamless travel planning.
            </p>
            <div className="flex space-x-3 pt-4">
              {[
                { icon: Facebook, color: "hover:bg-blue-100 text-blue-600", label: "Facebook" },
                { icon: Twitter, color: "hover:bg-blue-100 text-blue-400", label: "Twitter" },
                { icon: Instagram, color: "hover:bg-pink-100 text-pink-600", label: "Instagram" },
                { icon: Linkedin, color: "hover:bg-blue-100 text-blue-700", label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-9 h-9 rounded-full bg-gray-100 border border-gray-200 ${social.color} transition-all duration-300 flex items-center justify-center`}
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="text-gray-500 text-sm flex items-center pt-4">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              © {currentYear} BirdMyTrip. All rights reserved.
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-600 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Hotels", icon: Home, color: "text-blue-500" },
                { name: "Flights", icon: Plane, color: "text-blue-500" },
                { name: "Bus", icon: Bus, color: "text-blue-500" },
                { name: "Cab", icon: Car, color: "text-blue-500" },
                { name: "Holiday", icon: Package, color: "text-blue-500" },
                // { name: "Train", icon: Train, color: "text-blue-500" },
                { name: "Cruise", icon: Ship, color: "text-blue-500" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center group hover:bg-blue-50 px-2 py-1.5 rounded-md"
                  >
                    <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-600 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-emerald-500 after:to-green-400">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Customer Support", icon: Phone, color: "text-emerald-500" },
                { name: "FAQ", icon: HelpCircle, color: "text-emerald-500" },
                { name: "Cancellation", icon: XCircle, color: "text-emerald-500" },
                { name: "Refund Policy", icon: ShieldCheck, color: "text-emerald-500" },
                { name: "Contact Us", icon: Mail, color: "text-emerald-500" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={`/support/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-emerald-600 transition-all duration-200 flex items-center group hover:bg-emerald-50 px-2 py-1.5 rounded-md"
                  >
                    <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-600 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-400">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", icon: Users, color: "text-purple-500" },
                { name: "Careers", icon: Briefcase, color: "text-purple-500" },
                { name: "Privacy Policy", icon: Shield, color: "text-purple-500" },
                { name: "Terms & Conditions", icon: FileText, color: "text-purple-500" },
                { name: "Contact Us", icon: BookOpen, color: "text-purple-500" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={`/company/${item.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                    className="text-gray-600 hover:text-purple-600 transition-all duration-200 flex items-center group hover:bg-purple-50 px-2 py-1.5 rounded-md"
                  >
                    <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

       
       

      
      </div>
    </footer>
  );
};

export default Footer;