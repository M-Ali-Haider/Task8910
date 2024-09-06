import { useDispatch } from "react-redux";
import CartCard from "./card";
import CartTotal from "./total";
import { clearCart } from "@/store/slice";

const CartContainer = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full max-w-[800px] lg:mt-5">
        {data.map((item, index) => {
          return <CartCard key={index} data={item} />;
        })}
      </div>
      <div className="bg-gray-300 h-[2px] w-full max-w-[800px] my-8" />
      <CartTotal />
      <button
        onClick={() => dispatch(clearCart())}
        className="text-[#645cff] tracking-[1px]  hover:text-[#c1beff] bg-[#c1beff] hover:bg-[#3c3799] rounded transition-all duration-300 ease-linear shadow py-[0.375rem] px-3"
      >
        Clear Cart
      </button>
    </>
  );
};

export default CartContainer;
