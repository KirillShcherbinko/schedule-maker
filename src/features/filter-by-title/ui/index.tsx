import { useState, type ChangeEvent } from 'react';
import { Input } from '@/shared/ui/input';
import { Search } from 'lucide-react';

type FilterByTitleProps = {
  baseTitle: string;
  onFilterChange: (title: string) => void;
  placeholder: string;
};

export function FilterByTitle({ baseTitle, onFilterChange, placeholder }: FilterByTitleProps) {
  const [searchQuery, setSearchQuery] = useState(baseTitle);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = evt.target.value;
    setSearchQuery(newSearchQuery);

    onFilterChange(newSearchQuery);
  };

  return (
    <div className="relative text-md max-w-[420px] w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
        className="pl-10 text-md"
      />
    </div>
  );
}
