import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-100 p-2">
        <div className="md:container md:mx-auto flex justify-between">
          <div className="flex gap-2 items-center">
            <div>Home</div>
            <div>Something</div>
          </div>
          <div className="flex gap-2">
            <a className="p-2 border-0 rounded-sm">Login</a>
            <a className="p-2 bg-blue-500 text-white border-0 rounded-sm">
              Register
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
