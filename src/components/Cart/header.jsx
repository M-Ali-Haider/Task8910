import ShopCartSVG from "@/assets/shopCart";
import { useSelector } from "react-redux";
const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className=" w-full h-[80px] bg-[#645cff] flex items-center justify-center">
      <div className="max-w-[800px] w-full flex items-center justify-between text-white">
        <div className="text-lg lg:text-3xl">UseReducer</div>
        <div className={`relative`}>
          <ShopCartSVG />
          <div className="absolute w-7 h-7 rounded-full -top-3 -right-3 bg-[#a29dff] flex items-center justify-center">
            {totalQuantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
