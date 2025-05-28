export default function Hero() {
  return (
    <section className="relative">
      <img
        src="https://media.istockphoto.com/id/1409236261/id/foto/makanan-sehat-latar-belakang-makan-sehat-buah-sayuran-beri-makan-vegetarian-makanan-super.jpg?s=612x612&w=0&k=20&c=aQItqgqXaEGeHOnI408RJ6c2WoFFO8cB70O6GqBG-l0="
        alt="Banner"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-green bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Selamat Datang di Sedap</h1>
        <p className="text-lg mt-4">Rasakan kemudahan pesan makanan favoritmu!</p>
      </div>
    </section>
  );
}
