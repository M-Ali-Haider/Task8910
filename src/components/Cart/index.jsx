"use client";
import Header from "./header";
import CartContainer from "./container";

import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <main className="w-full min-h-screen pb-28 flex flex-col items-center">
      <Header />
      <h1 className="text-2xl lg:text-5xl mt-20">YOUR BAG</h1>
      {cartItems.length > 0 ? (
        <CartContainer data={cartItems} />
      ) : (
        <p className="lg:mt-10 text-[#64748b] text-3xl">is currently empty</p>
      )}
    </main>
  );
};

export default Cart;
