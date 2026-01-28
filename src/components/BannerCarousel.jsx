import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BannerCarousel.css';

const banners = [
  {
    id: 1,
    title: "REPUBLIC DAY",
    highlight: "SALE",
    buttonText: "VIEW DEALS >",
    type: "republic",
  },
  {
    id: 2,
    title: "GO Thailand",
    highlight: "Hotel Up To 50% OFF",
    buttonText: "Book Now >",
    type: "thailand",
    badge: "EVERY WED",
  },
  {
    id: 3,
    title: "Trip Talks India",
    highlight: "SCAN HERE!",
    buttonText: "SUBSCRIBE HERE >",
    type: "telegram",
  },
  {
    id: 4,
    title: "FLIGHT DEALS",
    highlight: "SAVE UP TO 30%",
    buttonText: "CHECK NOW >",
    type: "flights",
  },
  {
    id: 5,
    title: "LUCKY DRAW",
    highlight: "WIN FREE TRIPS",
    buttonText: "ENTER NOW >",
    type: "lucky",
  }
];

const BannerCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 400; // Ek card ki width + gap
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="section-title">Exclusive Offers</h2>
      
      <div className="relative-wrapper">
        <button className="nav-btn left" onClick={() => scroll('left')}>
          <ChevronLeft size={24} />
        </button>

        <div className="banner-wrapper" ref={scrollRef}>
          {banners.map((banner) => (
            <div key={banner.id} className={`banner-card ${banner.type}`}>
              <div className="banner-content">
                <span className="brand">Bird My Trip</span>
                <h2 className="banner-title">{banner.title}</h2>
                <h1 className="banner-highlight">{banner.highlight}</h1>
                <button className="banner-btn">{banner.buttonText}</button>
              </div>
              
              <div className="banner-graphic">
                {banner.badge && <div className="promo-badge">{banner.badge}</div>}
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={() => scroll('right')}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BannerCarousel;