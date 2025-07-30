import { useState, useEffect, useRef } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Placeholder");

  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const options = ["Filter Date", "Filter Type", "Filter Emotion"];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between py-2 px-4 text-base text-black bg-gray-100 rounded-2xl shadow-sm hover:bg-purple-200 focus:bg-purple-500 focus:text-white transition-all"
      >
        {selected}
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-40 mt-2 bg-white border border-gray-200 rounded-2xl shadow-md transition-all">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-2 text-left text-base hover:bg-gray-100 rounded-2xl"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
