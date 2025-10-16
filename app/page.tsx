"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReservationModal from "../components/ReservationModal";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Home() {
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [showReservationModal, setShowReservationModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollDown(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPromotion = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('promotion');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setShowScrollDown(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openReservationModal = () => setShowReservationModal(true);
  const closeReservationModal = () => setShowReservationModal(false);

  const navItems = ['reservation', 'promotion', 'popular', 'about'];
  
  const heroImages = [
    { 
      src: "/Bay-Sach-Morn.jpg", 
      alt: "Bay Sach Morn", 
      position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", 
      size: "w-96 h-64 md:w-[450px] md:h-[300px]", 
      z: "z-10", 
      bgColor: "#347928", 
      textColor: "text-white",
      description: "A traditional Cambodian soup featuring tender pork ribs simmered in aromatic herbs and spices, served with fresh vegetables."
    },
    { 
      src: "/Bay-Sach-Jruk.jpg", 
      alt: "Bay Sach Jruk", 
      position: "-top-8 -right-8", 
      size: "w-64 h-44 md:w-72 md:h-52", 
      z: "z-20", 
      bgColor: "#F9C100", 
      textColor: "text-gray-800",
      description: "Hearty chicken soup with lemongrass, ginger, and local herbs - a perfect comfort food that warms the soul."
    },
    { 
      src: "/Kuy-Teav.jpg", 
      alt: "Kuy Teav", 
      position: "-bottom-8 -left-8", 
      size: "w-64 h-44 md:w-72 md:h-52", 
      z: "z-20", 
      bgColor: "#F9C100", 
      textColor: "text-gray-800",
      description: "Classic Cambodian rice noodle soup with pork, shrimp, and fresh herbs - our most beloved breakfast dish."
    }
  ];

  const promotionItems = [
    { src: "/drink.jpg", alt: "Fresh Drink", label: "Fresh Drink", discount: "25%" },
    { src: "/Fresh Salad.jpg", alt: "Fresh Salad", label: "Fresh Salad", discount: "30%" },
    { src: "/Kuy-Teav.jpg", alt: "Noodle Soup", label: "Noodle Soup", discount: "20%" },
    { src: "/Hot Pot.jpg", alt: "Hot Pot", label: "Hot Pot", discount: "40%" }
  ];

  const restaurantImages = [
    { src: "/restaurant.jpg", alt: "Restaurant garden dining area", position: "top-12 left-8" },
    { src: "/restaurant2.jpg", alt: "Restaurant indoor dining area", position: "bottom-12 right-8" }
  ];

  const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaTiktok];

  return (
    <div className="min-h-screen bg-white overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-6">
        <div className="font-bold text-xl md:text-2xl">
          <span className="text-yellow-400">Chaom Chau</span>
          <span className="text-gray-800 ml-1">Restaurant</span>
        </div>
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          {navItems.map((section) => (
            <a 
              key={section}
              href={`#${section}`} 
              className="text-gray-800 hover:text-yellow-400 transition-colors font-medium capitalize"
              onClick={(e) => handleNavClick(e, section)}
            >
              {section === 'about' ? 'About Us' : section}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 md:px-12 lg:px-20 py-8 md:py-16 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full h-full">
          <div className="flex-1 max-w-2xl flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              <div className="text-gray-800 whitespace-nowrap">Looking for the ideal</div>
              <div className="text-yellow-400 whitespace-nowrap">Place to enjoy a meal</div>
              <div className="text-gray-800 whitespace-nowrap">With family and friends?</div>
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
              Discover a cozy, welcoming restaurant that's perfect for every occasion—whether it's a special celebration or just catching up over great food.
            </p>
          </div>

          <div className="flex-1 relative min-h-[600px] lg:min-h-[700px] w-full max-w-3xl">
            {heroImages.map((dish, index) => (
              <div key={index} className={`absolute ${dish.position} ${dish.size} ${dish.z} group cursor-pointer`}>
                <div className="relative w-full h-full rounded-3xl border-4 border-yellow-400 overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl">
                  <Image src={dish.src} alt={dish.alt} fill className="object-cover transition-transform duration-500" />
                  
                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <div className="text-center text-white">
                      <h3 className="text-lg md:text-xl font-bold mb-2">{dish.alt}</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Original label - fades out on hover */}
                  <div 
                    className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 ${dish.textColor} px-4 py-1 rounded-full text-sm font-semibold shadow-xl transition-opacity duration-300 group-hover:opacity-0`} 
                    style={{ backgroundColor: dish.bgColor }}
                  >
                    {dish.alt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Promotion Section */}
      <section id="promotion" className="h-screen px-6 md:px-12 lg:px-20 bg-white flex flex-col justify-center">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-yellow-400">Special Promotion</span>
                <span className="text-gray-900"> for Up Coming </span>
                <span className="text-yellow-400">Water Festival</span>
              </h2>
            </div>
            <div className="flex-1 relative h-[280px] w-full">
              <div className="bg-white rounded-2xl shadow-lg p-4 overflow-hidden">
                <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[240px] transform -rotate-12 translate-y-2">
                  {promotionItems.map((item, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
                      <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      
                      {/* Continuous sliding overlay with discount */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/90 to-orange-500/90 slide-overlay">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                          <div className="text-2xl font-bold mb-1">{item.discount}</div>
                          <div className="text-xs font-medium uppercase tracking-wide">OFF</div>
                          <div className="text-sm font-medium mt-1 text-center px-2">
                            {item.label}
                          </div>
                        </div>
                      </div>
                      
                      {/* Original caption */}
                      <div className="absolute bottom-2 left-2 bg-yellow-400 bg-opacity-90 px-2 py-1 rounded text-gray-600 font-medium">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Dishes */}
        <div id="popular">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gray-900">Popular</span>
              <span className="text-yellow-400"> Dishes</span>
            </h2>
            <a href="#" className="border-2 border-yellow-400 text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 hover:text-white transition-colors duration-300 text-sm">
              Show more
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-2 border-yellow-400 rounded-3xl p-4 flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                <div className="relative h-40 mb-4 rounded-2xl overflow-hidden">
                  <Image src="/Bay-Sach-Morn.jpg" alt="Bay Sach Morn" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Bay Sach Morn</h3>
                <p className="text-gray-500 text-sm mb-4 flex-grow">
                  Bay Sach Morn is a traditional Cambodian dish that offers a delightful blend of flavors and textures, showcasing the essence of Khmer cuisine.
                </p>
                <button className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-full w-full hover:bg-yellow-500 transition-colors duration-300 text-sm">
                  Ingredients
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-24 bg-gray-50 overflow-hidden" id="reservation">
        <div className="relative h-[600px] w-full flex items-center justify-center">
          <div className="relative w-full max-w-7xl h-full mx-auto px-6">
            {restaurantImages.map((image, index) => (
              <div key={index} className={`absolute ${image.position} w-[45%] h-[45%] rounded-3xl overflow-hidden shadow-xl group perspective-1000`}>
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                  {/* Front Side - Original Image */}
                  <div className="absolute inset-0 backface-hidden">
                    <Image src={image.src} alt={image.alt} fill className="object-cover rounded-3xl" />
                  </div>
                  {/* Back Side - Alternative Image */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <Image 
                      src={index === 0 ? "/restaurant2.jpg" : "/restaurant3.jpg"} 
                      alt={index === 0 ? "Restaurant interior view" : "Restaurant night view"} 
                      fill 
                      className="object-cover rounded-3xl" 
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute top-21 right-32 z-10 flex flex-col items-center space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-black">Reservations</h2>
              <button 
                onClick={openReservationModal}
                className="bg-yellow-400 text-black font-semibold py-4 px-8 rounded-xl text-base hover:bg-yellow-500 transition-colors shadow-lg"
              >
                Book Now
              </button>
            </div>

            <div className="absolute bottom-20 left-16 z-10 max-w-md">
              <p className="text-gray-800 text-lg font-medium leading-relaxed bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
                Experience authentic Cambodian cuisine in our beautiful dining spaces. From our lush garden terrace to our elegant indoor seating, every corner tells a story of tradition and hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white" id="about">
        <div className="px-6 md:px-12 lg:px-20">
          <hr className="border-t-4 border-yellow-400" />
          <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-3xl mb-4">
                <span className="text-yellow-400">Chaom Chau</span>
                <span className="text-gray-900 ml-1">Restaurant</span>
              </h2>
              <p className="text-gray-600 max-w-md mb-6">
                where traditional recipes meet fresh, local ingredients. Enjoy a cozy, welcoming atmosphere perfect for family gatherings, casual dinners, or a night out with friends.
              </p>
              <div className="flex space-x-8">
                {navItems.map((section) => (
                  <a 
                    key={section}
                    href={`#${section}`} 
                    className="text-gray-800 hover:text-yellow-400 font-medium capitalize" 
                    onClick={(e) => handleNavClick(e, section)}
                  >
                    {section === 'about' ? 'About Us' : section}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Contact us through Email</h3>
              <div className="flex items-center border-2 border-yellow-400 rounded-full p-1 w-full max-w-md bg-white">
                <span className="text-gray-500 px-4 truncate">chaomchau168@gmail.com</span>
                <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full ml-auto flex-shrink-0 hover:bg-yellow-500">
                  Email now
                </button>
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-yellow-400" />
          <div className="py-6 flex justify-between items-center text-sm">
            <div className="flex space-x-6 text-gray-600">
              <a href="#" className="hover:text-gray-900">Terms & Conditions</a>
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            </div>
            <div className="flex space-x-4">
              {socialIcons.map((Icon, index) => (
                <a key={index} href="#" className="text-gray-600 hover:text-yellow-400 transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <ReservationModal 
        isOpen={showReservationModal} 
        onClose={closeReservationModal} 
      />

      {showScrollDown && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300">
          <button onClick={scrollToPromotion} aria-label="Scroll down" className="focus:outline-none">
            <div className="animate-bounce bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}