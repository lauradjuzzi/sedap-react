export default function Error400() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#1A1E2E] text-white px-4 text-center relative overflow-hidden">
        {/* Angka 400 */}
        <h1 className="text-[10rem] font-extrabold text-pink-500 tracking-widest z-10">
          400
        </h1>
  
        {/* Pesan utama */}
        <h2 className="text-2xl font-semibold mt-[-20px] z-10">
          Those coordinates are no longer valid
        </h2>
  
        {/* Subjudul */}
        <p className="text-sm text-gray-400 mt-2 max-w-md z-10">
          The page you’re looking for might have expired or been swallowed by a black hole.
          <br />
          Check out our <span className="underline">Home</span>, <span className="underline">Support</span>, or try again.
        </p>
  
        {/* Dekorasi spiral */}
        <div className="absolute left-10 bottom-10 w-32 h-32 border-4 border-dotted border-pink-500 rounded-full animate-spin-slow z-0" />
  
        {/* Background pattern kiri-kanan */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 z-0" />
      </div>
    );
  }
  