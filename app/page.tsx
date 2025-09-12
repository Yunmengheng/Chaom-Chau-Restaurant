import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Header */}
      <header className="px-6 md:px-12 lg:px-20 py-8">
        <nav className="flex justify-between items-center">
          <div className="font-bold text-2xl">
            <span className="text-yellow-400">Chaom Chau</span>
            <span className="text-gray-900 ml-1">Restaurant</span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#reservation" className="text-gray-900 hover:text-yellow-400 transition-colors font-semibold text-lg">
              Reservation
            </a>
            <a href="#promotion" className="text-gray-900 hover:text-yellow-400 transition-colors font-semibold text-lg">
              Promotion
            </a>
            <a href="#popular" className="text-gray-900 hover:text-yellow-400 transition-colors font-semibold text-lg">
              Popular
            </a>
            <a href="#about" className="text-gray-900 hover:text-yellow-400 transition-colors font-semibold text-lg">
              About Us
            </a>
          </div>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="flex-grow flex items-center px-6 md:px-12 lg:px-20">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              <div className="text-gray-900">Looking for the ideal</div>
              <div className="text-yellow-400">Place to enjoy a meal</div>
              <div className="text-gray-900">With family and friends?</div>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Discover a cozy, welcoming restaurant that's perfect for every occasion—whether it's a special celebration or just catching up over great food.
            </p>
          </div>

          {/* Right Food Images */}
          <div className="flex-1 relative flex items-center justify-center h-[600px] md:h-[750px] w-full">
            {/* Bay Sach Morn - Center (Large) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[270px] md:w-[560px] md:h-[370px] z-10">
              <div className="relative w-full h-full">
                <Image
                  src="/Bay-Sach-Morn.jpg"
                  alt="Bay Sach Morn"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 left-1/2 bg-[#347928] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Bay Sach Morn
                </div>
              </div>
            </div>

            {/* Bay Sach Jruk - Top Right */}
            <div className="absolute -top-12 -right-8 md:top-4 md:-right-4 w-[280px] h-[180px] md:w-[380px] md:h-[250px] z-20">
              <div className="relative w-full h-full">
                <Image
                  src="/Bay-Sach-Jruk.jpg"
                  alt="Bay Sach Jruk"
                  fill
                  className="object-cover rounded-3xl shadow-lg"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Bay Sach Jruk
                </div>
              </div>
            </div>

            {/* Kuy Teav - Bottom Left */}
            <div className="absolute -bottom-12 -left-8 md:bottom-4 md:-left-4 w-[280px] h-[180px] md:w-[380px] md:h-[250px] z-20">
              <div className="relative w-full h-full">
                <Image
                  src="/Kuy-Teav.jpg"
                  alt="Kuy Teav"
                  fill
                  className="object-cover rounded-3xl shadow-lg"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Kuy Teav
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
