import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../Contexts/CartProvider";
import { toast } from "react-toastify";

export default function Checkout() {
  const { getTotalPrice } = useContext(CartContext);

  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);

  const total = getTotalPrice();
  const inputRef = useRef(null);

  const revealCoupon = () => {
    setShowCoupon(true);
  };

  const toastId = useRef(null);

  useEffect(() => {
    let time = 300;
    const interval = setInterval(() => {
      time--;
      if (!toastId.current)
        toastId.current = toast.info(300, { autoClose: false });
      toast.update(toastId.current, { render: time });
      if (time < 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
      toast.dismiss(toastId.current);
      toastId.current = null;
    };
  }, []);

  useEffect(() => {
    if (showCoupon) inputRef.current?.focus();
  }, [showCoupon]);

  const applyCoupon = () => {
    const discount = Number(coupon);
    setFinalPrice(Math.max(total - discount, 0));
  };

  return (
    <div className="pt-14">
      {!showCoupon && <button onClick={revealCoupon}>Show</button>}
      {showCoupon && (
        <div>
          <input
            ref={inputRef}
            type="number"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button onClick={applyCoupon}>Apply</button>
        </div>
      )}
      {getTotalPrice() !== null && (
        <p>
          You saved ${finalPrice} (was ${getTotalPrice()})
        </p>
      )}
    </div>
  );
}
