import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation Header */}
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-6">
        <div className="font-bold text-xl md:text-2xl">
          <span className="text-yellow-400">Chaom Chau</span>
          <span className="text-gray-800 ml-1">Restaurant</span>
        </div>
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          <a href="#reservation" className="text-gray-800 hover:text-yellow-400 transition-colors font-medium">
            Reservation
          </a>
          <a href="#promotion" className="text-gray-800 hover:text-yellow-400 transition-colors font-medium">
            Promotion
          </a>
          <a href="#popular" className="text-gray-800 hover:text-yellow-400 transition-colors font-medium">
            Popular
          </a>
          <a href="#about" className="text-gray-800 hover:text-yellow-400 transition-colors font-medium">
            About Us
          </a>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main className="px-6 md:px-12 lg:px-20 py-8 md:py-16 flex flex-col lg:flex-row items-center lg:items-start min-h-[calc(100vh-120px)]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl lg:pt-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              <div className="text-gray-800 mb-2">Looking for the ideal</div>
              <div className="text-yellow-400 mb-2">Place to enjoy a meal</div>
              <div className="text-gray-800">With family and friends?</div>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
              Discover a cozy, welcoming restaurant that's perfect for every occasion—whether it's a special celebration or just catching up over great food
            </p>
          </div>

          {/* Right Food Images */}
          <div className="flex-1 relative min-h-[600px] lg:min-h-[700px] w-full max-w-lg">
            {/* Bay Sach Jruk - Top Right */}
            <div className="absolute top-0 right-0 w-56 h-40 md:w-64 md:h-48 lg:w-72 lg:h-52 xl:w-80 xl:h-56">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Bay-Sach-Jruk.jpg"
                  alt="Bay Sach Jruk"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Bay Sach Jruk
                </div>
              </div>
            </div>

            {/* Bay Sach Morn - Middle Left */}
            <div className="absolute top-32 md:top-40 left-0 w-60 h-44 md:w-72 md:h-52 lg:w-80 lg:h-56 xl:w-88 xl:h-60">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Bay-Sach-Morn.jpg"
                  alt="Bay Sach Morn"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Bay Sach Morn
                </div>
              </div>
            </div>

            {/* Kuy Teav - Bottom Center */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-52 h-36 md:w-60 md:h-44 lg:w-68 lg:h-48">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Kuy-Teav.jpg"
                  alt="Kuy Teav"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
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
