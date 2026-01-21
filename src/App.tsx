import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import Catelog from "./Pages/Catelog";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catelog" element={<Catelog />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
