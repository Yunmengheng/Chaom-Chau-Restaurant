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
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY < 50) {
        setShowScrollDown(true);
      } else {
        setShowScrollDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPromotion = (e: React.MouseEvent) => {
    e.preventDefault();
    const promotionSection = document.getElementById('promotion');
    if (promotionSection) {
      promotionSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setShowScrollDown(false);
    }
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

  const openReservationModal = () => {
    setShowReservationModal(true);
  };

  const closeReservationModal = () => {
    setShowReservationModal(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-6">
        <div className="font-bold text-xl md:text-2xl">
          <span className="text-yellow-400">Chaom Chau</span>
          <span className="text-gray-800 ml-1">Restaurant</span>
        </div>
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          <a 
            href="#reservation" 
            className="text-gray-800 hover:text-yellow-400 transition-colors font-medium"
            onClick={(e) => handleNavClick(e, 'reservation')}
          >
            Reservation
          </a>
          <a 
            href="#promotion" 
            className="text-gray-800 hover:text-yellow-400 transition-colors font-medium"
            onClick={(e) => handleNavClick(e, 'promotion')}
          >
            Promotion
          </a>
          <a 
            href="#popular" 
            className="text-gray-800 hover:text-yellow-400 transition-colors font-medium"
            onClick={(e) => handleNavClick(e, 'popular')}
          >
            Popular
          </a>
          <a 
            href="#about" 
            className="text-gray-800 hover:text-yellow-400 transition-colors font-medium"
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About Us
          </a>
        </div>
      </nav>

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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 md:w-[450px] md:h-[300px] z-10">
              <div className="relative w-full h-full rounded-3xl border-4 border-yellow-400 overflow-hidden shadow-2xl">
                <Image src="/Bay-Sach-Morn.jpg" alt="Bay Sach Morn" fill className="object-cover" />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-xl" style={{ backgroundColor: '#347928' }}>
                  Bay Sach Morn
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-64 h-44 md:w-72 md:h-52 z-20">
              <div className="relative w-full h-full rounded-3xl border-4 border-yellow-400 overflow-hidden shadow-2xl">
                <Image src="/Bay-Sach-Jruk.jpg" alt="Bay Sach Jruk" fill className="object-cover" />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold shadow-xl">
                  Bay Sach Jruk
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-64 h-44 md:w-72 md:h-52 z-20">
              <div className="relative w-full h-full rounded-3xl border-4 border-yellow-400 overflow-hidden shadow-2xl">
                <Image src="/Kuy-Teav.jpg" alt="Kuy Teav" fill className="object-cover" />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold shadow-xl">
                  Kuy Teav
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
                  <div className="relative rounded-xl overflow-hidden shadow-md">
                    <Image src="/drink.jpg" alt="Fresh Drink" layout="fill" className="object-cover" />
                    <div className="absolute bottom-2 left-2 bg-yellow-400 bg-opacity-90 px-2 py-1 rounded text-gray-600 font-medium">
                      Fresh Drink
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden shadow-md">
                    <Image src="/Fresh Salad.jpg" alt="Fresh Salad" layout="fill" className="object-cover" />
                    <div className="absolute bottom-2 left-2 bg-yellow-400 bg-opacity-90 px-2 py-1 rounded text-gray-600 font-medium">
                      Fresh Salad
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-md">
                    <Image src="/Kuy-Teav.jpg" alt="Noodle Soup" layout="fill" className="object-cover" />
                    <div className="absolute bottom-2 left-2 bg-yellow-400 bg-opacity-90 px-2 py-1 rounded text-gray-600 font-medium">
                      Noodle Soup
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-md">
                    <Image src="/Hot Pot.jpg" alt="Hot Pot" layout="fill" className="object-cover" />
                    <div className="absolute bottom-2 left-2 bg-yellow-400 bg-opacity-90 px-2 py-1 rounded text-gray-600 font-medium">
                      Hot Pot
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-2 border-yellow-400 rounded-3xl p-4 flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 mb-4 rounded-2xl overflow-hidden">
                  <Image src="/Bay-Sach-Morn.jpg" alt="Bay Sach Morn" layout="fill" className="object-cover" />
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

      <section className="py-24 bg-gray-50 overflow-hidden" id="reservation">
        <div className="relative h-[600px] w-full flex items-center justify-center">
          <div className="relative w-full max-w-7xl h-full mx-auto px-6">
            <div className="absolute top-12 left-8 w-[45%] h-[45%] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="/restaurant.jpg" 
                alt="Restaurant garden dining area" 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="absolute bottom-12 right-8 w-[45%] h-[45%] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="/restaurant2.jpg" 
                alt="Restaurant indoor dining area" 
                fill 
                className="object-cover" 
              />
            </div>

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
                <a href="#reservation" className="text-gray-800 hover:text-yellow-400 font-medium" onClick={(e) => handleNavClick(e, 'reservation')}>Reservation</a>
                <a href="#promotion" className="text-gray-800 hover:text-yellow-400 font-medium" onClick={(e) => handleNavClick(e, 'promotion')}>Promotion</a>
                <a href="#popular" className="text-gray-800 hover:text-yellow-400 font-medium" onClick={(e) => handleNavClick(e, 'popular')}>Popular</a>
                <a href="#about" className="text-gray-800 hover:text-yellow-400 font-medium" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
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
              <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors">
                <FaTiktok className="w-6 h-6" />
              </a>
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
