'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { getIdFromName } from "@/lib/queries/search";

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    if (!searchValue) return;
    e.preventDefault();
    const result = await getIdFromName(searchValue);
    router.push(`/pokedex/${result}`);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <div className="flex justify-center py-10">
        <div className="p-2 items-center w-full max-w-md border-1 border-gray-300 rounded-md shadow-lg">
          <div className="flex gap-1 items-center">
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Search for a Pokémon"
              className="w-full focus:outline-none"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-2 py-1 rounded-md"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
