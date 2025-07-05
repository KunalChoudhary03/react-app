import { NavLink } from "react-router-dom"
import { FaBoxOpen } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-bold mt-10 text-white px-4">
       
<div className="flex items-center gap-2 text-xl font-bold text-white px-20 ">
  <FaBoxOpen className="text-blue-500 text-3xl " />
  Lost & Found
</div>

      <NavLink
        className={(e) => e.isActive ? "text-blue-400" : "hover:scale-105 duration-150"}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={(e) => e.isActive ? "text-blue-400" : "hover:scale-105 duration-150"}
        to="items"
      >
        Items
      </NavLink>

      <NavLink
        to="add"
        className={({ isActive }) =>
          `${isActive ? "text-blue-400 bg-neutral-100" : "text-white hover:scale-105 duration-150"} px-4 py-2 bg-gray-900 rounded`
        }
      >
        Add to Lost & Found
      </NavLink>

      <NavLink
        className={(e) => e.isActive ? "text-blue-400" : "hover:scale-105 duration-150"}
        to="fav"
      >
        Important Item
      </NavLink>

      <NavLink
        className={(e) => e.isActive ? "text-blue-400" : "hover:scale-105 duration-150"}
        to="about"
      >
        About
      </NavLink>
    </div>
  )
}

export default Navbar;
