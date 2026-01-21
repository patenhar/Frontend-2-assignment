import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
