import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return <h1>Menu</h1>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
