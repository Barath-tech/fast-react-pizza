import { useSelector } from "react-redux";

function Username() {
  const userName = useSelector((state) => state.user.username);
  if (!userName) return null;
  return (
    <div className="hidden text-lg font-medium italic md:block ">
      {userName}
    </div>
  );
}

export default Username;
