import { useState, useEffect } from 'react';
import { Input } from '@/shared/ui/Input';
import { Search } from 'lucide-react';

type FilterByTitleProps<T> = {
  data: T[];
  onFilterChange: (filteredData: T[]) => void;
  placeholder?: string;
};

export function FilterByTitle<T extends { title: string }>({
  data,
  onFilterChange,
  placeholder = 'Search events...',
}: FilterByTitleProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery.trim()) {
      onFilterChange(data);
    } else {
      const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
      onFilterChange(filteredData);
    }
  }, [searchQuery, data, onFilterChange]);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
