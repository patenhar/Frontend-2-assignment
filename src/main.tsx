import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Contexts/ThemeProvider.tsx";
import { CartProvider } from "./Contexts/CartProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </CartProvider>,
);
