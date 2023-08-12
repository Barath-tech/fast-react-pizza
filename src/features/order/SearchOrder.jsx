import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setquery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setquery("");
  }
  return (
    <form className="pb-1 pt-1" onSubmit={handleSubmit}>
      <input
        placeholder="Search order"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2
        text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none 
        focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-40 sm:focus:w-72
        md:w-60 "
      />
    </form>
  );
}

export default SearchOrder;
