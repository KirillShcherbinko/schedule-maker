import { useState, type ChangeEvent } from 'react';
import { Input } from '@/shared/ui/Input';
import { Search } from 'lucide-react';
import type { TEventsList } from '@/entities/Event/model/types';

type FilterByTitleProps = {
  data: TEventsList;
  onFilterChange: (title: string) => void;
  placeholder: string;
};

export function FilterByTitle({ data, onFilterChange, placeholder }: FilterByTitleProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = evt.target.value;
    setSearchQuery(newSearchQuery);

    if (!data) return;
    onFilterChange(newSearchQuery);
  };

  return (
    <div className="relative text-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input type="text" placeholder={placeholder} value={searchQuery} onChange={handleChange} className="pl-10 text-md" />
    </div>
  );
}
