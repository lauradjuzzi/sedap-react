import React, { useState, useEffect } from 'react';

const MemberCheck = () => {
  const [email, setEmail] = useState('');
  const [members, setMembers] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/data/Members.json')
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error('Gagal memuat data member:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!email) {
      setError('Email tidak boleh kosong.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Format email tidak valid.');
      return;
    }

    const found = members.find((m) => m.email.toLowerCase() === email.toLowerCase());
    if (found) {
      setResult(found);
    } else {
      setError('❌ Email tidak terdaftar sebagai member.');
    }
  };

  const memberStyles = {
    silver: 'text-gray-600 border border-gray-300 bg-gray-100',
    gold: 'text-yellow-800 border border-yellow-400 bg-yellow-100',
    platinum: 'text-purple-800 border border-purple-400 bg-purple-100'
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Cek Keanggotaan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Cek
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {result && (
        <div className={`mt-4 p-4 rounded ${memberStyles[result.tipe_member]}`}>
          🧾 <strong>Selamat datang, {result.nama}!</strong><br />
          Anda adalah member <strong>{result.tipe_member}</strong>.
        </div>
      )}
    </div>
  );
};

export default MemberCheck;
