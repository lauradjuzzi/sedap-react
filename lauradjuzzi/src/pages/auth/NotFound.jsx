export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="w-72 sm:w-96 mb-8">
        <svg
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0zm0 472c-119.4 0-216-96.6-216-216S136.6 40 256 40s216 96.6 216 216-96.6 216-216 216z"
            fill="#EF4444"
          />
          <path
            d="M331.3 180.7a16 16 0 00-22.6 0L256 233.4l-52.7-52.7a16 16 0 00-22.6 22.6L233.4 256l-52.7 52.7a16 16 0 0022.6 22.6L256 278.6l52.7 52.7a16 16 0 0022.6-22.6L278.6 256l52.7-52.7a16 16 0 000-22.6z"
            fill="#fff"
          />
        </svg>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-red-500 mb-4">404 - Tidak Ditemukan</h1>
      <p className="text-base sm:text-lg text-gray-300 mb-2">
        Halaman yang Anda cari tidak ditemukan.
      </p>
      <a href="/" className="mt-4 text-blue-400 underline">
        Kembali ke Beranda
      </a>
    </div>
  );
}
