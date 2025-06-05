import { BiError } from "react-icons/bi";
import {
  AiFillHome,
  AiOutlineUnorderedList,
  AiOutlineUser,
} from "react-icons/ai";

import {
  MdFastfood,
} from "react-icons/md";

import { Link, NavLink } from "react-router-dom";

export default function SidebarMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;
  return (
    <ul id="menu-list" className="space-y-3">
      <li>
        <NavLink id="menu-1" to="/" className={menuClass}>
          <AiFillHome className="mr-4 text-xl" />
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink id="menu-2" to="/orders" className={menuClass}>
          <AiOutlineUnorderedList className="mr-4 text-xl" />
          Orders
        </NavLink>
      </li>

      <li>
        <NavLink id="menu-3" to="/customers" className={menuClass}>
          <AiOutlineUser className="mr-4 text-xl" />
          Customers
        </NavLink>
      </li>

      <li>
        <NavLink id="menu-4" to="/users" className={menuClass}>
          <AiOutlineUser className="mr-4 text-xl" />
          User
        </NavLink>
      </li>

      <li>
        <NavLink id="menu-4" to="/products" className={menuClass}>
          <MdFastfood className="mr-4 text-xl" />
          Products
        </NavLink>
      </li>
      

      {/* <li>
        <NavLink id="menu-4" to="/error400" className={menuClass}>
        <BiError className="mr-4 text-xl"/>
          Error 400
        </NavLink>
      </li>

      <li>
        <NavLink id="menu-5" to="/error401" className={menuClass}>
        <BiError className="mr-4 text-xl"/>
          Error 401
        </NavLink>
      </li>

      <li>
        <NavLink id="menu-6" to="/error403" className={menuClass}>
        <BiError className="mr-4 text-xl"/>
          Error 403
        </NavLink>
      </li> */}
    </ul>
  );
}
