import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <div className="flex flex-row items-center gap-4">
      <BsSearch />
      <input
        type="text"
        className="input bg-gray-100 p-4 rounded-lg shadow-sm"
        placeholder="Search..."
      />
    </div>
  );
}
