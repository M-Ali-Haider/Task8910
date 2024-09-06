import Image from "next/image";
import DownArrowSVG from "@/assets/downArrow";
import UpArrowSVG from "@/assets/upArrow";
import { addItem, removeItem, removeItemCompletely } from "@/store/slice";
import { useDispatch } from "react-redux";

const CartCard = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <>
      {data.quantity && (
        <div className="flex items-center gap-6 justify-between my-6">
          <Image
            src={`https://www.course-api.com/images/cart/phone-1.png`}
            width={80}
            height={80}
            alt="product image"
            className="w-20 h-20"
          />
          <div className="flex-1">
            <div className="text-sm lg:text-2xl font-medium tracking-[2px]">
              {data.name}
            </div>
            <div className="text-[#64748b] text-[15px]">${data.price}</div>
            <button
              onClick={() => dispatch(removeItemCompletely(data))}
              className="text-[#645cff] mt-0 text-[14px]"
            >
              remove
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={() => dispatch(addItem(data))}>
              <UpArrowSVG />
            </button>
            <div>{data.quantity}</div>
            <button onClick={() => dispatch(removeItem(data))}>
              <DownArrowSVG />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartCard;
