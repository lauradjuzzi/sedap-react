export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h4 className="font-bold text-lg mb-2">Kontak Kami</h4>
          <p>Email: support@sedap.com</p>
          <p>Telepon: 0812-3456-7890</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Sosial Media</h4>
          <p>Instagram: @sedap.id</p>
          <p>Facebook: Sedap Indonesia</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Partner Kami</h4>
          <img src="/partner.png" alt="Partner" className="mx-auto md:mx-0 w-32" />
        </div>
      </div>
      <p className="text-center mt-8 text-sm">&copy; 2025 Sedap. All rights reserved.</p>
    </footer>
  );
}
