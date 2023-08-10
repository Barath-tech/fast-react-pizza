import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <>
      <header>
        <Link to="/">Fast react Pizza co.</Link>
        <SearchOrder />
      </header>
      <p>Barath</p>
    </>
  );
}

export default Header;
