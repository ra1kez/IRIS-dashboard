import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  darkMode?: boolean;
  onSearch?: (query: string) => void;
}

export function SearchBar({ darkMode = false, onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const cardBg = darkMode ? '#12254A' : '#FFFFFF';
  const inputBg = darkMode ? '#0B1C3C' : '#F5F5F5';
  const textColor = darkMode ? '#FFFFFF' : '#0B1C3C';
  const placeholderColor = darkMode ? '#B0B6C2' : '#5A6C8F';

  return (
    <div 
      className="p-4 rounded-2xl"
      style={{ 
        backgroundColor: cardBg,
        width: '100%'
      }}
    >
      <div 
        className="relative flex items-center"
        style={{ 
          height: '48px',
          backgroundColor: inputBg,
          borderRadius: '24px'
        }}
      >
        <Search 
          className="absolute left-4"
          style={{ 
            color: placeholderColor,
            width: '20px',
            height: '20px'
          }}
        />
        <input
          type="text"
          placeholder="Search courses, events, announcements, or forms…"
          className="w-full h-full bg-transparent border-none outline-none pl-12 pr-4"
          style={{ 
            color: searchQuery ? textColor : placeholderColor,
            fontSize: '14px'
          }}
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
