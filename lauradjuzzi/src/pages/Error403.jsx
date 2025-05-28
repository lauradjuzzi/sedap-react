export default function Error403() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        {/* Bintang-bintang kecil */}
        <div className="absolute inset-0 z-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
              }}
            />
          ))}
        </div>
  
        {/* Konten utama */}
        <div className="z-10 flex flex-col md:flex-row items-center gap-12 px-4">
          {/* Ilustrasi planet */}
          <div className="w-40 h-40">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle cx="32" cy="32" r="10" stroke="white" strokeWidth="2" />
              <ellipse cx="32" cy="32" rx="20" ry="8" stroke="white" strokeWidth="2" />
            </svg>
          </div>
  
          {/* Teks dan tombol */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-extrabold">403</h1>
            <h2 className="text-xl mt-4 font-semibold">Access Denied!</h2>
            <p className="mt-2 text-gray-300">
              You don't have permission to access this resource.
            </p>
  
            <button
              onClick={() => window.location.href = '/'}
              className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              GO HOME
            </button>
          </div>
        </div>
      </div>
    );
  }
  