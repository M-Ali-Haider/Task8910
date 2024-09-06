import { useSelector } from "react-redux";

const CartTotal = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <div className="flex items-center justify-between max-w-[800px] w-full text-sm">
        <div>Total</div>
        <div className="rounded-md bg-[#645cff] py-1 px-2 text-white">
          ${totalAmount.toFixed(2)}
        </div>
      </div>
    </>
  );
};

export default CartTotal;
