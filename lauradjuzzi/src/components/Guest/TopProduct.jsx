import { useEffect, useState } from "react";

export default function TopProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/Products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Gagal fetch produk:", err));
  }, []);

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Produk Unggulan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold mt-2">Rp{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
