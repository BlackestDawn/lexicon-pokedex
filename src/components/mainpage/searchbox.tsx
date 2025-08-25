'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { getIdFromName } from "@/lib/queries/search";

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getIdFromName(searchValue);
    router.push(`/pokemon/${result}`);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <div className="flex justify-center py-4 max-w-4xl mx-auto">
        <div className="p-2 items-center w-full max-w-md border-2 border-blue-600 rounded-2xl">
          <div className="flex gap-1 items-center">
            <Search className="h-5 w-5 pointer-events-none pl-2" />
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Search for a Pokémon"
              className="w-full focus:outline-none"
            />
            {searchValue && (
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-700 hover:text-gray-900"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
