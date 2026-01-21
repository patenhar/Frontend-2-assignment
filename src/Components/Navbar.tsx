import { NavLink } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="bg-gray-100 p-2">
        <div className="md:container md:mx-auto flex justify-between">
          <div className="flex gap-2 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catelog">Catalog</NavLink>
          </div>
          <button
            onClick={toggleTheme}
            className="bg-white dark:bg-gray-800 dark:text-white p-2 border-0 rounded-sm cursor-pointer"
          >
            {theme == "light" ? "dark" : "light"}
          </button>
          <div className="flex gap-2">
            <NavLink to="/my-cart" className="p-2 border-0 rounded-sm">
              My cart
            </NavLink>

            <a className="p-2 bg-blue-500 text-white border-0 rounded-sm">
              Register
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
