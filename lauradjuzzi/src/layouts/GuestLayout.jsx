import Navbar from "../components/Guest/Navbar";
import Hero from "../components/Guest/Hero";
import About from "../components/Guest/About";
import TopProduct from "../components/Guest/TopProduct";
import Testimonials from "../components/Guest/Testimonials";
import Footer from "../components/Guest/Footer";

export default function GuestLayout() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <TopProduct />
      <Testimonials />
      <Footer />
    </div>
  );
}