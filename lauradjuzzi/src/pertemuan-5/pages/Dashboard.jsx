import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/Page-Header";

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <PageHeader
                title="Tambah Order"
                breadcrumb={["Dashboard", "Orders"]}
            >
                <button className="bg-hijau text-white px-4 py-2 rounded-lg">Tambah Order</button>
            </PageHeader>

            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="orders-icon" className="bg-hijau rounded-full p-4">
                        <FaShoppingCart />
                    </div>
                    <div id="orders-info" className="flex flex-col">
                        <span id="orders-count" className="text-2xl font-bold">75 </span>
                        <span id="orders-text" className="text-gray-400">Total Orders</span>
                    </div>
                </div>

                <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="delivered-icon" className="bg-kuning rounded-full p-4">
                        <FaTruck />
                    </div>
                    <div id="delivered-info">
                        <span id="delivered-count">175 </span>
                        <span id="delivered-text">Total Delivered</span>
                    </div>
                </div>

                <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="canceled-icon" className="bg-biru rounded-full p-4">
                        <FaBan />
                    </div>
                    <div id="canceled-info">
                        <span id="canceled-count">40 </span>
                        <span id="canceled-text">Total Canceled</span>
                    </div>
                </div>

                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="bg-merah rounded-full p-4">
                        <FaDollarSign />
                    </div>
                    <div id="revenue-info">
                        <span id="revenue-amount">Rp.128 </span>
                        <span id="revenue-text">Total Revenue</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
