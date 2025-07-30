import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <div className="flex flex-row items-center gap-4">
      <BsSearch />
      <input
        type="text"
        className="input text-gray-500 bg-gray-100 p-2 rounded-2xl shadow-sm outline-0 hover:bg-purple-200 focus:bg-purple-500 focus:text-white transition-colors"
        placeholder="Search..."
      />
    </div>
  );
}
