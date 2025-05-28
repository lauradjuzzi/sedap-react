import { MdPeople } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SidebarMenu() {
    return (
        <ul id="menu-list" className="space-y-3">
            <li>
                <Link id="menu-1" to="/" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                    <MdDashboard />Dashboard
                </Link>
            </li>
            <li>
                <Link id="menu-2" to="/orders" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                    <AiFillShopping />Orders
                </Link>
            </li>
            <li>
                <Link id="menu-3" to="/customers"  className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                    <MdPeople />Customers
                </Link>
            </li>
        </ul>
    );
}
