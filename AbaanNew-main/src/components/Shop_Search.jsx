import { useState } from 'react';
import { Search, LayoutGrid, Filter, ChevronDown } from 'lucide-react';

export default function SearchInterface({ searchTerm, setSearchTerm }) {
  const [inputValue, setInputValue] = useState(searchTerm || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Default Sorting');

  const sortOptions = [
    'Default Sorting',
    'Price: Low to High',
    'Price: High to Low',
    'Newest First',
    'Most Popular'
  ];

  const handleSortChange = (option) => {
    setSelectedSort(option);
    setIsDropdownOpen(false);
  };

  // Only trigger search on button click or Enter
  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full absolute z-[4] bg-transparent rounded-lg p-4 max-h-[5vh]">
      <div className="flex items-center justify-evenly gap-4">
        {/* Search Input */}
        <div className="w-[40%] relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search"
            className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSearch}
            className={`absolute z-[30] right-3 top-1/2 transform -translate-y-1/2 ${inputValue.length ? "text-[#0F0200] cursor-pointer" : "text-gray-200 cursor-not-allowed"}`}
            disabled={!inputValue.length}
            aria-label="Search"
            type="button"
          >
            <img src="/images/search.svg" className="w-4 h-4 text-[#2E1065]" />
          </button>
        </div>

        {/* Grid Button */}
        <div className='hidden md:flex gap-3'>
         <button className="bg-[#FF2E79] text-white p-2 rounded-md hover:bg-[#e6255e] transition-colors">
          <LayoutGrid className="w-5 h-5" />
        </button>

        {/* Results Text */}
        <div className="text-gray-100 text-sm flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span>Showing 1–18 of 24 results</span>
        </div>   
        </div>
        

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-4 py-2 border border-[#e4e4e4]  rounded-md text-xs md:text-sm flex items-center gap-2 text-slate-100 md:min-w-[130px] hover:bg-[#2E106580] transition-colors"
          >
            <span>{selectedSort}</span>
            <ChevronDown className="w-4 h-4 ml-auto" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-400 border border-gray-200 rounded-md shadow-lg z-[60]">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSortChange(option)}
                  className={`w-full text-left text-slate-100 px-4 py-2 md:text-sm hover:bg-gray-700 ${
                    selectedSort === option ? 'text-blue-500 bg-[#2E106580]' : 'text-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}