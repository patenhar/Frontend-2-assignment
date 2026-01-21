import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeProvider";
import { CartContext } from "../Contexts/CartProvider";
import { useContext } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { getTotalItems } = useContext(CartContext);

  return (
    <>
      <nav className="bg-gray-100 dark:bg-gray-800 dark:text-white p-2 fixed w-full z-100 top-0">
        <div className="md:container md:mx-auto flex justify-between">
          <div className="flex gap-8 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catelog">Catalog</NavLink>
          </div>
          <button
            onClick={toggleTheme}
            className="bg-gray-100 dark:bg-gray-800 dark:text-white p-2 border-0 rounded-sm cursor-pointer"
          >
            Switch to {theme == "light" ? "Dark" : "Light"}
          </button>
          <div className="flex gap-2">
            <NavLink to="/my-cart" className="p-2 border-0 rounded-sm">
              Cart ({getTotalItems()})
            </NavLink>

            {/* <a className="p-2 bg-blue-500 text-white border-0 rounded-sm">
              Register
            </a> */}
          </div>
        </div>
      </nav>
    </>
  );
}
