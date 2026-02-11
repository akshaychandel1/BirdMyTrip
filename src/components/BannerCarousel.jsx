import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Tag, Plane, Gift, Globe } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: "REPUBLIC DAY",
    highlight: "SALE",
    description: "Exclusive discounts on domestic travel packages",
    buttonText: "VIEW DEALS",
    type: "republic",
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-gradient-to-br from-red-500 to-orange-500",
    badgeColor: "from-red-400 to-orange-500",
  },
  {
    id: 2,
    title: "GO Thailand",
    highlight: "Hotel Up To 50% OFF",
    description: "Weekly deals on luxury accommodations",
    buttonText: "BOOK NOW",
    type: "thailand",
    badge: "EVERY WED",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    badgeColor: "from-blue-400 to-blue-600",
  },
  {
    id: 3,
    title: "Trip Talks India",
    highlight: "SCAN HERE!",
    description: "Join our community for travel tips & exclusive offers",
    buttonText: "SUBSCRIBE",
    type: "telegram",
    icon: <Tag className="w-5 h-5" />,
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    badgeColor: "from-teal-400 to-emerald-500",
  },
  {
    id: 4,
    title: "FLIGHT DEALS",
    highlight: "SAVE UP TO 30%",
    description: "Limited time offers on international flights",
    buttonText: "CHECK NOW",
    type: "flights",
    icon: <Plane className="w-5 h-5" />,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    badgeColor: "from-purple-400 to-purple-600",
  },
  {
    id: 5,
    title: "LUCKY DRAW",
    highlight: "WIN FREE TRIPS",
    description: "Participate and win exciting travel prizes",
    buttonText: "ENTER NOW",
    type: "lucky",
    icon: <Gift className="w-5 h-5" />,
    color: "bg-gradient-to-br from-amber-500 to-yellow-600",
    badgeColor: "from-yellow-400 to-amber-500",
  }
];

const BannerCarousel = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const updateArrowVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 380;
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? Math.max(0, scrollLeft - cardWidth)
        : scrollLeft + cardWidth;
      
      scrollRef.current.scrollTo({ 
        left: scrollTo, 
        behavior: 'smooth' 
      });
      
      setTimeout(updateArrowVisibility, 300);
    }
  };

  const handleIndicatorClick = (index) => {
    if (scrollRef.current) {
      const cardWidth = 380;
      scrollRef.current.scrollTo({ 
        left: index * cardWidth, 
        behavior: 'smooth' 
      });
      setCurrentIndex(index);
    }
  };

  // Auto-rotation effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        if (showRightArrow) {
          scroll('right');
        } else {
          handleIndicatorClick(0);
        }
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [showRightArrow, isAutoPlaying]);

  useEffect(() => {
    updateArrowVisibility();
    window.addEventListener('resize', updateArrowVisibility);
    return () => window.removeEventListener('resize', updateArrowVisibility);
  }, []);

  const handleScroll = () => {
    updateArrowVisibility();
    if (scrollRef.current) {
      const cardWidth = 380;
      const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
      setCurrentIndex(Math.min(index, banners.length - 1));
    }
  };

  return (
    <section className="relative py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-blue-200 active:scale-95 ${
              !showLeftArrow ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onClick={() => scroll('left')}
            aria-label="Previous offers"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button 
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-blue-200 active:scale-95 ${
              !showRightArrow ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onClick={() => scroll('right')}
            aria-label="Next offers"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Carousel Cards - Scrollbar Hidden */}
          <div 
            className="flex gap-4 md:gap-6 overflow-x-hidden scroll-smooth"
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="flex-none w-[320px] md:w-[360px]"
              >
                <article 
                  className={`relative h-[340px] ${banner.color} rounded-2xl md:rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-48 h-48 -translate-y-24 translate-x-24 bg-white rounded-full"></div>
                  </div>

                  {/* Badge */}
                  {banner.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`bg-gradient-to-r ${banner.badgeColor} text-white px-3 py-1.5 rounded-full font-bold text-xs shadow-md`}>
                        {banner.badge}
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <div className="text-white">
                      {banner.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between pt-12">
                    <div>
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-white/80 tracking-wider">BIRD MY TRIP</span>
                        <span className="text-[10px] text-white/60 ml-1">• Premium</span>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        {banner.title}
                      </h3>
                      
                      <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                        {banner.highlight}
                      </h2>
                      
                      <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4 max-w-[240px]">
                        {banner.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <button 
                        className="group/btn flex items-center gap-1.5 bg-white text-gray-900 px-4 md:px-5 py-2 md:py-2.5 rounded-full font-semibold text-sm shadow-md transition-all duration-200 hover:gap-3 hover:shadow-lg active:scale-95"
                        aria-label={`${banner.buttonText} - ${banner.title}`}
                      >
                        <span>{banner.buttonText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                      </button>
                      
                      <div className="text-white/50 text-[10px]">
                        <div className="flex items-center gap-1">
                          <span>Limited Offer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;