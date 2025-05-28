import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white fixed w-full z-50">
      <div className="text-xl font-bold text-green-600">Sedap.</div>
      <div className="space-x-6">
        <a href="#about" className="hover:text-green-600">Tentang Kami</a>
        <a href="#products" className="hover:text-green-600">Produk</a>
        <a href="#testimonials" className="hover:text-green-600">Testimoni</a>
        <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Login / Register
        </Link>
      </div>
    </nav>
  );
}
