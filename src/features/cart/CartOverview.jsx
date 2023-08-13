import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuanity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantiy = useSelector(getTotalQuanity);
  const totalCartAmount = useSelector(getTotalPrice);
  if (!totalCartQuantiy) return;
  return (
    <div className=" flex items-center justify-between   bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-3  font-semibold text-stone-300 sm:space-x-5 ">
        <span>{totalCartQuantiy} pizzas</span>
        <span>{formatCurrency(totalCartAmount)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
