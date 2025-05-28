import React, { useEffect, useState } from 'react';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/public/data/Customers.json')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Customers</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-red-200">
            <th className="border border-gray-300 p-2">Customer ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
            <th className="border border-gray-300 p-2">Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="hover:bg-grey-100">
              <td className="border border-gray-300 p-2">{customer.customerId}</td>
              <td className="border border-gray-300 p-2">{customer.customerName}</td>
              <td className="border border-gray-300 p-2">{customer.email}</td>
              <td className="border border-gray-300 p-2">{customer.phone}</td>
              <td className="border border-gray-300 p-2">{customer.loyalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
